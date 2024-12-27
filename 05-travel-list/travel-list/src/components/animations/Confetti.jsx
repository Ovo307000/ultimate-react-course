import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useMemo } from "react";

// 生成随机数
const random = (min, max) => Math.random() * (max - min) + min;

// 预定义颜色数组，减少颜色数量
const colors = [
  "#FFD700", // 金色
  "#FF69B4", // 粉红
  "#00CED1", // 青色
  "#FF6347", // 珊瑚色
];

/**
 * 烟花动画组件
 * @component
 *
 * @description
 * 当所有物品打包完成时显示庆祝烟花动画。
 * 优化性能版本：减少粒子数量，简化动画计算。
 *
 * 特性：
 * - 30个彩色粒子
 * - 从底部向上喷射
 * - 优化的动画性能
 * - 渐变的透明度
 * - 柔和的发光效果
 *
 * @param {Object} props
 * @param {boolean} props.isActive - 控制动画是否激活
 */
export default function Confetti({ isActive }) {
  // 生成粒子配置，减少数量到30个
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: random(-25, 25),
        color: colors[i % colors.length], // 循环使用颜色而不是随机选择
        delay: (i * 0.1) % 0.5, // 更规律的延迟
      })),
    []
  );

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{
            left: `calc(50% + ${particle.x}%)`,
            bottom: "2rem",
            opacity: 0,
          }}
          animate={{
            bottom: ["2rem", "70vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: particle.delay,
          }}
          className="absolute w-2 h-2 rotate-45"
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 6px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
}

Confetti.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

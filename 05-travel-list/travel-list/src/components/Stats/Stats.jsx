import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import Confetti from "../animations/Confetti";

// Animation variants
const containerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

const textVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

const numberVariants = {
  initial: {
    scale: 1.5,
    color: "#ffebb3",
    opacity: 0,
  },
  animate: {
    scale: 1,
    color: "#fff8e7",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8,
      duration: 0.3,
    },
  },
};

/**
 * 统计组件
 * 显示物品总数、已打包数量和打包百分比
 * 使用 Framer Motion 实现动画效果
 *
 * @param {Object} props
 * @param {Array} props.items - 物品列表数组
 */
export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <>
      <Confetti isActive={numItems > 0 && percentage === 100} />
      <motion.footer
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-dark py-8 px-4 sticky bottom-0 motion-safe:transition-shadow"
      >
        <AnimatePresence mode="wait">
          {numItems === 0 ? (
            <motion.p
              key="empty"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-light text-center text-lg font-medium"
            >
              欸嘿~还没有添加任何物品呢！让我们一起开始准备吧！ ✨(｡･ω･｡)
            </motion.p>
          ) : percentage === 100 ? (
            <motion.p
              key="completed"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-light text-center text-lg font-medium"
              whileHover={{ scale: 1.05 }}
            >
              哇啊！所有物品都打包好啦！出发冒险吧！ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
            </motion.p>
          ) : (
            <motion.p
              key="progress"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-light text-center text-lg font-medium"
            >
              ٩(◕‿◕｡)۶ 喵~清单里有{" "}
              <motion.strong
                key={`total-${numItems}`}
                variants={numberVariants}
                className="motion-safe:transition-colors"
              >
                {numItems}
              </motion.strong>{" "}
              个物品，已经打包了{" "}
              <motion.strong
                key={`packed-${numPacked}`}
                variants={numberVariants}
                className="motion-safe:transition-colors"
              >
                {numPacked}
              </motion.strong>{" "}
              个呢！完成度{" "}
              <motion.strong
                key={`percentage-${percentage}`}
                variants={numberVariants}
                className="motion-safe:transition-colors"
              >
                {percentage}%
              </motion.strong>{" "}
              {percentage >= 80 ? (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  马上就完成啦！加油！(ง •̀_•́)ง
                </motion.span>
              ) : percentage >= 50 ? (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  继续努力哦！٩(◕‿◕)۶
                </motion.span>
              ) : (
                <motion.span
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  让我们一起加油吧！(◍•ᴗ•◍)
                </motion.span>
              )}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.footer>
    </>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

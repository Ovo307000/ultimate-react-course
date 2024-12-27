import { motion } from "framer-motion";
import PropTypes from "prop-types";

// 打勾动画路径
const checkmarkPath = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: "spring",
        duration: 0.5,
        bounce: 0.2,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
};

// 复选框容器动画
const boxVariants = {
  unchecked: {
    scale: 0.95,
    background: "rgba(255, 255, 255, 0)",
    borderColor: "#9ca3af",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
  checked: {
    scale: 1,
    background: "#76453b",
    borderColor: "#76453b",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8,
    },
  },
};

/**
 * 动画复选框组件
 * 提供流畅的选中/取消选中动画效果
 */
export default function AnimatedCheckbox({
  checked,
  onChange,
  className = "",
}) {
  return (
    <div className={`relative w-5 h-5 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 cursor-pointer opacity-0 absolute inset-0 z-10"
      />
      <motion.div
        initial={false}
        animate={checked ? "checked" : "unchecked"}
        variants={boxVariants}
        className="w-5 h-5 rounded border-2 absolute inset-0 motion-safe:transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          initial="hidden"
          animate={checked ? "show" : "hidden"}
          className="w-full h-full stroke-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={checkmarkPath}
            d="M6 12L10 16L18 8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

AnimatedCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

import { motion } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 },
};

/**
 * 动画按钮组件
 * 提供统一的按钮样式和动画效果
 */
export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "rounded font-bold focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  const variantStyles = {
    primary: "bg-secondary text-light hover:bg-opacity-90",
    secondary: "bg-gray-200 text-dark hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

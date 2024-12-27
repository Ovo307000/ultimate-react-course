import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import AnimatedCheckbox from "../animations/AnimatedCheckbox";
import Button from "../ui/Button";

// 动画变体配置
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2,
    },
  },
};

const contentVariants = {
  packed: {
    color: "#6b7280",
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2,
    },
  },
  unpacked: {
    color: "#2d2d2d",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      duration: 0.2,
    },
  },
};

/**
 * 单个物品组件
 * @component
 *
 * @description
 * 显示单个物品的详细信息，包括数量、描述、分类和打包状态。
 * 支持编辑、删除和状态切换功能。使用 Framer Motion 实现流畅的动画效果。
 *
 * 特性：
 * - 动画过渡效果
 * - 编辑模式切换
 * - 打包状态切换
 * - 删除确认
 * - 分类显示
 *
 * @param {Object} props
 * @param {Object} props.item - 物品信息
 * @param {Function} props.onDelete - 删除物品的回调函数
 * @param {Function} props.onToggle - 切换打包状态的回调函数
 * @param {Function} props.onEdit - 编辑物品的回调函数
 * @param {Object} props.categories - 可用的分类选项
 * @param {Ref} ref - 由 forwardRef 转发的 ref
 */
const Item = forwardRef(function Item(
  { item, onDelete, onToggle, onEdit, categories },
  ref
) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  function handleEdit() {
    onEdit(item.id, {
      description: editedItem.description,
      quantity: editedItem.quantity,
      category: editedItem.category,
    });
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <motion.li
        ref={ref}
        layout
        variants={itemVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="bg-light rounded-lg p-4 shadow-md"
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={editedItem.quantity}
              onChange={e =>
                setEditedItem(prev => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }))
              }
              className="w-16 p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              value={editedItem.description}
              onChange={e =>
                setEditedItem(prev => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="flex-1 p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select
            value={editedItem.category || "其他"}
            onChange={e =>
              setEditedItem(prev => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {Object.entries(categories).map(([key, value]) => (
              <option key={key} value={value}>
                {value}
              </option>
            ))}
          </select>
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsEditing(false)}
            >
              取消
            </Button>
            <Button variant="primary" size="sm" onClick={handleEdit}>
              保存
            </Button>
          </div>
        </div>
      </motion.li>
    );
  }

  return (
    <motion.li
      ref={ref}
      layout
      layoutId={item.id.toString()}
      variants={itemVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="bg-light rounded-lg p-4 shadow-md flex items-center justify-between gap-4 motion-safe:transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <AnimatedCheckbox
          checked={item.packed}
          onChange={() => onToggle(item.id)}
        />
        <motion.div
          variants={contentVariants}
          animate={item.packed ? "packed" : "unpacked"}
          className="flex flex-col min-w-0"
        >
          <motion.span
            layout
            className={`text-lg font-medium truncate ${
              item.packed ? "line-through" : ""
            }`}
          >
            {item.quantity} {item.description}
          </motion.span>
          <motion.span layout className="text-sm text-gray-500">
            {item.category || "其他"}
          </motion.span>
        </motion.div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(true)}
          className="!p-1 motion-safe:transition-transform motion-safe:hover:scale-110"
        >
          ✏️
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            const confirmed = window.confirm("确定要删除这个物品吗？(｡•́︿•̀｡)");
            if (confirmed) {
              onDelete(item.id);
            }
          }}
          className="!p-1 text-red-500 hover:text-red-600 motion-safe:transition-transform motion-safe:hover:scale-110"
        >
          ❌
        </Button>
      </div>
    </motion.li>
  );
});

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packed: PropTypes.bool.isRequired,
    category: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
};

Item.displayName = "Item";

export default Item;

import {XMarkIcon} from "@heroicons/react/24/outline";
import {motion}    from "framer-motion";
import PropTypes   from "prop-types";

/**
 * 单个物品组件
 * 显示物品的详细信息，包括数量、描述、打包状态
 * 提供删除和切换打包状态的功能
 * 包含丰富的动画效果
 *
 * @param {Object} props
 * @param {Object} props.item - 物品对象
 * @param {Function} props.onDelete - 删除物品的回调函数
 * @param {Function} props.onToggle - 切换打包状态的回调函数
 */
export default function Item( {
                                  item,
                                  onDelete,
                                  onToggle
                              } )
{
    return (
        <motion.li
            initial = { {
                opacity: 0,
                x      : -20,
            } }
            animate = { {
                opacity: 1,
                x      : 0,
            } }
            exit = { {
                opacity: 0,
                x      : 20,
            } }
            className = "flex items-center gap-4 bg-dark/50 p-3 rounded-lg"
        >
            <motion.input
                whileTap = { { scale: 1.2 } }
                type = "checkbox"
                checked = { item.packed }
                onChange = { () => onToggle( item.id ) }
                className = "h-6 w-6 accent-accent cursor-pointer"
            />
            <motion.span
                animate = { {
                    textDecoration: item.packed ? "line-through" : "none",
                    opacity       : item.packed ? 0.7 : 1,
                } }
                className = "text-light text-lg flex-1"
            >
                { item.quantity } { item.description }
            </motion.span>
            <motion.button
                whileHover = { {
                    scale : 1.1,
                    rotate: 90,
                } }
                whileTap = { { scale: 0.9 } }
                onClick = { () => onDelete( item.id ) }
                className = "text-red-400 hover:text-red-500 p-1"
            >
                <XMarkIcon className = "h-6 w-6"/>
            </motion.button>
        </motion.li>
    );
}

Item.propTypes = {
    item    : PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

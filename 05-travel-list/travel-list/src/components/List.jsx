import {AnimatePresence, motion} from "framer-motion";
import PropTypes                 from "prop-types";
import Item                      from "./Item.jsx";

/**
 * 容器动画配置
 * 用于列表整体的动画效果
 */
const containerVariants = {
    // 初始隐藏状态
    hidden: { opacity: 0 }, // 显示状态，包含子元素的交错动画
    show: {
        opacity   : 1,
        transition: {
            staggerChildren: 0.1, // 子元素依次显示的间隔时间
        },
    },
};

/**
 * 物品列表组件
 * 显示所有旅行物品，支持物品的删除、状态切换和清空列表
 * 包含列表为空时的提示信息
 * 使用 Framer Motion 实现流畅的动画效果
 *
 * @param {Object} props
 * @param {Array} props.items - 物品列表数组
 * @param {Function} props.onDeleteItem - 删除物品的回调函数
 * @param {Function} props.onToggleItem - 切换物品状态的回调函数
 * @param {Function} props.onClearList - 清空列表的回调函数
 */
export default function List( {
                                  items,
                                  onDeleteItem,
                                  onToggleItem,
                                  onClearList,
                              } )
{
    // 列表为空时显示提示信息
    if (items.length === 0)
    {
        return (
            <motion.div
                initial = { { opacity: 0 } }
                animate = { { opacity: 1 } }
                className = "bg-dark min-h-[60vh] flex items-center justify-center"
            >
                <p className = "text-light text-2xl font-semibold">
                    还没有添加任何物品 🎒
                </p>
            </motion.div>
        );
    }

    return (
        <div className = "bg-dark py-16 px-4 min-h-[60vh]">
            <div className = "max-w-6xl mx-auto">
                {/* 物品列表容器 */ }
                <motion.ul
                    variants = { containerVariants }
                    initial = "hidden"
                    animate = "show"
                    className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                >
                    {/* AnimatePresence 处理列表项的进出场动画 */ }
                    <AnimatePresence>
                        { items.map( item => (
                            <Item
                                key = { item.id }
                                item = { item }
                                onDelete = { onDeleteItem }
                                onToggle = { onToggleItem }
                            />
                        ) ) }
                    </AnimatePresence>
                </motion.ul>

                {/* 清空列表按钮 */ }
                <motion.div
                    initial = { {
                        opacity: 0,
                        y      : 20
                    } }
                    animate = { {
                        opacity: 1,
                        y      : 0
                    } }
                    className = "flex justify-center"
                >
                    <motion.button
                        whileHover = { { scale: 1.05 } }
                        whileTap = { { scale: 0.95 } }
                        onClick = { onClearList }
                        className = "bg-accent text-light px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        清空列表
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

// Props 类型检查
List.propTypes = {
    items       : PropTypes.arrayOf( PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ) ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onClearList : PropTypes.func.isRequired,
};

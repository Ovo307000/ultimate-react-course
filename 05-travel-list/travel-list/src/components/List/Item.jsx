import {motion}   from "framer-motion";
import PropTypes  from "prop-types";
import {useState} from "react";

// Animation variants
const itemVariants = {
    hidden: {
        opacity: 0,
        x      : -20
    },
    show  : {
        opacity: 1,
        x      : 0
    },
    exit  : {
        opacity: 0,
        x      : 20
    },
};

/**
 * 单个物品组件
 * 显示物品的数量、描述和打包状态
 * 支持删除和状态切换功能
 * 使用 Framer Motion 实现动画效果
 *
 * @param {Object} props
 * @param {Object} props.item - 物品对象
 * @param {Function} props.onDelete - 删除物品的回调函数
 * @param {Function} props.onToggle - 切换物品状态的回调函数
 * @param {Function} props.onEdit - 编辑物品的回调函数
 * @param {Object} props.categories - 物品分类选项
 */
export default function Item( {
                                  item,
                                  onDelete,
                                  onToggle,
                                  onEdit,
                                  categories
                              } )
{
    const [ isEditing, setIsEditing ] = useState( false );
    const [ editedItem, setEditedItem ] = useState( item );

    function handleEdit()
    {
        onEdit(
            item.id,
            {
                description: editedItem.description,
                quantity   : editedItem.quantity,
                category   : editedItem.category,
            }
        );
        setIsEditing( false );
    }

    if (isEditing)
    {
        return (
            <motion.li
                layout
                variants = { itemVariants }
                className = "bg-light rounded-lg p-4 shadow-md"
            >
                <div className = "flex flex-col gap-3">
                    <div className = "flex gap-2">
                        <input
                            type = "number"
                            min = "1"
                            value = { editedItem.quantity }
                            onChange = { e => setEditedItem( prev => (
                                {
                                    ...prev,
                                    quantity: Number( e.target.value ),
                                }
                            ) ) }
                            className = "w-16 p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type = "text"
                            value = { editedItem.description }
                            onChange = { e => setEditedItem( prev => (
                                {
                                    ...prev,
                                    description: e.target.value,
                                }
                            ) ) }
                            className = "flex-1 p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <select
                        value = { editedItem.category || "其他" }
                        onChange = { e => setEditedItem( prev => (
                            {
                                ...prev,
                                category: e.target.value,
                            }
                        ) ) }
                        className = "p-1 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        { Object.entries( categories )
                                .map( ( [ key, value ] ) => (
                                    <option
                                        key = { key }
                                        value = { value }
                                    >
                                        { value }
                                    </option>
                                ) ) }
                    </select>
                    <div className = "flex justify-end gap-2">
                        <motion.button
                            whileHover = { { scale: 1.05 } }
                            whileTap = { { scale: 0.95 } }
                            onClick = { () => setIsEditing( false ) }
                            className = "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            取消
                        </motion.button>
                        <motion.button
                            whileHover = { { scale: 1.05 } }
                            whileTap = { { scale: 0.95 } }
                            onClick = { handleEdit }
                            className = "px-3 py-1 rounded bg-secondary text-light hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            保存
                        </motion.button>
                    </div>
                </div>
            </motion.li>
        );
    }

    return (
        <motion.li
            layout
            variants = { itemVariants }
            exit = "exit"
            className = "bg-light rounded-lg p-4 shadow-md flex items-center justify-between gap-4"
        >
            <div className = "flex items-center gap-4 flex-1 min-w-0">
                <input
                    type = "checkbox"
                    checked = { item.packed }
                    onChange = { () => onToggle( item.id ) }
                    className = "w-5 h-5 cursor-pointer accent-secondary"
                />
                <div className = "flex flex-col min-w-0">
          <span
              className = { `text-lg font-medium truncate ${ item.packed ? "line-through text-gray-500" : "" }` }
          >
            { item.quantity } { item.description }
          </span>
                    <span className = "text-sm text-gray-500">
            { item.category || "其他" }
          </span>
                </div>
            </div>

            <div className = "flex items-center gap-2">
                <motion.button
                    whileHover = { { scale: 1.1 } }
                    whileTap = { { scale: 0.9 } }
                    onClick = { () => setIsEditing( true ) }
                    className = "text-primary hover:text-opacity-80 focus:outline-none"
                >
                    ✏️
                </motion.button>
                <motion.button
                    whileHover = { { scale: 1.1 } }
                    whileTap = { { scale: 0.9 } }
                    onClick = { () => onDelete( item.id ) }
                    className = "text-red-500 hover:text-red-600 focus:outline-none"
                >
                    ❌
                </motion.button>
            </div>
        </motion.li>
    );
}

Item.propTypes = {
    item      : PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
        category   : PropTypes.string,
    } ).isRequired,
    onDelete  : PropTypes.func.isRequired,
    onToggle  : PropTypes.func.isRequired,
    onEdit    : PropTypes.func.isRequired,
    categories: PropTypes.objectOf( PropTypes.string ).isRequired,
};

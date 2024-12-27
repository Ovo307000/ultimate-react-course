import {AnimatePresence, motion} from "framer-motion";
import PropTypes                 from "prop-types";
import {useState}                from "react";
import Item                      from "./Item";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show  : {
        opacity   : 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// 排序选项
const SORT_OPTIONS = {
    INPUT      : "input",
    DESCRIPTION: "description",
    PACKED     : "packed",
    CATEGORY   : "category",
};

// 物品分类
const CATEGORIES = {
    CLOTHING   : "衣物",
    ELECTRONICS: "电子产品",
    TOILETRIES : "洗漱用品",
    DOCUMENTS  : "证件文件",
    OTHERS     : "其他",
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
 * @param {Function} props.onEditItem - 编辑物品的回调函数
 */
export default function List( {
                                  items,
                                  onDeleteItem,
                                  onToggleItem,
                                  onClearList,
                                  onEditItem,
                              } )
{
    const [ sortBy, setSortBy ] = useState( SORT_OPTIONS.INPUT );
    const [ filterBy, setFilterBy ] = useState( "all" );

    // 排序物品
    let sortedItems = [ ...items ];
    if (sortBy === SORT_OPTIONS.DESCRIPTION)
    {
        sortedItems.sort( ( a, b ) => a.description.localeCompare( b.description ) );
    } else if (sortBy === SORT_OPTIONS.PACKED)
    {
        sortedItems.sort( ( a, b ) => Number( a.packed ) - Number( b.packed ) );
    } else if (sortBy === SORT_OPTIONS.CATEGORY)
    {
        sortedItems.sort( ( a, b ) => a.category.localeCompare( b.category ) );
    }

    // 筛选物品
    const filteredItems = sortedItems.filter( item =>
    {
        if (filterBy === "all")
        {
            return true;
        }
        if (filterBy === "packed")
        {
            return item.packed;
        }
        if (filterBy === "unpacked")
        {
            return !item.packed;
        }
        return true;
    } );

    // 按分类分组物品
    const groupedItems = filteredItems.reduce(
        ( groups, item ) =>
        {
            const category = item.category || "其他";
            if (!groups[category])
            {
                groups[category] = [];
            }
            groups[category].push( item );
            return groups;
        },
        {}
    );

    if (items.length === 0)
    {
        return (
            <motion.div
                initial = { { opacity: 0 } }
                animate = { { opacity: 1 } }
                className = "bg-dark min-h-[60vh] flex items-center justify-center overflow-hidden"
            >
                <p className = "text-light text-2xl font-semibold">
                    还没有添加任何物品 🎒
                </p>
            </motion.div>
        );
    }

    return (
        <div className = "bg-dark py-16 px-4 min-h-[60vh] overflow-hidden">
            <div className = "max-w-6xl mx-auto">
                {/* 排序和筛选控件 */ }
                <div className = "flex flex-wrap justify-center gap-4 mb-8">
                    <motion.select
                        initial = { {
                            opacity: 0,
                            y      : -20
                        } }
                        animate = { {
                            opacity: 1,
                            y      : 0
                        } }
                        value = { sortBy }
                        onChange = { e => setSortBy( e.target.value ) }
                        className = "bg-light text-dark px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                        <option value = { SORT_OPTIONS.INPUT }>按添加顺序</option>
                        <option value = { SORT_OPTIONS.DESCRIPTION }>按名称排序</option>
                        <option value = { SORT_OPTIONS.PACKED }>按打包状态</option>
                        <option value = { SORT_OPTIONS.CATEGORY }>按分类排序</option>
                    </motion.select>

                    <motion.select
                        initial = { {
                            opacity: 0,
                            y      : -20
                        } }
                        animate = { {
                            opacity: 1,
                            y      : 0
                        } }
                        transition = { { delay: 0.1 } }
                        value = { filterBy }
                        onChange = { e => setFilterBy( e.target.value ) }
                        className = "bg-light text-dark px-4 py-2 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                        <option value = "all">显示全部</option>
                        <option value = "packed">已打包</option>
                        <option value = "unpacked">未打包</option>
                    </motion.select>
                </div>

                {/* 物品列表 */ }
                <motion.div
                    className = "relative"
                    initial = { false }
                    animate = { { height: "auto" } }
                >
                    { sortBy === SORT_OPTIONS.CATEGORY ?
                      (
                          // 分组显示
                          <div className = "space-y-8">
                              <AnimatePresence mode = "popLayout">
                                  { Object.entries( groupedItems )
                                          .map( ( [ category, items ] ) => (
                                              <motion.div
                                                  key = { category }
                                                  initial = { {
                                                      opacity: 0,
                                                      y      : 20
                                                  } }
                                                  animate = { {
                                                      opacity: 1,
                                                      y      : 0
                                                  } }
                                                  exit = { {
                                                      opacity: 0,
                                                      y      : -20
                                                  } }
                                                  className = "bg-dark/50 rounded-lg p-4"
                                              >
                                                  <h3 className = "text-light text-xl font-bold mb-4">
                                                      { category } ({ items.length })
                                                  </h3>
                                                  <motion.ul
                                                      variants = { containerVariants }
                                                      initial = "hidden"
                                                      animate = "show"
                                                      className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                                  >
                                                      { items.map( item => (
                                                          <Item
                                                              key = { item.id }
                                                              item = { item }
                                                              onDelete = { onDeleteItem }
                                                              onToggle = { onToggleItem }
                                                              onEdit = { onEditItem }
                                                              categories = { CATEGORIES }
                                                          />
                                                      ) ) }
                                                  </motion.ul>
                                              </motion.div>
                                          ) ) }
                              </AnimatePresence>
                          </div>
                      ) :
                      (
                          // 普通列表显示
                          <motion.ul
                              variants = { containerVariants }
                              initial = "hidden"
                              animate = "show"
                              className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                          >
                              <AnimatePresence mode = "popLayout">
                                  { filteredItems.map( item => (
                                      <Item
                                          key = { item.id }
                                          item = { item }
                                          onDelete = { onDeleteItem }
                                          onToggle = { onToggleItem }
                                          onEdit = { onEditItem }
                                          categories = { CATEGORIES }
                                      />
                                  ) ) }
                              </AnimatePresence>
                          </motion.ul>
                      ) }
                </motion.div>

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
                        onClick = { () =>
                        {
                            const confirmed = window.confirm( "真的要清空列表吗？(｡•́︿•̀｡)" );
                            if (confirmed)
                            {
                                onClearList();
                            }
                        } }
                        className = "bg-accent text-dark px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        清空列表
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

List.propTypes = {
    items       : PropTypes.arrayOf( PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
        category   : PropTypes.string,
    } ) ).isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onToggleItem: PropTypes.func.isRequired,
    onClearList : PropTypes.func.isRequired,
    onEditItem  : PropTypes.func.isRequired,
};

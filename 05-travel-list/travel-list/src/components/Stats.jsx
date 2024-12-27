import {AnimatePresence, motion} from "framer-motion";
import PropTypes                 from "prop-types";
import {calculateStats}          from "../utils/itemUtils.js";

/**
 * 统计组件
 * 显示物品列表的统计信息，包括总数、已打包数量和完成百分比
 * 包含动画效果和条件渲染
 * 固定在页面底部
 *
 * @param {Object} props
 * @param {Array} props.items - 物品列表数组
 */
export default function Stats( { items } )
{
    // 计算统计信息
    const {
              total,
              packed,
              percentage
          } = calculateStats( items );

    return (
        <motion.footer
            // 初始状态：从底部淡入
            initial = { {
                opacity: 0,
                y      : 50
            } }
            animate = { {
                opacity: 1,
                y      : 0
            } }
            transition = { {
                type     : "spring",
                stiffness: 100
            } }
            className = "bg-secondary text-center py-8 sticky bottom-0 w-full shadow-lg z-10"
        >
            {/* AnimatePresence 处理组件的进出场动画 */ }
            <AnimatePresence mode = "wait">
                <motion.em
                    key = { `${ total }-${ packed }` }
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
                    transition = { { duration: 0.5 } }
                    className = "text-xl font-bold inline-block text-dark"
                >
                    { total === 0 ?
                      (
                          "开始添加你的旅行物品吧 🚀"
                      ) :
                      percentage === 100 ?
                      (
                          <motion.span
                              initial = { { scale: 1 } }
                              animate = { { scale: [ 1, 1.2, 1 ] } }
                              transition = { {
                                  duration: 0.5,
                                  times: [ 0, 0.5, 1 ]
                              } }
                          >
                              所有物品都已打包完成！准备出发 ✈️
                          </motion.span>
                      ) :
                      (
                          <motion.span
                              initial = { { opacity: 0 } }
                              animate = { { opacity: 1 } }
                              transition = { { duration: 0.5 } }
                          >
                              💼 清单中共有 { total } 个物品，已经打包了{ " " }
                              <motion.strong
                                  key = { packed }
                                  initial = { {
                                      scale: 1.5,
                                      color: "#ffebb3"
                                  } }
                                  animate = { {
                                      scale: 1,
                                      color: "#5a3e2b"
                                  } }
                                  transition = { { duration: 0.3 } }
                                  className = "text-dark"
                              >
                                  { packed }
                              </motion.strong>
                              { " " }
                              个 (
                              <motion.strong
                                  key = { percentage }
                                  initial = { {
                                      scale: 1.5,
                                      color: "#ffebb3"
                                  } }
                                  animate = { {
                                      scale: 1,
                                      color: "#5a3e2b"
                                  } }
                                  transition = { { duration: 0.3 } }
                                  className = "text-dark"
                              >
                                  { percentage }%
                              </motion.strong>
                              )
                          </motion.span>
                      ) }
                </motion.em>
            </AnimatePresence>
        </motion.footer>
    );
}

// Props 类型检查
Stats.propTypes = {
    items: PropTypes.arrayOf( PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ) ).isRequired,
};

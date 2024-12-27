import {AnimatePresence, motion} from "framer-motion";
import PropTypes                 from "prop-types";

// Animation variants
const containerVariants = {
    initial: {
        opacity: 0,
        y      : 20
    },
    animate: {
        opacity: 1,
        y      : 0
    },
    exit   : {
        opacity: 0,
        y      : -20
    },
};

const textVariants = {
    initial: {
        scale  : 0.8,
        opacity: 0
    },
    animate: {
        scale     : 1,
        opacity   : 1,
        transition: {
            type     : "spring",
            stiffness: 200,
            damping  : 10,
        },
    },
    exit   : {
        scale     : 0.8,
        opacity   : 0,
        transition: {
            duration: 0.2,
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
export default function Stats( { items } )
{
    const numItems = items.length;
    const numPacked = items.filter( item => item.packed ).length;
    const percentage = Math.round( (
                                       numPacked / numItems
                                   ) * 100 );

    return (
        <motion.footer
            variants = { containerVariants }
            initial = "initial"
            animate = "animate"
            exit = "exit"
            className = "bg-dark py-8 px-4 sticky bottom-0"
        >
            <AnimatePresence mode = "wait">
                <motion.p
                    key = { `${ numItems }-${ numPacked }` }
                    variants = { textVariants }
                    initial = "initial"
                    animate = "animate"
                    exit = "exit"
                    className = "text-light text-center text-lg font-medium"
                >
                    { numItems === 0 ?
                      (
                          <motion.span
                              initial = { {
                                  opacity: 0,
                                  y: 10
                              } }
                              animate = { {
                                  opacity: 1,
                                  y: 0
                              } }
                              transition = { { delay: 0.2 } }
                          >
                              欸嘿~还没有添加任何物品呢！让我们一起开始准备吧！ ✨(｡･ω･｡)
                          </motion.span>
                      ) :
                      percentage === 100 ?
                      (
                          <motion.span
                              initial = { {
                                  scale: 0.5,
                                  opacity: 0
                              } }
                              animate = { {
                                  scale  : [ 1, 1.2, 1 ],
                                  opacity: 1,
                              } }
                              transition = { {
                                  duration : 0.5,
                                  times    : [ 0, 0.5, 1 ],
                                  type     : "spring",
                                  stiffness: 300,
                              } }
                          >
                              哇啊！所有物品都打包好啦！出发冒险吧！ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                          </motion.span>
                      ) :
                      (
                          <motion.span
                              initial = { { opacity: 0 } }
                              animate = { { opacity: 1 } }
                              transition = { { duration: 0.3 } }
                          >
                              ٩(◕‿◕｡)۶ 喵~清单里有{ " " }
                              <motion.strong
                                  key = { numItems }
                                  initial = { {
                                      scale: 1.5,
                                      color: "#ffebb3"
                                  } }
                                  animate = { {
                                      scale: 1,
                                      color: "#fff8e7"
                                  } }
                                  transition = { { duration: 0.3 } }
                              >
                                  { numItems }
                              </motion.strong>
                              { " " }
                              个物品，已经打包了{ " " }
                              <motion.strong
                                  key = { numPacked }
                                  initial = { {
                                      scale: 1.5,
                                      color: "#ffebb3"
                                  } }
                                  animate = { {
                                      scale: 1,
                                      color: "#fff8e7"
                                  } }
                                  transition = { { duration: 0.3 } }
                              >
                                  { numPacked }
                              </motion.strong>
                              { " " }
                              个呢！完成度{ " " }
                              <motion.strong
                                  key = { percentage }
                                  initial = { {
                                      scale: 1.5,
                                      color: "#ffebb3"
                                  } }
                                  animate = { {
                                      scale: 1,
                                      color: "#fff8e7"
                                  } }
                                  transition = { { duration: 0.3 } }
                              >
                                  { percentage }%
                              </motion.strong>
                              { " " }
                              { percentage >= 80 ?
                                "马上就完成啦！加油！(ง •̀_•́)ง" :
                                percentage >= 50 ? "继续努力哦！٩(◕‿◕)۶" : "让我们一起加油吧！(◍•ᴗ•◍)" }
                          </motion.span>
                      ) }
                </motion.p>
            </AnimatePresence>
        </motion.footer>
    );
}

Stats.propTypes = {
    items: PropTypes.arrayOf( PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ) ).isRequired,
};

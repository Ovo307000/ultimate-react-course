import {motion} from "framer-motion";

/**
 * Logo 组件
 * 显示应用程序的标题和图标
 * 使用 Framer Motion 实现动画效果
 */
export default function Logo()
{
    return (
        <motion.header
            initial = { {
                opacity: 0,
                y      : -50
            } }
            animate = { {
                opacity: 1,
                y      : 0
            } }
            className = "bg-primary py-12 px-4"
        >
            <motion.h1
                whileHover = { { scale: 1.05 } }
                className = "text-4xl md:text-5xl font-bold text-center text-light"
            >
                🌴 旅行清单 ✈️
            </motion.h1>
        </motion.header>
    );
}

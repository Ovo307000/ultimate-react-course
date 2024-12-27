import {AnimatePresence, motion} from "framer-motion";
import PropTypes                 from "prop-types";
import {useEffect, useState}     from "react";

// 动画变体
const containerVariants = {
    hidden: { opacity: 0 },
    show  : {
        opacity   : 1,
        transition: {
            staggerChildren: 0.02,
        },
    },
    exit  : { opacity: 0 },
};

/**
 * 粒子彩炮动画组件
 * 在完成所有打包时显示庆祝动画
 */
export default function Confetti( { isActive } )
{
    const [ particles, setParticles ] = useState( [] );

    useEffect(
        () =>
        {
            if (!isActive)
            {
                setParticles( [] );
                return;
            }

            // 生成随机粒子
            const newParticles = Array.from(
                { length: 100 },
                ( _, i ) => (
                    {
                        id      : i,
                        x       : window.innerWidth /
                                  2 +
                                  (
                                      Math.random() - 0.5
                                  ) *
                                  200, // 从中心发射
                        y       : window.innerHeight + Math.random() * 20,
                        color   : [
                            "#FFD700", // 金色
                            "#FF69B4", // 粉色
                            "#00CED1", // 青色
                            "#FF6347", // 橙红色
                            "#9370DB", // 紫色
                            "#FFA500", // 橙色
                            "#32CD32", // 绿色
                        ][Math.floor( Math.random() * 7 )],
                        scale   : Math.random() * 0.5 + 0.5,
                        velocity: {
                            x: (
                                   Math.random() - 0.5
                               ) * 30,
                            y: -Math.random() * 25 - 20,
                        },
                        rotation: Math.random() * 360,
                        shape   : Math.random() > 0.5 ? "circle" : "star",
                    }
                )
            );

            setParticles( newParticles );

            // 3秒后清除粒子
            const timer = setTimeout(
                () =>
                {
                    setParticles( [] );
                },
                3000
            );

            return () => clearTimeout( timer );
        },
        [ isActive ]
    );

    if (!isActive || particles.length === 0)
    {
        return null;
    }

    return (
        <motion.div
            variants = { containerVariants }
            initial = "hidden"
            animate = "show"
            exit = "exit"
            className = "fixed inset-0 pointer-events-none z-50"
        >
            <AnimatePresence mode = "wait">
                { particles.map( particle => (
                    <motion.div
                        key = { particle.id }
                        initial = { {
                            x     : particle.x,
                            y     : particle.y,
                            scale : particle.scale,
                            rotate: particle.rotation,
                        } }
                        animate = { {
                            x     : particle.x + particle.velocity.x * 50,
                            y     : particle.y + particle.velocity.y * 50,
                            scale : 0,
                            rotate: particle.rotation + 720,
                        } }
                        transition = { {
                            duration: 2.5,
                            ease    : [ 0.23, 0.83, 0.68, 0.96 ],
                            scale   : { duration: 2 },
                            rotate  : { duration: 2 },
                        } }
                        style = { {
                            position       : "absolute",
                            width          : particle.shape === "circle" ? "12px" : "14px",
                            height         : particle.shape === "circle" ? "12px" : "14px",
                            borderRadius   : particle.shape === "circle" ? "50%" : "0%",
                            backgroundColor: particle.color,
                            boxShadow      : `0 0 6px ${ particle.color }`,
                            clipPath       : particle.shape === "star" ?
                                             "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" :
                                             undefined,
                        } }
                    />
                ) ) }
            </AnimatePresence>
        </motion.div>
    );
}

Confetti.propTypes = {
    isActive: PropTypes.bool.isRequired,
};

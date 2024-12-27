import {AnimatePresence, motion}          from "framer-motion";
import PropTypes                          from "prop-types";
import {useCallback, useEffect, useState} from "react";

// 动画变体
const containerVariants = {
    hidden: { opacity: 0 },
    show  : {
        opacity   : 1,
        transition: {
            staggerChildren: 0.01,
        },
    },
    exit  : { opacity: 0 },
};

const particleVariants = {
    hidden: ( {
                  x,
                  y,
                  rotation
              } ) => (
        {
            x,
            y,
            rotate : rotation,
            opacity: 0,
            scale  : 0,
        }
    ),
    show  : ( {
                  x,
                  y,
                  velocity
              } ) => (
        {
            x         : x + velocity.x * 50,
            y         : y + velocity.y * 50,
            rotate    : 360,
            opacity   : [ 0, 1, 1, 0 ],
            scale     : [ 0, 1, 1, 0 ],
            transition: {
                duration: 2,
                ease    : [ 0.23, 0.83, 0.68, 0.96 ],
                times   : [ 0, 0.2, 0.8, 1 ],
            },
        }
    ),
};

const colors = [
    "#ffd700", // 金色
    "#ff69b4", // 粉色
    "#00ced1", // 青色
    "#ff6347", // 橙红色
    "#9370db", // 紫色
    "#ffa500", // 橙色
    "#32cd32", // 绿色
];

/**
 * 粒子彩炮动画组件
 * 在完成所有打包时显示庆祝动画
 */
export default function Confetti( { isActive } )
{
    const [ particles, setParticles ] = useState( [] );

    const generateParticles = useCallback(
        () =>

            Array.from(
                { length: 100 },
                ( _, i ) =>
                {
                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;

                    // 随机起始位置，覆盖整个屏幕
                    const startX = Math.random() * screenWidth;
                    const startY = Math.random() * screenHeight;

                    // 随机角度，确保向四面八方扩散
                    const angle = Math.random() * Math.PI * 2;
                    const speed = 5 + Math.random() * 15; // 降低速度以增加可见时间

                    return {
                        id      : i,
                        x       : startX,
                        y       : startY,
                        color   : colors[Math.floor( Math.random() * colors.length )],
                        rotation: Math.random() * 360,
                        velocity: {
                            x: Math.cos( angle ) * speed,
                            y: Math.sin( angle ) * speed,
                        },
                        size    : 5 + Math.random() * 5, // 随机大小
                        shape   : Math.random() > 0.5 ? 'circle' : 'star', // 随机形状
                    };
                }
            ),
        []
    );

    useEffect(
        () =>
        {
            if (!isActive)
            {
                setParticles( [] );
                return;
            }

            setParticles( generateParticles() );

            const timer = setTimeout(
                () => setParticles( [] ),
                5000
            ); // 增加持续时间到5秒

            return () => clearTimeout( timer );
        },
        [ isActive, generateParticles ]
    );

    if (!isActive || particles.length === 0)
    {
        return null;
    }

    return <motion.div
        variants = { containerVariants }
        initial = "hidden"
        animate = "show"
        exit = "exit"
        className = "fixed inset-0 pointer-events-none z-50"
    >
        <AnimatePresence>
            { particles.map( particle => <motion.div
                key = { particle.id }
                custom = { particle }
                variants = { particleVariants }
                initial = "hidden"
                animate = "show"
                style = { {
                    position       : "absolute",
                    width          : `${ particle.size }px`,
                    height         : `${ particle.size }px`,
                    borderRadius   : particle.shape === 'circle' ? '50%' : '0%',
                    backgroundColor: particle.color,
                    boxShadow      : `0 0 6px ${ particle.color }`,
                    clipPath       : particle.shape === 'star' ?
                                     "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" :
                                     undefined,
                } }
            /> ) }
        </AnimatePresence>
    </motion.div>;
}

Confetti.propTypes = {
    isActive: PropTypes.bool.isRequired,
};

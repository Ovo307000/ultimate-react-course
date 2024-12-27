/**
 * 生成选项列表
 * 用于生成数量选择下拉框的选项
 *
 * @param {number} maxOptions - 最大选项数量
 * @returns {Array} 选项列表数组
 */
export function generateOptionList( maxOptions )
{
    return Array.from( { length: maxOptions },
        ( _, i ) => (
            {
                value: i + 1,
                label: `${ i + 1 } ${ i === 0 ? "个" : "个" }`,
            }
        )
    );
}

/**
 * 创建新物品
 * 生成包含唯一 ID 的新物品对象
 *
 * @param {string} description - 物品描述
 * @param {number} quantity - 物品数量
 * @param {string} category - 物品分类
 * @returns {Object} 新物品对象
 */
export function createItem( description, quantity, category = "其他" )
{
    return {
        id         : Date.now(),
        description: description,
        quantity   : quantity,
        packed     : false,
        category   : category,
    };
}

/**
 * 计算已打包物品的统计信息
 * @param {Array} items - 物品列表
 * @returns {Object} 包含统计信息的对象
 */
export function calculateStats( items )
{
    const total = items.length;
    const packed = items.filter( item => item.packed ).length;
    const percentage = total === 0 ?
                       0 :
                       Math.round( (
                                       packed / total
                                   ) * 100 );

    return {
        total,
        packed,
        percentage,
    };
}

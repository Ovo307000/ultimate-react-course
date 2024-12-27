import {ITEM_ACTION_TYPES} from "../constants/actionTypes";

/**
 * 物品列表的初始状态
 */
export const initialItemsState = [];

/**
 * 物品列表的 reducer 函数
 * 处理添加、删除、切换和清空物品的操作
 *
 * @param {Array} state - 当前状态
 * @param {Object} action - action 对象
 * @returns {Array} 新状态
 */
export function itemsReducer( state, action )
{
    switch (action.type)
    {
        case ITEM_ACTION_TYPES.ADD_ITEM:
        {
            const existingItem = state.find( item => item.description.toLowerCase() ===
                                                     action.payload.description.toLowerCase() );

            if (existingItem)
            {
                // 如果物品已存在，增加数量
                return state.map( item => item.id === existingItem.id ?
                                          {
                                              ...item,
                                              quantity: item.quantity + action.payload.quantity
                                          } :
                                          item );
            }

            // 如果物品不存在，添加新物品
            return [ ...state, action.payload ];
        }

        case ITEM_ACTION_TYPES.DELETE_ITEM:
            return state.filter( item => item.id !== action.payload );

        case ITEM_ACTION_TYPES.TOGGLE_ITEM:
            return state.map( item => item.id === action.payload ?
                                      {
                                          ...item,
                                          packed: !item.packed
                                      } :
                                      item );

        case ITEM_ACTION_TYPES.EDIT_ITEM:
            return state.map( item => item.id === action.payload.id ? { ...item, ...action.payload.updates } : item );

        case ITEM_ACTION_TYPES.CLEAR_LIST:
            return [];

        default:
            return state;
    }
}

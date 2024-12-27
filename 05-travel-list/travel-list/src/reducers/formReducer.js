import {FORM_ACTION_TYPES} from "../constants/actionTypes";

/**
 * 表单的初始状态
 */
export const initialFormState = {
    description: "",
    quantity   : 1,
    category   : "其他",
};

/**
 * 表单的 reducer 函数
 * 处理设置描述、数量和重置表单的操作
 *
 * @param {Object} state - 当前状态
 * @param {Object} action - action 对象
 * @returns {Object} 新状态
 */
export function formReducer( state, action )
{
    switch (action.type)
    {
        case FORM_ACTION_TYPES.SET_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            };

        case FORM_ACTION_TYPES.SET_QUANTITY:
            return {
                ...state,
                quantity: action.payload
            };

        case FORM_ACTION_TYPES.SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };

        case FORM_ACTION_TYPES.RESET_FORM:
            return initialFormState;

        default:
            return state;
    }
}

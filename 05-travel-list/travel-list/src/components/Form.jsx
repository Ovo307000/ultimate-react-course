import PropTypes    from "prop-types";
import {useReducer} from "react";

// 定义所有可能的 action 类型
// 使用常量对象可以避免拼写错误，并且便于维护
const actionTypes = {
    SET_DESCRIPTION: "SET_DESCRIPTION", // 设置物品描述
    SET_QUANTITY   : "SET_QUANTITY", // 设置物品数量
    RESET_FORM     : "RESET_FORM", // 重置表单
    ADD_ITEM       : "ADD_ITEM", // 添加物品
};

/**
 * reducer 函数：负责处理所有状态更新逻辑
 * @param state - 当前状态，包含 description 和 quantity
 * @param action - 描述如何更新状态的对象，包含 type 和 payload
 * @returns 返回新的状态对象
 */
function formReducer( state, action )
{
    switch (action.type)
    {
        case actionTypes.SET_DESCRIPTION:
            // 更新描述时，保持其他状态不变，只更新 description
            return {
                ...state,
                description: action.payload,
            };

        case actionTypes.SET_QUANTITY:
            // 更新数量时，保持其他状态不变，只更新 quantity
            return {
                ...state,
                quantity: action.payload,
            };

        case actionTypes.RESET_FORM:
            // 重置表单时，将所有字段恢复到初始值
            return {
                ...state,
                description: "",
                quantity   : 1,
            };

        case actionTypes.ADD_ITEM:
            // 添加物品时，保持其他状态不变，只更新 items
            return {
                ...state,
                items: [ ...state.items, action.payload ],
            };

        default:
            // 如果收到未知的 action 类型，返回原状态
            return state;
    }
}

// 定义表单的初始状态
const initialFormState = {
    description: "", // 物品描述，初始为空字符串
    quantity   : 1, // 物品数量，初始为 1
    items      : [], // 所有物品，初始为空数组
};

export default function Form( { onAddItems } )
{
    // 使用 useReducer 来管理表单状态
    // formData: 当前状态
    // dispatch: 用于发送 action 的函数
    const [ formData, dispatch ] = useReducer(
        formReducer,
        initialFormState
    );

    // 解构当前状态，方便使用
    const {
              description,
              quantity,
          } = formData;

    const maxOptions = 20;

    function buildOptionList()
    {
        return Array.from( { length: maxOptions } )
                    .map( ( _, index ) => <option key = { index + 1 }>{ index + 1 }</option> );
    }

    function handleSubmit( event )
    {
        event.preventDefault();

        if (description === "")
        {
            return;
        }

        const newItem = {
            id    : Date.now(),
            description,
            quantity,
            packed: false,
        };

        console.log( newItem );

        // 提交后重置表单
        dispatch( { type: actionTypes.RESET_FORM } );
        dispatch( {
            type   : actionTypes.ADD_ITEM,
            payload: onAddItems( newItem ),
        } );
    }

    return <form
        className = "add-form"
        onSubmit = { handleSubmit }
    >
        <h3>What do you need for your trip</h3>

        <select
            value = { quantity }
            onChange = { event => // 发送更新数量的 action
                dispatch( {
                    type   : actionTypes.SET_QUANTITY,
                    payload: Number( event.target.value ),
                } ) }
        >
            { buildOptionList() }
        </select>

        <input
            type = "text"
            placeholder = "item name"
            value = { description }
            onChange = { event => // 发送更新描述的 action
                dispatch( {
                    type   : actionTypes.SET_DESCRIPTION,
                    payload: event.target.value,
                } ) }
        />

        <button type = "submit">Add</button>
    </form>;
}

Form.propTypes = {
    onAddItems: PropTypes.func.isRequired,
};

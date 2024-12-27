import {motion}     from "framer-motion";
import PropTypes    from "prop-types";
import {useReducer} from "react";

// State management
import {FORM_ACTION_TYPES}             from "../../constants/actionTypes";
import {formReducer, initialFormState} from "../../reducers/formReducer";

// Utils
import {createItem, generateOptionList} from "../../utils/itemUtils";

/**
 * 表单组件
 * 负责添加新的旅行物品
 * 包含数量选择和物品描述输入
 * 使用 useReducer 管理表单状态
 *
 * @param {Object} props
 * @param {Function} props.onAddItem - 添加物品的回调函数
 */
const MAX_OPTIONS = 20;

// 物品分类
const CATEGORIES = {
    CLOTHING   : "衣物",
    ELECTRONICS: "电子产品",
    TOILETRIES : "洗漱用品",
    DOCUMENTS  : "证件文件",
    OTHERS     : "其他",
};

export default function Form( { onAddItem } )
{
    const [ formData, dispatch ] = useReducer(
        formReducer,
        {
            ...initialFormState,
            category: "其他",
        }
    );
    const {
              description,
              quantity,
              category
          } = formData;

    function handleSubmit( event )
    {
        event.preventDefault();

        if (description === "")
        {
            return;
        }

        const newItem = createItem(
            description,
            quantity,
            category
        );
        onAddItem( newItem );
        dispatch( { type: FORM_ACTION_TYPES.RESET_FORM } );
    }

    return (
        <motion.div
            initial = { {
                opacity: 0,
                y      : -20
            } }
            animate = { {
                opacity: 1,
                y      : 0
            } }
            className = "bg-accent py-8 px-4"
        >
            <form
                onSubmit = { handleSubmit }
                className = "max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4"
            >
                <h3 className = "text-2xl font-semibold text-light">
                    你需要带什么去旅行？
                </h3>

                <select
                    value = { quantity }
                    onChange = { event => dispatch( {
                        type   : FORM_ACTION_TYPES.SET_QUANTITY,
                        payload: Number( event.target.value ),
                    } ) }
                    className = "p-2 rounded-md text-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    { generateOptionList( MAX_OPTIONS )
                        .map( ( {
                                    value,
                                    label
                                } ) => (
                            <option
                                key = { value }
                                value = { value }
                            >
                                { label }
                            </option>
                        ) ) }
                </select>

                <motion.input
                    whileFocus = { { scale: 1.02 } }
                    type = "text"
                    placeholder = "物品名称"
                    value = { description }
                    onChange = { event => dispatch( {
                        type   : FORM_ACTION_TYPES.SET_DESCRIPTION,
                        payload: event.target.value,
                    } ) }
                    className = "p-2 rounded-md text-lg font-medium w-72 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <select
                    value = { category }
                    onChange = { event => dispatch( {
                        type   : FORM_ACTION_TYPES.SET_CATEGORY,
                        payload: event.target.value,
                    } ) }
                    className = "p-2 rounded-md text-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    { Object.entries( CATEGORIES )
                            .map( ( [ key, value ] ) => (
                                <option
                                    key = { key }
                                    value = { value }
                                >
                                    { value }
                                </option>
                            ) ) }
                </select>

                <motion.button
                    whileHover = { { scale: 1.05 } }
                    whileTap = { { scale: 0.95 } }
                    type = "submit"
                    className = "bg-secondary text-light px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    添加
                </motion.button>
            </form>
        </motion.div>
    );
}

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

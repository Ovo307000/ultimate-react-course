import {motion}                         from "framer-motion";
import PropTypes                        from "prop-types";
import {useReducer}                     from "react";
import {FORM_ACTION_TYPES}              from "../constants/actionTypes.js";
import {formReducer, initialFormState}  from "../reducers/formReducer.js";
import {createItem, generateOptionList} from "../utils/itemUtils.js";

const MAX_OPTIONS = 20;

export default function Form( { onAddItem } )
{
    const [ formData, dispatch ] = useReducer(
        formReducer,
        initialFormState
    );
    const {
              description,
              quantity
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
            quantity
        );
        onAddItem( newItem );
        dispatch( { type: FORM_ACTION_TYPES.RESET_FORM } );
    }

    return (
        <motion.div
            initial = { {
                opacity: 0,
                y      : -20,
            } }
            animate = { {
                opacity: 1,
                y      : 0,
            } }
            className = "bg-accent py-8 px-4"
        >
            <form
                onSubmit = { handleSubmit }
                className = "max-w-4xl mx-auto flex items-center justify-center gap-4"
            >
                <h3 className = "text-2xl font-semibold text-light">
                    What do you need for your trip?
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
                    placeholder = "Item name"
                    value = { description }
                    onChange = { event => dispatch( {
                        type   : FORM_ACTION_TYPES.SET_DESCRIPTION,
                        payload: event.target.value,
                    } ) }
                    className = "p-2 rounded-md text-lg font-medium w-72 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <motion.button
                    whileHover = { { scale: 1.05 } }
                    whileTap = { { scale: 0.95 } }
                    type = "submit"
                    className = "bg-secondary text-light px-6 py-2 rounded-full font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    Add
                </motion.button>
            </form>
        </motion.div>
    );
}

Form.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

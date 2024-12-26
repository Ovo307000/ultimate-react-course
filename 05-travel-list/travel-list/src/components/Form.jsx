import {useState} from "react";

export default function Form()
{
    const optionLength = 20;
    const [description, setDescription] = useState( "" );
    const [quantity, setQuantity] = useState( 1 );

    function mapArrayToOptions()
    {
        return Array.from( { length: optionLength } )
                    .map( ( _, index ) => <option key = { index + 1 }>{ index + 1 }</option> );
    }

    function handleSubmit( event )
    {
        event.preventDefault();

        if (description === "")
        {
            return;
        }

        setDescription( () => event.target.value );

        const newItem = {
            id    : Date.now(),
            description,
            quantity,
            packed: false
        };
        console.log( newItem );
        setDescription( () => "" );
    }

    return <>
        <form
            className = "add-form"
            onSubmit = { handleSubmit }
        >
            <h3>What do you need for your trip</h3>

            <select
                value = { quantity }
                onChange = { event => setQuantity( () => Number( event.target.value ) ) }
            >
                { mapArrayToOptions() }
            </select>

            <input
                type = "text"
                placeholder = "item name"
                value = { description }
                onChange = { event => setDescription( () => event.target.value ) }
            />

            <button
                type = "submit"
            >
                Add
            </button>
        </form>
    </>
}

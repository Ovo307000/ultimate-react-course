export default function Form()
{
    const optionLength = 20;

    function mapArrayToOptions()
    {
        return Array.from( { length: optionLength } )
                    .map( ( _, index ) => <option key = { index + 1 }>{ index + 1 }</option> );
    }

    function handleSubmit( event )
    {
        event.preventDefault();
    }

    return <>
        <form
            className = "add-form"
            onSubmit = { handleSubmit }
        >
            <h3>What do you need for your trip</h3>

            <select>
                { mapArrayToOptions() }
            </select>

            <input
                type = "text"
                placeholder = "item name"
            />

            <button
                type = "submit"
            >
                Add
            </button>
        </form>
    </>
}

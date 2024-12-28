import PropTypes from "prop-types";

export default function SelectPercentage( {
                                              percentage,
                                              onSelect,
                                              children
                                          } )
{
    const options = [
        {
            value: 0,
            label: "Dissatisfied"
        }, {
            value: 5,
            label: "It was okay"
        }, {
            value: 10,
            label: "It was good"
        }, {
            value: 20,
            label: "Absolutely amazing!"
        },
    ];

    function renderOptionButtons()
    {
        function calculateButtonStatus( value )
        {
            return percentage === value ? "btn-selected" : "";
        }

        return options.map( choice => <>
            <button
                key = { choice.value }
                onClick = { () => onSelect( choice.value ) }
                className = { `btn btn-outline flex justify-between items-center ${ calculateButtonStatus( choice.value ) }` }
            >
                <span>{ choice.label }</span>
                <span className = "text-gray-500">({ choice.value }%)</span>
            </button>
        </> );
    }

    return <>
        <div className = "space-y-2">
            <label className = "block text-sm font-medium text-gray-600">
                { children }
            </label>
            <div className = "grid grid-cols-1 gap-2">{ renderOptionButtons() }</div>
        </div>
    </>;
}

SelectPercentage.defaultProps = { percentage: 0, };

SelectPercentage.propTypes = {
    children  : PropTypes.node.isRequired,
    percentage: PropTypes.number,
    onSelect  : PropTypes.func.isRequired,
};

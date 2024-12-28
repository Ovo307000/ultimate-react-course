import PropTypes     from "prop-types";
import {useCallback} from "react";

export default function BillInput( {
                                       bill,
                                       onSetBill
                                   } )
{
    const onBillInputChange = useCallback(
        event =>
        {
            const value = event.target.value;
            if (value === "")
            {
                onSetBill( 0 );
                return;
            }

            const numValue = Number( value );

            if (!isNaN( numValue ) && numValue >= 0)
            {
                onSetBill( numValue );
            }
        },
        [ onSetBill ]
    );

    return <>
        <div className = "relative transform transition-all duration-300 hover:scale-[1.02]">
            <input
                type = "number"
                value = { bill || "" }
                onChange = { onBillInputChange }
                placeholder = "Enter bill amount"
                className = "w-full px-4 py-3 rounded-lg border-2 border-indigo-100 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 text-lg outline-none"
            />

            <span className = "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
        </div>
    </>
}

BillInput.propTypes = {
    bill     : PropTypes.number.isRequired,
    onSetBill: PropTypes.func.isRequired,
};

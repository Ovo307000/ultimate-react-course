import PropTypes from "prop-types";

export default function Output( {
                                    bill,
                                    tip,
                                    friendTip
                                } )
{
    const avgTip = (tip + friendTip) / 2;
    const totalTip = (bill * avgTip) / 100;
    const totalBillWithTip = bill + totalTip;

    return <>
        <div className = "bg-indigo-50 rounded-xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
            <h3 className = "text-lg font-semibold text-indigo-600 mb-4">
                Payment Summary
            </h3>
            <div className = "space-y-3">
                <div className = "flex justify-between items-center">
                    <span className = "text-gray-600">Bill Amount:</span>
                    <span className = "font-medium">${ bill }</span>
                </div>
                <div className = "flex justify-between items-center">
                    <span className = "text-gray-600">Average Tip ({ avgTip }%):</span>
                    <span className = "font-medium">${ totalTip.toFixed( 2 ) }</span>
                </div>
                <div className = "h-px bg-indigo-200 my-2"></div>
                <div className = "flex justify-between items-center text-lg font-bold text-indigo-700">
                    <span>Total:</span>
                    <span>${ totalBillWithTip.toFixed( 2 ) }</span>
                </div>
            </div>
        </div>
    </>
}

Output.propTypes = {
    bill     : PropTypes.number.isRequired,
    tip      : PropTypes.number.isRequired,
    friendTip: PropTypes.number.isRequired
};
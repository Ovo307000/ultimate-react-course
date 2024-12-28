import {useState}       from "react";
import BillInput        from "./BillInput.jsx";
import Output           from "./Output.jsx";
import Reset            from "./Reset.jsx";
import SelectPercentage from "./SelectPercentage.jsx";

export default function TipCalculator()
{
    const [ bill, setBill ] = useState( 0 );
    const [ percentage, setPercentage ] = useState( 0 );
    const [ friendPercentage, setFriendPercentage ] = useState( 0 );

    return <>
        <div className = "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className = "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-300 space-y-6">
                <h1 className = "text-3xl font-bold text-center mb-8 text-indigo-600">
                    Tip Calculator
                </h1>
                <BillInput
                    bill = { bill }
                    onSetBill = { setBill }
                />

                <SelectPercentage
                    percentage = { percentage }
                    onSelect = { setPercentage }
                >
                    How did you like the service?
                </SelectPercentage>

                <SelectPercentage
                    percentage = { friendPercentage }
                    onSelect = { setFriendPercentage }
                >
                    How did your friend like the service?
                </SelectPercentage>

                <Output
                    tip = { percentage }
                    friendTip = { friendPercentage }
                    bill = { bill }
                />

                <Reset
                    setBill = { setBill }
                    setPercentage = { setPercentage }
                    setFriendPercentage = { setFriendPercentage }
                />
            </div>
        </div>
    </>;


}

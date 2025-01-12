import PropTypes               from "prop-types";
import { useEffect, useState } from "react";
import Button                  from "./ui/Button.jsx";

export default function FormSplitBill ( { showAddFriend, currentFriend, onSplitBill } )
{
    const [ bill, setBill ] = useState ( "" );
    const [ paidByUser, setPaidByUser ] = useState ( "" );
    const [ whoIsPaying, setWhoIsPaying ] = useState ( "user" );

    const paidByFriend = bill ? bill - paidByUser : "";

    function handleSubmit ( e )
    {
        e.preventDefault ();

        if ( !bill || !paidByUser )
        {
            return;
        }

        if ( bill <= 0 || paidByUser <= 0 )
        {
            return;
        }

        if ( paidByUser > bill )
        {
            return;
        }

        onSplitBill ( whoIsPaying === "user" ? paidByFriend : -paidByUser );
    }

    useEffect ( () =>
    {
        setBill ( "" );
        setPaidByUser ( "" );
        setWhoIsPaying ( "user" );
    }, [ currentFriend ] );

    return <>
        { showAddFriend && <form
            className = "form-split-bill"
            onSubmit = { handleSubmit }
        >
            <h2>Split a bill with { currentFriend.name }</h2>

            <label>💰 Bill value</label>
            <input
                type = "number"
                value = { bill }
                onChange = { e => setBill ( Number ( e.target.value ) ) }
            />

            <label>👫 Your expense</label>
            <input
                type = "number"
                value = { paidByUser }
                onChange = { e => setPaidByUser ( Number ( e.target.value ) > bill ?
                                                  paidByUser :
                                                  Number ( e.target.value ) ) }
            />

            <label>👫 { currentFriend.name }&#39;s expense</label>
            <input
                type = "text"
                disabled
                value = { paidByFriend }
            />

            <label>🤑 Who is paying the bill</label>
            <select
                value = { whoIsPaying }
                onChange = { e => setWhoIsPaying ( e.target.value ) }
            >
                <option value = "user">You</option>
                <option value = "friend">{ currentFriend.name }</option>
            </select>

            <Button type = "submit">Split bill</Button>
        </form> }
    </>;
}

FormSplitBill.propTypes = {
    showAddFriend              : PropTypes.bool.isRequired, currentFriend: PropTypes.shape ( {
        id     : PropTypes.number.isRequired,
        name   : PropTypes.string.isRequired,
        image  : PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired
    } ).isRequired, onSplitBill: PropTypes.func.isRequired
};

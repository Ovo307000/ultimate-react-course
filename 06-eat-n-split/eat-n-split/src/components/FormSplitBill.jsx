import PropTypes    from "prop-types";
import { useState } from "react";
import Button       from "./ui/Button.jsx";

export default function FormSplitBill ( { showAddFriend, currentFriend } )
{
    return <>
        { showAddFriend && <form className = "form-split-bill">
            <h2>Split a bill with { currentFriend.name }</h2>
            <label>💰 Bill value</label>
            <input type = "text" />

            <label>👫 Your expense</label>
            <input type = "text" />

            <label>👫 Friend&apos;s expense</label>
            <input type = "text" />

            <label>👫 Who is paying the bill</label>
            <select>
                <option value = { "user" }>You</option>
                <option value = { "friend" }>Friend</option>
            </select>

            <Button>Add</Button>
        </form>
    </>;
}

FormSplitBill.propTypes = {
    showAddFriend: PropTypes.bool.isRequired, currentFriend: PropTypes.shape ( {
        id     : PropTypes.number.isRequired,
        name   : PropTypes.string.isRequired,
        image  : PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired
    } ).isRequired
};

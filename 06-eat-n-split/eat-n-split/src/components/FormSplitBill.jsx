import Button from "./ui/Button.jsx";

export default function FormSplitBill ()
{
    return <>
        <form className = "form-split-bill">
            <h2>Split a bill with your friends</h2>

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

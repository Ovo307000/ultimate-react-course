import { useState }   from "react";
import AddFriendForm  from "./components/AddFriendForm.jsx";
import FormSplitBill  from "./components/FormSplitBill.jsx";
import FriendList     from "./components/FriendList";
import Button         from "./components/ui/Button.jsx";
import initialFriends from "./data/friendData.js";

export default function App ()
{
    const [ showAddFriend, setShowAddFriend ] = useState ( true );

    function toggleAddFriend ()
    {
        setShowAddFriend ( prevShowAddFriend => !prevShowAddFriend );
    }


    return <>
        <div className = "app">
            <div className = "sidebar">
                <FriendList friendList = { initialFriends } />
                <AddFriendForm showAddFriend = { showAddFriend } />

                <Button onClick = { toggleAddFriend }>{ showAddFriend ? "Close" : "Add friend" }</Button>
            </div>

            <FormSplitBill />
        </div>
    </>;
}

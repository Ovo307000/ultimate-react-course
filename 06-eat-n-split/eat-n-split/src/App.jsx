import { useState }   from "react";
import AddFriendForm  from "./components/AddFriendForm.jsx";
import FormSplitBill  from "./components/FormSplitBill.jsx";
import FriendList     from "./components/FriendList";
import Button         from "./components/ui/Button.jsx";
import initialFriends from "./data/friendData.js";

export default function App ()
{
    const [ showAddFriend, setShowAddFriend ] = useState ( true );
    const [ friends, setFriends ] = useState ( initialFriends );

    function toggleAddFriend ()
    {
        setShowAddFriend ( prevShowAddFriend => !prevShowAddFriend );
    }

    function handleAddFriend ( newFriend )
    {
        setFriends ( prevFriends => [ ...prevFriends, newFriend ] );
    }


    return <>
        <div className = "app">
            <div className = "sidebar">
                <FriendList friendList = { friends } />
                <AddFriendForm
                    showAddFriend = { showAddFriend }
                    handleAddFriend = { handleAddFriend }
                />

                <Button onClick = { toggleAddFriend }>{ showAddFriend ? "Close" : "Add friend" }</Button>
            </div>

            <FormSplitBill />
        </div>
    </>;
}

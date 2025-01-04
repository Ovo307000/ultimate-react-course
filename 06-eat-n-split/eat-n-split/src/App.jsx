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

        // 如果大佬想要在添加之后关闭表单，可以取消下面的注释！
        // 但是这是测试代码，不是最终代码，所以我注释掉了喵！
        // setShowAddFriend ( false );
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

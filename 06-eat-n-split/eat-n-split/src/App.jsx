import AddFriendForm  from "./components/AddFriendForm.jsx";
import FriendList     from "./components/FriendList";
import Button         from "./components/ui/Button.jsx";
import initialFriends from "./data/friendData.js";

export const App = () => <>
    <div className = "app">
        <div className = "sidebar">
            <FriendList friendList = { initialFriends } />
            <AddFriendForm />
            <Button>Add Friend</Button>
        </div>
    </div>
</>;


export default App;

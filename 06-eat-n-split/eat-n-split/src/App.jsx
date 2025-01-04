import AddFriendForm  from "./components/AddFriendForm.jsx";
import FormSplitBill  from "./components/FormSplitBill.jsx";
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

        <FormSplitBill />
    </div>
</>;


export default App;

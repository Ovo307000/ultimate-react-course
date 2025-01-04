import FriendList     from "./components/FriendList";
import initialFriends from "./data/friendData.js";

export const App = () => <>
    <div className = "app">
      <div className = "sidebar">
        <FriendList friendList = { initialFriends } />
      </div>
    </div>
  </>;

export default App;

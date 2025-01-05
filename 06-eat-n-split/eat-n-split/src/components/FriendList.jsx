import PropTypes from "prop-types";
import Friend    from "./Friend.jsx";

export default function FriendList ( { friendList, onSelection, selectFriend } )
{
    function renderFriend ( friends )
    {
        return friends.map ( friend => <Friend
            onSelection = { onSelection }
            selectFriend = { selectFriend }
            key = { friend.id }
            friend = { friend }
        /> );
    }

    return <>
        { renderFriend ( friendList ) }
    </>;
}

FriendList.propTypes = {
    friendList                   : PropTypes.arrayOf ( PropTypes.shape ( {
        id     : PropTypes.number.isRequired,
        name   : PropTypes.string.isRequired,
        image  : PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired
    } ) ).isRequired, onSelection: PropTypes.func.isRequired, selectFriend: PropTypes.bool.isRequired
};

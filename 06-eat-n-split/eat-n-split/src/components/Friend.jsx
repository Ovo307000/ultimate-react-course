import PropTypes from "prop-types";
import Button    from "./ui/Button.jsx";

export default function Friend ( { friend } )
{
    function renderFriend ()
    {
        const displayBalance = () =>
        {
            if (friend.balance > 0)
            {
                return <p className = { "red" }>You owe { friend.name } ${ friend.balance }</p>;
            }

            if (friend.balance < 0)
            {
                return <p className = { "green" }>{ friend.name } owes you ${ Math.abs ( friend.balance ) }</p>;
            }

            return <p>You and { friend.name } are even</p>;
        };

        return <>
            <li className = "friend">
                <img
                    src = { friend.image }
                    alt = { friend.name }
                />
                <h3>{ friend.name }</h3>

                { displayBalance () }

                <Button>Select</Button>
            </li>
        </>;
    }

    return <>
        { renderFriend () }
    </>;
}

Friend.propTypes = {
    friend: PropTypes.shape ( {
        id     : PropTypes.number.isRequired,
        name   : PropTypes.string.isRequired,
        image  : PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired
    } ).isRequired
};

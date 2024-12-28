import PropTypes     from "prop-types";
import {useCallback} from "react";

export default function Reset( {
                                   setBill,
                                   setPercentage,
                                   setFriendPercentage
                               } )
{
    const onButtonClick = useCallback(
        event =>
        {
            event.preventDefault();

            setBill( () => 0 );
            setPercentage( () => 0 );
            setFriendPercentage( () => 0 );
        },
        [ setBill, setPercentage, setFriendPercentage ]
    );

    return <>
        <button
            onClick = { onButtonClick }
            className = "btn btn-primary"
        >
            Reset
        </button>
    </>
}

Reset.propTypes = {
    setBill            : PropTypes.func.isRequired,
    setPercentage      : PropTypes.func.isRequired,
    setFriendPercentage: PropTypes.func.isRequired
};
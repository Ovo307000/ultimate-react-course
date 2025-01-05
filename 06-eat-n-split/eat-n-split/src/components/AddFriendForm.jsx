import PropTypes    from "prop-types";
import { useState } from "react";
import Button       from "./ui/Button.jsx";

const defaultImage = "https://i.pravatar.cc/48";

export default function AddFriendForm ( { showAddFriend, handleAddFriend } )
{
    const [ name, setName ] = useState ( "" );
    const [ image, setImage ] = useState ( defaultImage );

    function handleSubmit ( formEvent )
    {
        formEvent.preventDefault ();

        if (!name || !image)
        {
            return;
        }

        const newFriend = generateRandomFriend ( name );
        handleAddFriend ( newFriend );
        console.log ( newFriend );

        setName ( "" );
        setImage ( defaultImage );
    }

    function generateRandomFriend ( name )
    {
        const randomId = crypto.randomUUID ();
        const randomAvatarUrl = `https://i.pravatar.cc/48?u=${ randomId }`;

        return {
            id: randomId, name: name, image: randomAvatarUrl, balance: 0
        };
    }


    return <>
        { showAddFriend && <form
            className = { "form-add-friend" }
            onSubmit = { handleSubmit }
        >
            <label>👫 Friend name</label>
            <input
                type = "text"
                onChange = { event => setName ( event.target.value ) }
                value = { name }
            />

            <label>📸 Image URL</label>
            <input
                type = "text"
                onChange = { event => setImage ( event.target.value ) }
                value = { image }
            />

            <Button type = "submit">Add</Button>
        </form> }
    </>;
}

AddFriendForm.propTypes = {
    showAddFriend: PropTypes.bool, handleAddFriend: PropTypes.func
};

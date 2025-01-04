import PropTypes    from "prop-types";
import { useState } from "react";
import Button       from "./ui/Button.jsx";

export default function AddFriendForm ( { showAddFriend } )
{
    const [ name, setName ] = useState ( "" );
    const [ image, setImage ] = useState ( "https://i.pravatar.cc/48" );

    function handleSubmit ( formEvent )
    {
        if (!name || !image)
        {
            return;
        }

        formEvent.preventDefault ();

        const newFriend = generateRandomFriend ( name );

        console.log ( newFriend );
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

             <Button>Add</Button>
         </form> }
    </>;
}

AddFriendForm.propTypes = {
    showAddFriend: PropTypes.bool
};

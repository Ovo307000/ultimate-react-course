import PropTypes from "prop-types";

export default function Button ( { children, onClick, type } )
{
    return <>
        <button
            onClick = { onClick }
            className = { "button" }
            type = { type }
        >
            { children }
        </button>
    </>;
}

Button.propTypes = {
    children: PropTypes.string.isRequired, onClick: PropTypes.func, type: PropTypes.string
};

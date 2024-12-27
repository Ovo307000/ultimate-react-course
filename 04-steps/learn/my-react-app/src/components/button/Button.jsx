import PropTypes from "prop-types";

export default function Button( {
                                    onClick,
                                    text,
                                    textColor,
                                    backgroundColor
                                } )
{
    return <>
        <button
            onClick = { onClick }
            style = { {
                color: textColor,
                backgroundColor
            } }
        >
            { text }
        </button>
    </>;
}

Button.propTypes = {
    onClick        : PropTypes.func.isRequired,
    text           : PropTypes.string.isRequired,
    textColor      : PropTypes.string,
    backgroundColor: PropTypes.string
};
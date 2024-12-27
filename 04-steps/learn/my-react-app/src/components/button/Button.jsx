import PropTypes from "prop-types";

export default function Button( {
                                    onClick,
                                    text,
                                    textColor,
                                    backgroundColor,
                                    emoji
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
            { emoji } { text }
        </button>
    </>;
}

Button.propTypes = {
    onClick        : PropTypes.func.isRequired,
    text           : PropTypes.string.isRequired,
    textColor      : PropTypes.string,
    backgroundColor: PropTypes.string,
    emoji          : PropTypes.string
};
import PropTypes from "prop-types";

export default function Button( {
                                    onClick,
                                    textColor,
                                    backgroundColor,
                                    children
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
            { children }
        </button>
    </>;
}

Button.propTypes = {
    onClick        : PropTypes.func.isRequired,
    children       : PropTypes.node.isRequired,
    textColor      : PropTypes.string,
    backgroundColor: PropTypes.string,
};
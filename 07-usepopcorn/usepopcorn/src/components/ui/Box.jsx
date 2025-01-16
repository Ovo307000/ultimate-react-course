import PropTypes from "prop-types";

export default function Box ( { children } )
{
    return <div className = "box">{ children }</div>;
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};


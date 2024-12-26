import PropTypes from "prop-types";

export default function Item( { item } )
{
    return <>
        <li>
            <span style = { item.packed ? { textDecoration: "line-through" } : {} }>
                { item.quantity } x { item.description }
            </span>

            <button onClick = { () => item.packed = !item.packed }>
                { item.packed ? "✅" : "❌" }
            </button>
        </li>
    </>;
}

Item.propTypes = {
    item: PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ).isRequired,
};

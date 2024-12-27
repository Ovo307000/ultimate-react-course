import PropTypes from "prop-types";

export default function Item( {
                                  item,
                                  onDeleteItem
                              } )
{
    return <>
        <li>
            <span>
            <span style = { item.packed ? { textDecoration: "line-through" } : {} }>
                { item.quantity } x { item.description }
            </span>

            <button onClick = { () => onDeleteItem( item.id ) }>
                { "❌" }
            </button>
            </span>
        </li>
    </>;
}

Item.propTypes = {
    item        : PropTypes.shape( {
        id         : PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        quantity   : PropTypes.number.isRequired,
        packed     : PropTypes.bool.isRequired,
    } ).isRequired,
    onDeleteItem: PropTypes.func.isRequired
};

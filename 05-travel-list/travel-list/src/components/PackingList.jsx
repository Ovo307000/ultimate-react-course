import PropTypes from "prop-types";
import Item      from "./Item";

export default function PackingList( { items, onDeleteItem } )
{
    return <>
        <div className = "list">
            <ul>
                { items.map( item => <Item
                    key = { item.id }
                    item = { item }
                    onDeleteItem = { () => onDeleteItem( item.id ) }
                /> ) }
            </ul>
        </div>
    </>;
}

PackingList.propTypes = {
    items: PropTypes.array.isRequired,
    onDeleteItem: PropTypes.func.isRequired
};

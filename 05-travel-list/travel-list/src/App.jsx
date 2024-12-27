import {useState}     from "react";
import Form           from "./components/Form.jsx";
import Logo           from "./components/Logo.jsx";
import PackingList    from "./components/PackingList.jsx";
import Stats          from "./components/Stats.jsx";
import {initialItems} from "./data/initialItems.js";

export default function App()
{
    const [items, setItems] = useState( initialItems );

    function handleAddItems( newItem )
    {
        setItems( items => [...items, newItem] )
    }

    return <>
        <div className = "app">
            <Logo/>
            <Form onAddItems = { handleAddItems } />
            <PackingList
                items = { items }
            />
            <Stats/>
        </div>
    </>;
}

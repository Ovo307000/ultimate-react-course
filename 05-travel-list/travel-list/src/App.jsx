import {useEffect, useReducer, useState} from "react";
import Confetti                          from "./components/Confetti/Confetti";
import Form                              from "./components/Form/Form";
import List                              from "./components/List/List";
import Logo                              from "./components/Logo/Logo";
import Stats                             from "./components/Stats/Stats";

// State management
import {ITEM_ACTION_TYPES}               from "./constants/actionTypes";
import {initialItemsState, itemsReducer} from "./reducers/itemsReducer";

/**
 * 主应用组件
 * 管理应用程序的状态和组件组合
 * 使用 useReducer 进行状态管理
 */
export default function App()
{
    const [ items, dispatch ] = useReducer(
        itemsReducer,
        initialItemsState
    );
    const [ showConfetti, setShowConfetti ] = useState( false );

    // 检查是否所有物品都已打包
    useEffect(
        () =>
        {
            if (items.length > 0 && items.every( item => item.packed ))
            {
                setShowConfetti( true );
            } else
            {
                setShowConfetti( false );
            }
        },
        [ items ]
    );

    function handleAddItem( item )
    {
        dispatch( {
            type   : ITEM_ACTION_TYPES.ADD_ITEM,
            payload: item
        } );
    }

    function handleDeleteItem( id )
    {
        dispatch( {
            type   : ITEM_ACTION_TYPES.DELETE_ITEM,
            payload: id
        } );
    }

    function handleToggleItem( id )
    {
        dispatch( {
            type   : ITEM_ACTION_TYPES.TOGGLE_ITEM,
            payload: id
        } );
    }

    function handleEditItem( id, updates )
    {
        dispatch( {
            type   : ITEM_ACTION_TYPES.EDIT_ITEM,
            payload: {
                id,
                updates
            },
        } );
    }

    function handleClearList()
    {
        dispatch( { type: ITEM_ACTION_TYPES.CLEAR_LIST } );
    }

    return (
        <div className = "min-h-screen bg-dark no-scrollbar">
            <Confetti isActive = { showConfetti }/>
            <Logo/>
            <Form onAddItem = { handleAddItem }/>
            <List
                items = { items }
                onDeleteItem = { handleDeleteItem }
                onToggleItem = { handleToggleItem }
                onEditItem = { handleEditItem }
                onClearList = { handleClearList }
            />
            <Stats items = { items }/>
        </div>
    );
}

import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
    const [items, setItems] = useState([]);
    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }
    function handleClearItems() {
        const confirm = window.confirm(
            "Are you sure you want to clear All Items ?"
        );
        if (confirm) setItems([]);
    }
    function handleToggle(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onClearItems={handleClearItems}
                onCheckItem={handleToggle}
                onDeleteItem={handleDeleteItem}
            />
            <Stats items={items} />
        </div>
    );
}

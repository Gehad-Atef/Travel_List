import { useState } from "react";
export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const handleDescription = (e) =>
        setDescription(e.target.value, console.log(e.target.value));
    const handleQuantity = (e) =>
        setQuantity(Number(e.target.value), console.log(e.target.value));
    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select value={quantity} onChange={handleQuantity}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={handleDescription}
            />
            <button>Add</button>
        </form>
    );
}

export default function Stats({ items }) {
    if (!items.length)
        return (
            <div className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </div>
        );
    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percent = Math.round((packedItems / numItems) * 100);
    return (
        <div className="stats">
            {percent === 100 ? (
                <em>You got everything! Ready to go ✈️</em>
            ) : (
                <em>
                    💼 You have {numItems} items on your list, and you already
                    packed {packedItems} ( {percent}% )
                </em>
            )}
        </div>
    );
}

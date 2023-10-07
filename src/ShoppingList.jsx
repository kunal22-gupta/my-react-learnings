import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ list }) {
    return (
        <div className="ShoppingList">
            <h2>Shopping List</h2>
            <ul>
                {list.map((i) => (
                    <ShoppingListItem
                        key={i.id}
                        item={i.item}
                        qty={i.qty}
                        completed={i.completed}
                    />
                ))}
            </ul>
        </div>
    );
}
export default ShoppingList;

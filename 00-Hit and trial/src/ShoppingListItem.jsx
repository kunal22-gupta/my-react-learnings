export default function ShoppingListItem({item, qty, completed}) {
    const styles = {
        color: completed ? "grey" : "red",
        textDecoration: completed ? "line-through":"none"    
    }
    return (
        <li style={styles}>
            {item} - {qty}
        </li>
    );
}

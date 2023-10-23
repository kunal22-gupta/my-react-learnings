import "./ShoppingList.css";

import ShortUniqueId from "short-unique-id";
import ShoppingListForm from "./ShoppingListForm";
import { useState } from "react";

export default function ShoppingList() {
    const uid = new ShortUniqueId();
    const [itemsList, setItemsList] = useState([
        { id: uid.rnd(), product: "Apples", qty: 5 },
        { id: uid.rnd(), product: "Bananas", qty: 4 },
    ]);
    const removeItem = (e) => {
        e.target.localName === "span"
            ? e.target.parentNode.remove()
            : e.target.remove();
    };
    return (
        <div className="ShoppingList">
            <h1>Shopping List</h1>
            <ul>
                {itemsList.map((item) => {
                    return (
                        <li key={item.id} onClick={removeItem}>
                            <span>{item.product}</span> <span>x{item.qty}</span>
                        </li>
                    );
                })}
            </ul>
            <ShoppingListForm setItemsList={setItemsList} uid={uid} />
        </div>
    );
}

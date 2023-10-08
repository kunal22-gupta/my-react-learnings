import "./ShoppingListForm.css";
import { useState } from "react";

export default function ShoppingListForm({ setItemsList, uid }) {
    const [item, setItem] = useState({ id: uid.rnd, product: "", qty: "" });

    const updateForm = (e) => {
        setItem((currItem) => {
            return { ...currItem, [e.target.name]: e.target.value };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Execute the addItem function in parent component
        setItemsList((currItemsList) => {
            return [...currItemsList, { ...item }];
        });
        // Reset the form
        setItem({ id: uid.rnd(), product: "", qty: "" });
    };
    return (
        <form onSubmit={handleSubmit} className="ShoppingListForm">
            <div className="row">
                <div className="col">
                    <label htmlFor="product">Product </label>
                    <input
                        required
                        type="text"
                        name="product"
                        id="product"
                        value={item.product}
                        onChange={updateForm}
                    />
                </div>
                <div className="col">
                    <label htmlFor="qty">Quantity </label>
                    <input
                        required
                        type="number"
                        name="qty"
                        id="qty"
                        value={item.qty}
                        min={0}
                        onChange={updateForm}
                    />
                </div>
            </div>
            <div className="row">
                <button>Add</button>
            </div>
        </form>
    );
}

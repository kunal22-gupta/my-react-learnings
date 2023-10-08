import { useState } from "react";

export default function ShoppingListForm({setItemsList}) {
    const [item, setItem] = useState({product: "", qty: ""})

    const updateForm = (e) => {
        setItem((currItem) => {
            return {...currItem, [e.target.name]: e.target.value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Execute the addItem function in parent component
        setItemsList((currItemsList) => {
            return [...currItemsList, {...item}]
        })
        // Reset the form
        setItem({product: "", qty: ""})
    }
    return (
        <form onSubmit={handleSubmit} className="ShoppingListForm">
            <h3>P: {item.product} Q: {item.qty}</h3>
            <div className="row">
                <label htmlFor="product">Product </label>
                <input required type="text" name="product" id="product" value={item.product} onChange={updateForm} />
            </div>
            <div className="row">
                <label htmlFor="qty">Quantity </label>
                <input required type="number" name="qty" id="qty" value={item.qty} min={0} onChange={updateForm}/>
            </div>
            <div className="row">
                <button>Add</button>
            </div>
        </form>
    );
}

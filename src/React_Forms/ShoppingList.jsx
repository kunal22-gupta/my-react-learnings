import ShoppingListForm from "./ShoppingListForm"
import { useState } from "react"

export default function ShoppingList() {
    const [itemsList, setItemsList] = useState([
        {product: "Apples", qty: 5},
        {product: "Bananas", qty: 4}
    ])
    // const addItem = (item) => {
    //     setItems((itemsList) => {
    //         return [...itemsList, {...item}]
    //     })
    // }
    return (
        <div className="ShoppingList">
            <h1>Shopping List</h1>
            <ul>
                {
                    itemsList.map((item) => {
                        return (<li>{item.product} - {item.qty}</li>)
                    })
                }
            </ul>
            <ShoppingListForm setItemsList={setItemsList}/>
        </div>
    )
}
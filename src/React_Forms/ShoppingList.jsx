import "./ShoppingList.css"

import ShortUniqueId from "short-unique-id";
import ShoppingListForm from "./ShoppingListForm"
import { useState } from "react"

export default function ShoppingList() {

    const uid = new ShortUniqueId()
    const [itemsList, setItemsList] = useState([
        {id: uid.rnd(), product: "Apples", qty: 5},
        {id: uid.rnd(), product: "Bananas", qty: 4}
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
                        return (<li key={item.id}><span>&#x1f4cc; {item.product}</span>  <span>x{item.qty}</span></li>)
                    })
                }
            </ul>
            <ShoppingListForm setItemsList={setItemsList} uid={uid}/>
        </div>
    )
}
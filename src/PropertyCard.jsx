export default function PropertyCard({id, name, rating, price}) {
    return (
        <div 
            className="PropertyCard"
            style={{backgroundColor: id%2 === 0?"DimGray":"Silver"}}
        >
            <h3>{name}</h3>
            <h4>${price} a night</h4>
            <p>{rating} ⭐</p>
        </div>
    )
}
import PropertyCard from "./PropertyCard";

export default function Properties({properties}) {
    return (
        <div 
            className="Properties"
            style={{
                display: "flex",
                gap: "2"
            }}
        >
            {properties.map(property => (
                <PropertyCard 
                    key={property.id}
                    id={property.id}
                    name={property.name}
                    rating={property.rating}
                    price={property.price}
                />
            ))}
        </div>
    )
}
function DishCard( {dish, onAdd} ) {
    return (
        <div className="dish-card">
            <img src={dish.img} alt={dish.name} />
            <h3>dish.name</h3>
            <p>dish.desc</p>
            <p>${dish.price}</p>
            <button className="add-cart" onClick={() => onAdd(dish)}>Add to Cart</button>
        </div>
        
    )
}

export default DishCard;
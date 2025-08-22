import { useContext } from "react";
import { Cartcontext } from "../context/CartContext";
import DishCard from "../components/Dishcard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Menu() {
    const {addToCart} = useContext(Cartcontext);

    const dishes = [
    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 8.99,
        img: "https://www.tasteofhome.com/wp-content/uploads/2024/03/Margherita-Pizza-_EXPS_TOHVP24_275515_MF_02_28_1.jpg",
        desc: "Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce."
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 10.99,
        img: "https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2.jpg",
        desc: "Cheesy pizza layered with spicy pepperoni slices and tomato sauce."
    },
    {
        id: 3,
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        price: 11.49,
        img: "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
        desc: "Grilled chicken, red onions, and BBQ sauce on a cheesy crust."
    },
    {
        id: 4,
        name: "Cheeseburger",
        category: "Burgers",
        price: 7.49,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvFARU8D1wj50zlIapnXJV6kO1XhRx2bcmg&s",
        desc: "Juicy beef patty with melted cheddar cheese, lettuce, tomato, and pickles."
    },
    {
        id: 5,
        name: "Chicken Burger",
        category: "Burgers",
        price: 7.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsTircXEKD0-vBNgfYzMNpRiyxuwV9FW1IQ&s",
        desc: "Grilled chicken breast with lettuce, tomato, and creamy mayo sauce."
    },
    {
        id: 6,
        name: "Veggie Burger",
        category: "Burgers",
        price: 6.99,
        img: "https://www.inspiredtaste.net/wp-content/uploads/2018/05/Homemade-Mushroom-Veggie-Burger-Recipe-1200.jpg",
        desc: "Plant-based patty with fresh veggies, avocado, and spicy sauce."
    },
    {
        id: 7,
        name: "Caesar Salad",
        category: "Salads",
        price: 6.49,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5Yp0uPt-uqJ5udVjAL71-ArAIvCzE84nYQ&s",
        desc: "Crisp romaine lettuce tossed with parmesan, croutons, and Caesar dressing."
    },
    {
        id: 8,
        name: "Greek Salad",
        category: "Salads",
        price: 6.99,
        img: "https://www.simplyrecipes.com/thmb/0NrKQlJ691l6L9tZXpL06uOuWis=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg",
        desc: "Refreshing salad with cucumber, tomato, feta cheese, olives, and olive oil."
    },
    {
        id: 9,
        name: "Cobb Salad",
        category: "Salads",
        price: 7.49,
        img: "https://www.allrecipes.com/thmb/lUCXnzWTl9WOQ9NRAT08hA4O2lE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14415-cobb-salad-DDMFS-4x3-608ba9c5768b49079eb75fe9a9898307.jpg",
        desc: "Mixed greens with grilled chicken, bacon, avocado, egg, and blue cheese."
    },
    {
        id: 10,
        name: "Spaghetti Carbonara",
        category: "Pasta",
        price: 9.99,
        img: "https://www.allrecipes.com/thmb/a_0W8yk_LLCtH-VPqg2uLD9I5Pk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg",
        desc: "Italian pasta with eggs, parmesan cheese, pancetta, and black pepper."
    },
    {
        id: 11,
        name: "Lasagna",
        category: "Pasta",
        price: 11.49,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPN13bmYQnkp0gXcLz3Cbobu9fA6DyzADgA&s",
        desc: "Layers of pasta with beef ragu, bechamel sauce, and melted cheese."
    },
    {
        id: 12,
        name: "Fettuccine Alfredo",
        category: "Pasta",
        price: 10.49,
        img: "https://www.allrecipes.com/thmb/6iFrYmTh80DMqrMAOYTYKfBawvY=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-23431-to-die-for-fettuccine-alfredo-DDMFS-beauty-3x4-b64d36c7ff314cb39774e261c5b18352.jpg",
        desc: "Creamy Alfredo sauce with parmesan cheese over fettuccine pasta."
    },
    {
        id: 13,
        name: "Grilled Salmon",
        category: "Seafood",
        price: 14.99,
        img: "https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg",
        desc: "Fresh salmon fillet grilled to perfection with lemon butter sauce."
    },
    {
        id: 14,
        name: "Fried Shrimp",
        category: "Seafood",
        price: 12.49,
        img: "https://www.allrecipes.com/thmb/dI7tAF6NGd0Ymo8_fUAAwqnZT1Y=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/AR-216969-crunchy-fried-shrimp-DDMFS-4x3-ce19238c015447f1be90f8871409844f.jpg",
        desc: "Crispy breaded shrimp served with tartar sauce and lemon wedges."
    },
    {
        id: 15,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 4.99,
        img: "https://www.allrecipes.com/thmb/zb8muWE6CQ5XjclY_LQ2i-QwxN0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/17981-one-bowl-chocolate-cake-iii-DDMFS-beauty-4x3-d2e182087e4b42a3a281a0a355ea60d1.jpg",
        desc: "Rich and moist chocolate sponge layered with creamy chocolate frosting."
    },
    {
        id: 16,
        name: "Cheesecake",
        category: "Desserts",
        price: 5.49,
        img: "https://www.allrecipes.com/thmb/jBAjBzZCHM8ISEy4ZZvg3zTWYz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276069homemade-cheesecakeKim4x3-eb1f8032a2e54eff99bc1ad0f9d3a8d4.jpg",
        desc: "Creamy cheesecake with a buttery biscuit base, topped with strawberry glaze."
    },
    {
        id: 17,
        name: "Ice Cream Sundae",
        category: "Desserts",
        price: 3.99,
        img: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg",
        desc: "Vanilla ice cream topped with chocolate syrup, nuts, and whipped cream."
    },
    {
        id: 18,
        name: "Pancakes",
        category: "Breakfast",
        price: 5.99,
        image: "https://www.inspiredtaste.net/wp-content/uploads/2025/07/Pancake-Recipe-1.jpg",
        desc: "Fluffy pancakes served with maple syrup and butter."
    },
    {
        id: 19,
        name: "Omelette",
        category: "Breakfast",
        price: 4.49,
        img: "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1-500x500.jpg",
        desc: "Egg omelette stuffed with cheese, bell peppers, and mushrooms."
    },
    {
        id: 20,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 2.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQmey4AWHxuusqFrVXrf9NKhfLONcGWlOMQ&s",
        desc: "Refreshing juice made from freshly squeezed oranges."
    }
    ];


    return (
        <div className="menu-page">
            <Navbar page="Menu" />
            <div className="dish-grid">
                {dishes.map((dish, index) => (
                    <DishCard key={index} dish={dish} onAdd={addToCart} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Menu;
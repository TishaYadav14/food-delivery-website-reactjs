// import React from "react";
// import {useState} from "react";
// import "../styles/Menu.css";
// import Card from "../components/Card";
// import Filter from "../components/Filter";
// import products from "../assets/fake-data/products";

// function Menu() {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   // Extract unique categories from products
//   const categories = [...new Set(products.map((foodItem) => foodItem.category))];

//   // Filter food items based on the selected category
//   const filteredFoodData = selectedCategory
//     ? products.filter((foodItem) => foodItem.category === selectedCategory)
//     : products;



//   return (
//     <div className="menu-container">
//       .
//       <div className="menu-heading">
//         <h1>Menu</h1>
//         </div>
//         <Filter
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onSelectCategory={setSelectedCategory}
//       />
//       <div className="food-card-container">
//         {filteredFoodData.map((foodItem) => (
//           <Card key={foodItem.id} foodItem={foodItem} />
//         ))}
//       </div>
//       {/* <div className="menu-list">
//         {products.map((foodItem) => (
//           <Card key={foodItem.id} foodItem={foodItem} />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Menu;



import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "../styles/Menu.css";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Filter from "../components/Filter";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://temp-project-pi.vercel.app/api/dishes`);
        const data = response.data;

        // Assuming the API response contains an array of products
        setProducts(data);
        
        // Extract unique categories from the fetched data
        const uniqueCategories = [...new Set(data.map((foodItem) => foodItem.category))];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from the API: ", error);

        setLoading(false);
      }
    };

    fetchData(); // Call the async function to fetch data when the component mounts
  }, []);

  const filteredFoodData = selectedCategory
    ? products.filter((foodItem) => foodItem.category === selectedCategory)
    : products;

  return loading ? (
    <Loader/>
  ) : (
    <div className="menu-container">
      <div className="menu-heading">
        <h1>Menu</h1>
      </div>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="food-card-container">
        {filteredFoodData.map((foodItem) => (
          <Card key={foodItem.id} foodItem={foodItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

import React, { useState } from "react";
import Handcraftarray from "../Components/PageComponents/Handcraftarray";
import Footer from "../Components/Navigation/Footer";

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Sample data for products
  const products = [
    {
      id: 1,
      name: "Wodden basket",
      image:
        "https://www.shutterstock.com/image-photo/empty-wooden-fruit-bread-basket-600nw-140970160.jpg",
      info: "These baskets serve multifunctional purposes for storing fruits, vegetables, bread, and household items, they also find decorative use...",
      price: "Rs. 900",
    },
    {
      id: 2,
      name: "Chakati",
      image: "https://imartnepal.com/wp-content/uploads/2018/10/p1030169.jpg",
      info: "Good quality and toughly builted used for informal seating for family gatherings, socializing, or leisure activities like tea drinking...",
      price: "Rs. 800",
    },
    {
      id: 3,
      name: "Leather handbag",
      image:
        "https://images.meesho.com/images/products/54182281/7rvhr_512.webp",
      info: "Strongly built with good looking design making it throughly beautiful. Can be used for shooping, storing various goods and walking...",
      price: "Rs. 1200",
    },
    {
      id: 4,
      name: "Hand painted kettle",
      image:
        "https://indha.in/wp-content/uploads/2024/02/Indha-Hand-Painted-Kettle-Eye-Print-5-300x300.jpg",
      info: "Beautifully designed and creatively settled the art of pouring tea or hot water in a vasiance with eye catching looks and feels...",
      price: "Rs. 1100",
    },
    {
      id: 5,
      name: "Bamboo hand fan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkrTTmV4OeNOx2Um3QXEnRGehpZ1UFolsNtAoieM2yg&s",
      info: "Unique looks, mesmerizing designs created on the lap of this fan to please teh eye as well as your body wih cold air and natural ...",
      price: "Rs. 500",
    },
    {
      id: 6,
      name: "Doll",
      image:
        "https://i.etsystatic.com/11666639/r/il/ba6f82/1410655251/il_fullxfull.1410655251_6hqc.jpg",
      info: "Children loving with various purposes maing the doll one of the best tou for them good looking design making it throughly beautiful...",
      price: "Rs. 200",
    },
    {
      id: 7,
      name: "Beautiful Beads",
      image:
        "https://theshoppe.in/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/a/handicraft_ngo_handbag_90606_theshoppe__1_.jpg",
      info: " Good looking design making it throughly beautiful, creatively settled the art of pouring tea or hot water in a loculae of the visionary..",
      price: "Rs. 1300",
    },
    {
      id: 8,
      name: "File folder",
      image:
        "https://theshoppe.in/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/a/handicraft_ngo_fileholder_green_yellow_118266_theshoppe__1__2.jpg",
      info: "To keep your important documents in safe and relible place making them useful for a long run and increasing your productivity..",
      price: "Rs. 1300",
    },
    {
      id: 9,
      name: "Card holder",
      image:
        "https://theshoppe.in/media/catalog/product/cache/1/image/1500x/040ec09b1e35df139433887a97daa66f/h/a/handicraft_ngo_cardholder_purple_60842_theshoppe__2__1.jpg",
      info: "Throughly effective to sustain your cash or vaarious cards like national identity card to follow the path of succes and to be a lot more..",
      price: "Rs. 35000",
    },

    // Add more products as needed
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="wholesite h-full flex-col fixed overflow-y-auto bg-gray-200 ">
      <header>
        <h1 className="ml-20 text-3xl font-bold mt-5">
          Find <span className="text-orange-500">hand made crafts</span> and
          more
        </h1>
      </header>
      <div className="searchbox h-20 w-screen mt-6 ml-20 flex">
        <input
          type="text"
          placeholder="search here ..."
          className="h-10 w-96 bg border-2 rounded-lg pl-4 outline-none"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <div className="pt-2">
        <img
          src="\public\images\search_8094123.png"
          alt=""
          className="h-7 w-7 cursor-pointer "
          
        />
        </div>
      </div>

      {/* Display filtered products */}
      <Handcraftarray products={filteredProducts} />
    
    </div>
  );
}

export default Marketplace;

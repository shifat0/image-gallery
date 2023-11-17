import React, { useState } from "react";

const categories = ["Animal", "Tech", "Nature"];

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);

  return (
    <div className="bg-[#557C55] text-white p-5">
      <div className="container mx-auto flex justify-between">
        <span className="text-xl font-bold">Photo Gallery</span>
        <div className="flex gap-8 text-black ">
          <div>
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-32 p-1 bg-[#F2FFE9] rounded-md cursor-pointer"
            >
              <option>Category</option>
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>
          <button className="bg-[#F2FFE9] px-5 py-1 rounded-md">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

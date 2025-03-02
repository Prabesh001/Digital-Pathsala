import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const CategoryFilter: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedPrices, setSelectedPrices] = useState<{
    [key: string]: boolean;
  }>({});

  const CategoryArray = [
    { id: "c", label: "C" },
    { id: "cpp", label: "C++" },
    { id: "csharp", label: "C#" },
    { id: "webdev", label: "Web Development" },
  ];

  const PriceArray = [
    { id: "free", label: "Free" },
    { id: "paid", label: "Paid" },
  ];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategories({
      ...selectedCategories,
      [event.target.id]: event.target.checked,
    });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrices({
      ...selectedPrices,
      [event.target.id]: event.target.checked,
    });
  };

  const clearFilters = () => {
    setSelectedCategories({});
    setSelectedPrices({});
  };

  return (
    <div className="bg-white select-none h-max w-max p-4 text-black sticky top-4 rounded-sm">
      <form className="flex items-center gap-1 border-2 px-2 rounded-md">
        <label htmlFor="searchInput">
          <IoSearchOutline size={22} color="gray" />
        </label>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          className="p-2 text-xl outline-none w-40"
        />
      </form>

      <div className="category-filter">
        <p className="font-bold my-3 text-xl">Category</p>
        <div className="category-checkbox flex flex-col gap-2">
          {CategoryArray.map((category) => (
            <label
              key={category.id}
              className="inline-flex items-center"
              htmlFor={category.id}
            >
              <input
                id={category.id}
                type="checkbox"
                className="w-5 h-5 accent-green-600"
                checked={selectedCategories[category.id] || false}
                onChange={handleCategoryChange}
              />
              <span className="ml-2">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="price-filter">
        <p className="font-bold my-3 text-xl">Price</p>
        <div className="price-checkbox flex flex-col gap-2">
          {PriceArray.map((price) => (
            <label
              key={price.id}
              className="inline-flex items-center"
              htmlFor={price.id}
            >
              <input
                id={price.id}
                type="checkbox"
                className="w-5 h-5 accent-green-600"
                checked={selectedPrices[price.id] || false}
                onChange={handlePriceChange}
              />
              <span className="ml-2">{price.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={clearFilters}
        className="flex mt-5 transition-all duration-100 gap-1 items-center border-2 border-green-600 w-max p-2 text-green-600 hover:bg-green-600 hover:text-white rounded-md"
      >
        <RxCross1 /> <span>Clear All Filters</span>
      </button>
    </div>
  );
};

export default CategoryFilter;

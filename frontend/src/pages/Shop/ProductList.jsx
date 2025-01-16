import React, { useState, useEffect } from 'react'
import ProductService from "../../services/porduct.service"
import Card from "../../components/Card"
import index from '.';

const PoroductList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortOption, setSortOption] = useState("default");
    const [selectedCategory, setSelectCategory] = useState("all");
    const [itemParPage, setParPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            const response = await ProductService.getAllProducts();

            setProducts(response.data);
            setFilteredItems(response.data);
            setCategories([
                "all",
                ...new Set(response.data.map((item) => item.category))
            ]);
        };
        fetchData();
    }, [])
    const filterItem = (category) => {
        const filtered = category === "all"
            ? products
            : products.filter((item) => item.category === category)
        setFilteredItems(filtered);
    };

    const handleSortChange = (option, products) => {
        let sortedItem = [...Poroducts];
        switch (option) {
            case "a-z":
                sortedItem.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "z-a":
                sortedItem.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "low-to-hight":
                sortedItem.sort((a, b) => a.price - b.price);
                break;
            case "hight-to-low":
                sortedItem.sort((a, b) => b.price - a.price);
                break;
            default:
                sortedItem.sort((a, b) => a.price - b.price);
                break;
        }
        setFilteredItems(sortedItem);
    };
    //Pagination Logic
    const indexOfLastItem = currentPage * itemParPage;
    const indexOfFirstItem = indexOfLastItem - itemParPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) =>
    setCurrentPage(pageNumber);

    return (
        <div className="section-container">
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 md:8">
                {/* Filter */}
                <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                    {categories.map((category, index) => {
                        return (
                        <button 
                        key={index} 
                        className={`${setSelectCategory === category ? "active" : ""}px-4 py-2 rounded-full`} 
                        onClick={() => filterItem(category)}
                        >
                            <p className="capitalize">{category}</p>
                        </button>
                        );
                    })}
                </div>
                {/* Sort Options */}
                <div className="flex justify-end mb-4 rounded-sm">
                    <div className="bg-black p-2">
                        <select name="sortOption" id="sortOption" className='bg-black text-white px-2 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="a-z">A_Z</option>
                            <option value="z-a"></option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    </div>
                </div>
                {/* Product list */}
                <div className=" section-container flex flex-row justify-center my-8 flex-wrap gap-2">
                    {Array.from({ 
                        length: Math.ceil(filteredItems.
                        length / itemParPage),  
                     }).map((_, index) => (
                        <button
                            key={index}
                            className={`mx-1 px-3 py-1 rounded-full ${
                                currentPage === index + 1
                                    ? "bg-red text-white"
                                    : "bg-gray hover:bg-gray-300"
                                }`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PoroductList;


//มีบรรทัดไม่ครบ
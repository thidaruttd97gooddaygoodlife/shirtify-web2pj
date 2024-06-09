"use client";
import { useState, useEffect, useRef } from "react";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const [items, setItems] = useState([
    { id: 1, name: "Sweater Weather", description: "Lorem... Description", size: "X", price: "XXX", quantity: 1 },
    { id: 2, name: "Sweater Weather", description: "Lorem... Description", size: "X", price: "XXX", quantity: 1 },
    { id: 3, name: "Sweater Weather", description: "Lorem... Description", size: "X", price: "XXX", quantity: 1 },
    { id: 4, name: "Sweater Weather", description: "Lorem... Description", size: "X", price: "XXX", quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id) => {
    window.location.href = `/custom-design/${id}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="min-h-screen bg-[#7BA0FF] flex flex-col relative">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-4">
          <button
            className="flex flex-col space-y-1.5 w-10 h-7 ml-[20px] mt-[30px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-[70px] h-[10px] bg-white rounded-lg"></span>
            <span className="block w-[70px] h-[10px] bg-white rounded-lg"></span>
            <span className="block w-[70px] h-[10px] bg-white rounded-lg"></span>
          </button>
        </div>
        {isOpen && (
          <div ref={menuRef} className="absolute top-0 left-0 bg-white shadow-md p-4 w-[200px] h-full">
            <p className="text-gray-800">Menu Item 1</p>
            <p className="text-gray-800">Menu Item 2</p>
            <p className="text-gray-800">Menu Item 3</p>
          </div>
        )}
        <div className="flex flex-col items-center py-10 flex-grow -mt-[20px]">
          <h1 className="text-6xl font-bold text-[#FFD4E9] mb-10 shadow-black ">
            <span className="relative ">
              Cart
              <span className="absolute inset-0 text-white">Cart</span>
            </span>
          </h1>
          <div className="w-full max-w-md space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-[30px] w-[650px] flex items-center -ml-[100px]">
                <img src="/04180__92144-Photoroom 2 (1).svg" alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm font-semibold">Size {item.size}</p>
                  <p className="text-sm font-semibold">Price {item.price}</p>
                  <p className="text-sm font-semibold">Quantity {item.quantity}</p>
                </div>
                <button
                  className="bg-pink-500 text-white px-4 py-2 rounded-full ml-4"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4"
                  onClick={() => editItem(item.id)}
                >
                  ✎
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full ml-4"
                  onClick={() => removeItem(item.id)}
                >
                  🗑
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full ml-4">BUY NOW!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
        <div className="self-center mt-auto w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[130px] border-b-[#FFD4E9] opacity-40"></div>
      </div>
    </div>
  );
};

export default Cart;

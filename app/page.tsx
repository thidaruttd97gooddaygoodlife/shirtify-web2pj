"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
    const initialItems = [
        { size: 1, title: "Cool Hoodie", price: "299 Baht", img: "/images/Rectangle 21.svg" },
        { size: 0.85, title: "Cool Hoodie", price: "299 Baht", img: "/images/Rectangle 21.svg" },
        { size: 0.7225, title: "Cool Hoodie", price: "299 Baht", img: "/images/Rectangle 21.svg" },
        { size: 0.614125, title: "Cool Hoodie", price: "299 Baht", img: "/images/Rectangle 21.svg" }
    ];
    const [items, setItems] = useState(initialItems);
    const [scrollPosition, setScrollPosition] = useState(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const carouselRef = useRef(null);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        e.target.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const x = e.clientX - startX.current;
        setScrollPosition(x);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        handleScrollEnd();
    };

    const handleScrollEnd = () => {
        const threshold = carouselRef.current.clientWidth / items.length / 2;
        if (scrollPosition > threshold) {
            const newItems = [...items.slice(1), items[0]];
            setItems(newItems);
        } else if (scrollPosition < -threshold) {
            const newItems = [items[items.length - 1], ...items.slice(0, items.length - 1)];
            setItems(newItems);
        }
        setScrollPosition(0);
    };

    useEffect(() => {
        const handleMouseLeave = () => {
            if (isDragging.current) {
                isDragging.current = false;
                handleScrollEnd();
            }
        };
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ overflow: "hidden", cursor: 'grab' }}
        >
            <main className="flex min-h-[125vh] flex-col justify-between bg-[#7BA0FF]">
                <div className="w-[1300px] h-[900px] bg-white mt-[80px] rounded-lg ml-[100px] relative">

                    <div className="absolute ml-[50px] mt-[30px] ">
                        <Image 
                            src="/images/WebLogo(2).svg"
                            alt="Logo" 
                            width={600} 
                            height={600} 
                            style={{ position: 'relative' }}
                        />
                    </div>
                    
              
                   
                    <div className="absolute ml-[840px] mt-[120px]">
                        <Image 
                            src="/images/Vector 59.svg"
                            alt="Logo" 
                            width={500} 
                            height={500} 
                            style={{ position: 'relative' }}
                        />
                    </div>
                    
                    <div className="absolute ml-[880px] mt-[150px]">
                        <Image 
                            src="/images/Vector 60 (1).svg"
                            alt="Logo" 
                            width={250} 
                            height={250} 
                            style={{ position: 'relative' }}
                        />
                    </div>
                    <div className="absolute ml-[910px] mt-[180px]">
                        <Image 
                            src="/images/Rectangle 14 (1).svg"
                            alt="Logo" 
                            width={260} 
                            height={260} 
                            style={{ position: 'relative' }}
                        />
                    </div>

                    <div className="absolute ml-[860px] mt-[50px]">
                        <Image 
                            src="/images/441209357_3672451359639365_1395202878083555003_n-Photoroom 1 (1).svg"
                            alt="Logo" 
                            width={320} 
                            height={320} 
                            style={{ position: 'relative' }}
                        />
                    </div>
                    <div className="mt-[880px]">
                    </div>
                    <div className="relative w-[50px] h-[50px] bg-[#C5D0DC] rounded-full ml-[665px] top-[-505px]">
                        <div className="relative w-[36px] h-[36px] bg-white rounded-full ml-[7px] top-[7px] flex items-center justify-center">
                            <Image 
                                src="/images/Group 39.svg"
                                alt="Logo" 
                                width={20}
                                height={20} 
                            />
                        </div>
                    </div>
                    
                    <h1 className="-mt-[720px] text-[55px] font-bold ml-[100px]">
                        Let’s Create <br/> your Own Style
                    </h1>
                    <p className="pt-[40px] ml-[100px]">
                        loremdacasdqewdsafsrgwisdfoo <br/>adfopsdjfpdsjfdsjfpjsdjfjsd
                    </p>
                    <Link href="/homepage">
                        <button className="bg-[#7BA0FF] text-white font-semibold py-3 px-5 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition mt-[30px] ml-[100px]">
                            Start Shopping
                        </button>
                    </Link>
                    <div className="pl-[100px] mt-[50px] flex flex-wrap space-x-[80px]" style={{ transform: `translateX(${scrollPosition}px)`, transition: isDragging.current ? 'none' : 'transform 0.3s ease' }}>
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="hoodie-container bg-gradient-to-b from-purple-200 to-purple-400 rounded-xl shadow-md flex flex-col items-center overflow-hidden transition-transform duration-300 ease-in-out"
                                style={{ width: `${230 * item.size}px`, height: `${270 * item.size}px`, padding: `${6 * item.size}px` }}
                            >
                                <h2 className="text-2xl font-bold text-gray-800" style={{ fontSize: `${32 * item.size}px` }}>{item.title}</h2>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ width: `${192 * item.size}px`, height: 'auto' }}
                                />
                                <div className="text-center">
                                    <p className="text-lg text-gray-700" style={{ fontSize: `${18 * item.size}px` }}>Price</p>
                                    <p className="text-3xl font-semibold text-white" style={{ fontSize: `${24 * item.size}px` }}>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <Image 
                            src="/images/Vector 61 (1).svg"
                            alt="Logo" 
                            width={700} 
                            height={700} 
                        />
                    </div>
                    <div className="-mt-[475px] -ml-[20px]">
                    <a className="   text-blue-900 ml-[750px] font-semibold text-[18px]  " href="\SignUp">Sign up Now!</a>
                    </div>
                </div>
                <style jsx>{`
                    .hoodie-container:hover {
                        transform: scale(1.1);
                    }
                `}</style>
            </main>
        </div>
    );
}

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 150, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 200, image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: 250, image: '/product4.jpg' },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);

  const editProduct = (id) => {
    window.location.href = `/dashboard/products/${id}`;
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold mb-5">Product Management</h1>
      <div className="grid grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <Image src={product.image} alt={product.name} width={300} height={200} />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">Price: {product.price}</p>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2"
                onClick={() => editProduct(product.id)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/dashboard/products/new">
          <a className="bg-green-500 text-white px-6 py-3 rounded-full">Add New Product</a>
        </Link>
      </div>
    </div>
  )
}

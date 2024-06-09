import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faFileInvoiceDollar, faBoxes } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-300 h-screen p-5 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-5">
          <Image src="/profile.jpg" alt="Profile" width={80} height={80} className="rounded-full" />
          <button className="bg-yellow-400 text-white px-4 py-2 rounded mt-3">Admin</button>
        </div>
        <nav className="w-full flex flex-col items-start">
          <a href="#" className="mb-3 flex items-center w-full text-left text-black hover:bg-blue-400 p-2 rounded">
            <FontAwesomeIcon icon={faHome} className="mr-2" />Dashboard
          </a>
          <a href="#" className="mb-3 flex items-center w-full text-left text-black hover:bg-blue-400 p-2 rounded">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />Manage Team
          </a>
          <a href="#" className="mb-3 flex items-center w-full text-left text-black hover:bg-blue-400 p-2 rounded">
            <FontAwesomeIcon icon={faFileInvoiceDollar} className="mr-2" />Invoices Balance
          </a>
          <a href="#" className="mb-3 flex items-center w-full text-left text-black hover:bg-blue-400 p-2 rounded">
            <FontAwesomeIcon icon={faBoxes} className="mr-2" />Inventory Management
          </a>
        </nav>
      </div>
      {/* Main Content */}
      <div className="w-4/5 bg-blue-100 p-10">
        <h1 className="text-3xl font-bold mb-5">DASHBOARD</h1>
        <p className="mb-10">Welcome to your dashboard...</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-pink-300 p-5 rounded">Sales Obtained</div>
          <div className="bg-pink-300 p-5 rounded">Cumulative Sales</div>
          <div className="bg-pink-300 p-5 rounded">Total of Sales</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-pink-300 p-5 rounded">Revenue Generated</div>
          <div className="bg-pink-300 p-5 rounded">Sales Quantity</div>
        </div>
        <div className="mt-4 bg-pink-300 p-5 rounded h-48">Sales Quantity</div>
      </div>
    </div>
  )
}

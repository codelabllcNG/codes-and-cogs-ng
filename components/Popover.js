import { useState, useRef } from "react";
import Link from "next/link";

export default function PopoverMenu() {
  const [isOpen, setIsOpen] = useState(false); // Tracks if the menu should be visible
  const timerRef = useRef(null); // Timer for delayed closing

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current); // Clear any existing timer
    setIsOpen(true); // Open the menu
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setIsOpen(false), 200); // Add a delay before closing
  };

  return (
    <div className="relative z-50">
      {/* Button to trigger popover */}
      <button
        className="font-bold text-pry-color focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Services
      </button>

      {/* Popover Menu */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 origin-top transition-all duration-700 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="py-2">
          {[
            { name: "Well Insight Services", href: "/well-insight" },
            { name: "Thru Tubing Re-Entry Solutions", href: "/thru-tubing" },
            { name: "NDT and PCE Integrity Testing", href: "/services/3" },
            { name: "Train and Hire an Expert Program", href: "/services/4" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link href={item.href}>
                <a className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-lg">
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

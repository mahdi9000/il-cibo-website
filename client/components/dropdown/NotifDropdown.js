import React, { useState, useRef } from 'react'
import Popper from 'popper.js'
import { 
  NotificationButton, 
  NotifMenu,
  NotifLoader
} from '../'

const Dropdown = ({ color }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const btnDropdownRef = useRef()
  const popoverDropdownRef = useRef()

  const openDropdown = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    })
    setShowDropdown(true)
  }

  const closeDropdown = () => {
    setShowDropdown(false)
  }

  let bgColor
  color === 'white'
    ? (bgColor = 'bg-gray-800')
    : (bgColor = `bg-${color}-500`)
    
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12 ">
            <div className="relative ">
              <NotificationButton 
                refName={btnDropdownRef}
                onClick={() => {
                  showDropdown 
                    ? closeDropdown()
                    : openDropdown()
                }}
              />
              
              <div
                ref={popoverDropdownRef}
                className={
                  (showDropdown ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20"
                }
                style={{ minWidth: "20rem" }}
              >
                {NotifMenu()}

                <a href="#" className="block bg-pink-300 dark:bg-pink-300 text-white text-center hover:underline font-bold py-2">See all notifications</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default function NotificationDropdown() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
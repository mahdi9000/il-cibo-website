import React, { useState, useRef} from 'react'
import { 
  ProfileButton, 
  MealPlanButton,
  ProfilePageButton,
  SettingsButton
} from '../'
import Popper from 'popper.js'

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
            <ProfileButton 
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
                "text-base z-50 float-left list-none text-left rounded shadow-lg mt-1 "
              }
              style={{ minWidth: "15rem" }}
            >

              <ProfilePageButton />
              <MealPlanButton />
              <SettingsButton />
              {/* SEPARATOR */}
              <div className="h-0 border border-solid border-t-0 border-gray-400 opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm py-3 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:bg-gray-100" +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function ProfileDropdown() {
  return (
    <Dropdown color="white" />
  )
}
import React from 'react'
import { 
  HomeButton, 
  NotificationDropdown,
  ProfileDropdown,
  FavoriteButton,
  MessageButton,
  SearchInput
} from './'

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-3 md:flex">
        <div className="flex justify-between items-center">
          
          
          <div className="flex md:hidden">
              <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
          </div>
        </div>
        <div className="w-full hidden md:flex md:items-center md:justify-between">
          <div>
            <a className="text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Mealo</a>
          </div>

          <SearchInput />
          <div className="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
            <HomeButton />
            <MessageButton />
            <NotificationDropdown />
            <FavoriteButton />
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Navbar
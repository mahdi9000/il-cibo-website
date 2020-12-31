import React, { useState } from 'react'
import {
  IoSearchOutline
} from 'react-icons/io5'
import * as debounce from 'lodash.debounce'
import {
  AddCommentButton
} from './'
export const SearchInput = () => {
  const [searchQuerty, setSearchQuery] = useState("")

  const handleChange = ({ target: { value }}) => {
    setSearchQuery(value)

    const search = debounce(sendQuery, 300)

    setSearchQuery(prevSearch => {
      if (prevSearch.cancel) {
        prevSearch.cancel()
      }

      return search
    })

    console.log(value);
    search(value)
  }

  return (
    <div className="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0 justify-items-center ">
      <span className="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
        <IoSearchOutline size={24} />
      </span>
      <input
        type="text" 
        aria-label="Search"
        placeholder="Search user, recipe, or tag" 
        className="w-full lg:w-64 px-10 py-3 leading-tight text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-900 rounded-md placeholder-gray-500 dark:placeholder-gray-200 border border-transparent focus:outline-none focus:bg-white focus:ring focus:border-pink-900"
      />
    </div>
  )
}

export const CommentInput = () => {
  const [comments, setComments] = useState("")

  const handleChange = (e) => {
    setComments(e.target.value)
    console.log(comments);
  }
  
  return (
    <>
      <input 
        onChange={handleChange}
        value={comments}
        type="text"
        placeholder="Add a comment..."             
        className="w-full placeholder-gray-400 text-gray-700 px-2 mt-3 mb-2 focus:outline-none" 
      />

      <AddCommentButton 
        comments={comments}
      />
    </>
  )
}
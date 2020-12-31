import React from 'react';
import { 
  IoCalendarOutline, 
  IoPersonCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5"

const Button = ({ onClick, btnName, icons }) => {
  return (
    <button 
      className=" flex items-center text-sm py-2 px-4 font-normal w-full whitespace-no-wrap bg-transparent hover:bg-gray-100" 
      type="button" 
      style={{ transition: "all .15s ease" }}
      onClick={onClick}
    >
      {icons}
      <span className="mx-1">{btnName}</span>
    </button>
  )
}

export const MealPlanButton = () => {
  const onClick = () => {
    console.log('go to meal plan page');
  }

  return (
    <Button 
      icons={<IoCalendarOutline size={24} />}
      onClick={onClick}
      btnName="Meal Plan"
    />
  )
}

export const ProfilePageButton = () => {
  const onClick = () => {
    console.log('go to profile page');
  }

  return (
    <Button 
      icons={<IoPersonCircleOutline size={24} />}
      onClick={onClick}
      btnName="Profile"
    />
  )
}

export const SettingsButton = () => {
  const onClick = () => {
    console.log('open setting page');
  }

  return (
    <Button 
      icons={<IoSettingsOutline size={24} />}
      onClick={onClick}
      btnName="Settings"
    />
  )
}

export const AddCommentButton = ({ comments }) => {
  const stlyes = "background-transparent font-bold uppercase mt-3 mb-2  text-xs outline-none focus:outline-none text-pink-"
  
  console.log(comments.length);
  return (
    <button 
      className={
        comments.length > 0
          ? stlyes + "600"
          : stlyes + "300 pointer-events-none"
      }
      // disabled={!comments}
      type="button" 
      style={{ transition: "all .15s ease" }}>
      Post
    </button>
  )
}
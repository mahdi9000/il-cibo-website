import React from 'react'
import { 
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoChatbubblesOutline,
  IoChatbubblesSharp,
  IoEllipsisHorizontalSharp,
  IoHeartOutline,
  IoHeartSharp,
  IoHomeOutline, 
  IoHomeSharp, 
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoPersonCircleSharp
} from "react-icons/io5"

const Button = ({ icons, onClick, styles, refName }) => {
  const defaultStyle = "inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 outline-none focus:outline-none rounded-full hover:bg-pink-300"
  
  return (
    <button
      ref={refName}
      className={styles || defaultStyle}
      onClick={() => onClick()}
      style={{ transition: "all .15s ease" }}
      type='button'
    >
      {icons}
    </button>
  )
}


export const HomeButton = ({ currentPage }) => {
  const homeClick = () => {
    console.log("backToHome");
  }

  return (
    <Button icons={
      currentPage === 'homePage'
        ? <IoHomeOutline size={24} />
        : <IoHomeSharp size={24} />
    } 
      onClick={homeClick}
    />
  )
}

export const NotificationButton = ({ currentPage, refName, onClick }) => {
  return (
    <Button 
      icons={
        currentPage !== 'notifPage'
          ? <IoNotificationsOutline size={24} />
          : <IoNotificationsSharp size={24} />
      }
      refName={refName}
      onClick={onClick}
    />
  )
}

export const FavoriteButton = () => {
  const onClick = () => {
    console.log('go to fav page');
  }
  
  return (
    <Button 
      icons={<IoHeartOutline size={24} />}
      onClick={onClick}
    />
  )
}

export const ProfileButton = ({ currentPage, refName, onClick }) => {
  return (
    <Button 
      icons={<IoPersonCircleSharp size={24} color="gray" />}
      onClick={onClick}
      refName={refName}
    />
  )
}

export const MessageButton = ({ currentPage }) => {
  const onClick = () => {
    console.log(`go to chat page`);
  }

  return (
    <Button 
      icons={
        currentPage === 'message'
          ? <IoChatbubblesSharp size={24} />
          : <IoChatbubblesOutline size={24} />
      }
      onClick={onClick}
    />
  )
}

const postButtonStyle = "focus:outline-none rounded-full"

export const CommentButton = () => {
  const onClick = () => {
    console.log('go to comment');
  }

  return (
    <Button
      icons={<IoChatbubbleOutline size={25}/> }
      onClick={onClick}
      styles={postButtonStyle}
    />
  )
}

export const LikeButton = ({ favorite }) => {
  const onClick = () => {
    console.log('this post is liked/unliked');
  }
  
  return (
    <Button 
      icons={
        favorite 
          ? <IoHeartSharp size={29} color="red"/>
          : <IoHeartOutline size={29} />
      }
      onClick={onClick}
      styles={postButtonStyle}
    />
  )
}

export const PostSettingsButton = () => {
  const onClick = () => {
    console.log('this post is liked');
  }
  
  return (
    <Button 
      icons={<IoEllipsisHorizontalSharp size={24} /> }
      onClick={onClick}
      styles={postButtonStyle}
    />
  )
}

export const AddMealPlanButton = ({ onClick, refName }) => {
  return (
    <Button 
      icons={<IoBookmarkOutline size={25} />}
      styles={postButtonStyle}
      onClick={onClick}
      refName={refName}
    />
  )
}


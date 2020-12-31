import React from 'react'
import { timestamps } from '../../helpers/timestamps'
/* Notif Type
1. Comment on Post
2. New follower
3. Like Post

status
0. not read
1. read

*/
const mockData = [
  {
    type: 1,
    username: "ChefJuno",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    time: new Date()
  },
  {
    type: 2,
    username: "titagracielas",
    avatar: "https://www.asianjunkie.com/wp-content/uploads/2018/09/TiffanyYoungPink10.jpg",
    time: "2020-12-30T23:29:41.947Z"
  },
  {
    type: 3,
    avatar: "https://www.wowkeren.com/display/images/photo/2020/03/05/00300265.jpg",
    username: "patriciamaris17",
    time: new Date()
  },

]

const NotifMenu = () => {
  const notifComment = (username, date) => {
    return (
      <>
        <span className="font-bold" href="#">{username} </span> 
          commented on 
        <span className="font-bold text-blue-500" href="#"> Upload Image</span> artical. {date}
      </>
    )
  }

  const notifFollow = (username, date) => {
    return (
      <>
        <span className="font-bold" href="#">{username}</span> start following you. {date}
      </>
    )
  }

  const notifLikePost = (username, date) => {
    return (
      <>
        <span className="font-bold" href="#">{username} </span> 
          Liked Your post 
        <span className="font-bold text-blue-500" href="#"> Test with TDD</span> artical. {date}
      </>
    )
  }
  
  const renderNotif = mockData.map((el, index) => {
    return (
      <a href="#" key={index} className="flex items-center px-4 py-3 border-b hover:bg-gray-100 dark:hover:bg-gray-900 dark:border-gray-900">
        <img className="h-8 w-8 rounded-full object-cover mx-1" src={el.avatar} alt="avatar" />
        <p className="text-gray-600 dark:text-white text-sm mx-2">
          {(() => {
            const date = timestamps(el.time)
            if (el.type === 1) {
              return notifComment(el.username, date)
            }
            if (el.type === 2) {
              return notifFollow(el.username, date)
            }
            if (el.type === 3) {
              return notifLikePost(el.username, date)
            }
          })()}
        </p>
      </a>
    )
     
  })
  return (
    <>
      {renderNotif}
    </>
  )
}

export default NotifMenu
import React from 'react'
import { PostCard } from '../'

const Feed = ({ data }) => {
  const mockData = [
    {
      createdAt: new Date(),
      users: {
        username: "titagracielas",
        avatar: "https://www.asianjunkie.com/wp-content/uploads/2018/09/TiffanyYoungPink10.jpg"
      },
      totalLikes: 123,
      favorites: false
    },
    {
      createdAt: new Date(),
      users: {
        username: "patriciamaris17",
        avatar: "https://www.wowkeren.com/display/images/photo/2020/03/05/00300265.jpg"
      },
      totalLikes: 511,
      favorites: true
    }
  ]

  return (
    <>
      {
        mockData.map((el, idx) => <PostCard key={idx} data={el} />)
      }
    </>
  )
}

export default Feed
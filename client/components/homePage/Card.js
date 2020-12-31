import React, { useState } from 'react'
import { timestamps } from '../../helpers/timestamps'
import { 
  CommentButton,
  LikeButton,
  PostSettingsButton,
  AddMealPlanButton,
  Separator,
  CommentInput
} from '../'

const Card = ({ data }) => {

  return (
    <div className="p-4">
      <div className="bg-white border rounded-sm max-w-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center px-4 py-3">
            <img className="h-8 w-8 rounded-full object-cover mx-1 cursor-pointer" src={data.users.avatar} />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight hover:underline cursor-pointer">{data.users.username}</span>
              <span className="text-gray-600 text-xs block">{timestamps(data.createdAt)}</span>
            </div>
          </div>

          <div className="flex px-4">
            <PostSettingsButton />
          </div>
        </div>
        <img src="https://instagram.fblr17-1.fna.fbcdn.net/v/t51.2885-15/e35/131691839_1469829043392498_6516046567526935293_n.jpg?_nc_ht=instagram.fblr17-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=gmaXcXlwdJQAX_ZjMhU&tp=1&oh=4af9a98dd1f4560e502ff7c7b4b44de5&oe=60094586"/>
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-3 px-2">
            <LikeButton favorite={data.favorites} />
            <CommentButton />
          </div>
          <div className="flex px-2">
            <AddMealPlanButton />
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 px-2 mb-4">{data.totalLikes} likes</div>

        <Separator />
        <div className="flex justify-between mx-4">
          <CommentInput />
        </div>
      </div>
    </div>
  )
}

export default Card
import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {
  const tagsList=[{
    id:1,
    tagName:"javascript",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },{
    id:2,
    tagName:"java",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },
  {
    id:3,
    tagName:"python",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },
  {
    id:4,
    tagName:"css",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },
  {
    id:5,
    tagName:"html",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },
  {
    id:6,
    tagName:"c",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  },
  {
    id:7,
    tagName:"c++",
    tagDesc:"javascript is the best for the full stack developer . it do help easier to make the full stack developer."
  }
]
  return (
  <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or lebel that categorizes your question with other , similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
          {
            tagsList.map((tag)=>
              <TagsList tag={tag} key={tagsList.id}/>
            )
          }
        </div>
      </div>
  </div>
  )
}

export default Tags

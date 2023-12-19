import React from 'react'

const WidgetTags = () => {
  const tags=['mysql','next.js','node.js','php','reactjs','mongodb','c++','c','python','javascript','java','html','css','ruby','c#']
  return (
    <div className='widget-tags'>
      <h4>Watched tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags

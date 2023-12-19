import React from 'react'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import RightSidebar from '../../component/RightSidebar/RightSidebar'
import HomeMainbar from '../../component/HomeMainbar/HomeMainbar'
import '../../App.css';
import QuestionsDetails from './QuestionsDetails';
function Questions() {

  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className="home-container-2">
        {/* <QuestionsDetails/> */}
        <HomeMainbar/>
      <RightSidebar/>
      </div>
    </div>
  )
}

export default Questions;

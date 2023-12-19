import React from 'react'
import Comment from "../../assets/Comment.png"
import Pen from "../../assets/Pen.png"
import Black_Logo from "../../assets/Black_Logo.png"
const Widget = () => {
  return (
    <div className='widget'>

      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <img src={Pen} alt="Pen" width="20"/>
        <p> Observability is key to future of <br/>software (and your DevOps career)</p>
        </div>
        <div className="right-sidebar-div-2">
        <img src={Pen} alt="Pen" width="20"/>
        <p>Podcast 374: How are you all users. </p>
        </div>
      </div>

      <h4>Featured of Meta</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <img src={Comment} alt="Comment" width="20"/>
        <p>Review queue workflows. Final release ... </p>
        </div>
        <div className="right-sidebar-div-2">
        <img src={Comment} alt="Comment" width="20"/>
        <p> Incident update and uptime reporting web.</p>
        </div>
        <div className="right-sidebar-div-2">
        <img src={Black_Logo} alt="Icon" width="20"/>
        <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
      </div>

      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
      <div className="right-sidebar-div-2">
        <p>38</p>
        <p>Why was the spam flag declined, yet the quetion marked at spam ?</p>
        </div>
        <div className="right-sidebar-div-2">
        <p>20</p>
        <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="right-sidebar-div-2">
        <p>14</p>
        <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>

    </div>
  )
}

export default Widget

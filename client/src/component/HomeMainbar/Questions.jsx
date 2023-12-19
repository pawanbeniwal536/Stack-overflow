import React from 'react'
import {Link}from 'react-router-dom'
import moment from 'moment'
const Questions = ({questions}) => {
  return (
    <div className='display-question-container'>
      <div className="display-votes-ans">
        <p>{questions.upVote.length - questions.downVote.length}</p>
        <p>Votes</p>
      </div>
      <div className="display-votes-ans">
        {/* <p>{questions.noOfAnswers.length}</p> */}
        <p>{questions.answer.length}</p>
        <p>Answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${questions._id}`}className='question-title-link'>{questions.questionTitle}</Link>
        <div className="display-tags-time">
        <div className="display-tags">
        {
          questions.questionTags.map((tag)=>(
            <p key={tag}>{tag}</p>
            ))
          } 
        </div>
        <div className="display-time">
          asked {moment(questions.askedOn).fromNow()} {questions.userPosted}
        </div>
        </div>
      </div>
          </div>
     
  )
}

export default Questions
 
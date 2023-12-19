import React from 'react'
import {useLocation,useNavigate}from 'react-router-dom';
import "./HomeMainbar.css";
import QuestionsList from './QuestionsList';
import { useSelector } from 'react-redux';
const HomeMainbar = () => {
  const location=useLocation()
  const user=1;
  var navigate=useNavigate();


  const questionsList = useSelector(state=>state.questionsReducer)
//   var questionsList=[{
//     _id:1,
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:2,
//     questionsTitle:"What is the Function?",
//     questionTags:["java,node.js"],
//     userPosted:"mano",
//     askedOn:"jan 1",
//     userId:1,
//     answer:[{
//       answerBody:"answer",
//       userAnswered:'Kumar',
//       AnsweredOn:"jan1",
//       userId:2
//     }]
//   },
// {
//   _id:2,
//   upVotes:0,
//   downVotes:4,
//   noOfAnswers:0,
//   questionsTitle:"What is the Programming Langvage",
//   questionTags:["java , node.js , python "],
//   userPosted:"mano",
//   askedOn:"march 5",
//     userId:1,
//     answer:[{
//       answerBody:"answer",
//       userAnswered:'Kumar',
//       AnsweredOn:"jan1",
//       userId:2
//     }]
// },
// {
//   _id:3,
//   upVotes:4,        
//   downVotes:3,
//   noOfAnswers:1,
//   questionsTitle:"What is the coding",
//   questionTags:["java,node.js "],
//   userPosted:"mano",
//   askedOn:"June 4",
//     userId:1,
//     answer:[{
//       answerBody:"answer",
//       userAnswered:'Kumar',
//       AnsweredOn:"jan1",
//       userId:2
//     }]
// },
// {
//   _id:4,
// upVotes:9,
// downVotes:1,
//   noOfAnswers:3,
//   questionsTitle:"What is the Programming Langvage",
//   questionTags:["java , node.js , python "],
//   userPosted:"mano",
//   askedOn:"April",
//     userId:1,
//     answer:[{
//       answerBody:"answer",
//       userAnswered:'Kumar',
//       AnsweredOn:"jan1",
//       userId:2
//     }]
// },
// {
//   _id:5,
//   upVotes:10,
//   downVotes:2,
//   noOfAnswers:1,
//   questionsTitle:"What is the Programming Langvage",
//   questionTags:["java , node.js , python "],
//   userPosted:"mano",
//   askedOn:"march 11",
//     userId:1,
//     answer:[{
//       answerBody:"answer",
//       userAnswered:'Kumar',
//       AnsweredOn:"jan1",
//       userId:2
//     }]
// }]

console.log('it is homeMainbar')
const checkAuth=()=>{
  if (user===null){
    alert('Login or signup to ask a question ');
    navigate('/Auth');
  }
  else{
    navigate('/AskQuestions') 
  }
}
  return (
   <div className='main-bar'>
    <div className='main-bar-header'>
{
  location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
}
    <button onClick={checkAuth}className='ask-btn'>Ask Qustions</button>
    </div>
    <div className='Question-padding'>
      {
        questionsList.data==='null'?
        <h1>Loading...</h1>:
        <>
        <p>{questionsList?.data?.length} Questions </p>
        <QuestionsList questionsList={questionsList.data}/>
        </>
      }
    </div>
   </div>
  )
}

export default HomeMainbar

import React, { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import copy from "clipboard-copy";

import Upvote from "../../assets/Upvote.png";
import downvote from "../../assets/downvote.png";
import "./Questions.css";
import DisplayAnswer from "./DisplayAnswer";
import Avatar from "../../component/Avatar/Avatar";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  const Location = useLocation();
  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const url = "http://localhost:5000";

  const handlePostAns = (e, answerLength) => {
    e?.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
            userId: User.result._id,
          })
        );
      }
    }
  };

  const handleShare = () => {
    copy(url + Location.pathname);
    alert("Copied url : " + url + Location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpvote = () => {
    dispatch(voteQuestion(id, "upVote", User.result._id));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, "downVote", User.result._id));
  };

  // var questionsList=[{
  //     _id:'1',
  //     upVotes:3,
  //     downVotes:2,
  //     noOfAnswers:2,
  //     questionBody:"it is the body",
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
  //   _id:'2',
  //   upVotes:0,
  //   downVotes:4,
  //   noOfAnswers:0,
  //   questionBody:"it is the body",
  //   questionsTitle:"What is the Programming Langvage",
  //   questionTags:["java "],
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
  //   _id:'3',
  //   upVotes:4,
  //   downVotes:3,
  //   noOfAnswers:1,
  //   questionBody:"it is the body",
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
  //   _id:'4',
  // upVotes:9,
  // downVotes:1,
  //   noOfAnswers:3,
  //   questionBody:"it is the body",
  //   questionsTitle:"What is the Programming Langvage",
  //   questionTags:["java , node.js "],
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
  //   _id:'5',
  //   upVotes:10,
  //   downVotes:2,
  //   noOfAnswers:1,
  //   questionBody:"it is the body",
  //   questionsTitle:"What is the Programming Langvage",
  //   questionTags:["java , node.js "],
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
  return (
    <div className="question-details-page">
      {questionsList.data === "null" ? (
        "Loading..."
      ) : (
        <>
          {questionsList?.data
            ?.filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={Upvote}
                        alt="upvote"
                        width="12"
                        className="votes-icon"
                        onClick={handleUpvote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt="downvote"
                        width="12"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <button type="button" onClick={handleShare}>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button type="button" onClick={handleDelete}>
                              Delete
                            </button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                            style={{ color: "#0086d8" }}
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.answer.length !== 0 && (
                  <section>
                    <h3>{question.answer.length} Answer</h3>
                    <DisplayAnswer
                      key={question._id}
                      question={question}
                      handleShare={handleShare}
                    />
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e?.question?.answer?.length);
                    }}
                  >
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></textarea>
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}
                    or{" "}
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009bff" }}
                    >
                      Ask your own question.
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default QuestionsDetails;

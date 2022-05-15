import React from "react"
import { Link } from 'react-router-dom'
import CONFIG from '../static/config.json'
import CCNActionButton from "../components/button/CCNActionButton"


function CCNQuestionView() {
  return (
    <div className="questionContainer">
      <div className="questionContent">
        <p>Are you a city person or traveling person?</p>
        <div className="questionActionContainer">
          <Link to={CONFIG.pages.endpoint.result}>
            <CCNActionButton
              a_strText="City"
            />
          </Link>
          <Link to={CONFIG.pages.endpoint.result}>
            <CCNActionButton
              className="btnQuestionAction2"
              a_strText="Travelling"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CCNQuestionView

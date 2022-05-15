import React from "react"
import CCNActionButton from "../components/button/CCNActionButton"


function CCNResultView() {
  return (
    <div className="resultContainer">
      <div className="resultContentContainer">
        <div className="resultContent">
          <p className="txtResultTitle">Your helmet are...</p>
          <p className="txtResultHelm">Zelos</p>
          <p className="txtResultDesc mt-[25px]">Claim your <b>50% discount</b> with this promo code</p>
          <CCNActionButton
            className="mt-[20px] mr-[25px] !w-[175px]"
            a_strText="ZELOS20"
            filled
            copyText
          />
        </div>
        <div className="resultPicture">
          <img src={require('../assets/img/helmetZelos.png')} alt="helmet_zelos" />
          <div className="imgResultPicture" />
        </div>
      </div>
    </div>
  )
}

export default CCNResultView

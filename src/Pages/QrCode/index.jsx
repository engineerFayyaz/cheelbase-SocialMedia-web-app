import React from "react";
import "../QrCode/cheelbase-qr.css"

const QrCode=()=>{
    return(
        <>
        <div className="container-sm  qr-main p-5 sm-p-0 rounded-3">
            <div className="row  content">
    <div className="col-sm-7 p-5 sm-p-0">
      <div className="h2">To setup cheelBase on your computer </div>
      <ol className="pt-2 ">
        <li>Open cheelBase app on your phone</li>
        <li>
          Go to settings by tapping on{" "}
          <b>
            MENU ( <i className="fa-solid fa-ellipsis-vertical" /> )
          </b>{" "}
          on the Right-hand corner of your device
        </li>
        <li>
          Tap on <b>Linked Devices</b> and then link device
        </li>
        <li>Point your phone on this screen to capture QR code</li>
      </ol>
      <div className="link mt-4">
        <span>
          or{" "}
          <a href="/LinkingDevice" target="_blank">
            link with phone number
          </a>
        </span>
      </div>
    </div>
    <div className="col-5 text-center p-5">
      <img
        src="images/cheelbase-qr-code.png"
        alt=""
        width={250}
        height={250}
      />
    </div>
  </div>
</div>

        </>
    )
}
export default QrCode;
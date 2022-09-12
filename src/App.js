import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import VideoPlayer from './Components/VideoPlayer';

function App() {
  const [active, setActive] = useState({ page: "Screen1", title: "" });

  return (
    <>
      <div className="d-flex">
        {active.page === "Screen1" && <VideoPlayer url="Video1.mp4" muted={true} />}

        {active.page === "Screen1" &&
          <div className='dimension d-flex flex-column justify-content-center align-items-center'>
            <button className='btn btn-primary m-2 btn-lg rounded-pill' onClick={() => setActive({ page: "Screen2", title: "Download Campaign structure and Guide" })}>Campaign structure</button>

            <button className='btn btn-primary m-2 btn-lg rounded-pill' onClick={() => setActive({ page: "Screen2", title: "Sign Up for webinar" })}>Learn Facebook basics</button>

            <button className='btn btn-primary m-2 btn-lg rounded-pill' onClick={() => setActive({ page: "Screen2", title: "Download Campaign structure and Guide" })}>3rd choice</button>
          </div>}

        {(active.page === "Screen2" || active.page === "Screen3") && <VideoPlayer url="Video2.mp4" muted={false} />}

        {active.page === "Screen2" && <div className="dimension d-flex justify-content-center align-items-center">
          <button className='btn btn-primary m-3 btn-lg' onClick={() => setActive({ page: "Screen3", title: "" })}>{active.title}</button>
        </div>}

        {active.page === "Screen3" && <div className="dimension d-flex justify-content-center align-items-center">
          <Form />
        </div>}

      </div>
    </>
  );
}

export default App;
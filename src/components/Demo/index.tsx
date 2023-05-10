import React from "react";
import { Slide } from "react-awesome-reveal";

export default function Demo() {
  return (
    <Slide direction="left">
      <div style={{ textAlign: "center", padding: "7.5rem 0 3rem" }}>
        <h6> 
          Demo
        </h6>
        <video
          width="100%"
          height="100%"
          controls
          muted
          style={{ marginTop: "2rem" }}
        >
          <source src="demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Slide>
  )
}
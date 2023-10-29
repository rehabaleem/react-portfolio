import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import laptopAnimation from "../../../public/animation/webdeveloper.json";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <h1 className="title">Rehab Abd-Elaleem Hassan</h1>
        <p className="subtitle">
          Frontend Software Engineer seeking an entrylevel position with Company
          to use my skills in coding, troubleshooting complex problems, and
          assisting in the timely completion of projects
        </p>
        <div className="all-icons flex">
          <div>
            <a className="icon-github" href="https://github.com/rehabaleem"></a>
          </div>
          <div>
            <a
              className="icon-facebook-official"
              href="https://www.facebook.com/aisha.aleem.585/"
            ></a>
          </div>
          <div>
            <a
              className="icon-linkedin"
              href="https://www.linkedin.com/in/rehab-abdelaleem/"
            ></a>
          </div>
          <div>
            <a
              className="icon-instagram"
              href="https://www.instagram.com/rehab_aleem/"
            ></a>
          </div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie animationData={laptopAnimation} style={{ height: 500 }} />
      </div>
    </section>
  );
}
export default Hero;

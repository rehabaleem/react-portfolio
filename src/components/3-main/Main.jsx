import React, { useState } from "react";
import "./main.css";

function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  return (
    <main className="flex">
      <section className="right-section flex">
        <article className="card">
          <img src="./1.jpg" width={266} alt="" />
          <div style={{ width: "240px" }} className="box">
            <h1 className="title">Far Away</h1>
            <p className="sub-title">
              An application that reminds you of the things you should take with
              you before your travel trip using react and html,css
            </p>
            <div style={{ gap: "11px" }} className="flex">
              {" "}
              <div>
                <a
                  className="icon-link"
                  href="https://far-away-dusky.vercel.app/"
                ></a>
              </div>
              <div>
                <a
                  className="icon-github"
                  href="https://github.com/rehabaleem/far-away.git"
                ></a>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <img src="./3.png" width={266} alt="" />
          <div style={{ width: "240px" }} className="box">
            <h1 className="title">Crud System</h1>
            <p className="sub-title">
              A dedicated application for stores that can add, delete, search
              and modify any product
            </p>
            <div style={{ gap: "11px" }} className="flex">
              {" "}
              <div>
                <a
                  className="icon-link"
                  href="https://crud-app-seven-puce.vercel.app/"
                ></a>
              </div>
              <div>
                <a
                  className="icon-github"
                  href="https://github.com/rehabaleem/Crud-App.git"
                ></a>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <img src="./2.png" width={266} alt="" />
          <div style={{ width: "240px" }} className="box">
            <h1 className="title">Minimal Shop</h1>
            <p className="sub-title">
              A small online store that is considered a graduation project from
              the DPE using React
            </p>
            <div style={{ gap: "11px" }} className="flex">
              {" "}
              <div>
                <a
                  className="icon-link"
                  href="https://miniimal-shop.vercel.app/"
                ></a>
              </div>
              <div>
                <a
                  className="icon-github"
                  href="https://github.com/rehabaleem/Miniimal-Shop.git"
                ></a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
export default Main;

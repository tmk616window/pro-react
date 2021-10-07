import React, { Component } from "react";
// import './task.css'
import Image from 'next/image'
import Logo from '../img/logo.png'

export const TaskList = () => {
  let listItem = {
    margin: "10px 20px 20px 20px",
  }

  let taslList = {
    // backgroundColor: "#99FFFF	",
  }

    return (
      <div style={taslList}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        <ul className="list-group">
          {["List Item 1", "List Item 2", "List Item 3"].map(listitem => (
            <li className="list-group-item list-group-item-primary list-item" >
              <div className="item-image">
                <Image src={Logo} alt="..." width = "250" height="250" className="logo-image" />
              </div>
              <div className="item-content">
                <h1>{listitem}</h1>
                <p>ポートフォリオ概要</p>
                <p className="description">dkopkdomxklんmkおxsんwこcんwkpmんqkpmwkpqmdpwqmpwんmqpdmんwqkpmpおwqもpwqもpもpqwdmんどpqpekwopddejwopjdeopjopdew</p>
                <p>使用技術</p>
                <div className="langArticle">
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                <span className="article">vue</span>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default TaskList;

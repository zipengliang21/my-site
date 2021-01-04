import React from "react";
import styled from "styled-components";
const avatar = require("../assets/avatar.jpg")

const HomeWrapper = styled.div`
    flex: 1;
    width: 70%;
    margin: 0px auto;
    .brief{
       text-align: center;
       h2{
         padding: 12px 0px;
         font-size: 20px;
       }
       img{
          width: 150px;
          height: 150px;
          border-radius: 120px;
          margin-top: 20px;
       }
       ul{
        display: flex;
        justify-content: center;
         li{
            padding: 6px 10px;
            background: rgba(87, 199, 255, 0.1);
            margin: 12px 5px;
            border-radius: 3px;
         }      
       }
       p{
        padding: 12px 0px;
        color: rgba(0, 0, 0, 0.7);
      }
`;

function Home() {
  return (
    <HomeWrapper>
      <section className="brief">
        <img src={avatar} alt={"hello"} width="500px"/>
        <h2>Zipeng Liang</h2>
        <ul>
          <li>Software Engineer</li>
          <li>Full Stack Developer</li>
          <li>UBC Student</li>
        </ul>
        <p>I am a full stack engineer that builds modern software apps.</p>
        {/*<div>Github</div>*/}
        {/*<div>LinkedIn</div>*/}
      </section>
    </HomeWrapper>
  );
}

export default Home;
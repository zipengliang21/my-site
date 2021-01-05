import React from "react";
import styled from "styled-components";
import ProjectList from "components/ProjectList";
import projectData from "../projects.json";
import Fade from "react-reveal/Fade";

const avatar = require("../assets/avatar.png");

const HomeWrapper = styled.div`
//font-family: 'Poppins', sans-serif;
    flex: 1;
    width: 800px;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    .brief{
       display: flex;
       text-align: center;
       margin: 0 auto;
       .image{
         align-self: flex-end;
         flex-shrink: 0;
         h2{
           padding: 12px 0px;
           font-size: 20px;
         }
         img{
           width: 250px;
           height: 250px;
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
       }
       .description{
          align-self: center;
          margin-top: 20px;
          margin-left: 80px;
          font-size: 1.8rem;
          line-height: 1.5;
          font-weight: 100;
       }
     }
     .project{
        text-align: center;
        padding-top: 40px;
        padding-bottom: 25px;
        .title{
          h2{
            font-size: 2.4rem;
            padding-bottom: 12px;
            color: rgba(0,0,0,.8);
            font-weight: 400;
          }
          p{
            color: rgba(0, 0, 0, 0.7);
          }
        }
    }
`;

function Home() {
   return (
       <HomeWrapper>
          <section className="brief">
             <div className="image">
                <img src={avatar} alt={"Jepson"}/>
                <h2>Zipeng Liang (Jepson)</h2>
                <ul>
                   <li>Software Engineer</li>
                   <li>UBC Student</li>
                </ul>
             </div>
             <p className="description">I am a <strong>full stack engineer</strong> that builds
                <strong> modern software apps.</strong></p>
             {/*<div>Github</div>*/}
             {/*<div>LinkedIn</div>*/}
          </section>

          <section className="project">
             <Fade top>
                <div className="title">
                   <h2>Recent Projects</h2>
                </div>
             </Fade>
             <ProjectList dataSource={projectData.data}/>
             <p>You can find more in the projects overview.</p>
          </section>
       </HomeWrapper>
   );
}

export default Home;
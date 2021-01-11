import React from "react";
import styled from "styled-components";
const p1 = require("../assets/project/Morney-money.png");
const p2 = require("../assets/project/ZL.png");
const p3 = require("../assets/project/RateMyRestaurantLogin.png");

const Wrapper = styled.div`
    flex: 1;
    margin-top: 70px;
    @media(max-width: 992px) {
    margin-top: 40px;
    };
    >div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        > img{
         width: 300px;
         height: 300px;
         border-radius: 10px;
         max-width: 90%;
         @media(max-width: 992px) {
            width: 300px;
            height: 300px;
         };
       }
       .box{
           width: 375px;
           padding: 40px 0px;
           margin-left: 40px;
           .title{
               h1{
                   font-size: 24px;
               }
               p{
                   color: #999;
                   padding-top: 8px;
                   font-size: 13px;
               }
           }
           .content{
               padding: 20px 0px;
               p{
                   padding-top: 10px;
                   line-height: 2;
               }
           }
           @media(max-width: 992px) {
              text-align: center;
              margin-left: 0;
           };
       }   
    }
`;

function ProjectDetail(props: any) {
   const project = props.project;
   return (
       <Wrapper>
          <div>
             <img src={project.id === 1 ? p1 : project.id === 2 ? p2 : p3} alt={"Project"}/>
             <div className="box">
                <div className="title">
                   <h1>{project.title}</h1>
                </div>
                <section className="content">
                   {project.descriptions.map((description: string, index: number) => {
                      return <p key={index}>{description}</p>;
                   })}
                   {project.preview? <p>{`Preview Link: ` + project.preview}</p> : null}
                   {project.sourceCode? <p>{`Source Code Link: ` + project.sourceCode}</p> : null}
                </section>
             </div>
          </div>
       </Wrapper>
   );
}

export default ProjectDetail;
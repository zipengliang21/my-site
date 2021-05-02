import React from "react";
import styled from "styled-components";
import {ThemeEnum} from "../hooks/context";
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
                   color: ${props => props.theme === ThemeEnum.light? "#343434" : "#80B1EC"};
               }
           }
           .content{
               padding: 20px 0px;
               p{
                   color: ${props => props.theme === ThemeEnum.light? "#343434" : "#EAEAEA"};
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
       <Wrapper theme={props.theme}>
          <div>
             <LazyLoadImage src={project.id === 1 ? p1 : project.id === 2 ? p2 : p3} alt={"Project"}/>
             <div className="box">
                <div className="title">
                   <h1>{project.title}</h1>
                </div>
                <section className="content">
                   {project.descriptions.map((description: string, index: number) => {
                      return <p key={index}>{description}</p>;
                   })}
                   {project.preview?
                       <p>Preview Link: <a href={project.preview} target="_blank" rel="noreferrer">
                          <p>{project.preview}
                       </p>
                       </a>
                       </p>
                        : null}
                   {project.sourceCode?
                       <p>Source Code Link: <a href={project.sourceCode} target="_blank" rel="noreferrer">
                          <p>{project.sourceCode}
                          </p>
                       </a>
                       </p>
                       : null}
                </section>
             </div>
          </div>
       </Wrapper>
   );
}

export default ProjectDetail;
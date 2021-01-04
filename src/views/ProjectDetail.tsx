import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    flex: 1;
    .box{
        width: 650px;
        margin: 0px auto;
        padding: 40px 0px;
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
    }
`;

function ProjectDetail() {
   return (
       <Wrapper>
          <div className="box">
             <div className="title">
                <h1>Jepson's Tally Book</h1>
             </div>
             <section className="content">
                <p>This is a simple Tally Book Web Application based on
                   React / React Router / Custom Hooks / webpack / TypeScript / LocalStorage
                </p>
                <p>
                   The feature is fast and easy.
                </p>
                <p>
                   Working in this project helps me have a deeper understanding of webpack, Hooks API, and SVG Icon.
                </p>
                <p>
                   Preview Link: https://zipengliang21.github.io/Morney-Website/
                </p>
                <p>
                   Source Code Link: https://github.com/zipengliang21/Morney
                </p>
             </section>
          </div>
       </Wrapper>
   );
}

export default ProjectDetail;
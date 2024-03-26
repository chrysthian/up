"use client"

import Image from "next/image"
import { permanent_marker } from '../ui/fonts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './portfolio.css'

export default function Flip() {

  return (
    <main>
      <div className="h-screen relative">
        <div className="horizontal-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="display-name">
                  <h1 className={permanent_marker.className}>Chrysthian Simão</h1>
                  <h3>Game Developer & Frontend Architect</h3>
                </div>
                <div className="display-photo">
                  <Image src="/ch-2.jpeg" width={250} height={250} alt="Picture of Chrysthian Simão" />
                </div>
              </div>
              <div className="flip-card-back">
                <a href="https://www.linkedin.com/in/chrysthian-simao/" target="_blank">
                  <LinkedInIcon className="size-20" />
                </a>
                <a href="https://github.com/chrysthian" target="_blank">
                  <GitHubIcon className="size-20" />
                </a>
                <PictureAsPdfIcon className="size-20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container about">
        <div className="section about-section">
          <h1 className={permanent_marker.className}>
            <span className="chonky-underline-yellow">About Me</span>
          </h1>
          <h3>Software engineer with big heart &#10084;</h3>
          <h3>Passionately curious</h3>
          <h3>Multidisciplinary problem solver</h3>
        </div>
      </div>

      <div className="section-container expertise">
        <div className="section">
          <h1 className={permanent_marker.className}>
            <span className="chonky-underline-yellow">Expertise</span>
          </h1>
          <div className="content">
            <div>
              <h2>
                <span className="chonky-underline-gray">Game Development</span>
              </h2>
              <h4>1 year</h4>
              <span className="content-center">
                <Image src="/yoroi_02_50.png" width={256} height={256} alt="Pixel art samurai" />
              </span>
              <p>
                Games are part of my life, so I use my engineer background to build them with Unity and C# in
                personal/self-employed projects and experiment with WebGL and Pixi.js.
              </p>
            </div>
            <div>
              <h2>
                <span className="chonky-underline-gray">Frontend Development</span>
              </h2>
              <h4>7 years</h4>
              <span className="content-center">
                <Image src="/react_logo.png" width={256} height={256} alt="Pixel art of react logo" />
              </span>
              <p>
                Focused on usability, responsiveness and accessibility, I create applications using React.js, Next.js,
                Redux and WebGL.
              </p>
            </div>
            <div>
              <h2>
                <span className="chonky-underline-gray">Fullstack Development</span>
              </h2>
              <h4>19 years</h4>
              <span className="content-center">
                <Image
                  src="/full_stack.png"
                  width={256}
                  height={256}
                  quality={100}
                  alt="Pixel art of a computer and two gears"
                />
              </span>
              <p>I can handle new technologies and adapt to new stacks after being on the road for a long time.</p>
              <p>Experienced with: C#, Java, Typescript/Javascript, Node.js and SQL databases;</p>
              <p>Testing with: Jest and Cypress.</p>
            </div>
          </div>
        </div>
      </div>

    </main>);
}
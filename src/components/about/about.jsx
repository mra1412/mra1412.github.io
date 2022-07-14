import React from 'react';
import shape1 from '../../images/about/shape1.png';
import shape2 from '../../images/about/shape2.png';

const startDate = new Date('1/1/2015');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - startDate);
const totalExperience = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))
  .toString()
  .padStart(2, '0'); // Two digit output. If less, it will append zeroes before the digit.

const About = (props) => {
  return (
    <div className="wpo-about-area section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="wpo-about-exprience-wrap">
              <div className="wpo-about-exprience">
                <h2>{totalExperience}</h2>
                <span>Years of Experience</span>
              </div>
              <div className="client">
                <h3>
                  <span data-count="100">100</span>%
                </h3>
                <p>Focused</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
            <div className="wpo-about-content">
              <div className="wpo-about-title">
                <h2>My Skills</h2>
                <p>
                  An Electrical Engineer with about 7 years of experience in the
                  field of Power. After switching to the software side, have
                  experienced working on building APIs for emulator / sandbox
                  related websites.
                </p>
              </div>
              <div className="wpo-about-funfact">
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="90">90</span>%
                    </h3>
                    <p>Research</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="85">85</span>%
                    </h3>
                    <p>Go</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="80">80</span>%
                    </h3>
                    <p>Python</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="80">80</span>%
                    </h3>
                    <p>OpenAPI</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="60">60</span>%
                    </h3>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-inner">
                    <h3>
                      <span data-count="40">40</span>%
                    </h3>
                    <p>ReactJS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-shape">
        <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_39_4267)">
            <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4267"
              x="-500"
              y="0"
              width="1495"
              height="1495"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4267"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="ab-shape-s2">
        <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
          <g opacity="0.15" filter="url(#filter0_f_39_4265)">
            <circle cx="950" cy="950.004" r="450" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4265"
              x="-0.00012207"
              y="0.00402832"
              width="1900"
              height="1900"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_39_4265"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="line-shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="line-shape-2">
        <img src={shape2} alt="" />
      </div>
    </div>
  );
};

export default About;

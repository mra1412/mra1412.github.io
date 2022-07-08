import React from 'react';
// import { Link } from 'react-router-dom';
import xflowLogo from '../../images/work/xflow.png';
import ormLogo from '../../images/work/orm.png';
import oesLogo from '../../images/work/oes.png';
import fwoLogo from '../../images/work/fwo.png';
import SectionTitle from '../SectionTitle/SectionTitle';

const Experiences = [
  {
    date: 'June, 2022 - Present',
    logo: xflowLogo,
    position: 'Senior Engineer',
    companyName: 'xFlow Research Inc., Pakistan',
    workFrom: '',
    website: 'https://xflowresearch.com',
  },
  {
    date: 'August, 2021 - June, 2022',
    logo: xflowLogo,
    position: 'Network Research Engineer II',
    companyName: 'xFlow Research Inc., Pakistan',
    workFrom: '',
    website: 'https://xflowresearch.com',
  },
  {
    date: 'September, 2020 - June, 2021',
    logo: ormLogo,
    position: 'Site Manager',
    companyName: 'Orient Rental Modaraba, Pakistan',
    workFrom: '',
    website: 'https://orientmodaraba.com',
  },
  {
    date: 'February, 2020 - September, 2020',
    logo: oesLogo,
    position: 'Assistant Manager Application & Installation',
    companyName: 'Orient Energy Systems (Pvt.) Ltd., Pakistan',
    workFrom: '',
    website: 'https://orient-power.com',
  },
  {
    date: 'October, 2016 - February, 2020',
    logo: oesLogo,
    position: 'Application & Installation Engineer',
    companyName: 'Orient Energy Systems (Pvt.) Ltd., Pakistan',
    workFrom: '',
    website: 'https://orient-power.com',
  },
  {
    date: 'January, 2015 - October, 2016',
    logo: fwoLogo,
    position: 'Trainee Engineer (Electrical)',
    companyName: 'Frontier Works Organization, Pakistan',
    workFrom: '',
    website: 'https://fwo.com.pk',
  },
];

const Experience = (props) => {
  return (
    <div className="wpo-work-area section-padding">
      <div className="container">
        <SectionTitle Title={'My Work Experience'} />
        <div className="wpo-work-wrap">
          {Experiences.map((experience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{experience.date}</li>
                <li className="logo">
                  <img src={experience.logo} alt="" />
                </li>
                <li className="position">
                  {experience.position}{' '}
                  <span>
                    {experience.companyName} <span>{experience.workFrom}</span>
                  </span>
                </li>
                <li className="link">
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to website
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
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
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Experience;

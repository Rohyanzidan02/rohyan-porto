import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// component
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Contact from '../components/Contact'
import IconExperience from '../Icon/IconExperience'
import Headerportfolio from './Headerportfolio';

// icon
import { IoSchoolOutline } from "react-icons/io5";
import { FaRadio } from "react-icons/fa6";
// icon desain
import { SiCoreldraw } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
// icon progrmaer
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import { FaComputer } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaFile } from "react-icons/fa";


function Experience() {
  return (
    <>
   <Navbar />
<div id='work'>
<div className="wrapper">
    <h1>Work Experience</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaRadio />}
  > 
    <h3 className="vertical-timeline-element-title">Raksa FM</h3>
    <h4 className="vertical-timeline-element-subtitle">Radio Announencer</h4>
    <ul>
   <li> Writing scripts, choosing songs, and planning special events</li>
    <li>Interact with listeners via phone or social media </li>
    <li>Maintain the flow of the program by filling the 
     right time between one segment and another.</li>
    </ul>
  </VerticalTimelineElement>



    </VerticalTimeline>
</div>
</div>

{/* academy */}
<div id='academy'>
  <div className="wrapper">
    <h1>Academic History</h1>

    {/* kuliah */}

    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">STIKOM CKIPTA KARYA INFORMTIKA</h3>
    <h4 className="vertical-timeline-element-subtitle">STRATA 1</h4>
    <p>
      Teknik Informatika
    </p>
  </VerticalTimelineElement>

{/* smk */}
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">SMK MA'ARIF </h3>
    <h4 className="vertical-timeline-element-subtitle">MULTIMEDIA</h4>
    <p>
      Pondok Pesantren AL-BURHAN
    </p>
  </VerticalTimelineElement>

{/* smp */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014 - 2017"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">MTS AL-MUSADDADIYAH</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Pondok Pesantren AL-MUSADDADIYAH 
    </p>
  </VerticalTimelineElement>

  {/* sd */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2007 - 2014"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  >
    <h3 className="vertical-timeline-element-title">SDI NURUL IKHLAS</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Jakarta Utara
    </p>

    
  </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  </div>

{/* learn */}
{/* coreldraw */}
    {/* <div id='multimedia'> */}
    <div id='multimedia'>
  <div className="wrapper">
    <h1>Learn  Multimedia</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiCoreldraw />}
  > 
    <h3 className="vertical-timeline-element-title">Corel Draw</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Desain Logo</li>
    <li>Desain Banner </li>
    <li>Desain Spanduk</li>
    <li>Desain poster</li>
    <li>Desain Label</li>
    <li>Desain Baju</li>
    <li>Desain Undangan</li>
    <li>Desain Denah</li>
    </ul>
  </VerticalTimelineElement>

  {/* canva */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiCanva />}
  > 
    <h3 className="vertical-timeline-element-title">Canva</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
    <li>Desain Portfolio </li>
    <li>Desain Banner</li>
    <li>Desain Cover</li>
    </ul>
  </VerticalTimelineElement>
   
{/* photoshoop */}
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiAdobephotoshop />}
  > 
    <h3 className="vertical-timeline-element-title">Adobe Photoshoop</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Dasar Photoshoop</li>
    <li>Editing Photo </li>
    <li>Vector Effect</li>
    </ul>
  </VerticalTimelineElement>
    

{/* Flash */}
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  > 
    <h3 className="vertical-timeline-element-title">Adobe Flash</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Dasar Flash</li>
    
    </ul>
  </VerticalTimelineElement>
    

{/* premier */}
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiAdobepremierepro />}
  > 
    <h3 className="vertical-timeline-element-title">Adobe Premier</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Dasar Premier</li>
    </ul>
  </VerticalTimelineElement>
   
{/* iluslator */}
    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SiAdobeillustrator />}
  > 
    <h3 className="vertical-timeline-element-title">Adobe iluslator</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Dasar iluslator</li>
    </ul>
  </VerticalTimelineElement>
  
{/* Kine Master */}
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoSchoolOutline />}
  > 
    <h3 className="vertical-timeline-element-title">Kine Master</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Editing vidio </li>
   <li> Editing vidio Cinematik </li>
   <li> Editing vidio Flog</li>
   <li> Editing vidio Clip </li>
    </ul>
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  </div>


  {/* programer */}
  <div id='webdev'></div>
  <div className="wrapper">
    <h1>Learn Frontend</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaHtml5 />}
  > 
    <h3 className="vertical-timeline-element-title">Html</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
   <li> Dasar html</li>
   <li> Login Page</li>
   <li> Profile page</li>
   <li> Data Diri page</li>
    
    </ul>
  </VerticalTimelineElement>

  {/* css */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaCss3Alt />}
  > 
    <h3 className="vertical-timeline-element-title">Css</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
    <li>Dasar css</li>
    </ul>
  </VerticalTimelineElement>

  {/* Javascript */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DiJavascript />}
  > 
    <h3 className="vertical-timeline-element-title">Java Script</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
    <li>Course</li>
    <li>Dasar Js</li>
    </ul>
  </VerticalTimelineElement>

  {/* React js */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaReact />}
  > 
    <h3 className="vertical-timeline-element-title">React</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
    <li>Portofolio</li>
    </ul>
  </VerticalTimelineElement>
   </VerticalTimeline>

</div>


  <div id='webdev'></div>
  <div className="wrapper">
    <h1>IT SUPORT</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaComputer />}
  > 
    <h3 className="vertical-timeline-element-title">Hardware</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
        <li>assembling a computer</li>
        <li>Solve the problem Hardware</li>
    </ul>
  </VerticalTimelineElement>
</VerticalTimeline>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<RiComputerFill />}
  > 
    <h3 className="vertical-timeline-element-title">Software</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
        <li>Re-installation </li>
        <li>Software install </li>
        <li>solve the problem softhware </li>
    </ul>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>

<div id='webdev'></div>
  <div className="wrapper">
    <h1>Management</h1>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date=""
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaFile />}
  > 
    <h3 className="vertical-timeline-element-title">Management School</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <ul>
        <li>creating attendance</li>
        <li>create a file 
          Asesmen,Atp,data,promes
          prota,kktp,aksinyata,teaching module </li>
    </ul>
  </VerticalTimelineElement>
</VerticalTimeline>

   </div>


  <Contact />
  <IconExperience/>
  <Footer />
  <ScrollToTop />
    </>
  )
}

export default Experience
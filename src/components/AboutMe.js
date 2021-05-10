import PageHeader from "./PageHeader"
import './About.css';
import me from "./me.jpg"
const AboutMe = () =>{
    return (
        <div className='cards' id="aboutme">
             <div className='cards__container'>
        <div className='cards__wrapper'>
        <h1 className="text2">About Me</h1>
         
         <h2>Hello! I'm Emily</h2>
        <ul className='cards__items'>
        <li className='cards__item'>
            <text>
                Experienced software engineer with a passion for developing innovative programs that 
            expedite the efficiency and effectiveness of organizational success. Well-versed in
             technology and writing code to create systems that are reliable and user-friendly. 
            Skilled leader who has the proven ability to motivate, educate, and manage a team of
             professionals to build software programs and effectively track changes. Confident 
             communicator, strategic thinker, and innovative creator to develop software that is
              customized to meet a company’s organizational needs, highlight their core competencies,
               and further their success.
            </text>
            </li>
            <li className='cards__item'>
              <img className="cards__item__img" src={me} alt="me"></img>
        </li>
          </ul>
          </div>
          </div>
       </div>  
    )
}

export default AboutMe

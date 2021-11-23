import './Body.css';
import {useState} from 'react';
import Popup from './Popup';
import yarden from '../../asset/yarden.jpeg';

const Body = () => { 
    const [seen, setSeen] = useState(false);
    const togglePop = () => {
        setSeen(!seen);
    };

    return (
        <div className="main">
            <img src={yarden}
                alt="student"
                className="student"></img>
            <h2>Hello.</h2>
            <div className="main-center">
                <p>I am a Web Developer.And I ❤️ to code</p>
                <p className="points">
                    .......
                </p>
            </div>
            <h2>My Skills.</h2>
            <img src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" width="250" height="150" alt="computer" className="computerone"></img>
            <div className="design-div">
                <h3>Design & development</h3>
                <p>
                    ⚡ Crazy Full Stack Developer who wants to explore every tech stack.
                </p>
                <p>
                    ⚡ Integration of third party services such as Bootstrap.
                </p>
                <p>
                    ⚡ Develop highly interactive Front end / User Interfaces for web and  <br />  mobile applications.
                </p>
            </div>
            <img src="https://media0.giphy.com/media/ukMiDlCmdv2og/giphy.gif" width="200" height="150" alt="computer" className="computertwo"></img>
            <div className="debbugging-div">
                <h3>Experience</h3>
                <div class="debug-content">
                    <p>
                        ⚡ Building engaging projects, fun challenges and personalized practice.</p>
                    <p>
                        ⚡ Won 3rd place in a 26 hour Hackathon that was hosted by Splitit.</p>
                    <p>
                        ⚡ Ability to collaborate with colleagues at all levels, from senior management to developers.

                    </p>
                </div>
            </div>
            <div>
                <p className="points">
                    .......
                </p>
                <h2>Get In Touch.</h2>
                <div className="main-center">
                    <h3>If you love coding as much as I do.</h3>
                    <p>
                        ☎️ Discuss a project or just want to say hi? My Inbox is open for all.</p>
                        <p>
                        ☎️ My phone number: 052-3383837
                    </p>
                </div>
                <button className="button"
                    onClick={togglePop}>
                    CONTACT ME
                </button>
                {
                seen ? <Popup toggle={togglePop}></Popup> : console.log('not seen!')
            } </div>

        </div>
    )
}


export default Body;

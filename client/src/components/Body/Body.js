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
                    ⚡ Develop highly interactive Front end / User Interfaces for web applications.
                </p>
            </div>
            <img src="https://media0.giphy.com/media/ukMiDlCmdv2og/giphy.gif" width="200" height="150" alt="computer" className="computertwo"></img>
            <div className="debbugging-div">
                <h3>About me</h3>
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
            <img src="https://i.giphy.com/media/ZRiLoLix9pnW7cVB5y/giphy.webp" width="250" height="450" alt="computer" className="computerone fox-gif"></img>
            <div className="design-div">
                <h3>Projects</h3>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/Orit-Bezalel-Real-Estate">Real Estate Landing Page</a> <br /> <p><strong>Languages:</strong> HTML, CSS</p>
                </p>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/Complete-Input">Complete Input</a><br /> <p> <strong>Languages:</strong> HTML, CSS, JavaScript</p>
                </p>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/Splitit-Hackathon">Payment Page- Splitit Hackathon</a> <br /> <p><strong>Languages:</strong> HTML, CSS, JavaScript, React.js</p>
                </p>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/My-Portfolio-React.js-">My Portfolio</a> <br /> <p><strong>Languages:</strong> HTML, CSS, React.js, Node.js</p>
                </p>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/listings-Challange-React.js">Job Listing</a> <br /> <p><strong>Languages:</strong> HTML, CSS, JavaScript, React.js, Node.js</p>
                </p>
                <p>
                    ⚡ <a href="https://github.com/yardentzaraf/EVE-ASP.NET-Project">EVE- Clothes Store</a> <br /><p> <strong>Languages:</strong> HTML, CSS, jQuary, C#, ASP.NET</p>
                </p>
            </div>
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

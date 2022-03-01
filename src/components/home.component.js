import React from 'react';
import './home.component.css';
import resume from '../utils/charles-nwoye-resume.pdf';

const Home = () => {
    return(
        <div>
            <section class="home" id="home">
                <div class="prof abc">
                    <h1 class="name">Charles <span className='nwoye'>Nwoye</span></h1>
                    <p>A <span className='full-stack'>Full-Stack Web Developer</span> passionate about creating 
                    interactive applications and experiences on the web</p>
                    <span class="resume">
                        <button><a href={resume} download>
                            <strong>Resume</strong>
                        </a></button>
                    </span>
                </div>
                <div>
                    <img class="my_pic abc" src={require("../utils/img/my_photo.jpg")} alt=""/>
                </div>
            </section>
        </div>
    );
};

export default Home;
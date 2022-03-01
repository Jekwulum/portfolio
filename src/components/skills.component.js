import React from 'react';
import './skills.component.css';

const Skills = () => {
    return(
        <div>
            <section className="skills" id="skills">
                <h1>Look what I can do</h1>
                <div className="skillsDiv">
                    <div className="div1">
                        <ul className="skills_img">
                            <li className="card">
                                <img src={require("../utils/img/python-transparent-background.png")} alt=""/>
                                <p className="skillsText">Python</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/sql_image.png")} alt=""/>
                                <p className="skillsText">SQL</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/mongodb.jpg")} alt=""/>
                                <p className="skillsText">MongoDb</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/express.png")} alt=""/>
                                <p className="skillsText">ExpressJs</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/react.png")} alt=""/>
                                <p className="skillsText">ReactJs</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/node.png")} alt=""/>
                                <p className="skillsText">NodeJs</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/html.png")} alt=""/>
                                <p className="skillsText">HTML</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/css.png")} alt=""/>
                                <p className="skillsText">CSS</p>
                            </li>
                            <li className="card">
                                <img src={require("../utils/img/flask.png")} alt=""/>
                                <p className="skillsText">Flask</p>
                            </li>
                        </ul>
                    </div>
                    <div className="div2">
                        <p style={{color: "white"}}>
                            I enjoy writing API's, designing websites and databases, 
                            solving problems with code and learning new things.
                        </p><br />
                        <p style={{color: "white"}}>
                            I have been a programmer for a while and I know various advanced data structures
                            and algorithms which includes Singly - and circular-singly - LinkedLists, 
                            Doubly - and circular-doubly - LinkedLists, Stacks, Queues.
                        </p><br />
                        <p style={{color: "white"}}>With my team spirit, I can work effectively in a team as a programmer</p><br />
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis quae consectetur illo voluptates voluptatum quia praesentium aliquid similique adipisci. Officiis, blanditiis. Maxime animi itaque sed aperiam, iste delectus totam magni iusto natus
                            voluptatum aut, doloribus corrupti, aliquid ipsum eum! Itaque quisquam deserunt repellendus culpa nisi asperiores optio veritatis minima dignissimos? Adipisci odio deserunt repudiandae facere quisquam quod earum ipsa magni ut fuga
                            itaque ducimus rerum dicta ullam veniam iste totam cumque quidem quis neque aut, quia repellendus in. Vitae debitis voluptatem architecto similique, a temporibus eligendi exercitationem dolor veritatis? Exercitationem error repellendus
                            incidunt nobis eos ducimus repudiandae adipisci dolorem.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
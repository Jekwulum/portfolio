import React from 'react';
import './home.component.css';

const Home = () => {
    return(
        <div>
            <section class="home" id="home">
                <div class="prof abc">
                    <h1 class="name">Nwoye Charles</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati non, explicabo cum expedita blanditiis corrupti iusto quos eum necessitatibus dignissimos.</p>
                    <span class="hire">
                        <button><strong>hire me</strong></button>
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
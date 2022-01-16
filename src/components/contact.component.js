import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import './contact.component.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
                            'service_w2izfdr', 
                            'template_kea2fgf', 
                            form.current, 
                            'user_jthe0ttJ42tdvyE10mYUX')
        .then((result) => {
            console.log(result.text);
            alert("SUCCESS!");
        }, (error)=> {
            console.log(error.text);
            alert("FAILED...", error);
        });
        e.target.reset();
    };

    return(
        <div>
            <section className="contact_me" id="contact_me">
                <div className="contact">
                    <h1>Leave me a message <i className="fa fa-envelope " style={{color: "rgb(89, 208, 89)"}}></i></h1>
                    <form ref={form} onSubmit={sendEmail} className="myForm ">
                        <input className="input-field " type="text " placeholder="Name " name='from_name'/><br/>

                        <input className="input-field " type="text " placeholder="Subject " name='subject'/><br/>

                        <input className="input-field " type="email " placeholder="Email " name='from_email'/><br/>

                        <textarea className="text-field " name="message" placeholder="Leave your message here " id=" " cols="30 " rows="10 "></textarea><br/>

                        <button type='submit' className="send_btn "><strong>Send</strong></button>
                    </form>
                    <div className="myLinks ">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/chukwujekwu-charles-nwoye-82677a19a/ "><i className="fa fa-linkedin fa-3x " style={{color: "rgb(89, 208, 89)"}}></i></a>
                            </li>
                            <li>
                                <a href="# "><i className="fa fa-google fa-3x " style={{color: "rgb(89, 208, 89)"}}></i></a>
                            </li>
                            <li>
                                <a href="# "><i className="fa fa-twitter fa-3x " style={{color: "rgb(89, 208, 89)"}}></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Jekwulum "><i className="fa fa-github fa-3x " style={{color: "rgb(89, 208, 89)"}}></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
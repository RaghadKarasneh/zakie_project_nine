import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import '../css/main.css';
import { UilPhone } from '@iconscout/react-unicons';
import { UilEnvelope } from '@iconscout/react-unicons';
import { UilMap } from '@iconscout/react-unicons';
import { UilShareAlt } from '@iconscout/react-unicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
init('user_id');

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    if (name && email && message) {
        const serviceId = 'service_2qdh9jb';
        const templateId = 'template_iw0edxr';
        const userId = 'FygekewmDWaC0As1M';
        const templateParams = {
            name,
            email,
            subject,
            message
        };
        e.preventDefault();
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));
        setName('');
        setEmail('');
        document.getElementById("alert").style.display = "block";
        e.target.reset();
        const isValidEmail = email => {
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(String(email).toLowerCase());};
        setSubject('');
        setMessage('');
        setEmailSent(true);
    } else {
        <div className="alert">
        <h4 className="text mb-0">{alert}</h4>
        <h4 className="text mb-0">pleaese fill all the fields</h4>
      </div>
    }
}
  return (
<>
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact mt-5">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Contact</h2>
                    <p>
                      Need Help? <span>Contact Us</span>
                    </p>
                  </div>
                  <div className="mb-3">
                    <iframe
                      style={{ border: 0, width: "100%", height: 350 }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13538.235891285094!2d35.889223332120636!3d31.972859349554362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca06b4f0fa949%3A0x767658b1f5642bb5!2sAsh%20Shumaysani%2C%20Amman!5e0!3m2!1sen!2sjo!4v1659106202567!5m2!1sen!2sjo"
                      frameBorder={0}
                      allowFullScreen=""
                    />

             {/* <iframe height={400}width={1100}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27764.911935385284!2d35.01916159171958!3d29.556733703948556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1657047509224!5m2!1sen!2sjo"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
             tabIndex={0} /> */}
                  </div>
                  {/* End Google Maps */}
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilMap className="icon" />
                        <div>
                          <h3>Our Address</h3>
                          <p>Ash Shumaysani</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item d-flex align-items-center">
                        <UilEnvelope className="icon" />
                        <div>
                          <h3>Email Us</h3>
                          <p>Zakie@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilPhone className="icon" />
                        <div>
                          <h3>Call Us</h3>
                          <p>+1 5589 55488 55</p>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div className="col-md-6">
                      <div className="info-item  d-flex align-items-center">
                        <UilShareAlt className="icon" />
                        <div>
                          <h3>Opening Hours</h3>
                          <div>
                            <strong>Mon-Sat:</strong> 11AM - 23PM;
                            <strong>Sunday:</strong> Closed
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Info Item */}
                  </div>


                  <form role="form" className="php-email-form p-3 p-md-4">
                    <div className="row">
                      <div className="col-xl-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div className="col-xl-6 form-group">
                        <input type="email" pattern="[^@\s]+@[^@\s]+" className="form-control" name="email" id="email" placeholder="Your Email" required value={email} onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={subject} onChange={e => setSubject(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required="" defaultValue={""} value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <div className="text-center">
                      <button onClick={submit}>Send Message</button>
                      <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                    </div>
                  </form>
                  {/*End Contact Form */}
                </div>
              </section>
              {/* End Contact Section */}
</>
);
};
export default Contact;

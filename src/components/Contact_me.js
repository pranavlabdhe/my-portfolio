import React ,{ useState } from 'react'
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

const Contact_me = () => {
    const [state, setState] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const [result, setResult] = useState(null);
  
    const sendEmail = event => {
      event.preventDefault();
      axios
        .post('/send', { ...state })
        .then(response => {
          setResult(response.data);
          setState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        })
        .catch(() => {
          setResult({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        });
    };
  
    const onInputChange = event => {
      const { name, value } = event.target;
  
      setState({
        ...state,
        [name]: value
      });
    };
    return (
        <>
        <section className="contact_me" id="contactme">
        <div className="contact_text">
             <h1>Enquiry</h1>
             <p>Contact me</p> 
</div>
    <form action="https://formsubmit.co/plabdhe224@gmail.com" method="post">
            <div class="field">
                <label for="name" class="label is-size-4 has-text-weight-light">
                    Name:
                </label>
                <input type="text" name="name" id="name" class="input" placeholder="Name"autofocus required/>
            </div>
            <div class="field">
                <label for="email" class="label is-size-4 has-text-weight-light">
                    Email:
                </label>
                <input type="email" name="email" id="email" class="input"placeholder="Email" required/>
            </div>
            <input type="hidden" name="_next" value="https://thankyoufromweb-guy.netlify.app/"></input>
            <div class="field">
                <label for="message" class="label is-size-4 has-text-weight-light">
                    Message:
                </label>
                <textarea name="message" id="message" rows="5" placeholder="Message" class="textarea is-large" required></textarea>
            </div>
            <button type="submit" class="submit_button is-success is-size-5 mx-auto mt-2">Submit</button>
        </form>
       
             </section>
        </>
    )
}
export default Contact_me;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button } from 'react-bootstrap';

// const Contact_me = () => {
//   const [state, setState] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [result, setResult] = useState(null);

//   const sendEmail = event => {
//     event.preventDefault();
//     axios
//       .post('/send', { ...state })
//       .then(response => {
//         setResult(response.data);
//         setState({
//           name: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       })
//       .catch(() => {
//         setResult({
//           success: false,
//           message: 'Something went wrong. Try again later'
//         });
//       });
//   };

//   const onInputChange = event => {
//     const { name, value } = event.target;

//     setState({
//       ...state,
//       [name]: value
//     });
//   };

//   return (
//     <div>
//       {result && (
//         <p className={`${result.success ? 'success' : 'error'}`}>
//           {result.message}
//         </p>
//       )}
//       <form onSubmit={sendEmail}>
//         <Form.Group controlId="name">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={state.name}
//             placeholder="Enter your full name"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="text"
//             name="email"
//             value={state.email}
//             placeholder="Enter your email"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="subject">
//           <Form.Label>Subject</Form.Label>
//           <Form.Control
//             type="text"
//             name="subject"
//             value={state.subject}
//             placeholder="Enter subject"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="subject">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="message"
//             value={state.message}
//             rows="3"
//             placeholder="Enter your message"
//             onChange={onInputChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };
// export default Contact_me;
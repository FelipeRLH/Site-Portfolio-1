// REACT
import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';

// COMPONENTS
import Form from '../Components/Form';
import Footer from '../Components/Footer';

// CSS
import "./Contact.css"

function Contact() {
  return (
    <div id='contato'>
      <div className='container-contact'>
        <div className='title-contact'>
          <h2>Contato</h2>
        </div>

        <div className='container-info-form'>
          <div className='infos-contact'>
            <div><FaMobileAlt className='icon-contact' /> (61) 99999-9999</div>
            <div><FaRegEnvelope className='icon-contact' /> loremipsum@gmail.com</div>
          </div>

          <div className='form-contact'>
            <div className='title-contact-area'>
              <span className='span-title'>Con</span>tate-me
            </div>
            <Form />
          </div>
        </div>
            <Footer />
      </div>
    </div>
  )
}

export default Contact
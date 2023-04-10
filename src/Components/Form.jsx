import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos')
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_lprcmuk", "template_fhjfqqo", templateParams, "Dr1eXn3zbZRPzxfjs")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')
                alert('Email enviado')
            }, (err) => {
                console.log("ERRO: ", err)
                alert("Email não enviado")
            })
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <label>
                    <input
                        className='textimput'
                        type="text"
                        placeholder='Digite seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        className='emailimput'
                        type="email"
                        placeholder='Digite seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                <textarea
                    className='textarea'
                    placeholder='Digitar mensagem...'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <input
                    className='btn btn-form'
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}

export default Form;
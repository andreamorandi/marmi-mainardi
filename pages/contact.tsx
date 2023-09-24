import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React, { MutableRefObject, useRef, useState, useEffect, useCallback } from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { FiHome } from 'react-icons/fi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [values, setValues] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [buttonValue, setButtonValue] = useState('Invia');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [status, setStatus] = useState('READY');

  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const checkErrors = useCallback((): boolean => {
    let formErrors: boolean = false
    if (!values.from_name.split(" ").join("")) {
      formErrors = true
      setNameError(true)
    } else {
      setNameError(false)
    }

    if (
      !values.from_email
      .split(" ").join("")
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formErrors = true
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    
    if (!values.message.split(" ").join("")) {
      formErrors = true
      setMessageError(true)
    } else {
      setMessageError(false)
    } 

    if (!formErrors && status === 'FORM_ERROR') {
      setStatus('READY')
      setButtonValue('Invia')
    } else if (formErrors) {
      setStatus('FORM_ERROR')
    }

    return formErrors
  }, [values.from_name, values.from_email, values.message, setNameError, setEmailError, setMessageError, setStatus, status])

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!checkErrors() && status === 'READY') {
      setStatus('SENDING');
      emailjs.sendForm('service_bsvjocj', 'template_0p2rp18', e.target, 'AhgP_fdNiN61AQMYF')
        .then((result) => {
            console.log(result.text);
            setStatus('SUCCESS');
        }, (error) => {
            setStatus('ERROR');
            console.log(error.text);
        });
    }
  };

  useEffect(() => {
    if (status === 'SENDING') {
      setButtonValue('Invio in corso ...')
    } else if (status === 'SUCCESS') {
        setValues({
          from_name: '',
          from_email: '',
          message: ''
        });
        setButtonValue('Messaggio inviato')
        setStatus('READY');
        setTimeout(() => {
          setButtonValue('Invia')
        }, 10000);
    } else if (status === 'ERROR') {
      setStatus('READY');
      setButtonValue('Ritenta invio');
    }
  }, [status]);

  const handleChange = (e: any) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))

    if (status === 'READY') {
      setButtonValue('Invia')
    }
  }

  useEffect(() => {
    if (status === 'FORM_ERROR') checkErrors()
  }, [values.from_name, values.from_email, values.message, checkErrors, status])

  return (
    <>

      <PageTemplate title='Contatti'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2 my-20 sm:my-28">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title="Contattaci per un servizio personalizzato."
                badge=""
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label="Telefono"
                value="3663300673 (Matteo)"
                value2="3391106076 (Gianluca)"
                icon={<FiPhoneCall />}
              />
              <IconListItem
                label="Email"
                value="mmainardi.info@gmail.com"
                value2=""
                icon={<FiMail />}
              />
              <IconListItem
                label="Laboratorio"
                value="Bettenesco (CR)<br>Via Persico 9"
                value2=""
                icon={<FiHome />}
              />
              <IconListItem
                label="Ufficio"
                value="Corte de' Cortesi con Cignone (CR)<br>Vicolo San Francesco d'Assisi 11"
                value2=""
                icon={<FiHome />}
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <form ref={form} onSubmit={sendEmail} >
              <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-11/12">
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Nome" name="from_name" value={values.from_name} onChange={handleChange} error={nameError} />
                  <InputGroup label="Email" name="from_email" value={values.from_email} onChange={handleChange} error={emailError} />
                </div>
                <TextAreaGroup label="Messaggio" name="message" value={values.message} onChange={handleChange} error={messageError} />
                <Button value={buttonValue} />
              </div>
              </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact

import React, { useContext, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from './FormPage.module.scss'
import buttonStyles from '../../components/buttons-styles/Buttons.module.scss'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const FormPage = () => {
   const ctx = useContext(AppContext)
   const [isNameValidate, setIsNameValidate] = useState('')
   const [isEmailValidate, setIsEmailValidate] = useState('')
   const [isPhoneValidate, setIsPhoneValidate] = useState('')

   const handleFormDataChange = (e) => {
      ctx.setFormData(e.target)
   }

   const nameValidate = () => {
      if (ctx.formData.name.length > 0) setIsNameValidate(true)
      else setIsNameValidate(false)
   }

   const emailValidate = () => {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      if (regex.test(ctx.formData.email)) setIsEmailValidate(true)
      else setIsEmailValidate(false)
   }

   const phoneValidate = () => {
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
      if (regex.test(ctx.formData.phone)) setIsPhoneValidate(true)
      else setIsPhoneValidate(false)
   }

   const handleSubmit = () => {
      nameValidate()
      emailValidate()
      phoneValidate()
   }

   return (
      <>
         <section className={styles['form-page']}>
            <Header heading='Personal info' subheading='Please provide your name, email address and phone number.' />
            <form className={styles.form}>
               <div className={styles['form-name']}>
                  <label className={styles['form-label']} htmlFor='name'>
                     Name
                     {isNameValidate === false && <span className={styles['form-page-input--invalid__message']}>Invalid name</span>}
                  </label>
                  <input
                     className={
                        isNameValidate === false
                           ? `${styles['form-page-input--invalid']} ${styles['form-page-input']}`
                           : styles['form-page-input']
                     }
                     name='name'
                     id='name'
                     type='text'
                     value={ctx.formData.name}
                     onChange={handleFormDataChange}
                     onBlur={nameValidate}
                  />
               </div>
               <div className={styles['form-email']}>
                  <label className={styles['form-label']} htmlFor='email'>
                     Email Address
                     {isEmailValidate === false && (
                        <span className={styles['form-page-input--invalid__message']}>Invalid email adrress</span>
                     )}
                  </label>
                  <input
                     className={
                        isEmailValidate === false
                           ? `${styles['form-page-input--invalid']} ${styles['form-page-input']}`
                           : styles['form-page-input']
                     }
                     id='email'
                     name='email'
                     type='text'
                     value={ctx.formData.email}
                     onChange={handleFormDataChange}
                     onBlur={emailValidate}
                  />
               </div>
               <div className={styles['form-phone']}>
                  <label className={styles['form-label']} htmlFor='phone'>
                     Phone Number
                     {isPhoneValidate === false && (
                        <span className={styles['form-page-input--invalid__message']}>Invalid phone number</span>
                     )}
                  </label>
                  <input
                     className={
                        isPhoneValidate === false
                           ? `${styles['form-page-input--invalid']} ${styles['form-page-input']}`
                           : styles['form-page-input']
                     }
                     id='phone'
                     name='phone'
                     type='text'
                     value={ctx.formData.phone}
                     onChange={handleFormDataChange}
                     onBlur={phoneValidate}
                  />
               </div>
            </form>
         </section>
         <div className={buttonStyles.buttons}>
            <Link to={isNameValidate && isEmailValidate && isPhoneValidate ? '/plan-page' : '/'}>
               <button onClick={handleSubmit} className={buttonStyles['button-next']}>
                  Next Step
               </button>
            </Link>
         </div>
      </>
   )
}

export default FormPage

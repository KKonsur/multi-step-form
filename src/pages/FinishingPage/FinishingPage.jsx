import React from 'react'
import img from '../../assets/images/icon-thank-you.svg'
import styles from './FinishingPage.module.scss'

const FinishingPage = () => {
   return (
      <section className={styles['finishing-page']}>
         <img className={styles['finishing-page__img']} src={img} alt='' />
         <h1>Thank you!</h1>
         <p>
            Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to
            email us support@loremgaming.com.
         </p>
      </section>
   )
}

export default FinishingPage

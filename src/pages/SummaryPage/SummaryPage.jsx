import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import buttonStyles from '../../components/buttons-styles/Buttons.module.scss'
import styles from './SummaryPage.module.scss'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

const SummaryPage = () => {
   const ctx = useContext(AppContext)

   return (
      <>
         <section className={styles['summary-page']}>
            <Header heading='Finishing up' subheading='Double-check everything looks OK before confirming.' />
            <div className={styles['summary-page__price-summary']}>
               <div className={styles['summary-page__plan-info']}>
                  <div className={styles['summary-page__plan-info-wrapper']}>
                     <span className={styles['summary-page__plan-name']}>
                        {ctx.plan.name} {ctx.plan.type === 'Monthly' ? '(Monthly)' : '(Yearly)'}
                     </span>
                     <Link to={'/plan-page'} className='summary-page__change-link'>
                        Change
                     </Link>
                  </div>
                  <span className={styles['summary-page__plan-price']}>
                     ${ctx.plan.price}/{ctx.plan.type === 'Monthly' ? 'mo' : 'yr'}
                  </span>
               </div>
               {ctx.addons.length > 0 && (
                  <ul className={styles['summary-page__addons-list']}>
                     {ctx.addons.map((addon) => (
                        <li key={addon.addonName} className={styles['summary-page__addon-item']}>
                           <span key={addon.addonName}>{addon.addonName}</span>
                           <span className={styles['summary-page__addon-price']}>
                              {ctx.plan.type === 'Monthly' ? `+$${addon.price}/mo` : `$+${addon.price}/yr`}
                           </span>
                        </li>
                     ))}
                  </ul>
               )}
            </div>
            <div className={styles['summary-page__total-price-container']}>
               <span>Total price:</span>
               <span className={styles['summary-page__total-price']}>
                  ${ctx.totalPrice}/{ctx.plan.type === 'Monthly' ? 'mo' : 'yr'}
               </span>
            </div>
         </section>
         <div className={buttonStyles['buttons--two-buttons']}>
            <Link to='/addons-page'>
               <button className={buttonStyles['button-back']}>Go back</button>
            </Link>
            <Link to='/finishing-page'>
               <button className={buttonStyles['button-confirm']}>Confirm</button>
            </Link>
         </div>
      </>
   )
}

export default SummaryPage

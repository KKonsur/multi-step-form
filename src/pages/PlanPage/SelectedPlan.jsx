import React from 'react'
import styles from './SelectedPlan.module.scss'

const SelectedPlan = ({ name, img, price, planType, onHandleClickPlan, index, isPlanClicked }) => {
   const planPrice = planType === 'Monthly' ? `$${price}/mo` : `$${price}/yr`
   const activePlanStyle =
      isPlanClicked === index ? `${styles['selected-plan']} ${styles['selected-plan--active']}` : styles['selected-plan']
      
   return (
      <div className={activePlanStyle} onClick={() => onHandleClickPlan(index)}>
         <img src={img} alt='' />
         <div className={styles['plan-info']}>
            <p className={styles['plan-name']}>{name}</p>
            <span className={styles['plan-price']}>{planPrice}</span>
            {planType === 'Yearly' && <p className={styles['plan-promo']}>Two months free</p>}
         </div>
      </div>
   )
}

export default SelectedPlan

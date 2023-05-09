import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ProgressBar.module.scss'
import ProgressStep from './ProgressStep'

const ProgressBar = () => {
   const location = useLocation()

   return (
      <div className={styles['progress-bar']}>
         <div className={styles['progress-steps']}>
            <ProgressStep
               number='1'
               name='Your info'
               activeStepStyle={location.pathname === '/' ? `${styles.circle} ${styles['circle--active']}` : styles.circle}
            />
            <ProgressStep
               number='2'
               name='Select Plan'
               activeStepStyle={location.pathname === '/plan-page' ? `${styles.circle} ${styles['circle--active']}` : styles.circle}
            />
            <ProgressStep
               number='3'
               name='Add-ons'
               activeStepStyle={location.pathname === '/addons-page' ? `${styles.circle} ${styles['circle--active']}` : styles.circle}
            />
            <ProgressStep
               number='4'
               name='Summary'
               activeStepStyle={
                  location.pathname === '/summary-page' || location.pathname === '/finishing-page'
                     ? `${styles.circle} ${styles['circle--active']}`
                     : styles.circle
               }
            />
         </div>
      </div>
   )
}

export default ProgressBar

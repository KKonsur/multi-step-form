import { React, useState, useEffect } from 'react'
import styles from './ProgressBar.module.scss'

const ProgressStep = ({ number, name, activeStepStyle }) => {
   const [isVisible, setIsVisible] = useState(window.innerWidth >= 720)

   useEffect(() => {
      window.addEventListener('resize', () => {
         setIsVisible(window.innerWidth >= 720)
      })
   }, [])

   return (
      <div className={styles['progress-step']}>
         <div className={styles['circle-container']}>
            <div className={activeStepStyle}>{number}</div>
         </div>
         {isVisible && (
            <div className={styles['progress-info']}>
               <span className={styles['step-number']}>Step {number}</span> <br />
               <span className={styles['step-name']}>{name}</span>
            </div>
         )}
      </div>
   )
}

export default ProgressStep

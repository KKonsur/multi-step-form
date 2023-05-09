import React, { useContext } from 'react'
import styles from './Addon.module.scss'
import AppContext from '../../context/AppContext'

const Addon = ({ addonName, addonDescription, price, onChange, checked }) => {
   const ctx = useContext(AppContext)
   const handleChange = (e) => {
      const isChecked = e.target.checked
      onChange(addonName, price, isChecked)
   }

   return (
      <label htmlFor={addonName} className={checked ? `${styles.addon} ${styles['addon--checked']}` : styles.addon}>
         <div className={styles['addon__content']}>
            <input
               className={styles['addon__checkbox']}
               type='checkbox'
               id={addonName}
               value={addonName}
               onChange={handleChange}
               checked={checked}
            />
            <div className={styles['addon__text']}>
               <span className={styles['addon__name']}>{addonName}</span>
               <p className={styles['addon__description']}>{addonDescription}</p>
            </div>
            <p className={styles['addon__price']}>{ctx.planType === 'Monthly' ? `+$${price}/mo` : `+$${price}/yr`}</p>
         </div>
      </label>
   )
}

export default Addon

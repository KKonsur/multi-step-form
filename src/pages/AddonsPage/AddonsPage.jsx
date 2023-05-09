import React, { useContext, useState } from 'react'
import buttonStyles from '../../components/buttons-styles/Buttons.module.scss'
import { Link } from 'react-router-dom'
import styles from './AddonsPage.module.scss'
import Header from '../../components/Header/Header'
import Addon from './Addon'
import AppContext from '../../context/AppContext'

const AddonsPage = () => {
   const [items, setItems] = useState([])
   const ctx = useContext(AppContext)

   const addonsData = [
      {
         addonName: 'Online service',
         addonDescription: 'Acces to multiplayer games',
         addonMonthlyPrice: 1,
         addonYearlyPrice: 10,
         checked: items.some((item) => item.addonName === 'Online service'),
      },
      {
         addonName: 'Larger storage',
         addonDescription: 'Extra 1TB cloud save',
         addonMonthlyPrice: 2,
         addonYearlyPrice: 20,
         checked: items.some((item) => item.addonName === 'Larger storage'),
      },
      {
         addonName: 'Customizable profile',
         addonDescription: 'Custom theme on your profile',
         addonMonthlyPrice: 2,
         addonYearlyPrice: 20,
         checked: items.some((item) => item.addonName === 'Customizable profile'),
      },
   ]

   const handleCheckboxChange = (addonName, price, isChecked) => {
      if (isChecked) {
         setItems([...items, { addonName, price }])
      } else {
         setItems(items.filter((item) => item.addonName !== addonName))
      }
   }

   const setAddonsHandler = () => {
      ctx.setAddons(items)
   }

   return (
      <>
         <section className={styles['addons-page']}>
            <Header heading='Pick add-ons' subheading='Add-ons help enhalance your gaming experience' />
            <form className={styles['addons-form']}>
               {addonsData.map(({ addonName, addonDescription, addonMonthlyPrice, addonYearlyPrice, checked }) => (
                  <Addon
                     key={addonName}
                     addonName={addonName}
                     addonDescription={addonDescription}
                     price={ctx.plan.type === 'Monthly' ? addonMonthlyPrice : addonYearlyPrice}
                     onChange={handleCheckboxChange}
                     checked={checked}
                  />
               ))}
            </form>
         </section>
         <div className={buttonStyles['buttons--two-buttons']}>
            <Link to='/plan-page'>
               <button className={buttonStyles['button-back']}>Go back</button>
            </Link>
            <Link to='/summary-page'>
               <button onClick={setAddonsHandler} className={buttonStyles['button-next']}>
                  Next Step
               </button>
            </Link>
         </div>
      </>
   )
}

export default AddonsPage

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import styles from './PlanPage.module.scss'
import arcadeImg from '../../assets/images/icon-arcade.svg'
import advancedImg from '../../assets/images/icon-advanced.svg'
import proImg from '../../assets/images/icon-pro.svg'
import SelectedPlan from './SelectedPlan'
import buttonStyles from '../../components/buttons-styles/Buttons.module.scss'
import AppContext from '../../context/AppContext'

const PlanPage = () => {
   const ctx = useContext(AppContext)
   const [planType, setPlanType] = useState('Monthly')
   const [planPrice, setPlanPrice] = useState({ arcadePlanPrice: 9, advancedPlanPrice: 12, proPlanPrice: 15 })
   const [chosenPlan, setChosenPlan] = useState('')
   const [isPlanClicked, setIsPlanClicked] = useState('')

   const planData = [
      { name: 'Arcade', type: planType, img: arcadeImg, price: planPrice.arcadePlanPrice },
      { name: 'Advanced', type: planType, img: advancedImg, price: planPrice.advancedPlanPrice },
      { name: 'Pro', type: planType, img: proImg, price: planPrice.proPlanPrice },
   ]
   

   const handleChangePlan = () => {
      if (planType === 'Monthly') {
         setPlanType('Yearly')
         setPlanPrice({ arcadePlanPrice: 90, advancedPlanPrice: 120, proPlanPrice: 150 })
      } else {
         setPlanType('Monthly')
         setPlanPrice({ arcadePlanPrice: 9, advancedPlanPrice: 12, proPlanPrice: 15 })
      }
      setChosenPlan('')
      setIsPlanClicked('')
   }

   const handleClickPlan = (index) => {
      setChosenPlan(planData[index])
      setIsPlanClicked(index)
   }

   const handleSubmit = () => {
      ctx.setPlan(chosenPlan)
   }

   return (
      <>
         <section className={styles['plan-page']}>
            <Header heading='Chosse your plan' subheading='You have the option of monthly or yearly billing' />
            <div className={styles.plans}>
               {planData.map((planData, index) => (
                  <SelectedPlan
                     key={planData.name}
                     name={planData.name}
                     img={planData.img}
                     price={planData.price}
                     planType={planType}
                     index={index}
                     onHandleClickPlan={handleClickPlan}
                     isPlanClicked={isPlanClicked}
                  />
               ))}
            </div>
         </section>
         <div className={styles['plans-switch']}>
            <span className={planType === 'Monthly' ? `${styles['plan-type']} ${styles['plan-type--active']}` : styles['plan-type']}>
               Monthly
            </span>
            <label className={styles['switch']}>
               <input onChange={handleChangePlan} type='checkbox' />
               <span className={styles['slider']}></span>
            </label>
            <span className={planType === 'Yearly' ? `${styles['plan-type']} ${styles['plan-type--active']}` : styles['plan-type']}>
               Yearly
            </span>
         </div>
         <div className={buttonStyles['buttons--two-buttons']}>
            <Link to='/'>
               <button className={buttonStyles['button-back']}>Go back</button>
            </Link>
            <Link to={isPlanClicked !== '' ? '/addons-page' : '/plan-page'}>
               <button onClick={handleSubmit} className={buttonStyles['button-next']}>
                  Next Step
               </button>
            </Link>
         </div>
      </>
   )
}

export default PlanPage

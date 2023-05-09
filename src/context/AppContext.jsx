import { useState, useEffect } from 'react'
import { createContext } from 'react'

const AppContext = createContext({
   formData: {},
   plan: {},
   addons: {},
   totalPrice: 0,
   setFormData: () => {},
   setPlan: () => {},
   setTotalPrice: () => {},
   setAddons: () => {},
})

export const AppContextProvider = (props) => {
   const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
   const [totalPrice, setTotalPrice] = useState(0)
   const [plan, setPlan] = useState({})
   const [addons, setAddons] = useState([{}])

   useEffect(() => {
      setTotalPrice(plan.price + addons.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0))
   }, [addons, plan.price])

   const setFormDataHandler = (data) => {
      setFormData((prevState) => ({ ...prevState, [data.name]: data.value }))
   }

   const setPlanHandler = (data) => {
      setPlan(data)
   }

   const setAddonsHandler = (data) => {
      setAddons(data)
   }
   return (
      <AppContext.Provider
         value={{
            formData,
            plan,
            totalPrice,
            addons,
            setFormData: setFormDataHandler,
            setPlan: setPlanHandler,
            setTotalPrice,
            setAddons: setAddonsHandler,
         }}>
         {props.children}
      </AppContext.Provider>
   )
}

export default AppContext

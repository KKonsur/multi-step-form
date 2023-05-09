import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPage from '../pages/FormPage/FormPage'
import PlanPage from '../pages/PlanPage/PlanPage'
import AddonsPage from '../pages/AddonsPage/AddonsPage'
import SummaryPage from '../pages/SummaryPage/SummaryPage'
import FinishingPage from '../pages/FinishingPage/FinishingPage'

const Pages = () => {
   return (
      <Routes>
         <Route path='/' element={<FormPage />} />
         <Route path='/plan-page' element={<PlanPage />} />
         <Route path='/addons-page' element={<AddonsPage />} />
         <Route path='/summary-page' element={<SummaryPage />} />
         <Route path='/finishing-page' element={<FinishingPage />} />
      </Routes>
   )
}

export default Pages

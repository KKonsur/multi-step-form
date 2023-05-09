import { React } from 'react'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Pages from './components/Pages'

const App = () => {
   return (
      <div className='app'>
         <ProgressBar />
         <main className='main'>
            <Pages />
         </main>
      </div>
   )
}

export default App

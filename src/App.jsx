import { Routes, Route } from 'react-router-dom'
import './globals.css'
import SigninFrom from './_auth/froms/SigninFrom'
import SignupForm from './_auth/froms/SignupForm'

import {Home} from './_root/pages'

 



import AuthLayout from './auth/AuthLayout'
import RootLayout from './_root/RootLayout';

const App = ()=> {
  return (
  <main className='flex h-screen'>
    <Routes>
        {/* public routes  */}
        <Route element={<AuthLayout/>} />
        <Route path='/singn-in' element={<SigninFrom/>} />
        <Route path='/singn-up' element={<SignupForm/>} />
       
       {/* private Routes  */}
       <Route element={<RootLayout/>}/>
       <Route  index element={<Home/>}/>

    </Routes>

  </main>
  )
}

export default App
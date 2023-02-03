import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCardHead from '../components/Tech/ProfileCardHead'
import ProfileCardExec from '../components/Tech/ProfileCardCore'
import CommitteeMain from '../components/Tech/CommitteeMain'
const Committee = () => {
  return (
    <div className='bg-black font-Lato'>
    <div className='h-[80vh] flex bg-black flex-col'>
      <Navbar/>
      <CommitteeMain/>
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Head</h1>
      <ProfileCardHead />
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Core</h1>
      <ProfileCardExec />
    </div>
    </div>
  )
} 
 
export default Committee 
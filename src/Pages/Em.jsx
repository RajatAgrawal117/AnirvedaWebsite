import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCardHead from '../components/EM/ProfileCardHead'
import CommitteeMain from '../components/EM/CommitteeMain'
import ProfileCardCore from '../components/EM/ProfileCardCore'
const Committee = () => {
  return (
    <div className='bg-black font-Lato'>
    <div className='h-[80vh] flex bg-black flex-col'>
      <Navbar/>
      <CommitteeMain/>
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Head</h1>
      <ProfileCardHead />
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Core</h1>
      <ProfileCardCore/>
    </div>
    </div>
  )
} 
 
export default Committee 
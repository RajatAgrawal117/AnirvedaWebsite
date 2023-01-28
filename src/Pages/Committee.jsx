import React from 'react'
import Navbar from '../components/Navbar'
import ProfileCardsExec from '../components/Committee/ProfileCardsExec'
import ProfileCard from '../components/Committee/ProfileCard'
import CommitteeMain from '../components/Committee/CommitteeMain'
import ProfileCardCore from '../components/Committee/ProfileCardCore'
const Committee = () => {
 
 

  return (
    <div className='bg-black font-Lato'>
    <div className='h-[80vh] flex bg-black flex-col'>
      <Navbar/>
      <CommitteeMain/>
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Advisors</h1>
      <ProfileCard/>
      <h1 className=' text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Executives</h1>
      <ProfileCardsExec/>
      <h1 className=' text-[4.5rem] lg:text-[5rem] pt-28 uppercase text-8xl bg-black text-primary font-light font-Bebas text-center'>Departments</h1>
      <ProfileCardCore/>
    </div>
    </div>
  )
} 
 
export default Committee 
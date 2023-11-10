import React from 'react'

import add from '../../assets/add.png'
import heroone from '../../assets/hero1.png'
import contact from '../../assets/contact.png'
import lastHero from '../../assets/lastHerom.png'
import ex from '../../assets/ex.png'


import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <>
            <div className='flex gap-2'>
                <div className='ml-[50px] bg-[#e1f8ff] w-[533px] h-[153px] flex justify-between rounded-[13px]'>
                    <div>
                        {/* link and > symbol */}
                        <div>
                            <p>Consumer</p>
                            <a href='/ManageConsumers' target='_blank'>Manage Consumers</a>
                        </div>

                        <div>
                            Actions
                        </div>

                        <div className='flex gap-2 bg-[#313945]'>
                            <img src={add} className='' />
                            <button>Add Consumers</button>
                        </div>
                    </div>

                    <div>
                        <img src={heroone} />
                    </div>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#f8cde2]'>
                    <div className='flex gap-2'>
                        <img src={contact} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>276</p>
                        <p className='text-[18px]'>KYC</p>
                    </div>

                    <div className='text-[16px] -mt-2'>Approval Pending</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#f4e1ea]'>
                    <div className='flex gap-2'>
                        <img src={ex} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>276</p>
                        <p className='text-[18px]'>KYC</p>
                    </div>

                    <div className='text-[16px] -mt-2'>Approval Pending</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>


                </div>

                <div className='flex flex-col p-8 w-[249px] h-[153px] rounded-[13px] bg-[#d1dff3]'>
                    <div className='flex gap-2'>
                        <img src={lastHero} className='w-[21.67px] h-[20px]' />
                        <p className='text-[28px] -mt-2'>276</p>
                        <p className='text-[18px]'>KYC</p>
                    </div>

                    <div className='text-[16px] -mt-2'>Approval Pending</div>

                    <button className='w-[98px] h-[38px] rounded-[4px] pl-[5px] pr-[10px] pb-[10px] pt-[5px] bg-[#313945] text-white text-[16px] mt-2'>View List</button>
                </div>


            </div>
        </>
    )
}

export default Hero
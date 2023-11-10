import React from 'react'

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'

import search from '../../assets/search.png'
import downarrow from '../../assets/downarrow.png'

const DataSection = () => {
    return (
        <div>
            <div className='flex flex-col mt-[60px] ml-[50px]'>
                <p>Consumers Overview</p>

                <div className='mt-[10px] flex justify-between'>
                    <div className='flex relative'>
                        <input
                            placeholder='Search (Eg: Rewards)'
                            className='p-4 w-[374px] h-[50px] rounded-[30px]'
                        />
                        <img src={search} className='absolute top-[15px] left-[340px]' />
                    </div>

                    <div className='flex gap-2 mr-[50px]'>
                        <img src={b1} className='w-[33px] h-[35px] rounded-md' />
                        <img src={b2} className='w-[47px] h-[35px] rounded-md' />
                        <img src={b3} className='w-[47px] h-[35px] rounded-md' />

                        <button className='flex gap-1 bg-[#4DAEFF] w-[77px] h-[35px] p-2 text-white rounded-md'>
                            <img src={b4} className='w-[20px] h-[20px]' />
                            Filter
                        </button>
                    </div>
                </div>

                <div>
                    <table className='w-[1360px]'>
                        <thead className='bg-[#DDEBFF] w-full h-[50px]'>
                            <th>Consumer Name</th>
                            <th>
                                <div>
                                    <p>Assets</p>
                                    <p>Total ~₹9M <span>50.54g</span>  <span>50.54g</span> <span>50.54g</span></p>
                                </div>

                                <div>
                                    <img src={downarrow} />
                                </div>
                            </th>
                            <th>
                                <div>
                                    <p>Revenue</p>
                                    <p>Total ~₹9M</p>
                                </div>

                                <div>
                                    <img src={downarrow} />
                                </div>
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </thead>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>


                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataSection
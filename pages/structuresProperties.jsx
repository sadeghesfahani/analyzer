import React from 'react'
import Button from '../src/components/Button'
import SectionTitle from '../src/components/SectionTitle'

function StructuresProperties() {
  return (
    <div className='p-4 flex gap-4 h-full'>
        <div className='flex flex-col gap-4 flex-[0.6]'>
            <div className='border border-black pl-8 py-8 flex flex-col gap-4 relative text-sm'>
                <SectionTitle title="Structure's property"/>
                <div className='flex gap-4'>
                    <h6>Height of storey :</h6>
                    <input type="text" />
                </div>
                <div className='flex gap-4'>
                    <h6>Length of span :</h6>
                    <input type="text" />
                </div>
            </div>
            <div className='border border-black py-4 flex justify-center items-center'>
                <Button title={'OK'} className="border border-black py-0 px-12"/>
            </div>
        </div>
    </div>
  )
}

export default StructuresProperties
import React from 'react'
import ConnectionsCheckBox from '../ConnectionsCheckBox'
import ConnectionsTable from '../ConnectionsTable'
import SectionTitle from '../SectionTitle'
import Button from "../Button"

function Connections() {
  return (
    <div className='m-1 border border-black p-4 flex flex-col gap-4 h-full'>
        <div className='flex justify-between'>
            <div className='border border-black relative w-[150px]'>
                <SectionTitle title='Direction' className='text-sm'/>
                <div className='px-2 py-3 flex flex-col gap-2'>
                    <ConnectionsCheckBox title='U1'/>
                    <ConnectionsCheckBox title='U2'/>
                    <ConnectionsCheckBox title='U3'/>
                </div>
            </div>
            <div className='border border-black relative w-[150px]'>
                <SectionTitle title='Direction' className='text-sm'/>
                <div className='px-2 py-3 flex flex-col gap-2'>
                    <ConnectionsCheckBox title='R1'/>
                    <ConnectionsCheckBox title='R2'/>
                    <ConnectionsCheckBox title='R3'/>
                </div>
            </div>
        </div>
        <div className='border border-black relative p-2'>
            <SectionTitle title='Properties' className='text-sm'/>
            <div className='bg-white border overflow-x-auto border-black'>
                <ConnectionsTable/>
            </div>
        </div>
        <div className='border border-black relative p-2 px-6 self-center'>
            <Button title='Save and Close' className='border border-black text-sm px-4'/>
        </div>
    </div>
  )
}

export default Connections
import React from 'react'
import AnalyzeCheckBox from '../src/components/AnalyzeCheckBox'
import Button from '../src/components/Button'
import SectionTitle from '../src/components/SectionTitle'

import { useSelector } from 'react-redux'

function Analyze() {
    const { analyze } = useSelector(state => state.analyze)
  return (
    <div className='h-full p-1'>
        <div className='border border-black gap-4 p-3 flex flex-col'>
            <div className='border border-black relative p-4'>
                <SectionTitle title='Analyze' className='text-sm'/>
                <div className='flex flex-col gap-4'>
                    {analyze.map((item) => (
                        <AnalyzeCheckBox key={item.name} name={item.name} checked={item.check}/>
                    ))}
                </div>
            </div>
            <div className='border border-black py-4 flex justify-center items-center'>
                <Button title={'OK'} className="border border-black py-0 px-12"/>
            </div>
        </div>
    </div>
  )
}

export default Analyze
import React from 'react'
import DailyHabit from './DailyHabit'
import Week1 from './Week1'
import Week2 from './Week2'
import Week3 from './Week3'
import Week4 from './Week4'
import Week5 from './Week5'
import Goal from './Goal'
import Progress from './Progress'

const Middle = () => {
  return (
    <div className='h-136 w-full p-2 border-2 flex'>
        <DailyHabit />
        <Week1 />
        <Week2 />
        <Week3 />
        <Week4 />
        <Week5 />
        <Goal />
        <Progress />
    </div>
  )
}

export default Middle
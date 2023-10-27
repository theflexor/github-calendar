const dayNames = {
  1: 'Monday',
  3: 'Wed',
  5: 'Frid'
}


export const Week = ({index}) => {
  return <div className="timeline_weeks_week">
    {dayNames[index]}
  </div>
}
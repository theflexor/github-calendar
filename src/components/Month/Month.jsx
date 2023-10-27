import moment from "moment"

export const Month = ({startDate,index}) => {
  const date = moment(startDate).add(index * 7, 'day')
  const monthName = date.format('MMM')
   const currentMonth = moment().format('MMM')
  return <div className={`timeline_months_month ${currentMonth !== monthName ? monthName : 'current' }`} style={{}} >
    {date.format('MMM')}
  </div>
}
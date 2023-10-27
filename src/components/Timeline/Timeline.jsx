import { Cell } from "../Cell/Cell";
import moment from 'moment'
import { Month } from "../Month/Month";
import { Week } from "../Week/Week";

export const Timeline = ({range, data}) => {
  
  const days = Math.abs(range[0].diff(range[1], 'days'))
  let cells = Array.from(new Array(days));
  let weeks = Array.from(new Array(7));
  let month = Array.from(new Array(Math.floor(days / 7)))


  const DayFormat = 'YYYY-MM-DD'

  return (
    <div className="timeline">
      <div className="timeline_months">
        {
          month.map((_, index) => <Month key={index + 'month'}  index={index} startDate={range[0]} />)
        }
      </div>
      <div className="timeline_body">
        <div className="timeline_weeks">
          {
            weeks.map((_, index) => <Week key={index + 'day'} index={index + 1}  startDate={range[0]} /> )
          }
        </div>
        <div className="timeline_cells">
          {cells.map((cell, index) =>{
              // let date = data.find(d => moment())
              let date = moment(range[0]).add(index,'day')
              const dataPoint = data.find(d => moment(date).format(DayFormat) === moment(d.date).format(DayFormat))   
            return (
            <Cell key={cell} value={dataPoint}  index={index} startDate={range[0]} />
          )})}
        </div>
      </div>
    </div>
  );
};





import moment from 'moment'
import { useState } from 'react';


export const Cell = ({value}) => {
  const [over,setOver] = useState(false)
  
  console.log(getColor(value.value), '123123');
  

  let style = {
    backgroundColor: getColor(value.value)
  };
  let date = moment(value.date).format('dddd, MMMM Do, YYYY')
  return (
    <>
    <div className={`cell`} style={style} onMouseOver={ () => {
      if(value.value){
        setOver(true) 
      }
    } }  onMouseOut={() => setOver(false)}  >
    {over && <div className='alert'>
      <strong>{value.value}contributions</strong>
      <p>{date}</p>
      </div>}
    </div>
    
    </>
  )
}

function getColor(value) {
  if (value <= 9) {
    return "#ACD5F2";
  } else if (value <= 19) {
    return "#7FA8C9";
  } else if (value <= 29) {
    return "#527BA0";
  }else if (value > 29) {
    return "#254E77";
  } else {
    return '#EDEDED'
  }
}
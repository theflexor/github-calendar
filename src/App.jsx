import { useEffect, useState } from "react";
import "./App.scss";
import { Timeline } from "./components/Timeline/Timeline";
import moment from "moment";

function App() {
  const [db, setData] = useState({});

  useEffect(() => {
    function getData() {
      fetch("https://dpg.gg/test/calendar.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }

    getData();
  }, []);


  const startDate = moment().add(-365, 'days')
  const dateRange = [moment().add(-365, 'days'), moment()]
  const days = Array.from(new Array(365)).map((_, index) => {
    const date = moment(startDate).add(index, 'day').format('YYYY-MM-DD');
    const value = db[date];
    console.log(value);
    
    return {
      date,
      value,
    };
  });
  
  return (
    <>
      <Timeline range={dateRange} data={days} />
    </>
  );
}

export default App;

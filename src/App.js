import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Games from './Games'

const App = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('https://www.thesportsdb.com/api/v1/json/40130162/eventsnext.php?id=135257')
    .then(res => {
      setSchedule(res.data.events)
    }).catch(err => alert('error'))
  }, [])

  console.log(schedule)


  return (
    <div>
    <h1>Royals Next 5 Games!</h1>
      {schedule.map(object=> {
        return(
          <Games 
          key={object.idEvent}
          aname={object.strAwayTeam}
          hname={object.strHomeTeam}
          ascore={object.intAwayScore}
          hscore={object.intHomeScore}
          image={object.strThumb}
          time={object.strTime}
          date={object.dateEvent}
          />
        )
      })}

    </div>
  )
}

export default App


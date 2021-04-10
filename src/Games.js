
import React from 'react'
import './Games.css'

const Games = ({hname, aname, date, time, hscore, ascore, image}) => {
    return (
        <div className='container'>
			<h1 className= 'teamsHeader'>Teams: </h1>
            <div className='title'>
            	<h3>{aname} @ </h3> 
            	<h3>{hname}</h3>
            </div>
            <div className ='image-container'>
                <img className='baseballpic' src={image} alt ='baseball' />
            </div>
            <div className='date'>
                {date ? <p>Date/Time:<br />{date}</p> : null}
            </div>
            <div className = 'scores'>
            	{hscore === null ? <p>{time && time}</p>:<p>Home: {hscore} </p>}
            	{ascore !== null && <p>Away: {ascore}</p>}
            </div>
  
        </div>
    )
}

export default Games



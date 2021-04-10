
import React from 'react'
import './Games2.css'

const Games = ({hname, aname, date, time, hscore, ascore, image}) => {
    return (
        <>
        <div className='container'>

        <div className = 'scores'>
            	{hscore === null ? <p>{time && time}</p>:<p>Home: {hscore} </p>}
            	{ascore !== null && <p>Away: {ascore}</p>}
            </div>
            

            <div className='title'>
            	<h3>{hname} VS</h3> 
            	<h3>{aname}</h3>
            </div>
            
            <div className='date'>
                {date && date}
            </div>
            

        </div>
            <div className ='image-container'>
                <img className='baseballpic' src={image} alt ='baseball' />
            </div>
            <hr/>
        </>
    )
}

export default Games



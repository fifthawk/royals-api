
import React from 'react'
import './Games2.css'
import animate from 'animate.css'

const Games = ({hname, aname, date, time, hscore, ascore, image}) => {
    return (
        <>
        <div className='container'>

        <div className = 'scores'>
            	{hscore === null ? <p>{time && time}</p>:<p>Home: {hscore} </p>}
            	{ascore !== null && <p>Away: {ascore}</p>}
            </div>
            

            <div className='title'>
                <div className= 'homeContainer'>
            	<h3 className ='animate__animated animate__bounce homeName'>{hname}</h3> 
                </div>
                <div>
                    <p>@</p>
                </div>
            	<h3 className = 'animate__animated animate__bounce awayName'> <br />{aname}</h3>
            </div>
            
            <div className='date'>
                {date && date}
            </div>
            

        </div>
            <div className ='image-container'>
                <img className='baseballpic' src={image} alt ='baseball' />
            </div>
            
        </>
    )
}

export default Games



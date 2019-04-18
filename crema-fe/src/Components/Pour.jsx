import React from 'react'
import Timer from 'react-compound-timer'


const Pour = (props) => {
    let message = <span className='timer-instruction'>Start timer as soon as you add hot water.</span>  
    return(
        <>
        <h1 className='header'>POUROVER</h1>
        <div className='timer'>
        <Timer startImmediately={false}
            checkpoints={[
                {
                    time: 10000,
                    callback: () => message = <span className='timer-instruction'>Let it bloom.</span>,
                },
                {
                    time: 45000,
                    callback: () => message = <span className='timer-instruction'>Slowly pour 200g hot water in a spiral motion.</span>,
                },
                {
                    time: 180000,
                    callback: () => message = <span className='timer-instruction'>Your Pourover is finished!</span>,
                },
                // {
                //     time: 100000,
                //     callback: stop(),
                // }
            ]}>
         {({ start, pause, stop, reset, timerState }) => (
        <>
            <div className='timer'>
                <span className='min'><Timer.Minutes /></span>
                <span className='sec'><Timer.Seconds /></span>
            </div>
            <br />
            {message}
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
            )}
        </Timer>
        </div>
        <div className='text-box'>
        <p className='step-num'>One: </p><p> Place and rinse the filter in the dripper. This removes the paper flavor from the filter and warms everything up. Heat up your mug while you’re at it.</p>
        <p className='step-num'>Two: </p><p>Discard the rinse water from the carafe or mug and grind 21g (about 3 Tablespoons) of coffee as fine as table salt. Add it to the filter, making sure the bed is completely flat. Place the Kalita Wave on top of a carafe or mug. Tare your scale to zero.</p>
        <p className='step-num'>Three: </p><p>Saturate the dry grounds completely with 60g of hot water right off the boil (about 205°F) in the first 10 seconds and allow it to bloom. Coffee degasses or “blooms” when it’s fresh–the coffee bed should rise up and bubble a bit. Give the coffee a stir with a spoon.</p>
        <p className='step-num'>Four: </p><p>At :45, pour water up to 200g in a spiral motion by 1:00. The spiral motion helps give you an even extraction and keeps everything integrated.</p>
        <p className='step-num'>Five: </p><p>Pour small amounts (25-50g of water) periodically to hit 375g by 2:00. Submerging dark spots and avoiding light spots, slowly bring the water level to the top for an even extraction.</p>
        <p className='step-num'>Six: </p><p>Your brew volume should reach approximately 300ml or about to the top of a 10oz mug at 2:45 to 3:00. Remove the Wave from the carafe or mug and set it in the sink for the rest of the water to drain through.</p>
        </div>
        </>
    )
}

export default Pour
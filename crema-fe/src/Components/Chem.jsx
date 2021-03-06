import React from 'react'
import Timer from 'react-compound-timer'

const Chem = (props) => {
    let message = <span className='timer-instruction'>Start timer as soon as you add hot water.</span>  
    return(
        <>
        <h1 className='header'>CHEMEX</h1>
        <div className='timer'>
        <Timer startImmediately={false}
            checkpoints={[
                {
                    time: 45000,
                    callback: () => message = <span className='timer-instruction'>Start second pour.</span>,
                },
                {
                    time: 105000,
                    callback: () => message = <span className='timer-instruction'>Brewer should be filled to the top with water (~700g).</span>,
                },
                {
                    time: 240000,
                    callback: () => message = <span className='timer-instruction'>Your Chemex is finished! Remove filter, swirl & serve.</span>,
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
        	<p className='step-num'>One: </p><p> Place the Chemex Filter in the brewer with single fold away from the spout and multiple folds lined up against the spout. Rinse the filter with hot water to get a nice even seal all the way around. This preheats the brewer and gets rid of any paper flavor from the filter. Dump the rinse water and fold the filter toward the spout to reinforce this area.</p>
        	<p className='step-num'>Two: </p><p>Add 42g or about 6 Tablespoons of coffee ground kind of like Kosher salt. Center the coffee in your brewer and zero out the scale.</p>
        	<p className='step-num'>Three: </p><p>Start the timer when you add the hot water. Pour until all the grounds are saturated or until you reach about 150g. Stir with a chopstick or spoon to make sure there are no dry clumps.</p>
        	<p className='step-num'>Four: </p><p>At :45, start the second pour, making sure to reintegrate the coffee and water. Pour with a wiggling motion, then a gentle spiral until the volume reaches about a fingertip down from the top of the rim or 450g of water. Pour over the dark spots and avoid the light ones.</p>
        	<p className='step-num'>Five: </p><p>At 1:45, fill the brewer flush to the top or about 700g of water.</p>
        	<p className='step-num'>Six: </p><p>At 4:00, you should be pretty close to volume. Look at the glass bubble or belly button, which indicates 20 ounces. Lift the filter. It’s okay to hover for a couple of seconds to make sure you have enough volume. Then pull the filter out completely and let it drain into the sink.</p>
        	<p className='step-num'>Seven: </p><p>Swirl the Chemex around a little and you’re ready to serve two cups of brewed coffee.</p>
        </div>
        </>
    )
}

export default Chem
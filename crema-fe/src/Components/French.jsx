import React from 'react'
import Timer from 'react-compound-timer'


const French = (props) => {
    let message = <span className='timer-instructions'>Start timer as soon as you add hot water.</span>  
    return(
        <>
        <h1 className='header'>French Press</h1>
        <div className='timer'>
        <Timer startImmediately={false}
            checkpoints={[
                {
                    time: 60000,
                    callback: () => message = <span className='timer-instruction'>Crack Crust and Stir!</span>,
                },
                {
                    time: 70000,
                    callback: () => message = <span className='timer-instruction'>Now We Wait</span>,
                },
                {
                    time: 240000,
                    callback: () => message = <span className='timer-instruction'>Your French Press is finished!</span>,
                },
                // {
                //     time: 241000,
                //     callback: stop()
                // }
            ]}>
         {({ start, pause, stop, reset, timerState }) => (
        <>
            <div className='timer'>
                <Timer.Minutes />
                <Timer.Seconds />
            </div>
            <br />
            <div className='timer-buttons'>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
            {message}
        </>
            )}
        </Timer>
        </div>
        <div className='text-box'>
        <p className='step-num'>One: </p><p> Warm up your empty French Press by rinsing it with very hot water. This helps maintain the temperature while brewing for best extraction.</p>
        <p className='step-num'>Two: </p><p>Measure out 56g (about 8 Tablespoons) of coffee and grind it as coarse as breadcrumbs.</p>
        <p className='step-num'>Three: </p><p>Now that your French Press is warmed up, discard the hot water and add coffee into the empty press. Start your count-up timer as soon as you add hot water. Fill it up halfway to the top saturating all the grounds, making sure that there are no dry spots.</p>
        <p className='step-num'>Four: </p><p>At 1:00, use a wooden spoon or spatula to break the top layer we call the crust. We prefer to use wood and not metal so you don’t accidentally crack the glass. Give it a good stir..</p>
        <p className='step-num'>Five: </p><p>Now, fill it all the way to the top with water. Put the top on and allow the coffee to brew without pressing it down.</p>
        <p className='step-num'>Six: </p><p>At 4:00, you are ready to press. Firmly push the press all the way down.</p>
        <p className='step-num'>Seven: </p><p>Serve it up. Pour coffee into a carafe immediately to avoid over extraction. If the coffee sits on the grounds too long, it continues to extract and will become bitter. To clean the French Press, we find it easiest to add a little water to the grounds, give it a good swirl, and empty into the trash or compost bin.</p>
        </div>
        </>
    )
}

export default French
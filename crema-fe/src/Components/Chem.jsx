import React from 'react'
import Countdown from 'react-countdown-now';

const Chem = (props) => {
    const Complete = () => <span>Your Chemex is ready!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Complete />;
        } else {
          // Render a countdown
          return <span>{minutes}:{seconds}</span>;
        }
      };
    return(
        <>
        <h1>Chemex</h1>
        <h3>Start Timer</h3>
        <div className='timer'>
        <Countdown date={Date.now() + 180000}renderer={renderer} />
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
import React from 'react'
import Countdown from 'react-countdown-now';

const Aero = (props) => {
    const Complete = () => <span>Your Aeropress is ready!</span>;
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
        <h1>Aeropress</h1>
        <h3>Start Timer</h3>
        <div className='timer'>
        <Countdown date={Date.now() + 180000}renderer={renderer} />
        </div>
        <div className='text-box'>
        <p className='step-num'>One: </p><p> Measure and grind 17g of coffee — one rounded AeroPress spoonful or about 2 ½ Tablespoons. Grind the coffee about as fine as table salt.</p>
        <p className='step-num'>Two: </p><p>Get the AeroPress ready to brew by placing the filter in the basket. Next, preheat the brewer and rinse the filter with hot water. This gets rid of any paper flavor and warms everything up. Heat up your mug with hot water while you’re at it.</p>
        <p className='step-num'>Three: </p><p>Discard the rinse water from your mug. Affix the basket to the bottom of the brew chamber and place it on top of the mug. If it’s handy, use the funnel (or coffee loader) that comes with the AeroPress to add 17g of coffee. Then, remove the funnel.</p>
        <p className='step-num'>Four: </p><p>Start the timer when you pour hot water (just off the boil or about 205°F) into your brewer. Saturate all the grounds within 10 seconds. Pour to the No. 4 or 220g of water if you’re using a scale. Spin the chamber, making sure all the coffee is saturated.</p>
        <p className='step-num'>Five: </p><p>Once you hit the No. 4, stir the “slurry” (coffee and water mixture) and place the plunger on the brew chamber and pull up slightly to create a pressure seal. Don’t plunge yet!</p>
        <p className='step-num'>Six: </p><p>At 1:15, remove the pressure seal and give the slurry another stir with a spoon or paddle. Put the plunger back on and gently press down with steady pressure, stopping as soon as you hear a hissing sound. This entire brew process should take just under two minutes and yield seven to eight ounces of coffee.</p>
        <p className='step-num'>Seven: </p><p>The AeroPress is easy to clean. Simply take off the basket and pop out the coffee grounds and filter. Clean the rubber plunger with hot kettle water and you’re ready for your next brew.</p>
        </div>
        </>
    )
}

export default Aero
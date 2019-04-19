# Crema

![alt text](https://imgur.com/szBTxxe.png "Logo")

# Initial Planning

    My idea for Crema (Project #4 for my WDI course), came about when I realized I wanted 
    to create something having to do with coffee.

# User Stories:

    “I'm an avid coffee drinker, but I have yet to really branch out from my normal 
    Folgers drip.“

    “I have a taste for good coffee, but I don't really know the different regions that 
    it comes from. “

    “I want a one stop shop for help making coffee with the most popular brewing methods.”

    "I love to listen to good music while I drink my coffee on a lazy day off. I just don't 
    know what to listen to."


# Technologies Used:

    Express
    Mongoose
    Express JWT
    RateLimit
    React Compound Timer
    ReCharts
    Axios
    Node
    Multer
    MongoDB
    Cloudinary
    Cloudinary Storage
    Multer
    React
    dotenv

# Styling and UX:

    I wanted to keep the aesthetic of Crema really minimal and clean. Keeping my palette 
    limited to mostly shades of black and white - it isn't too busy and I feel it retains 
    some modernity.

# Data and APIs

    At time of writing - I'm only utilizing the Yelp Fusion API, and the Cloudinary 
    API. The coffee production data used came from the ICO. 

    The ICO data set reached back as far as the early 1980's, so to keep it concise, 
    I had to do a fair amount of filtering before I could save anything to my DB, 
    or render it to the page. I decided to stick with data from the past five years.

![alt-text](https://imgur.com/NBX23A4.png "Coffee Data")

***

![alt-text](https://imgur.com/sJdPnBN.png, "Coffee Graph")

***

    The Yelp Fusion API made it extremely easy to look up roasteries in a users logged in location. 
    Since the user has logged in their location, there is no need for them to type any specific query - 
    I've hardcoded 'coffee roasteries' into the search already.

![alt-text](https://imgur.com/m1yHnhM.png, "API call")

***

# Extra Functionality

    My partner, who has worked in the coffee industry for some time, mentioned how nice it would be to have specific timers that the user can use when they want to implement the directions laid out for specific brewing methods. After messing around with a few different libraries, as well as writing my own timers - I found React-Compound-Timer, which was perfect for what I wanted to do. It very easily enabled me to write my own alerts at certain intervals - adding a nice element to an otherwise boring feature. For each brew method - the timer will output the current step in the brew process as it's required from the start time.

![alt-text](https://imgur.com/TVcYnwn.png, "Timer Code")

***

![alt-text](https://imgur.com/0u5NPxU.png, "Screen Shot of Timer Page")


***

# Planning
![alt-text](https://imgur.com/bjYqUM8.png "Trello")

On Sunday 4/13, I started to sketch out and plan what I thought I'd need to do. 
Of course, these things changed and evolved over the course of the project - but 
by and large I was able to stay on my original course.

![alt-text](https://imgur.com/agY266b, "Mobile View")

I tried to keep mobile in mind as much as possible throughout the styling of Crema. 
I wanted all of the features to fully come across on all platforms. I think I still 
have some tweaking to do, but it's most of the way there.

# Next Steps

I'd like to fully incorporate Spotify into Crema as soon as possible. The Spotify OAuth 
was a bit more than I could deal with for such a short window, but that will certainly 
be high on the list of things to add soon. I'd like for users to be able to save playlists, share created playlists associated with certain coffees & moods.

I would also like to add a bit more user interactivity to this project. Ability to send messages (or chat), recommendations (music & coffee), etc.

![alt-text](https://imgur.com/pz7OyAF.png, "Desktop View Main")

## Thanks for checking it out!
[My Website](https://www.garrettomoore.com)

[Live](https://immense-eyrie-19386.herokuapp.com/)
# Love Gambling

**Love Gambling** is a casino war-style game where users face off against the computer/dealer. Players can add funds, choose their stake, add multiple players, and cash out when they're done. At the end of the game, you'll see your initial investment compared to your final total to assess your performance. The game features a simple, responsive design that works seamlessly without media queries. The odds can be adjusted in the code to favor the computer slightly. I alse kept the global variables to a minimum, using only "const" for button variables globally. Although this approach introduced some repetition, it helped keep the code relatively tidy and organized.

**The deployed website can be found here:** [Love Gambling](https://andyv773.github.io/random-game/)

**Responsive Design:**

![Screenshot of love gambling on i am responsive website](assets/images/responsive.png)

## User Story

A curious customer, intrigued by the allure of the game, decides to gamble a small amount of money. Luck is on his side, and he wins, encouraging him to keep playing. The thrill of victory drives him to place more bets. However, soon the tide turns, and he begins to lose. Determined to win back his losses, he continues to gamble, pouring more money into the game. Before he realizes it, his funds are depleted, and he’s in debt. The moral of the story.. the computer always wins in the end.


## Scope

My aim is to create a simple random card-style game where the user is up against the computer. The user will need to click "Add Funds" to add an amount to the fund section, which will work in increments of 5. The user can choose a stake in amounts of 5, 10, and 20. When the user clicks "Draw," a card number will appear on the board for both the player and the computer.

The result is simple: the highest card ranking will win, with 2 being the lowest and A (Ace) being the highest. The computer will calculate the winner and add the funds to either the player's score or the computer's score. It is a game of complete chance based on a random number generator.

The user will also be able to add up to a maximum of 3 players. Each player is up against the computer, and their scores will be listed separately on the board. When the player decides to cash out, the total score will be added to the funds.

## WireFrame
**Mobile:** 

![mobile wireframe of game](assets/images/wireframe-phone.png)

**Desktop:**

![desktop wireframe of game](assets/images/destop.png)

- Desktop with 3 players

![desktop wireframe with 3 players](assets/images/desktop-3-players.png)

## Manual Testing

I have rigorously tested all buttons and functionality to ensure everything works as expected. This includes verifying that scores are calculated correctly, the correct player wins each round, and all buttons function properly.

## Validator Testing
### HTML
- The website's HTML has passed the offical HTML Validator, ensuring that there are no issues and complys with web standards.
  - [W3C HTML validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fandyv773.github.io%2Frandom-game%2F)

### CSS
- The website's CSS has passed the offical CSS Validator, ensuring that there are no issues and complys with web standards.
- [W3C CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fandyv773.github.io%2Frandom-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Lighthouse Testing
**Desktop:**
- Added aria-labels to buttons without text content to increase accessibility score
- Added meta keywords and description to increase SEO score
![lighthouse desktop score](assets/images/lhouse%20desktop.png)

**Mobile:**
- Slightly lower performance on mobile
![lighthouse mobile score](assets/images/lhouse%20mobile.png)

## Future Features

With more time, I would like to add the following features to the game:

1. **Draw Scenario:**
In the event of a draw, I intend to introduce a feature where players can choose to either:
- **Surrender:** The player loses the round, forfeiting their stake.
- **Go to War:** The player must double their stake and play an additional round to determine the winner. 

2. **Full set of Cards with Images:**
I would like to implement a full deck of cards with visual representations for each card. This will enhance the user experience by making the game more visually appealing.

3. **Card Animation:**
I would also like to implement a time-delayed animation. When bets are placed, the cards will go through an animation for a few seconds before revealing the final selection.

This will make the game more fun and engaging.

## Deployment

The site has been deployed to GitHub pages on GitHub.

- The steps to deploy are as follows:
  - In the [GitHub Repository](https://github.com/AndyV773/random-game), navigate to the Settings tab
  - In settings select pages in the left hand menu, select source deploy from branch
  - Branch should be main and select from root, then click "Save"
  - Once this has been selected and saved, the site should refresh. At the top of
  - GitHub pages section, there will be a link to the site indicating the successful deployment.

The deployed website can be found here: [Love Gambling](https://andyv773.github.io/random-game/)

## Credits
### Content

- I used the [Love Maths](https://github.com/Code-Institute-Solutions/readme-love-maths) from Code Institue as a refernce
- The icons used were taken from [Font Awesome](https://fontawesome.com/)
- To help with the JavaScript and choose colours, I used [W3S](https://www.w3schools.com/)
- I also use [Stake Over Flow](https://stackoverflow.com/) to help with the JavaScipt

### Media

- The Favicon icon was generated using [Ionos](https://www.ionos.co.uk/tools/favicon-generator)
- The Logo images was take from [Adobe](https://stock.adobe.com/search/images?k=playing+card+logo&asset_id=96484510)
<h1>First confetti example:</h1>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

```
<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
```

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

```
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()
```

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

```
const canvas = document.getElementById('your_custom_canvas_id')

const jsConfetti = new JSConfetti({ canvas })
```

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>Customise confetti</h2>

<p>Use emojis as confetti:</p>

```
jsConfetti.addConfetti({
   emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
})
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Customize confetti colors:</p>

```
jsConfetti.addConfetti({
  confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],
})
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Customize confetti colors:</p>

```
jsConfetti.addConfetti({
  confettiRadius: 6,
})
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Customize confetti number:</p>

```
jsConfetti.addConfetti({
  confettiRadius: 6,
  confettiNumber: 500,
})
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Combine different properties:</p>

```
jsConfetti.addConfetti({
  emojis: ['🦄'],
  emojiSize: 100,
  confettiNumber: 30,
})
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>clearCanvas()</h2>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Call clearCanvas method to clear canvas.</p>

```
const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()

// ... 
jsConfetti.clearCanvas()
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>addConfetti Promise</h2>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>addConfetti method returns Promise, which is resolved when added confetti dissapears 
from the user screen due to the gravity physics of confetti.</p>

<h3>Example:</h3>

```
// async/await
await jsConfetti.addConfetti()
console.log('Confetti animation completed!')

// Promise.then
jsConfetti.addConfetti()
   .then(() => console.log('Confetti animation completed!'))
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h1>Create confetti from scratch</h1>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>HTML Code</h2>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>Let's start by creating a basic HTML file and adding a div element that will be used 
to display the confetti effect.</p>

```
<div id="confetti-container">
  <div class="card">
    <p>Congratulations, you have successfully created a confetti</p>
  </div>
</div>
```

<p>From the code above, we created a div element with the id of confetti-container. It 
is a container for the confetti effect that we'll be creating later in the JavaScript 
code.</p>

<p>We also created another element with a class of card. This is the container for the 
text "Congratulations, you have successfully created a confetti".</p>

<p>And finally, we created a p element with the text "Congratulations, you have 
successfully created a confetti". This text is contained within the div element 
with the class of card.</p>

<p>What I just explained is the part that is more important in the code. But here is the 
HTML code in full 👇🏽</p>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>How to create a confetti</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="confetti-container">
      <div class="card">
        <p>Congratulations, you have successfully created a confetti</p>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>🏡 CSS CODE</h2>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>We will be creating the CSS styles that will be used to display the confetti effect.</p>

<p>The CSS style looks a bit lengthy, But let’s break it down into different parts for easier 
understanding.</p>

<p>First, We will use the CSS reset (*) to set the margin and padding of all the elements to 0, 
change the box-sizing property to content-box, and hides any overflow. Here is the code 👇🏽</p>

```
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  overflow: hidden;
}
```

<p>After that, we’ll so set the background color of the body element to a dark gray 
color (#333). 👇🏽</p>

```
body {
  background-color: #333;
}
```

<p>We will now style the #confetti-container element, which contains the confetti 
animation. We’ll give it a position of absolute to position it relative to the 
nearest positioned ancestor. The top and left properties will be set to 0 to 
position it at the top left corner of the page. We’ll give it a width of 100% 
to make it span the full width of the page. We’ll also set display to flex to 
make it a flex container, allowing us to easily center its child elements. The 
align-items and justify-content properties will be set to center to center its 
child elements vertically and horizontally. Finally, we’ll set the height to 
100vh to make it fill the entire viewport height. 👇🏽</p>

```
#confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

<p>We will now style the .card element, which contains the congratulatory message. We’ll 
give it a background-color of white (#fff) to provide a clean background for the 
message. The max-width will be set to 700px to limit its width and make it more 
readable. We’ll also set border-radius property to 10px to round the corners of the 
card. We’ll give it a box-shadow to give the card some depth. Finally, we’ll set the 
padding to 2rem to add some spacing between the card and its contents. 👇🏽</p>

```
.card {
  background-color: #fff;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}
```

<p>Next, we are going to style the .card p selector that targets the paragraph element 
within the .card element. We’ll give it a font-size of 1.2rem to make the text slightly 
larger than the default size. The text-align will be set to center to center the text 
within the card. margin and padding will be set to 0 and 10px, respectively, to remove 
any extra space around the paragraph and add some space between it and the card's border. 👇🏽</p>

```
.card p {
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 10px;
}
```

<p>We’ll add some styles to .confetti class that will be used to style the confetti elements 
that will be created dynamically by JavaScript. First of, we are going to set the position 
property to absolute, so that the confetti elements are positioned independently of their 
parent elements. The top property will be set to 0, so that the confetti elements are 
positioned at the top of their parent elements. We’ll also give it a font-size of 1.6rem 
to give the confetti elements a larger size. Lastly, we will create an animation property 
that will be used to apply the confetti-fall animation to the confetti elements. 👇🏽</p>

```
.confetti {
  position: absolute;
  top: 0;
  font-size: 1.6rem;
  animation: confetti-fall linear 5s infinite;
}
```

<p>The linear value of the animation property is used to set the timing function of the 
animation to linear, which means that the confetti elements will move at a constant 
speed. The 5s value sets the duration of the animation to 5 seconds, and the infinite 
value sets the animation to repeat indefinitely.</p>

<p>Finally, We’ll add some styles to the animation confetti-fall that we created earlier 
using the @keyframes rule. We are going to use transform property to move the confetti 
elements down the screen and rotate them. The transform property will have two keyframes: 
0% and 100%. We will also add two transform functions to the transform property which are 
translateY and rotate.</p>

<p>At 0%, the confetti elements will be positioned at the top of their parent element 
and rotated 0 degrees. The translateY property of the transform rule will be set to 
-100% so that the confetti elements start outside of their parent element and move down.</p>

<p>At 100%, the confetti elements will be positioned at the bottom of their parent element 
and rotated 180 degrees. The translateY property will be set to 100vh, which is the 
height of the viewport. This means that the confetti elements will continue to fall 
beyond the height of their parent element and disappear from view. Here is the code 👇🏽</p>

```
@keyframes confetti-fall {
  0% {
    transform: translateY(-100%) rotate(0);
  }
  100% {
    transform: translateY(100vh) rotate(180deg);
  }
}
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h3>Here is the CSS code in full 👇🏽</h3>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  overflow: hidden;
}

body {
  background-color: #333;
  font-family: 'Poppins', sans-serif;
}

#confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  background-color: #fff;
  max-width: 700px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}

.card p {
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  padding: 10px;
}

.confetti {
  position: absolute;
  top: 0;
  font-size: 1.6rem;
  animation: confetti-fall linear 5s infinite;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-100%) rotate(0);
  }
  100% {
    transform: translateY(100vh) rotate(180deg);
  }
}
```
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h2>JavaScript Code</h2>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<p>The JavaScript code will be responsible for creating and showing confetti on the web 
page. We will also explain each line of code step by step, so it's easy to follow.</p>

<p>Firstly, we are going to create a variable confettiContainer that gets the HTML 
element with an ID of "confetti-container". This element is the container where the 
confetti will be displayed. The document.quereSelector() method is used to get the 
container element from the HTML document.</p>

```
const confettiContainer = document.querySelector('#confetti-container');
```

<p>Next step, we are going to create a function called showConfetti(). This function 
will be responsible for creating the confetti elements and appending them to the 
container.</p>

```
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '🎉';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
};
```

<p>In the above function, the code creates a new div element using the createElement() 
method. It sets the textContent property of the element to "🎉", which is the Unicode 
character for a confetti emoji. The element is then given the CSS class "confetti" 
using the classList.add() method.</p>

<p>The next line of code confetti.style.left = Math.random() * innerWidth + 'px'; sets 
the horizontal position of the confetti element randomly using the Math.random() 
function. The innerWidth property returns the width of the browser window. By 
multiplying Math.random() with innerWidth, the confetti will be placed randomly 
between 0 and the width of the browser window. The position is set in pixels using 
the px unit.</p>

<p>The appendChild() method is used to add the confetti element to the confettiContainer 
element, making it visible on the webpage.</p>

<p>The last part of the showConfetti() function sets a timeout of 5 seconds using the 
setTimeout() method. After 5 seconds, the confetti element is removed from the HTML 
document using the remove() method.</p>

<p>Finally, we are going to set up a loop that repeatedly calls the showConfetti() function 
every 400 milliseconds using the setInterval() method. 👇🏽</p>

```
setInterval(() => {
  showConfetti();
}, 400);
```

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<h3>Here is the JavaScript code in full 👇🏽</h3>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

```
const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '🎉';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
};

setInterval(() => {
  showConfetti();
}, 400);
```

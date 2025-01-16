var canvas = document.getElementById('my-canvas');

// you should  only initialize a canvas once, so save this function
// we'll save it to the canvas itself for the purpose of this demo
canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

canvas.confetti({
  spread: 70,
  origin: { y: 1.2 }
});

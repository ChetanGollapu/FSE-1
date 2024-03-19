let blocks = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let block of blocks) {
    rect(block.x, block.y, 50, 50);
  }
}

function mousePressed() {
  let selectedBlock = null;
  for (let i = blocks.length - 1; i >= 0; i--) {
    let block = blocks[i];
    if (mouseX > block.x && mouseX < block.x + 50 && mouseY > block.y && mouseY < block.y + 50) {
      selectedBlock = block;
      break;
    }
  }

  if (selectedBlock) {
    selectedBlock.y -= 50;
  } else {
    blocks.push({ x: mouseX, y: mouseY });
  }
}
function isLandscape (width, height) {
  return (width > height); //returns the value of the expression
}

let width = 800;
let height = 100;
console.log("This monitor geometry is Landscape:", isLandscape (width, height));

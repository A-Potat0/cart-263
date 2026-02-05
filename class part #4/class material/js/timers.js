window.onload = function () {

//     let shades = [
//       "#7fb3d5", //grey blue first
//       "#76d7c4",
//       "#f7dc6f",
//       "#eb984e",
//       "#cb4335",
//       "#8e44ad",
//       "#2e4053",
//       "#e5e7e9",
//     ];

//   console.log("timers running");


//   for (let i = 0; i < 24; i++) {
//     //for each x - make a column of changing y's
//     for (let j = 0; j < 24; j++) {
//       //create a grid cell with a div
//       let parent = document.getElementById("parent");
//       let d = document.createElement("div");
//       d.classList.add("grid-cell");
//       parent.appendChild(d);

//       d.style.left = (i + 1) * 25 + "px";
//       d.style.top = (j + 1) * 25 + "px";
//     }
//   }

//   let gridCells = document.querySelectorAll(".grid-cell");

//   let divisor = 2
//   let currentShadeIndex = 0

//   for(let i = 0; i< gridCells.length; i++){

    // if(i%divisor === 0){
    //     gridCells[i].style.background = shades[0]
    // }
    // else{
    //     gridCells[i].style.background = shades[1]
    // }

//     // if(i % 24 === 0){
//     //     if(currentShadeIndex === 0){
//     //         currentShadeIndex = 1;
//     //     }
//     //     else{
//     //         currentShadeIndex = 0;
//     //     }
//     // }
//     // gridCells[i].style.background = shades[currentShadeIndex]

//   }

    // let changingDevisor = 0
    // window.setInterval(animate_rows, 1)

    // function animate_rows(){
    //     changingDevisor += 1;
    //     drawGrid();
    // }

    // let changingNum = 0;
    //   setInterval(animate_cells_mod_rows, 100);

    //   function animate_cells_mod_rows() {
    //     console.log(changingNum);
    //     changingNum += 1;

    //     // if (changingNum === 8) {
    //     //   changingNum = 0;
    //     // }
    // }


    // /* draw the grid */
    //   function drawGrid(){
    //     for (let index = 0; index < gridCells.length; index++) {

    //     //check what the remainder is ...
    //       if (index % changingNum === 0) {
    //         gridCells[index].style.background = shades[0];
    //       } 
    //       else if (index % changingNum === 1) {
    //         gridCells[index].style.background = shades[1];
    //       } 
    //       else if (index % changingNum === 2) {
    //         gridCells[index].style.background = shades[2];
    //       } 
    //       else if (index % changingNum === 3) {
    //         gridCells[index].style.background = shades[3];
    //       } 
    //       else if (index % changingNum === 4) {
    //         gridCells[index].style.background = shades[4];
    //       } 
    //       else if (index % changingNum === 5) {
    //         gridCells[index].style.background = shades[5];
    //       } 
    //       else if (index % changingNum === 6) {
    //         gridCells[index].style.background = shades[6];
    //       } 
    //       else if (index % changingNum === 7) {
    //         gridCells[index].style.background = shades[7];
    //       } 

    //     }
    //  }
    //  /* hmmm : we could just remove the if /else and write:
    //   gridCells[index].style.background = shades[index%changingNum];
    //   */

    // let dynamicdelay = 500;
    // let textCounter = 0

    // // window.setInterval(function(e){
    // //     let sp = document.createElement("spam");
    // //     sp.textContent = "The End Is Never ";
    // //     document.querySelector("#parent").appendChild(sp)
    // //     dynamicdelay -= 100
    // // }
    // // ,dynamicdelay)

    //  window.setTimeout(changingTimeout, dynamicdelay)

    // function changingTimeout() {
    //     if(textCounter < 300){
    //         let sp = document.createElement("spam");
    //         sp.textContent = "The End Is Never ";
    //         document.querySelector("#parent").appendChild(sp)
    //         dynamicdelay -= 5
    //         textCounter += 1
    //         console.log(textCounter)
    //         window.setTimeout(changingTimeout, dynamicdelay)  
    //     }
        

    // }

     //create a particle div
  let particleDiv = document.createElement("div");
  particleDiv.id = "particle";
  document.querySelector("#parent").appendChild(particleDiv);
  particleDiv.style.left = "25px";
  particleDiv.style.top = "25px";

  window.requestAnimationFrame(animate);


  let speedX =2;
  let speedY =3;

  function animate() {
    let p = document.getElementById("particle");
    p.style.left = parseInt(p.style.left) + speedX + "px";
    p.style.top = parseInt(p.style.top) + speedY + "px";
    checkBounds(document.getElementById("parent"), p);
    window.requestAnimationFrame(animate);
  }

  function checkBounds(parent, p){
    let bounds = parent.getBoundingClientRect();

    if (parseInt(p.style.left) > bounds.right) {
    speedX*=-1.01;
  
  } else if (parseInt(p.style.left) < bounds.left) {
    speedX*=-1.01;
    }

  if (parseInt(p.style.top) > bounds.bottom) {
    speedY*=-1.01;

  } else if (parseInt(p.style.top) < bounds.top) {
    speedY*=-1.01;
  }
  }



}
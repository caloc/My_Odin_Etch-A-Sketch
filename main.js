document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const resizeButton = document.querySelector("#resize-button");
    const clearButton = document.querySelector("#clear-grid");

    // const container = document.getElementById("container");
    // const resizeButton = document.getElementById("resize-button");
    // const clearButton = document.getElementById("clear-grid");


    function createGrid(squaresPerSide){
        const totalSquares = squaresPerSide * squaresPerSide;
        const squareSize = 600 / squaresPerSide;
        for(let i = 0; i < totalSquares; i++){
            const square = document.createElement("div");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.setAttribute('data-darkness', '0');
            square.addEventListener("mouseover", ()=> {
                let currentDarkness = parseInt(square.getAttribute('data-darkness'));
                if (currentDarkness < 10){
                    console.log(currentDarkness);
                    currentDarkness++;
                    square.setAttribute('data-darkness', currentDarkness);
                    const darkeningFactor = currentDarkness * 0.1;
                    square.style.backgroundColor = `rgba(28, 105, 173, ${darkeningFactor})`;
                }
            });
            container.appendChild(square);
        }
    }
    function clearGrid() {
        // Remove each child (square) from the container
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    // Resize button event listener
    resizeButton.addEventListener("click", () => {
        // Prompt user for grid size
        let squaresPerSide = prompt("Enter number of Squares (1-100): ");
        
        // Convert input to integer
        squaresPerSide = parseInt(squaresPerSide);
        
        // If input is valid
        if (squaresPerSide > 0 && squaresPerSide <= 100) {
            // Remove the current grid
            clearGrid();
            
            // Create a new grid with the updated size
            createGrid(squaresPerSide);
        } else {
            // Alert for invalid input
            alert("Please enter a valid number");
        }
    });

    // Clear button event listener
    clearButton.addEventListener("click", () => {
        // Select all squares
        const squares = container.querySelectorAll("div");
        
        // Reset color of each square to white
        squares.forEach(square => {
            square.style.backgroundColor = "white";
        });
    });

    // Create the initial grid with 16 squares per side
    createGrid(16);

})

// document.addEventListener("DOMContentLoaded", () => {
//     // Get references to the container, resize button, and clear button elements
//     const container = document.getElementById("container");
//     const resizeButton = document.getElementById("resize-button");
//     const clearButton = document.getElementById("clear-grid");

//     // Function to create a grid of squares
//     function createGrid(squaresPerSide) {
//         // Calculate the total number of squares
//         const totalSquares = squaresPerSide * squaresPerSide;
        
//         // Calculate the size of each square
//         const squareSize = 600 / squaresPerSide;

//         // Loop to create each square and add it to the container
//         for (let i = 0; i < totalSquares; i++) {
//             // Create a new div for the square
//             const square = document.createElement("div");
            
//             // Set the width of the square
//             square.style.width = `${squareSize}px`;
            
//             // Set the height of the square
//             square.style.height = `${squareSize}px`;
            
//             // Initialize the darkness level
//             square.setAttribute('data-darkness', '0');

//             // Add an event listener to darken the square on mouseover
//             square.addEventListener("mouseover", () => {
//                 // Get the current darkness level
//                 let currentDarkness = parseInt(square.getAttribute('data-darkness'));
                
//                 // If darkness level is less than 10
//                 if (currentDarkness < 10) {
//                     // Increase the darkness level
//                     currentDarkness++;
                    
//                     // Update the darkness level attribute
//                     square.setAttribute('data-darkness', currentDarkness);
                    
//                     // Calculate the darkening factor
//                     const darkeningFactor = currentDarkness * 0.1;
                    
//                     // Apply the darkening color
//                     square.style.backgroundColor = `rgba(28, 105, 173, ${darkeningFactor})`;
//                 }
//             });

//             // Add the square to the container
//             container.appendChild(square);
//         }
//     }

//     // Function to remove all squares from the grid
//     function clearGrid() {
//         // Remove each child (square) from the container
//         while (container.firstChild) {
//             container.removeChild(container.firstChild);
//         }
//     }

//     // Resize button event listener
//     resizeButton.addEventListener("click", () => {
//         // Prompt user for grid size
//         let squaresPerSide = prompt("Enter number of Squares (1-100): ");
        
//         // Convert input to integer
//         squaresPerSide = parseInt(squaresPerSide);
        
//         // If input is valid
//         if (squaresPerSide > 0 && squaresPerSide <= 100) {
//             // Remove the current grid
//             clearGrid();
            
//             // Create a new grid with the updated size
//             createGrid(squaresPerSide);
//         } else {
//             // Alert for invalid input
//             alert("Please enter a valid number");
//         }
//     });

//     // Clear button event listener
//     clearButton.addEventListener("click", () => {
//         // Select all squares
//         const squares = container.querySelectorAll("div");
        
//         // Reset color of each square to white
//         squares.forEach(square => {
//             square.style.backgroundColor = "white";
//         });
//     });

//     // Create the initial grid with 16 squares per side
//     createGrid(16);
// });

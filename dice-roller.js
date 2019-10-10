//Generate random number array based on user input number of dice and sides
function roll(numOfDice, numOfSides){
    let resultArray = [];
    for(i = 0; i < numOfDice; i++){
        //Random number generated based upon number of sides input
        //https://www.w3schools.com/js/js_random.asp
        let n = Math.floor(Math.random() * (numOfSides - 1 + 1)) + 1;

        resultArray.push(n);
        console.log(n)
    }
    return resultArray;
}

//Convert generated number array to string to display
function rollToString(resultArray){
    let result = "";
    for(i = 0; i < resultArray.length; i++){
        if(i == resultArray.length - 1){
            result += resultArray[i].toString();
        }
        else{
            result += resultArray[i].toString() + ", ";
        }
    }
    return result;
}

//Add all of the numbers of the generated array together
function rollAdded(resultArray){
    let resultAdded = 0;
    for(i = 0; i < resultArray.length; i++){
        resultAdded += resultArray[i];
    }
    return resultAdded;
}

//Manipulates DOM to display calculated values
function rollResults(){
    const numOfFaces = document.getElementById("numOfFaces").value;
    const numOfDice = document.getElementById("numOfDice").value;

    let rollResult = roll(Number(numOfDice), Number(numOfFaces));
    let rollToStringF = rollToString(rollResult);
    let rollAddedF = rollAdded(rollResult); 

    document.getElementById("resultString").innerHTML = rollToStringF;
    document.getElementById("resultsAdded").innerHTML = String(rollAddedF);
}

document.getElementById("rollButton").addEventListener("click", rollResults);
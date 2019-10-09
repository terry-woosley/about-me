//Generate random number array based on user input number of dice and sides
const roll = (numOfDice, numOfSides) => {
    let resultArray = []
    for(i = 0; i < numOfDice; i++){
        //Random number generated based upon number of sides input
        //https://www.w3schools.com/js/js_random.asp
        let n = Math.floor(Math.random() * (numOfSides - 1 + 1)) + 1;

        resultArray.push(n);
    }
    return resultArray;
}

//Convert generated number array to string to display
const rollToString = (resultArray) => {
    let result;
    for(i = 0; i < resultArray.length(); i++){
        if(i == resultArray.length() - 1){
            result += resultArray[i].toString();
        }
        else{
            result += resultArray[i].toString() + ", ";
        }
    }
    return result;
}

//Add all of the numbers of the generated array together
const rollAdded = (resultArray) => {
    let resultAdded;
    for(i = 0; i < resultArray.length(); i++){
        resultAdded += resultArray[i];
    }
    return resultAdded;
}

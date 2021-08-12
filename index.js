function findMatching (driversArray, driversName){
    return driversArray.filter(function (name) {
        return name.toLowerCase().indexOf(driversName.toLowerCase()) !== -1;
    })
}

function fuzzyMatch(driversArray, driverFirstLetters){
    return driversArray.filter(function (letters) {
         return letters.toLowerCase().substring(0, 2) === driverFirstLetters.toLowerCase();
    })
}

function matchName(driversArray, driversName){
    return driversArray.filter(function (x) {
        return (x.name.toLowerCase()) === driversName.toLowerCase();
   })
}
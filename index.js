// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
    if(somevalue >42){
        return somevalue - 42;
    }else{
        return 42 - somevalue;
    }
}
function distanceFromHqInFeet(somevalue){
    return distanceFromHqInBlocks(somevalue)*264;
}
function distanceTravelledInFeet(start, end){
    if(end > start){
        return (end - start) * 264;
    }else{
        return (start - end) * 264;
    }
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    if(distance < 400) return 0;
       else if(distance < 2000) return(distance - 400) * 0.02;
         else if(distance > 2500) return 'cannot travel that far';
           else return 25
}
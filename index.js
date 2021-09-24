function distanceFromHqInBlocks(x) {
    const hq = 42
    if (hq < x) 
        return (x - hq);
    if  (hq > x)
        return (hq - x);
}

function distanceFromHqInFeet(x) {
    return (264 * distanceFromHqInBlocks(x));
}

function distanceTravelledInFeet(distance, destination) {
    if (destination > distance)
        return ((destination - distance) * 264);
    if (destination < distance)
        return ((distance - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    let travel = distanceTravelledInFeet(start, destination)
        if (`${travel}` < 400)
            return 0;
        else if (`${travel}` < 2000 && `${travel}` > 400)
            return ((`${travel}` - 400) * 0.02);
        if (`${travel}` > 2000 && `${travel}` < 2500)
            return 25;
        else if (`${travel}` > 2500)
            return "cannot travel that far"
}
function produceDrivingRange(blockRange){
  return function rangeCalculator(begin, end){
    let start = parseInt( begin );
    let end = parseInt( end );
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
        return `${Math.abs(difference)} blocks out of range`
      }
    }
}

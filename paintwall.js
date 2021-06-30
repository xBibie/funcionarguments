
//No arguments
const paintWall1 = function () {
    console.log ('the wall has been painted red');
};
paintWall1();

//Single argument 
const paintWall2 = function (color) {
    console.log ('paint wall'+ color);
    //String concatenation
    //or
    console.log ('paint wall ${color}');
    //String interpolation
};
paintWall ('green');
paintWall ('blue');

//multiple arguments
cont paintWall3 = function (place, color){
    console.log ('The' +place+ 'wall has been painted' +color);
    //String concatenation
    //or
    console.log('The ${place} wall has been painted ${color}');
};

paintWall3 ('left', 'purple');
paintWall3 ('north', 'pink');

//the order of arguments matters
paintwall3 ('pink', 'right');
// the pink wall has been painted right

//the order in the function also matters
const paintWall4 = function (color, place){
    console.log('The'+place+ 'wall has been painted' +color);
    //string concatenation
    //or
    console.log ('The ${place} wall has been painted ${color}');
    // string interpolation

};
paintWall4 ('right', 'purple');
//The purple wall has been painted right

//if we change the order in de definition and the call we get a good result again
cont paintWall5 = function (color, place) {
    console.log ('The' +place+ 'wall has been painted' +color);
    //string concatenation
    //or
    console.log('The ${place} has been painted ${color}');
    //string interpolation  
};
paintWall5 ('purple', 'left');
//The west wall has been painted blue 





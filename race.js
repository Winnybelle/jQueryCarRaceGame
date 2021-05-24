//create an event to enable the go button
var carwidth, raceTrackWidth,raceTime1,raceTime2,isComplete,place;
$("#go").click(function (){

        //build a function that checks to see if a car has won the race
        function checkIfComplete() {
            if(isComplete == false) { //here no car has won yet
                isComplete = true;   //a car won either car1 or car2
            }
            else {
                place = 'second';
             }
        }
        
        //get the width of the cars
        carwidth = $("#car1").width();

        
        //get the width of the racetrack. when we race the car,we will be able to end at the nose of the car, by default (full-width)the car would end at the tail because the position of the car starts at the top left corner.to make the car end with its nose, we need to calc the width of the car,the width of the road (which is the width of the browser) minus the width of the car, basically its gonna get the width of the road which is gonna end the car with its tail,so we are goingto minus the width of the car so it stops with its nose  
        raceTrackWidth = $(window).width() - carwidth;
        
        
        //generate a random num between 1 and 5000
        raceTime1 = Math.floor((Math.random() * 5000) + 1);
        raceTime2 = Math.floor((Math.random() * 5000) + 1);

        
        //set flag variable to FALSE by default ie since nobody has won the race yet
         isComplete = false;
        
        
         //set flag variable to FIRST by default ie first because one of the cars is going to come first
         place = 'first';
        
        
         //animation (enables car movement)
        //animate car1
        $("#car1").animate({
            
            //move the car width of the racetrack
            left: raceTrackWidth
       },raceTime1, function(){
         //here is where you run the callback when the anIMATION is complete
       
         //run a function to know if the animation is complete
        checkIfComplete();

        //give some text feedback in the race info box
        $('#raceInfo1 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime1 + 'milliseconds!');
        }); 

        $("#car2").animate({
            //move the car width of the racetrack
            left: raceTrackWidth
       },raceTime2, function(){
         //here is where you run the callback when the anIMATION is complete
       
         //run a function to know if the animation is complete
        checkIfComplete();

        //give some text feedback in the race info box
        $('#raceInfo2 span').text('Finished in ' + place + 'place and clocked in at ' + raceTime2 + 'milliseconds!');
        }); 
});
    //reset the race
    $('#reset').click(function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    })
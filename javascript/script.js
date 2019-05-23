function submitAnswers(){
    var total = 5;
    var score = 0; 

    //Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value; 
    var q3 = document.forms["quizForm"]["q3"].value; 
    var q4 = document.forms["quizForm"]["q4"].value; 
    var q5 = document.forms["quizForm"]["q5"].value;

    //alert(q1); to see if letters are displaying

    //Validation (want solid validations always)

    //|| = or (you can just put OR as well but for this example we put ||) 
    //This if statment was first created and then moved into the for loop below (I commented it out)
    //if(q1 === null || q1 === "") { 
        //alert('You missed question 1');
        //return false; 
    
    //the q1 was changed below to (eval('q + i') so it would loop through all five questions
    for(i = 1; i <=total; i++) { //A for loop takes three paramaters i=1(sets a varible), i<+total(is the condition), i++ (is the increment)
        if(eval('q' + i) === null || eval('q' + i) === "") {//|| = or (you can just put OR as well but for this example we put ||) 
            alert('You missed question' + i); //i varible relates to what question
            return false; 
        }
    }

    //Set Correct Answers
    var answers = ["b", "a", "d", "b", "d"]; //sets correct answers in an array

    // Check Answers (this ichecking the anwers against the array above)
    //below is how we firt did it but you can loop this so  see solution to making the five below into a for loop. 
    //if (q1 === answers[0]) { //[0 is the place in the array]
        //score++; //this is increasing the score by 1
    //}

    //if (q2 === answers[1]) {
        //score++; //this is increasing the score by 1
    //}

    //if (q3 === answers[2]) {
        //score++; //this is increasing the score by 1
    //}

    //if (q4 === answers[3]) {
        //score++; //this is increasing the score by 1
    //}

    //if (q5 === answers[4]) {
        //score++; //this is increasing the score by 1
    //}

    for(i = 1; i <= total; i++) {
        if(eval('q' + i) === answers[i -1]) {
            score++; 
        }
    }
    
    //Display results back onto the index.html page
    var results = document.getElementById('results');
    results.innerHTML = "<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span></h3>"; //this is the sentence displayed 
    alert("You scored " +score+ "out of " +total); //pop up alert
    
    return false;
}
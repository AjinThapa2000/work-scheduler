//Real Clock Function

var clock = document.getElementById("clock");
Number.prototype.zeroLead = function() {
	var s = String(this);
	while (s.length < 2) {
		s = "0" + s;
	}
	return s;
}

function updateTime() {
	var now = new Date();
	
	clock.innerHTML = now.getHours().zeroLead() + ":" + now.getMinutes().zeroLead();
	var seconds = now.getSeconds();
	
	if (seconds < 30 ) {
		document.getElementsByClassName("second-bar")[0].className = "second-bar s" + seconds;
		document.getElementsByClassName("left-half-clipper")[0].style='position:absolute;';
	} else {
		document.getElementsByClassName("second-bar")[0].className = "second-bar over-30s s" + seconds;
		document.getElementsByClassName("left-half-clipper")[0].style='position:relative;';
	}
}
setInterval("updateTime()", 100);

//Gives current date on top of page tittle
var currentDate=moment().format("dddd, MMM DD YYYY");
$("#currentDay").html(currentDate);

$(document).ready(function(){
    //Save button listener for written text

    $(".saveBtn").on("click", function(){

        //get value of individual text area 
        
        var getTime=$(this).closest('div').attr("id");
        var getText=$(this).prev(".note").val();

        
        //save file in local Storage
        localStorage.setItem(getTime, getText);

    })

    

    //Tracking the exact time for past present and future

    function currentTime(){
        //geting current running time
        
        var currentRunningTime=moment().hour();

        //going through each timerBlock

        $(".timerBlock").each(function () {
            var getBlockTime = parseInt($(this).attr("id"));
            
            //checking current time and setting background color of each block based on css properties Past, present and future
            
            if(getBlockTime<currentRunningTime){
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');

            }
            else if (getBlockTime>currentRunningTime){
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            }
            else {
                $(this).removeClass('future');
                $(this).addClass('present');
                $(this).removeClass('past');
            }


        })
        
    }
    //Getting Values from Local Storage

    $("#9 .note").val(localStorage.getItem("9"));
    $("#10 .note").val(localStorage.getItem("10"));
    $("#11 .note").val(localStorage.getItem("11"));
    $("#12 .note").val(localStorage.getItem("12"));
    $("#13 .note").val(localStorage.getItem("13"));
    $("#14 .note").val(localStorage.getItem("14"));
    $("#15 .note").val(localStorage.getItem("15"));
    $("#16 .note").val(localStorage.getItem("16"));
    $("#17 .note").val(localStorage.getItem("17"));

    //Fucction call
    currentTime();
    
})

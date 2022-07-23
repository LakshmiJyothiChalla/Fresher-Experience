		function experiencecount(){
		var joiningdateinput=document.getElementById("dateofjoining").value;
		var joiningdate=new Date(joiningdateinput);
		var joiningyear=joiningdate.getFullYear();
		var joiningyearinInteger = Number(joiningyear);
		var leavingdateinput=document.getElementById("dateofleaving").value;
		var leavingdate=new Date(leavingdateinput);
		var leavingyear=leavingdate.getFullYear();
		var leavingyearinInteger = Number(leavingyear);
		var numberofmonths=(joiningyearinInteger*12-leavingyearinInteger*12);
		var totalexperience=leavingyearinInteger-joiningyearinInteger;
	   document.getElementById('experience').value=totalexperience+" years";
        }
function myage(){
        var toDay=new Date();
        var currentYear=toDay.getFullYear();
        var year=document.getElementById("dob").value;
        var dateOfBirth=new Date(year);
        var  myYear=dateOfBirth.getFullYear(); 
		var myInt = Number(myYear);
		var myInt2 = Number(currentYear);
		var agegap=myInt2-myInt;
        //document.getElementById('age').value= ${currentYear-myYear};
		//var myInt = Number(new Date(dates_as_int[0]));
   //  document.write(agegap);
	 document.getElementById('age').value=agegap+ " years"
      
        }
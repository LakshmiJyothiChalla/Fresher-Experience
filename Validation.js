jQuery.validator.addMethod("noSpace", function(value, element) { 
    return value == '' || value.trim().length != 0;  
}, "No space please and don't leave it empty");
jQuery.validator.addMethod("customEmail", function(value, element) { 
  return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
}, "Please enter valid email address!");
$.validator.addMethod( "alphanumeric", function( value, element ) {
return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );
var $registrationForm = $('#registration');
if(1){
if($registrationForm.length){
  $registrationForm.validate({
      rules:{
		  FirstName: {
              required: true,
              noSpace: true
          },
           LastName: {
              required: true,
              noSpace: true
          },
          dob: {
              required: true
          },
          gender: {
              required: true
          },
          qualification: {
              required: true
          },          
		  skills: {
              required: true
          },
		  employeetype:{
			   required: true
		  },
          dateofjoining: {
              required: true
          },
          dateofleaving: {
              required: true
          },
          companyName: {
              required: true
          },
          department: {
              required: true
          },
          place: {
              required: true
          }
      },
      messages:{
		  FirstName: {
              required: 'Please enter FirstName!'
          },
          LastName: {
              required: 'Please enter LastName!'
          },
          dob: {
              required: 'Please enter Your Date of birth !'
          },
          qualification: {
              required: 'Please enter your qualification!',
          },
          country: {
              required: 'Please select country!'
          },
          gender: {
              required: 'Please enter your gender category!'
          },
		  skills: {
              required: 'Please choose atleast one skill!'
          },
          dateofjoining: {
              required: 'Please enter date of joining!'
          },
          dateofleaving: {
              required: 'Please enter date of leaving!'
          },
          companyName: {
              required: 'Please enter companyName!'
          },
          department: {
              required: 'Please enter department!'
          },
          place: {
              required: 'Please enter place!'
          }
		  
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.employeetype'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.skills'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
  });
}}
else
{
	if($registrationForm.length){
  $registrationForm.validate({
      rules:{
           FirstName: {
              required: true,
              noSpace: true
          },
           LastName: {
              required: true,
              noSpace: true
          },
          dob: {
              required: true
          },
          gender: {
              required: true
          },
          qualification: {
              required: true
          },          
		  skills: {
              required: true
          },
		  employeetype:{
			   required: true
		  },
		  department:{
			   required: true
		  }
      },
      messages:{
          FirstName: {
              required: 'Please enter FirstName!'
          },
          LastName: {
              required: 'Please enter LastName!'
          },
          dob: {
              required: 'Please enter Your Date of birth !'
          },
          qualification: {
              required: 'Please enter your qualification!',
          },
          country: {
              required: 'Please select country!'
          },
          gender: {
              required: 'Please enter your gender category!'
          },
		  skills: {
              required: 'Please choose atleast one skill!'
          },
		  employeetype:{
			   required: 'Please choose your employee type!'
		  },
		  department:{
			   required: 'Please choose your department!'
		  }
      },
      errorPlacement: function(error, element) 
      {
        if (element.is(":radio")) 
        {
            error.appendTo(element.parents('.employeetype'));
        }
        else if(element.is(":checkbox")){
            error.appendTo(element.parents('.skills'));
        }
        else 
        { 
            error.insertAfter( element );
        }
        
       }
  });
}	
}

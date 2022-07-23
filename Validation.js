$(document).ready(function(){
  $("#agecalc").click(function(){
	$("#agecalc").datepicker();
	var date1 = $("#agecalc")
	var dtCurrent = new Date();
	var agedifference=dtCurrent.getFullYear() - dtDOB.getFullYear();
    document.write(agedifference);
  });
});



(function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms)
      .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
        if ($('.form-check-input').filter(':checked').length < 1){
               // alert("Please Check at least one Color Box");
         $(".err").show();
                 return false;
         }else{
       $(".err").hide();
             //alert("Proceed");
         }
      }, false)
      })
    }
	)
	()
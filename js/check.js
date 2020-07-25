function displayRadioValue() {
  if ($('input[name=Fever]:checked').val() == "Yes" )  {
    if ($('input[name=Tiredness]:checked').val() == "Yes" && $('input[name=Sore_Throat]:checked').val() == "Yes" && $('input[name=Dry_cough]:checked').val() == "Yes" && $('input[name=Headache]:checked').val() == "No" && $('input[name=diffbreath]:checked').val() == "No"){
      document.getElementById("result").innerHTML= "You have mild symptoms.You should probably get yourself checked"
      }
    else if ($('input[name=Tiredness]:checked').val() == "Yes" && $('input[name=Sore_Throat]:checked').val() == "Yes" && $('input[name=Dry_cough]:checked').val() == "Yes" && $('input[name=Headache]:checked').val() == "Yes" && $('input[name=diffbreath]:checked').val() == "Yes"){
      document.getElementById("result").innerHTML= "You have the major symptoms. Please get yourself checked  immediately"
      }
    else {
      document.getElementById("result").innerHTML= "Don't need to be worried its normal fever."
    }
    }
 if ($('input[name=Fever]:checked').val() == "No") {
      document.getElementById("result").innerHTML= "No worries, you are fine. "
    }
  if (!$("input[name='Fever']:checked").val() || !$("input[name='Fever']:checked").val() || !$("input[name='Tiredness']:checked").val() || !$("input[name='Ache']:checked").val() || !$("input[name='Sore_Throat']:checked").val() || !$("input[name='Dry_cough']:checked").val()  ) {
    if (!$('input[name=Headache]:checked').val() ||  !$('input[name=diffbreath]:checked').val()){
       document.getElementById("result").innerHTML= "Please fill properly "
     }
    }
 }

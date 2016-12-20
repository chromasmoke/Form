function validate() {
	"use strict";
	 var errorMessage= "";
	 
	 var nameRegEx = /^[A-Za-z\s\ -]{2,}$/;
	 var miRegEx = /^[A-Za-z]{1,}$/;
	 var lastNameRegEx = /^[A-Za-z\s\ -]{2,}$/;
	 var addressRegEx = /^[A-Za-z0-9\ -]{2,30}$/;
	 var cityRegEx = /^[A-Za-z\s\ -]{2,}$/;
	 var zipRegEx = /^[0-9]+$/;
	 var emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,15}$/;
	 var areaCodeRegEx = /^[0-9]{3,}$/;
	 var phoneFieldOneRegEx = /^[0-9]{3,}$/;
	 var phoneFieldTwoRegEx = /^[0-9]{4,}$/;
	 var passwordRegEx= /^.{8,36}$/;
	 
	


	
	
//Name
	if (document.buyerInfo.firstName.value.search(nameRegEx)) {
	
		errorMessage += "Please provide your First Name \n\n"; 
	
		} 
	if (document.buyerInfo.mi.value.search(miRegEx)) {
		
		errorMessage += "Please provide your Middle Initial \n\n"; 	
		
		}	
	if (document.buyerInfo.lastName.value.search(lastNameRegEx)) {
		
		errorMessage += "Please provide your Last Name \n\n"; 	
		
		}	
			
		
		
//Address	
	if (document.buyerInfo.address.value.search(addressRegEx)) {
		
		errorMessage += "Please provide your Street \n\n"; 	
		
		}	
		
	if (document.buyerInfo.city.value.search(cityRegEx)) {
		
		errorMessage += "Please provide your City \n\n"; 	
		
		}	
		
		
	if (document.buyerInfo.zipCode.value.search(zipRegEx)) {
		
		errorMessage += "Please provide your Zip Code \n\n"; 	
		
		}	
		
	//Return Info
	
	if (document.buyerInfo.email.value.search(emailRegEx)) {
		
		errorMessage += "Please provide a Valid E-mail \n\n"; 	
		
		}	
	
	if (document.buyerInfo.areaCode.value.search(areaCodeRegEx)) {
		
		errorMessage += "Please provide your Area Code \n\n"; 	
		
		}	
		
	if (document.buyerInfo.phoneFieldOne.value.search(phoneFieldOneRegEx)) {
		
		errorMessage += "Please provide your Phone Number \n\n"; 	
		
		}	
		
		
		
	if (document.buyerInfo.phoneFieldTwo.value.search(phoneFieldTwoRegEx)) {
		
		errorMessage += "Please provide your Phone Number \n\n"; 	
		
		}	
		
	//Product Type
	var i; 
	var radioLength = document.getElementsByName("product");
	var buildValid=""; 
	for (i=0; i < radioLength.length; i++) {
			if (radioLength[i].checked) {
				buildValid="valid"; 
			}			
	}
	if (buildValid==="") {
		          errorMessage += "Please select a Product Type \n\n";		
	}
		
		
	if((document.buyerInfo.reasonReturn.value) === '') 
	 {      
              errorMessage += "Please provide a Reason For Return \n\n";
                      
	 }
	 
		 
	 if (document.buyerInfo.password.value.search(passwordRegEx)) {
		
		errorMessage += "Please enter a Password \n\n"; 	
		
		}
		
	
   if(!document.buyerInfo.checkTerms.checked)
	{
		errorMessage += "Please Agree to Terms \n\n";
	}
	
	
	if(errorMessage !== ""){
		
		alert(errorMessage);
		return(false);
		
		}else{
		
		alert("Form Submitted");
		return(true);
		
	}
	
	
	
	
}

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.friends.newEntity();// to create  space for new entity on friends
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.friends.addEntity(sources.friends.getCurrentElement()); //to get elements from the page
		//and add them to the new entity created
	}
	{
		sources.friends.save()// to save the newEntity created
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		sources.friends.newEntity();
		button2.click()
		validatePage()
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock


/*WAF.onAfterInit = function onAfterInit() {

// @region namespaceDeclaration
	var txtDob = {};	// @textField
	var txtAge = {};	// @textField
	var button1 = {};	// @button
	var button2 = {};	// @button
	var documentEvent = {};	// @document
// @endregion

// eventHandlers

	txtDob.blur = function txtDob_blur (event)
	{
		
	};

	txtAge.focus = function txtAge_focus (event)
	{
		txtAge.value=2013-parseInt(yearOfBirth)
	};

	button1.onmouseover = function button1_click (event)
	{
		$("#button1").animate (
		{
			opacity:.5,
	 		opacity:.1
	 	},6000);
	};
	button1.click = function button1_click (event)
	{
	
		

	button2.click = function button2_click (event)
	{
		
	};
var yearOfBirth=''
//starting page validation function to check data entered by user
function validatePage()
{
	var email= textField12.value
	var a= email.indexOf('@')
	if (a=-1)
	{ 
	alert ('You have entered an invalid E-Mail Address')
	}  
	/*var dateOfBirth= txtDob.value.toString
	alert (dateOfBirth)
	var yearOfBirth= dateOfBirth.substring(11,14)
	alert (yearOfBirth)
	/var currentYear= new Date
	alert (currentYear)
	var age=currentYear-yearOfBirth
	txtAge.value=age*/
	/*var mobileNumber=textField11.value
	re = /[a-z]/
	alert (re)
	if (re.test(mobileNumber))
	{
		alert ("You have entered an invalid phone number")
	}*/ // i am being silly here, trying to validate phone number when i have already specified the data type in my database (LOL)
}

	documentEvent.onLoad = function documentEvent_onLoad (event)
	{
		sources.friends.newEntity();
		button2.click()
		validatePage()
	};
	
	

// @region eventManager
	WAF.addListener("txtDob", "blur", txtDob.blur, "WAF");
	WAF.addListener("txtAge", "focus", txtAge.focus, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};


WAF.onAfterInit = function onAfterInit() {// @lock
	//$("#richText4").slideDown("slow",function(){alert('Welcome to Palz')})
	/*$("#richText4").animate(
	{
		opacity:.1,width:"500px",color:"purple"
	},20000);*/
// @region namespaceDeclaration// @startlock
	var menuItem2 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem7 = {};	// @menuItem
	var button1 = {};	// @button
	var menuItem9 = {};	// @menuItem
	var textField1 = {};	// @textField
	var documentEvent = {};	// @document
// @endregion// @endlock

//sources.queryString.sync()
//sources.friends.query('name = :1', { params : [queryString + '*'] });
// eventHandlers// @lock
// I silenced the Jquery animation code



	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$('componentmain').loadComponent('/alertz2.waComponent');
		$('div#document_componentmain').css({'display':'block',visibility:"visible;"});
		//element.style { visibility: hidden;}
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$('componentmain').loadComponent('/alertz.waComponent');
		$('div#document_componentmain').css({'display':'block','visibility': 'visible'});
	};// @lock

	menuItem7.click = function menuItem7_click (event)// @startlock
	{// @endlock
		var i = sources.friends.length
		while (i>0)
		{
		birthDay()
		i=i-1
		
		}
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.friends.query('name = :1 order by name', { param : [queryString + '*'] });
	};// @lock

	menuItem9.click = function menuItem9_click (event)// @startlock
	{// @endlock
		
	};// @lock

	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		//var q = sources.friends.FullName()
    	//sources.friends.query(q);
	};// @lock
//declariing jquery function to move to next line here	
/*function Next(){ //testing code automatically scrolling the list (jquery)
	$('div#dataGrid2')
	{
		$('waf-dataGrid2-col-5').focus (function() {
			$(this).next();
			})
	}
}*/
//declaring birthday function here
function birthDay()
{
	var birthday=sources.friends.DOB.toDateString()
	var birthday2=birthday.substring(4,10)
	var name=sources.friends.Surname + sources.friends.FullName
	//----------------------------------------------------------------
	var today = new Date
	var today2=today.toDateString()
	var today3=today2.substring(4,10)
	if (birthday2==today3){
		alert (name+'\'s  birthday is Today')
		btnNext.click()
	}
	else if (sources.friends.DOB = '')
	{
		alert (name+' has no birthday saved!')
	}
	else
	{
		btnNext.click()
	} 
	 
};	

function logOn ()
{	var user;
	var pwd;
	userR=(WAF.directory.currentUser)
	alert (userR)
	pwdR=(WAF.directory.currentUserpwd)
	user = prompt('Enter UserName','');
	pwd= prompt('Enter PassWord','');
	if (user==userR && pwd==pwdR)
	{
	alert ("Authentication Successful")
	}
	else if (user==userR && pwd!=pwdR)
	{
	alert ("Incorrect Password")
	window.reload;
	}
	else if (pwd==pwdR && user!=userR)
	{
	alert ("Incorrect UserName")
	window.reload;
	}
	else
	{ 
	alert ("Authentication Failed")
	window.reload;
	} 
};s
	
	/*if (user=='spydo' && pwd=='spydo')
	{
	alert ("Authentication Successful")
	}
	else if (user=='spydo')
	{
	alert ("Incorrect Password")
	window.reload;
	}
	else if (pwd=='spydo')
	{
	alert ("Incorrect UserName")
	window.reload;
	}
	else
	{ 
	alert ("Authentication Failed")
	window.reload;
	} 
}*/
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
	$('div#document_componentmain').css({'display':'block',visibility:"visible;"});
	logOn ()
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem7", "click", menuItem7.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("menuItem9", "click", menuItem9.click, "WAF");
	WAF.addListener("textField1", "change", textField1.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

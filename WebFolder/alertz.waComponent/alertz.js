
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image2 = {};	// @image
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/alertz.waComponent');
		$('div#document_component1').css({'display':'block','visibility': 'visible'});
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.alerts.newEntity();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.alerts.addEntity(sources.alerts.getCurrentElement())
	}
	{
		sources.alerts.save()// to save the newEntity created
	}
	{	
		sources.alerts.newEntity(); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener(this.id + "_image2", "click", image2.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
// @endregion
};// @endlock

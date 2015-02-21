parsebio={};

parsebio.hello = function(){
	console.log('parser');
	return false;
}

parsebio.get = function(cmd,fun,parms){ // submit command cmd to cbio WebAPI and process it through callback function fun
	if(!cmd){cmd='getTypesOfCancer'}; // see http://www.cbioportal.org/public-portal/web_api.jsp for list of comands
	if(!fun){fun=function(x){console.log(cbio.table(x))}};
	if(!cbio.get.callbacks){cbio.get.callbacks={}};
	if(!cbio.get.cache){cbio.get.cache={}};
	var uid = this.uid('get');
	if(!parms){
		var Qparms="";
	} else {
		var Qparms="&";
		Qparms+=cbio.parms(parms);
	}
	this.get.callbacks[uid]={ // maybe this can be used as a cache to avoid repeating calls
		cmd:cmd,
		fun:function(x){cbio.get.cache[cmd+Qparms]=x;return fun(x)},
		t:Date.now()
	}
	if(!this.get.cache[cmd+Qparms]){ // this is not in the cache already
		this.getScript('https://script.google.com/macros/s/AKfycbwsJ5_WKUUZX1ccf7m1zYbtksCm-FEck_uC2agZv_DXAzsS7H4p/exec?cmd='+cmd+'&callback=cbio.get.callbacks.'+uid+'.fun'+Qparms);
	} else {
		parsebio.get.callbacks[uid].fun(this.get.cache[cmd+Qparms]);
	}
	
	// proxy code at https://script.google.com/a/macros/mathbiol.org/d/17o5B1sXjmUEWRHG_6vHQhmz3qTMPCgpOvlX1kNvDQCkVcrH5ANsi2NrY/edit
	return uid;
}
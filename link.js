// console.log("chrome-google-research-link-open-direct");
// $(function(){
// 	$('a').each(function(event){
// 		var _this = $(this);
// 		var href = _this.attr("href");
// 		var dataHref = _this.attr("data-href");
// 		// console.log(href,dataHref);
// 		if((href &&  /[^(http)]/i.test(href))  &&  (dataHref && dataHref.length) > 6){
// 			console.log(href,dataHref);
// 			_this.attr("href",dataHref);
// 		}	 
// 	})

// });
(function(){
	console.log("chrome-google-research-link-open-direct");
	var  search= document.getElementById('search');
	if(search){
		var allA = search.querySelectorAll('a');
		for(var  i = 0 ,len = allA.length ; i < len ; i++){
			var currentA = allA[i];
			var dataHref = currentA.getAttribute('data-href');
			var href = currentA.getAttribute('href');		
			console.log(i);
			console.log('href+++++++++>',href);
			console.log('reg===========>',/[^(http)]/i.test(href));
			console.log('dataHref------------------>',dataHref);
		}
	}	
})()
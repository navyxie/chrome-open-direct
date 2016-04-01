;(function(win,doc){
    doc.addEventListener('click',function(e){
        console.log(e);
        var target = e.target;
        if(target.tagName === 'A'){
            var href = target.getAttribute('href');
            if(href && /[^(http)]/i.test(href)){
                href = pickUrl(href);
                e.preventDefault();
                window.open(href);
            }
        }
    },false)
    function pickUrl(url){
        var originUrl = url;
        try{
            url = decodeURIComponent(url);
            var paramArr = url.split('&');
            for(var i = 0 , len = paramArr.length ; i < len; i++){
                var mapObj =  paramArr[i].split('=');
                if(mapObj[0] === 'url'){
                    originUrl = mapObj[1];
                    break;
                }
            }
        }catch(e){

        }
        return originUrl;
    }
})(window,document);
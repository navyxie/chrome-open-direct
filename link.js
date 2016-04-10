;(function(win,doc){
    $(function(){
        $('#search').on('click','a',function(e){
            var target = e.target;
            var href = target.getAttribute('href');
            if(href && /^[^(https:)]/i.test(href)){
                e.preventDefault();     
                target.setAttribute('href',pickUrl(href));
                window.open(target.getAttribute('href'));
            }
        })
    })；
    function pickUrl(url){
        var originUrl = url;
        try{
            var paramArr = url.split('&');
            for(var i = 0 , len = paramArr.length ; i < len; i++){
                var mapObj =  paramArr[i].split('=');
                if(mapObj[0] === 'url'){
                    originUrl = decodeURIComponent(mapObj[1]);
                    break;
                }
            }
        }catch(e){

        }
        return originUrl;
    }
})(window,document);
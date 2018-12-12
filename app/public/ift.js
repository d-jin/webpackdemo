{
    console.log(123);
}

(function(win,cog){
    cog.hello = function(){
        console.log('hello,world');
    }
})(window,window.cog['cog']=window.cog['cog']||{})
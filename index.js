function dbouncer(extResource, extTime = 0) {
    var timeoutObj = null;
  
    function debounce(...funcArgs) {
        debounce.clear();
        
        if (typeof extResource === 'function' && typeof extTime === 'number') {
            timeoutObj = setTimeout(() => extResource(...funcArgs), extTime);
            return;
        }

        var func = funcArgs[0];
        var time = funcArgs[1];
        if(typeof extResource === 'number'){

            if(typeof func === 'function' && typeof time !== 'number'){
                timeoutObj = setTimeout(func, extResource);
                return;
            }
        }
        
        time = time || 0;
        if (typeof func === 'function' && typeof time === 'number') {
            timeoutObj = setTimeout(func, time);
            return;
        }
    }
  
    debounce.clear = () => {
      if (timeoutObj !== null)
        clearTimeout(timeoutObj);
    };
    
    return debounce;
}

module.exports = dbouncer;
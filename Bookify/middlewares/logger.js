function logReqResponseOnConsole(req,res,next){
    console.log(`[REQ]:${req.method}: ${req.path}`);
    next()
}

function logReqResponseOnConsoleForRequestMethod(methodName){
    return function(req,res,next){
        if(req.method === methodName){
          console.log(`[REQ]:${req.method}: ${req.path}`);  
        }
        next();
    }
}

module.exports={
    logReqResponseOnConsole,
logReqResponseOnConsoleForRequestMethod,}
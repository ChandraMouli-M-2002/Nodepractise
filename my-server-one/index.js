const http=require('http');

const server=http.createServer(function(req,res){
     console.log('A new incoming req.');
     console.log(`req is comming from ${req.url}`);

    //  return res.end('Hey i got your req, Thanks')
    //  return res.end(`Hey your trying to acces ${req.url}`)

    switch(req.url){
        case"/":
           res.end("HomePage");
           break;
        case"/user":
           res.end("Users Page");
           break;
        case"/offer":
           res.end("This is Offer Page");
           break;
        default: res.end("This is page is not exist 400");
    }
});

server.listen(8000,()=>console.log("Server Running on PORT 8000"));
const fs=require('fs');
const http=require('http');

const server=http.createServer(function(req,res){
    const logs= fs.readFileSync('./serverlogs.txt');
    if(req.url === '/logs'){
        return res.end(logs);
    }
    if(req.url === '/favicon.ico') return res.end();
    if(req.url === '/.well-known/appspecific/com.chrome.devtools.json') return res.end();
    // fs.writeFileSync(`${Date.now()}.txt`,`A new Req came to path ${req.url}`);
    fs.writeFileSync(`serverlogs.txt`,`${logs.toString()} \n [${Date.now().toString()}] A new Req came to path ${req.url}`);
    return res.end("Hello from the server")
});

server.listen(8000,()=>console.log("localhost 8000 is running properly"));
import http  from 'node:http';

const PORT = 5000;

export const server = http.createServer((request,response)=> {
    const{url,method} = request;
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);

    if (url ==='/ ' && method ==='GET'){
        response.end('Home Page');

    }else if (url ==='/about ' && method ==='GET'){
        response.end('About Page');

    }
    else if (url ==='/contact ' && method ==='GET'){
        response.end('Contact Page');

    }else{
        response.writeHead(200,{'Content-type': 'text/plain'});
        response.end('Page Not Found ');
    }


});

server.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
});
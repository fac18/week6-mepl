const {
    handleHome,
    handlePublic,
    postHandler,
    getHandler
} = require('./handlers');


const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
        handleHome(request, response);
    }
    else if (endpoint.includes('public')) {
        handlePublic(request, response, endpoint);
    }
    else if (endpoint === '/.......') {
        getHandler(request, response);
    }
    else if (endpoint === '/.......') {
        postHandler(postHandler);
    } else {
        response.writeHead(404, {'Content-type': 'text/html'});
        response.end('<h1> Page not found</h1>');
    }
};

module.exports = router;
// routers.js
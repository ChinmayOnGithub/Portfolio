const http = require('http'); // Import the http module to create an HTTP server
const fs = require('fs'); // Import the fs module to interact with the file system
const path = require('path'); // Import the path module to handle and transform file paths

const port = 3000; // Define the port number the server will listen on

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Determine the file path based on the request URL
    const filePath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);

    // Get the file extension of the requested file
    const extName = String(path.extname(filePath)).toLowerCase();

    // Define MIME types for different file extensions
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
    };

    // Determine the content type based on the file extension
    const contentType = mimeTypes[extName] || 'application/octet-stream'; // Default to a generic binary stream

    // Read the requested file from the file system
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // Handle file not found error
            if (err.code === "ENOENT") {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("404: File not found!");
            } else {
                // Handle other errors
                res.writeHead(500);
                res.end("500: Internal Server Error");
            }
        } else {
            // Serve the file content with the appropriate content type
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, "utf-8");
        }
    });
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
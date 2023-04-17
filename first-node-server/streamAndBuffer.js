// Exploring stream and buffer

const fs = require("fs");

// // reading file using stream
const readStream = fs.createReadStream("./data.txt", "utf8");

// // reading file using buffer
readStream.on("data", (chunk) => {
    console.log("....................");
    console.log(chunk);
    });

readStream.on("open", () => {
    console.log("File is open");
});

// pause and resume stream

setTimeout(() => {
    readStream.pause();
    console.log("Stream is paused");
}, 20);

setTimeout(() => {
    readStream.resume();
    console.log("Stream is resumed");
}, 8000);

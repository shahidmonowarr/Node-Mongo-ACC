// Exploring File System Module
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    // asynchronous way of reading file
    // fs.readFile("data.txt", (err, data) => {
    //   if (err) {
    //     res.write("Failed to read data");
    //     res.end();
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // });

    // synchronous way of reading file
    // const data = fs.readFileSync("data.txt");
    // res.write(data);
    // res.end();

    // asynchronous way of writing file
    fs.writeFile("newData.txt", "Hello Node JS ....", (err) => {
        if(err){
            res.write("Failed to write data");
            res.end();
        }
        else{
            res.write("Data written successfully");
            res.end();
        }
    });
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

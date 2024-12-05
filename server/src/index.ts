 import express, { json, Request, Response } from 'express'
 import os from 'os'
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (req:Request, res:Response) => {
    console.log(req.socket.remoteAddress);
    
    console.log(req.connection.remoteAddress);
    console.log('System Information:');
    console.log(`Platform: ${os.platform()}`);
    console.log(`OS Type: ${os.type()}`);
    console.log(`OS Version: ${os.version()}`);
    console.log(`Architecture: ${os.arch()}`);
    console.log(`CPU Info: ${JSON.stringify(os.cpus()[0], null, 2)}`);
    console.log(`Total Memory: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Free Memory: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Host Name: ${os.hostname()}`);
    console.log(`Network Interfaces: ${JSON.stringify(os.networkInterfaces(), null, 2)}`)
    
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:port`);
});
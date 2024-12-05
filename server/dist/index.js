"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    console.log(req.socket.remoteAddress);
    console.log(req.connection.remoteAddress);
    console.log('System Information:');
    console.log(`Platform: ${os_1.default.platform()}`);
    console.log(`OS Type: ${os_1.default.type()}`);
    console.log(`OS Version: ${os_1.default.version()}`);
    console.log(`Architecture: ${os_1.default.arch()}`);
    console.log(`CPU Info: ${JSON.stringify(os_1.default.cpus()[0], null, 2)}`);
    console.log(`Total Memory: ${(os_1.default.totalmem() / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Free Memory: ${(os_1.default.freemem() / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Host Name: ${os_1.default.hostname()}`);
    console.log(`Network Interfaces: ${JSON.stringify(os_1.default.networkInterfaces(), null, 2)}`);
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:port`);
});

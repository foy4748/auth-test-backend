"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const PORT = process.env.PORT || (config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.port) || 3001;
let server;
function main() {
    try {
        server = app_1.default.listen(PORT, () => {
            console.log(`Assignment 8 server is listening on port ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
main();
process.on('unhandledRejection', () => {
    if (server) {
        console.log('❌ Server DOWN. Unhandled Promise Rejection');
        server.close();
        process.exit(1);
    }
    else {
        console.log('❌ Server DOWN. Unhandled Promise Rejection');
        process.exit(1);
    }
});
process.on('uncaughtException', () => {
    console.log('❌ Server DOWN. Uncaught Exception');
    process.exit(1);
});

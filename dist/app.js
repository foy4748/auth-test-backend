"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandlers_1 = __importDefault(require("./app/middlewares/globalErrorHandlers"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const corsOptions = {
    origin: [
        'https://auth-test-frontend.vercel.app',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
// App Routes
app.use('/api', routes_1.default);
app.get('/', (_, res) => {
    res.send({ success: true, message: 'Server is UP and RUNNING' });
});
app.use(globalErrorHandlers_1.default);
exports.default = app;

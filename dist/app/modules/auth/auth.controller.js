"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTestProtectedRoute = exports.CPublicTestRoute = exports.CLoginUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsyncError_1 = __importDefault(require("../../utils/catchAsyncError"));
const config_1 = __importDefault(require("../../config"));
exports.CLoginUser = (0, catchAsyncError_1.default)((req, res) => {
    const { username, password } = req.body;
    const isUsernameOK = username == 'foy4748';
    const isPasswordOK = password == 'TestTest$1';
    const tokenPayload = {
        uid: '1122334455667788',
    };
    const token = jsonwebtoken_1.default.sign(tokenPayload, String(config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.jwt_access_token));
    if (isUsernameOK && isPasswordOK) {
        res
            .cookie('token', token, config_1.default.cookieOptions)
            .send({ error: false, message: 'Logged In Successfully', token });
    }
    else {
        res.send({ error: true, message: 'Logged In FAILED' });
    }
});
exports.CPublicTestRoute = (0, catchAsyncError_1.default)((_, res) => {
    res.send({ error: false, message: 'URL hit successful' });
});
exports.CTestProtectedRoute = (0, catchAsyncError_1.default)((_, res) => {
    res.send({ error: false, message: 'URL hit successful' });
});

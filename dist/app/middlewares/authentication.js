"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { TuserRole } from '../modules/user/user.interface';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../config/index"));
const AppError_1 = __importDefault(require("../error/AppError"));
const catchAsyncError_1 = __importDefault(require("../utils/catchAsyncError"));
const authentication = (shouldBeAnAdmin) => {
    return (0, catchAsyncError_1.default)((req, _, next) => {
        let { token } = req.cookies;
        /* eslint no-console: off*/
        console.log(req.headers);
        if (!token)
            token = req.headers.authorization;
        let decoded;
        try {
            decoded = jsonwebtoken_1.default.verify(String(token), String(index_1.default === null || index_1.default === void 0 ? void 0 : index_1.default.jwt_access_token));
        }
        catch (error) {
            throw new AppError_1.default(403, 'Unauthorized Access 1');
        }
        if (shouldBeAnAdmin && shouldBeAnAdmin != Boolean(decoded.isAdmin)) {
            throw new AppError_1.default(403, 'Unauthorized Access 11');
        }
        if (decoded.isDeleted) {
            throw new AppError_1.default(403, 'User is inactivated by admin. No longer Access');
        }
        if (decoded) {
            // JWT Expiry: The provided JWT (JSON Web Token) has expired.
            req.decoded = decoded;
            next();
        }
        else {
            // Undefined JWT: No JWT is provided in the request headers.
            // Invalid JWT: The JWT provided is invalid or malformed.
            throw new AppError_1.default(403, 'Unauthorized Access 2');
        }
    });
};
exports.default = authentication;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const authentication_1 = __importDefault(require("../../middlewares/authentication"));
const router = express_1.default.Router();
router.post('/login', auth_controller_1.CLoginUser);
router.get('/', (0, authentication_1.default)(), auth_controller_1.CTestProtectedRoute);
router.get('/public', auth_controller_1.CTestProtectedRoute);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("../modules/auth/auth.route"));
const globalRoutes = express_1.default.Router();
const routes = [
    {
        path: '/auth',
        element: auth_route_1.default,
    },
];
routes.forEach((route) => globalRoutes.use(route.path, route.element));
exports.default = globalRoutes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), '.env')) });
exports.default = {
    port: process.env.PORT || 3001,
    database_url: process.env.DATABASE_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    // flash_db_secret: process.env.FLUSH_DB_SECRET,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: (process.env.NODE_ENV === 'production'
            ? 'none'
            : 'strict'),
        maxAge: 3600 * 1000,
    },
};

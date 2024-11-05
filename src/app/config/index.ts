import dotenv from 'dotenv';
import path from 'path';

type cookieSameSite = boolean | 'none' | 'strict' | 'lax' | undefined;
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
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
      : 'strict') as cookieSameSite,
    maxAge: 3600 * 1000,
  },
};

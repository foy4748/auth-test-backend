import jwt from 'jsonwebtoken';
import catchAsyncError from '../../utils/catchAsyncError';
import config from '../../config';

export const CLoginUser = catchAsyncError((req, res) => {
  const { username, password } = req.body;
  const isUsernameOK = username == 'foy4748';
  const isPasswordOK = password == 'TestTest$1';
  const tokenPayload = {
    uid: '1122334455667788',
  };
  const token = jwt.sign(tokenPayload, String(config?.jwt_access_token));
  if (isUsernameOK && isPasswordOK) {
    res
      .cookie('token', token, config.cookieOptions)
      .send({ error: false, message: 'Logged In Successfully', token });
  } else {
    res.send({ error: true, message: 'Logged In FAILED' });
  }
});

export const CPublicTestRoute = catchAsyncError((_, res) => {
  res.send({ error: false, message: 'URL hit successful' });
});

export const CTestProtectedRoute = catchAsyncError((_, res) => {
  res.send({ error: false, message: 'URL hit successful' });
});

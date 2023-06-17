import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.sendStatus(403);

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.sendStatus(401);

    req.user = user;

    return next();
  });

  return next();
};

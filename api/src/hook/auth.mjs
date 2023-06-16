import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.sendStatus(403);

  jwt.verify(token, 'epf', (err, user) => {
    if (err) return res.sendStatus(401);

    req.user = user;

    next();
  });
};


import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/* export default (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
  } catch (err) {
    return res.sendStatus(401);
  }

  return next();
}; */

export default (req, res, next) => {
  try {
    const { headers } = req;
    const { cookie } = headers;

    /* On vérifie que le JWT est présent dans les cookies de la requête */
    if (!cookie || cookie.split('=')[0] !== 'access_token') {
      return res.sendStatus(401).json({ message: 'Missing token in cookie' });
    }

    const accessToken = cookie.split('=')[1];

    /* On vérifie que le token CSRF est présent dans les headers de la requête */
    if (!headers || !headers['x-xsrf-token']) {
      return res.sendStatus(401).json({ message: 'Missing XSRF token in header' });
    }

    const xsrfToken = headers['x-xsrf-token'];

    /* On vérifie et décode le JWT à l'aide du secret et de l'algorithme utilisé pour le générer */
    const decoded = jwt.verify(accessToken, process.env.JWT_TOKEN, {
      algorithms: process.env.JWT_ALGORITHM
    });

    /* On vérifie que le token CSRF est le même que dans le payload du JWT */
    if (xsrfToken !== decoded.xsrfToken) {
      return res.sendStatus(401).json({ message: 'Invalid XSRF token' });
    }

    req.user = decoded;

    /* On vérifie que l'utilisateur existe en base de données
    const userId = decodedToken.sub;
    const user = this.UserModel.findById(userId);
    console.log(user);
    if (!user) {
      return res.sendStatus(401).json({ message: 'Invalid user' });
    }

    /* On passe l'utilisateur dans notre requête pour les prochains middlewares
    req.user = user;

    /* On appelle le prochain middleware */
    return next();
  } catch (err) {
    return res.status(500).json({
      message: 'Internal server error',
      error: err
    });
  }
};

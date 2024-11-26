import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided, access denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token, access denied.' });
  }
};

export default verifyToken;
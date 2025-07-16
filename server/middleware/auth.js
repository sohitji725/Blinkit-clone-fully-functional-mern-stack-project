import jwt from 'jsonwebtoken';

const auth = async (request, response, next) => {
  try {
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return response.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN
, (err, decoded) => {
      if (err) {
        return response.status(401).json({ message: 'Invalid token', success: false });
      }

      request.userId = decoded.id;
      console.log("Authenticated userId:", decoded.id);
      next();
    });
  } catch (error) {
    return response.status(500).json({
      message: 'Authentication failed',
      error: error.message || error,
      success: false,
    });
  }
};

export default auth;

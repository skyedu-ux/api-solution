import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export const authenticateAdmin = (req, res, next) => {
    const {role} = req.query;
    if(role === 'user'){
        return next()
    }

    const token = req.cookies?.access_token || req.headers.authorization?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        if (decoded.role === 'admin') {
            return next();
        } else {
            return res.status(403).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};
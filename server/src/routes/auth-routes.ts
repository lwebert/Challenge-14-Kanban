import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
	// TODO: If the user exists and the password is correct, return a JWT token
	const { username, password } = req.body;
  console.log('username: ', username, 'password: ', password)

	const user = await User.findOne({ where: { username: username } });

  console.log('Auth-routes.ts login user: ', user);
	if (!user) {
    console.log('Auth-routes.ts login !user.')
		return res
			.status(401)
			.json({ message: 'Authentication failed. Invalid username.' });
	}

	const passwordIsValid = await bcrypt.compare(password, user.password); //returns boolean

  console.log('Auth-routes.ts login passwordIsValid: ', passwordIsValid)

	if (!passwordIsValid) {
		return res
			.status(401)
			.json({ message: 'Authenticatino failed. Invalid password.' });
	}

	const secretKey = process.env.JWT_SECRET_KEY || '';
	const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
	return res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;

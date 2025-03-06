import { UserLogin } from '../interfaces/UserLogin';

const login = async (userInfo: UserLogin) => {
	// TODO: make a POST request to the login route
	console.log('authAPI login userInfo: ', userInfo);
	// try {
	// } catch (err) {
	//   console.log('Error from user login: ', err);
	// }

	return { token: 'asdf' };
};

export { login };

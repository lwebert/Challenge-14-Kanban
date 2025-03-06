// import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
	getProfile() {
		// TODO: return the decoded token
	}

	loggedIn() {
		// TODO: return a value that indicates if the user is logged in
    return true
	}

	isTokenExpired(token: string) {
		// TODO: return a value that indicates if the token is expired
		console.log('Auth isTokenExpired token: ', token);
		return false;
	}

	getToken(): string {
		// TODO: return the token
		return 'ASDF';
	}

	login(idToken: string) {
		// TODO: set the token to localStorage
		// TODO: redirect to the home page
		console.log('Auth login idToken: ', idToken);
	}

	logout() {
		// TODO: remove the token from localStorage
		// TODO: redirect to the login page
	}
}

export default new AuthService();

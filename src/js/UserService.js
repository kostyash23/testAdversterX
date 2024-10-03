export default class UserService {
    static async fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch users', error);
            return [];
        }
    }
}

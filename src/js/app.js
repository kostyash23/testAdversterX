import UserService from './UserService';
import UserCard from './UserCard';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', async () => {
    const userList = document.getElementById('user-list');
    const searchInput = document.getElementById('search');

    let users = await UserService.fetchUsers();
    let filteredUsers = users;

    const renderUsers = (userList, users) => {
        userList.innerHTML = '';
        if (users.length === 0) {
            const noUserMessage = document.createElement('p');
            noUserMessage.textContent = 'User not found';
            userList.appendChild(noUserMessage);
        } else {
            users.forEach(user => {
                const userCard = new UserCard(user);
                userList.appendChild(userCard.render());
            });
        }
    };


    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(query) ||
            user.username.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.phone.toLowerCase().includes(query) ||
            user.company.name.toLowerCase().includes(query)
        );
        renderUsers(userList, filteredUsers);
    });


    renderUsers(userList, filteredUsers);
});

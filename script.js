let login = prompt ('Who\'s there?', 'Enter your username');
const user = 'Admin';

if (login == null || login == false) {
    alert ('Cancelled');
} else if (login !== user) {
    alert ('I don\'t know you');
} else if (login === user) {
    pwd = prompt ('Password?', 'Enter the password');
}

if (pwd === null || pwd === false) {
    alert ('Cancelled');
} else if (pwd !== 'TheMaster') {
    alert ('Wrong password');
} else if (pwd === 'TheMaster') {
    alert('Welcome!');
}
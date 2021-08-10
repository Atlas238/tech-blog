console.log('Login Script');
const loginForm = document.getElementById('#login');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('/user', {
        method: 'POST',
        body: {
            name: document.getElementById("#login-username").value,
            email: document.getElementById("#login-email").value,
            password: document.getElementById("#login-password").value,
        },
        headers: {
            "Content/Type": "application/json",
        }
    }).then((result) => {
        return result.json();
    }).then((resultJson) => {
        
    })
})
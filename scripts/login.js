const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const signInForm = document.querySelector('.sign-in form');

signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    const apiUrl = 'https://89b4-203-205-32-65.ngrok-free.app/login';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Login success: ');
            console.log('Login success:', data);
        } else {
            alert('Login failed ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra khi kết nối đến server!');
    }
});


const signUpForm = document.querySelector('.sign-up form');

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    const apiUrl = 'https://89b4-203-205-32-65.ngrok-free.app/signup';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }) 
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Sign Up success!');
            console.log('Sign Up success:', data);
        } else {
            alert('Sign Up failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra khi kết nối đến server!');
    }
});

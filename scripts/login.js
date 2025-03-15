const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//------------------------------------------SIGN IN------------------------------------------------------
const signInForm = document.querySelector('.sign-in form');

signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu mặc định

    // Lấy giá trị email và password (không dùng đến)
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Giả lập hiệu ứng chuyển hướng sau khi nhấn "Login"
    //alert('Login successful! Redirecting to Calendar...');
    window.location.href = '../pages/calendar.html'; // Chuyển hướng đến trang Calendar

    /*
    // Đoạn này gọi API, hiện tại sẽ comment ẩn vì không có server
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
            alert('Login successful! Redirecting to Calendar...');
            window.location.href = '../pages/calendar.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Có lỗi xảy ra khi kết nối đến server!');
    }
    */
});


//------------------------------------------SIGN UP------------------------------------------------------
 /*const signUpForm = document.querySelector('.sign-up form');

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    //const apiUrl = 'https://89b4-203-205-32-65.ngrok-free.app/signup';
   
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
*/
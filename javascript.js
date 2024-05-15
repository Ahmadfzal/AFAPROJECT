//FUNGSI LOGIN
document.getElementById('loginForm').addEventListener('submit', function(event) {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username === 'user' && password === 'password') {
                // Redirect to dashboard or any other page after successful login
                alert('Login Successful!');
                window.open('home/index.html')
            } else {
                document.getElementById('errorMessage').innerText = 'Invalid username or password.';
                event.preventDefault(); // Prevent form submission
        }
});
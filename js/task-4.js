

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event){
    event.preventDefault();

    const emailInput = loginForm.elements['email'];
    const passwordInput = loginForm.elements['password'];

    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value.trim();

    if (emailVal === '' || passwordVal === '') {
        alert('Fill in all form fields');
    } else {
        const formData = {
            email: emailVal,
            password: passwordVal
        }
        console.log(formData);
        loginForm.reset();
    }
    })


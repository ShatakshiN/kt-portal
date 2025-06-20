document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.onsubmit = sendUserData;

    async function sendUserData(event) {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value; 
        const EmployeeId = event.target.EmployeeId.value;
        const password = event.target.password.value;

        console.log('frontend', { name, email, password });

        const obj = {
            name,
            email,
            EmployeeId,
            password
        };

        try {
            const response = await axios.post('http://localhost:4000/user/signup', obj);
            if (response.data.message === 'user already exists') {
                alert("User already exists!");
            } else {
                alert('Successfully signed in!');
                window.location.href = 'login.html';
            }
        } catch (error) {
            console.log(error);
        }
    }
});
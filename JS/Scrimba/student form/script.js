const form = document.getElementById('regForm');
const submitBtn = document.getElementById('submitBtn');
const terms = document.getElementById('terms');
const togglePass = document.getElementById('togglePass');
const password = document.getElementById('password');

terms.addEventListener('change', () => {
    submitBtn.disabled = !terms.checked;
    document.getElementById('termsErr').textContent = '';
});

togglePass.addEventListener('change', () => {
    const t = togglePass.checked ? 'text' : 'password';
    password.type = t;
    document.getElementById('confirm').type = t;
});

function showError(id, msg) { document.getElementById(id).textContent = msg; }
function clearErrors() { ['nameErr', 'emailErr', 'phoneErr', 'ageErr', 'passErr', 'confirmErr', 'genderErr', 'courseErr', 'termsErr', 'result'].forEach(id => document.getElementById(id).textContent = ''); }

form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    let valid = true;

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = Number(document.getElementById('age').value);
    const pass = password.value;
    const confirm = document.getElementById('confirm').value;
    const gender = [...document.getElementsByName('gender')].find(r => r.checked);
    const course = document.getElementById('course').value;

    if (name.length < 3) { showError('nameErr', 'Name must be at least 3 characters'); valid = false; }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) { showError('emailErr', 'Enter a valid email'); valid = false; }

    if (!/^\d{10}$/.test(phone)) { showError('phoneErr', 'Phone must be exactly 10 digits'); valid = false; }

    if (!(Number.isInteger(age) && age >= 18 && age <= 60)) { showError('ageErr', 'Age must be between 18 and 60'); valid = false; }

    if (pass.length < 6) { showError('passErr', 'Password must be at least 6 characters'); valid = false; }

    if (confirm !== pass) { showError('confirmErr', 'Passwords do not match'); valid = false; }

    if (!gender) { showError('genderErr', 'Select your gender'); valid = false; }

    if (!course) { showError('courseErr', 'Select a course'); valid = false; }

    if (!terms.checked) { showError('termsErr', 'You must accept the Terms & Conditions'); valid = false; }

    if (!valid) return;

    document.getElementById('result').textContent = 'Registration Successful!';

    console.log('Registration details:', {
        name, email, phone, age, gender: gender.value, course
    });

    form.reset();
    submitBtn.disabled = true;
});
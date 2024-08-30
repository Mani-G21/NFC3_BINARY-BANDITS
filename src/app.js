var institute;
var count = 0;

const registerButton = document.getElementById('submitRegisterButton');
const instituteInput = document.getElementById('instituteInput');
const instituteEmail = document.getElementById('instituteEmail');
const instituteAdminName = document.getElementById('displayName');
const institutePassword = document.getElementById('institutePassword');
const signUpButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const submitLoginButton = document.getElementById('submitLogin');
var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');
var loginSelect = document.getElementById('loginSelect');

document.addEventListener('DOMContentLoaded', () => {
    const loginCard = document.getElementById("loginCard");
    const signUpCard = document.getElementById("signUpCard");
    const signUpButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('loginButton');

    // Initially hide the sign-up card
    signUpCard.classList.add('d-none');

    // Toggle to sign-up card when "Register" is clicked
    signUpButton.addEventListener('click', () => {
        loginCard.classList.add('d-none');
        signUpCard.classList.remove('d-none');
    });

    // Toggle to login card when "Login" is clicked
    loginButton.addEventListener('click', () => {
        signUpCard.classList.add('d-none');
        loginCard.classList.remove('d-none');
    });
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
    e.preventDefault();
});

submitLoginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    loginEmail = loginEmail.value;
    loginPass = loginPass.value;
    loginSelect = loginSelect.value;

    if (loginEmail == "" || loginSelect == "" || loginPass == "") {
        console.log("empty");
    } else {
        if (loginSelect == "Institute") {
            try {
                const data = await get("http://localhost:5500/institutes");
                data.forEach(element => {
                    if (element.insAdminEmail === loginEmail && element.insAdminPass === loginPass) {
                        localStorage.setItem('admin', JSON.stringify(element));
                        location.replace('admin.html');
                    }
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        } else if (loginSelect == "Teacher") {
            try {
                const data = await get("http://localhost:5500/institutes");
                data.forEach(institute => {
                    institute.teachers.forEach(teacher => {
                        if (teacher.email === loginEmail && teacher.password === loginPass) {
                            localStorage.setItem('teacher', JSON.stringify({ teacher, institute }));
                            location.replace('teacher.html');
                        }
                    });
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        else{
            try {
                location.replace("student.html");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }
});

registerButton.addEventListener('click', async (e) => {
    e.preventDefault();
    if (instituteInput.value == "" || instituteAdminName.value == "" || instituteEmail.value == "" || institutePassword.value == "") {
        console.log('empty');
    } else {
        institute = {
            insName: instituteInput.value,
            insAdminName: instituteAdminName.value,
            insAdminEmail: instituteEmail.value,
            insAdminPass: institutePassword.value,
            teachers: [],
            students: []
        };

        try {
            const data = await get("http://localhost:5500/institutes");
            data.forEach(element => {
                if (element.insAdminEmail === institute.insAdminEmail) {
                    count++;
                }
            });

            if (count > 0) {
                console.log("email already exists");
                count = 0; // reset count for the next operation
            } else {
                await post("http://localhost:5500/institutes", institute);
                console.log("Institute registered successfully!");
                localStorage.setItem('admin', JSON.stringify(institute));
                window.location.href = 'admin.html';
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
});

async function get(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

async function post(url, data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
    }
    const resData = await response.json();
    return resData;
}

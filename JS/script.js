function validateEmail(event) {
    event.preventDefault();
    var emailInput = document.getElementById('emailInput');
    var oops1 = document.getElementById('oops1');
    var oops2 = document.getElementById('oops2');

    // Remove existing styles
    emailInput.classList.remove('error', 'valid');

    var emailRegex = /^[^\s@]+@[^\s@]+\w$/;


    if (emailInput.value === "") {
        oops1.style.display = 'inline';
        oops2.style.display = 'none';
        emailInput.classList.add('error');
    } else if (!emailRegex.test(emailInput.value)) {
        oops1.style.display = 'none';
        oops2.style.display = 'inline';
        emailInput.classList.add('error');
    } else {
        // Valid email
        oops1.style.display = 'none';
        oops2.style.display = 'none';
        emailInput.classList.add('valid');
        console.log(emailInput.classList);
    }
}
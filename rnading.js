document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

emailjs.init("g8GkCxu1fDe2pSsnQ"); // EmailJS에서 제공하는 User ID로 초기화

const contactBtn = document.querySelector('.contact_section > button');
contactBtn.addEventListener('click', function() {
    var templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_423fkni","template_mevh9vx", templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('이메일이 성공적으로 전송되었습니다.');
        }, function (error) {
            console.log('FAILED...', error);
            alert('이메일 전송에 실패했습니다.');
        });
});
const a = document.getElementById('name').value
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

$(document).ready(function() {
        emailjs.init("service_423fkni");
    //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
    $('input[name=submit]').click(function(){

        var templateParams = {
            //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
            name: $('input[name=name]').val(),
            phone: $('input[name=email]').val(),
            email : $('input[name=title]').val(),
            message : $('textarea[name=content]').val()
        };


        emailjs.send('gmail', 'template_GH8tn3us', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });



    });

});
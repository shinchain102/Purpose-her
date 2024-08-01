$(document).ready(function() {
    setTimeout(function() {
        confettiEffect();
        $('.step1').fadeIn(2000).delay(4000).fadeOut(2000, function() {
            $('.step2').fadeIn(2000);
            $('#magic-button').fadeIn(2000);
        });
    }, 1000);

    $('#magic-button').click(function() {
        Swal.fire({
            title: 'A Secret Confession',
            text: "I saw you today while you were walking to the office. I threw the pen at you during attendance because I was nervous. 😊",
            icon: 'info',
            confirmButtonText: 'Aww, that\'s sweet!'
        });
    });
});

function confettiEffect() {
    confetti({
        particleCount: 300,
        spread: 70,
        origin: { y: 0.6 }
    });
}

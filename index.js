// template_ono875t 
// service_nr05mfo 
// SUR3M-booW5QRutt- 

// {/* <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init({
//         publicKey: "SUR3M-booW5QRutt-",
//       });
//    })();
// </script> */}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendform(
            'service_nr05mfo',
            'template_ono875t',
            event.target, 
            'SUR3M-booW5QRutt-'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Feel free to contact me directly bomysouk@gmail.com"
            );
        })
}
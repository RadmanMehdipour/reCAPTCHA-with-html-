# reCAPTCHA-with-html-
you can use the code below to use the reCAPTCHA in you website.
<script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/tailspin.js"></script>
<script  src="http://everythingopener.free.nf/Radco-reCaptcha.js"></script>
<Radco-reCaptcha></Radco-reCaptcha>

#how to use:
by pasting the code above you created the reCAPTCHA in you website, now by pasting this below code in you websites js you can get the resuls of the test back.
    if(results==false){
        alert("you are human")
    }else if(results==true){
        alert("you are a bot")
    }else if(results==null){
        alert("Please complete the reCAPTCHA.");
    }

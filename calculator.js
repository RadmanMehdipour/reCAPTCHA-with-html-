window.onload = function() {
    const recaptchaElement = document.querySelector('Radco-reCaptcha');
    
    recaptchaElement.innerHTML = `
        <div class="recaptcha-box" style="display: flex; align-items: center; background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); font-family: Arial, sans-serif; position: relative; width:170px;">
            <input class="checkbox" onclick="startVerification()" id="checkbox" type="checkbox" style="width: 20px; height: 20px; border: 2px solid #ccc; display: flex; justify-content: center; align-items: center; cursor: pointer; margin-right: 10px;">
            <div class="loading" id="loading" style="display: none; position: absolute; left: 10px; top: 50%; transform: translateY(-50%);">
                <!-- External Script, load it dynamically to avoid issues with innerHTML -->
                
                <l-tailspin size="25" stroke="3.5" speed="0.9" color="black"></l-tailspin>
            </div>
            <div id="notrobot" style="margin-left:0px; font-size: 14px;">I'm not a robot</div>
            <div class="recaptcha-logo" style="margin-left: auto; display: flex; align-items: center;">
                <img src="https://imgurl.ir/uploads/r453058_Screenshot_2025-02-04_205254.png" alt="Radco" style="height: 30px; margin-left:15px;">
            </div>
        </div>`;
}


    
    
    
    
    	var results=null
    
        var lastx = 0;
        var lasty = 0;
        var humancount = 0;
        var robotcount = 0;
        
        document.addEventListener("mousemove", function(e) {
            if (lastx === e.clientX || lasty === e.clientY) {
                robotcount++;
            } else {
                humancount++;
            }
            lastx = e.clientX;
            lasty = e.clientY;
        });

        function startVerification() {
            var checkbox = document.getElementById("checkbox");
            var loading = document.getElementById("loading");
            
            checkbox.style.display = "none";
            loading.style.display = "block";
            notrobot.style.marginLeft = "34px";

            setTimeout(function() {
                loading.style.display = "none";
                checkbox.style.display = "block";
                notrobot.style.marginLeft = "0px";
                


                checkbox.checked = true;
                validateUser();
            }, 2000);
        }

        function validateUser() {
            if (robotcount > humancount &&humancount!=0) {
                document.getElementById("checkbox").checked = false;
                results=true
            } else {
            results=false
            }
        }

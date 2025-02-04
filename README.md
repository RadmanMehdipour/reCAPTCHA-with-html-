# reCAPTCHA with HTML       V 1.2.9

Easily integrate reCAPTCHA into your website using the following code:  

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/tailspin.js"></script>
<script src="http://everythingopener.free.nf/Radco-reCaptcha.js"></script>
<Radco-reCaptcha></Radco-reCaptcha>
```

##  How to Use  

### 1️⃣ Add reCAPTCHA to Your Website  
Paste the above code inside your HTML file where you want the reCAPTCHA to appear.  
```javascript
<script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/tailspin.js"></script>
<script  src="http://everythingopener.free.nf/Radco-reCaptcha.js"></script>
<Radco-reCaptcha></Radco-reCaptcha>
```
### 2️⃣ Handle reCAPTCHA Results  
Use the following JavaScript code in your website’s JavaScript file to check the result of the reCAPTCHA test:  

```javascript
if(results == false) {
    alert(" You are human.");
} else if(results == true) {
    alert(" You are a bot.");
} else if(results == null) {
    alert(" Please complete the reCAPTCHA.");
}
```

The variable **`results`** automatically holds the outcome of the test, so there's no need for additional configuration.

## 🔗 Live Demo  
Check out a working example here: [Live Demo](http://everythingopener.free.nf/demo.html?i=1)  

---

Feel free to modify the implementation to suit your needs! 🚀  


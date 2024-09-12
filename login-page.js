const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const error = document.getElementById("error")
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "" && password === "") {
        error.innerHTML="inserire username e password"
        error.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'
    } 
    else if (username === "" || password === "") {
        error.innerHTML="inserire username o password"
        error.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'  
    }
    else if (username !== "isola" || password !== "isola_tinkerkit") {
        error.innerHTML="verificare username e password"
        error.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #8a0000; border: 1px solid #8a0000; background-color: #e58f8f; opacity: 1;'  
    }
    else if (username === "isola" && password === "isola_tinkerkit") {
        error.innerHTML="login e password corretti"
        error.style = 'width: 30%;text-align: center; margin: 0; padding: 10px; font-size: 12px; font-weight: bold; color: #208a00; border: 1px solid #208a00; background-color: #9ae58f; opacity: 1;'
        window.setTimeout("doRedirect()", 1000);
    } 
})
function doRedirect(){
alert("login avvenuto con successo. Benvenuto");
location.href="index2.html";
}

var a= document.getElementById("login");
var b= document.getElementById("register");
var c= document.getElementById("loginBtn");
var d= document.getElementById("registerBtn");

    function login() {
        a.style.left="195px";
        b.style.right="-520px";
        c.classList.add=("white-btn");
        d.classList.remove=("white-btn");
        a.style.opacity="1";
        b.style.opacity="0";  
    }
    
    function register() {
        a.style.left="-520px";
        b.style.right="45px";
        c.classList.remove=("white-btn");
        d.classList.add=("white-btn");
        a.style.opacity="0";
        b.style.opacity="1";
    }

document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const container = document.getElementById('Box');
    
    openBtn.addEventListener('click', function() {
        container.style.display = 'block';
        openBtn.style.display = 'none';
        closeBtn.style.display= 'block';
    });

    closeBtn.addEventListener('click', function() {
        container.style.display = 'none';
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});
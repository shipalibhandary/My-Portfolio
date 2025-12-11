const certificate= document.querySelectorAll('.certificate-container img');
const prevbtn=document.querySelector(".arrow.left");
const nextbtn=document.querySelector(".arrow.right");
let current =0;

function showCertificate(index){
    certificate.forEach((img,i)=>{
        img.classList.toggle('active',i==index);
    });
}

nextbtn.addEventListener('click',()=>{
    current=(current+1)% certificate.length;
    showCertificate(current);
});

prevbtn.addEventListener('click',()=>{
    current= (current-1 + certificate.length) % certificate.length;
    showCertificate(current);
});

//handling contact from
const form = document.getElementById("contactform");
const statusTxt = document.getElementById("status");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_0xkjv28",   // ✔ correct service ID
        "template_vtb25x7",  // ✔ correct template ID
        this
    )
    .then(() => {
        statusTxt.innerText = "Message sent successfully!";
        statusTxt.style.color = "green";
        form.reset();
    })
    .catch((error) => {
        statusTxt.innerText = "Failed to send message.";
        statusTxt.style.color = "red";
        console.error("EmailJS Error:", error);
    });
});


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
  }, 3000); 
});

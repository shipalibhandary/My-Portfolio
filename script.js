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
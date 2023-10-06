let qrText = document.getElementById("qrText");
let qrImage = document.getElementById("qrImage");
let box = document.querySelector('.message');

box.style.display = "none";

function remove(){
  box.style.left = '-100%';
  box.style.display = 'none';
}

function generateQR(){
  if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
  }else{
    box.style.display = 'grid';
    box.style.left = '50%';
  }
}

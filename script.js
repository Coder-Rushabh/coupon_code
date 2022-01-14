let copybtn = document.querySelector(".copybtn")

function copyIt(){
    let copyInput = document.querySelector('#copyvalue').ariaValueMax;
    navigator.clipboard.writeText(copyInput);
    console.log(copyInput);
    copybtn.textContent = "COPIED"
}


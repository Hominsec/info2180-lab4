window.addEventListener('load',()=>{
    let searchbutton=document.querySelector(".btn");

    const httpRequest = new XMLHttpRequest();
    let url = "superheroes.php";

    searchbutton.addEventListener("click",()=>{
        httpRequest.onreadystatechange = listheroes;
        httpRequest.open('GET', url);
        httpRequest.send();  
    });
    

    function listheroes() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
         let response = httpRequest.responseText;
         alert(response);
         } else {
         alert('There was a problem with the request.');
         }
        }
        }
});

 
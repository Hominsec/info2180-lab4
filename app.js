window.addEventListener('load',()=>{
    let searchbutton=document.querySelector(".btn");
    let data=document.getElementById("input_form");
    let output=document.getElementById("result");
    const httpRequest = new XMLHttpRequest();
    
    //let url = "superheroes.php";

    searchbutton.addEventListener("click",()=>{
        //let filtered=data.value.trim();
        let url = "http://localhost/info2180-lab4/superheroes.php?query="+data.value;
        //console.log(data.value);
        httpRequest.onreadystatechange = listheroes;
        httpRequest.open('GET', url);
        httpRequest.send();  
    });
    

    function listheroes() {
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
         let response = httpRequest.responseText;
         //alert(response);
         //console.log(response);
         output.innerHTML=response;
         } else {
         alert('There was a problem with the request.');
         }
        }
        }
});

 
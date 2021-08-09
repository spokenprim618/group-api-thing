let url ='https://animechan.vercel.app/api/random'


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(myJson){
    let animeName=myJson.anime;
    let myVar =document.createElement('p');
    myVar.innerHTML=animeName;
    let body=document.querySelector('body');
    body.appendChild(myVar);
    
    let animeCharacter=myJson.character;
    let secondP=document.createElement('p');
    secondP.innerHTML=animeCharacter;
  
    body.appendChild(secondP);
    
    let quote=myJson.quote;
    let thirdP=document.createElement('p');
    thirdP.innerHTML=quote;
    
   
    body.appendChild(thirdP);
});

<div id="textSize">
    
</div>
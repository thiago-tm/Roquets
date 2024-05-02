function toogleMode(){
  const html = document.documentElement
  html.classList.toggle('light');
   //pegar a tag img
   const img = document.querySelector('#profile img');
   //pegar a classe light
   //se tiver no light mode, adicionar a imagem avatar2
   //se tiver sem light mode, adicionar a imagem avatar
  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/Avatar2.png');
  } else {
    img.setAttribute('src', './assets/Avatar.png');
  }

 
  //substituir a imagem 
  //se tiver no light mode, adicionar a imagem avatar2
  //se tiver sem light mode, adicionar a imagem avatar




  
}
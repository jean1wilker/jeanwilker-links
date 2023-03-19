function tootgleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  //pegar tag img
  const img = document.querySelector("#profile img")
  
  //substituir imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-sun.png")
  } else {
    //se estiver sem light mode, manter a imagem original 
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
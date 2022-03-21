var listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/93/64/20/20270489.jpg",
  "https://www.curtocinema.com.br/wp-content/uploads/2021/12/nao-olhe-pra-cima.jpg",
  "https://br.web.img2.acsta.net/pictures/21/06/10/10/03/0580430.jpg"
];

listaFilmes.push(
  "https://2.bp.blogspot.com/-O-fKGCi1pZk/XGtn-R7pGII/AAAAAAACciE/la7EQhIzb4wa6rnBfNH8mvqSfbtZLmgagCLcBGAs/s1600/D%25C3%25A9j%25C3%25A0%2BVu%2B%25282006%2529.jpg"
);
listaFilmes.push(
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/31/05/20139182.jpg"
);

listaFilmes.push(
  "https://cinema10.com.br/upload/filmes/filmes_14344_matrix-ressurections.jpg"
);

var trailers = [
  "https://youtu.be/kU44N6MKG9Q",
  "https://youtu.be/c1nToClX_3w",
  "https://youtu.be/Cg8zTo6xmPw",
  "https://youtu.be/uxdS8TP37I4",
  "https://youtu.be/m5_lIuBXKWk",
  "https://youtu.be/InHmA-BXTEQ"
];

/*for (var ind = 0; ind < listaFilmes.length; ind++) {
  document.write("<img src=" + listaFilmes[ind] + ">");
}*/
//valor inicial   condição    expressão final, depois de ler entre o {}

function adicionar() {
  var filme = document.getElementById("filme").value;

  if (filme.endsWith(".jpg")) {
    listarFilmes(filme);
  } else {
    console.error("Endereço de cartaz inválido");
  }
  document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
  var elementoFilme = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");

  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}

for (var idx = 0; idx < listaFilmes.length; idx++) {
  document.body.innerHTML +=
    "<a href=" +
    trailers[idx] +
    " target='_blank'><img src=" +
    listaFilmes[idx] +
    " alt='' class='figs-posteres'></a>";
}
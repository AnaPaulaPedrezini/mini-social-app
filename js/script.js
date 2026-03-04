let curtidas = 0;

function curtir() {
    curtidas++;
    document.getElementById("contador-curtidas").innerText =
        curtidas + " curtidas";
}

function adicionarComentario() {
    let texto = document.getElementById("comentario").value;

    let lista = document.getElementById("lista-comentarios");
    let item = document.createElement("li");

    item.innerText = texto;
    lista.appendChild(item);

    document.getElementById("comentario").value = "";
}

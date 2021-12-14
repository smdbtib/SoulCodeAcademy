

// ALTERANDO ESTILOS
    const art = document.getElementById("artigo-1");
    art.style.backgroundImage = "url(img/social-work.jpg)";
    art.style.backgroundPosition = "center";
    art.style.fontFamily = "Helvetica";
    art.style.color = "white"


// CRIANDO  ELEMENTOS
    const postagem = "LoreMussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.";
    const p = document.createElement("p");
    p.classList.add("fundo-cinza")
    p.innerHTML = postagem;


// ADD ELEMENTO
    art.appendChild(p);


// REMOVENDO ELEMENTO
    const h2Art = document.querySelector("#artigo-1 > h2");
    //const h2Removido = art.removeChild(h2Art); //Armazenando arquivo armazenado

// SUBSTITUINDO ELEMENTOS
    const btn = document.createElement("button");
    btn.innerHTML = ("BOTÃO - OIIIIIII");
    art.replaceChild(btn, h2Art);


// EVENTO SIMPLES
    const cores = ["red", "blue", "orange", "green"];
    btn.onclick = function(){
        const pzinho = document.getElementById("meu-p");
        const corSelecionada = prompt("Digite a cor favorita:");
        pzinho.style.backgroundColor = corSelecionada;
        document.body.style.backgroundColor = corSelecionada;
        
    }

    p.onmouseenter = function(){
        p.style.color = "green"
    }
    p.onmouseleave = function(){
        p.style.color = "white"
    }



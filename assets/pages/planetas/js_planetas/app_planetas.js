function pesquisar() {
  // Loga uma mensagem no console para indicar que a função foi chamada

  const termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
  const palavrasBusca = termoPesquisa.split(' '); //irá separar as palavras da busca
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  

  const planetaEncontrado = dados.find(planeta => {
    const tituloMinusculo = planeta.nome1.toLowerCase();
    return palavrasBusca.every(palavra => tituloMinusculo.includes(palavra));
  });

    if (!termoPesquisa) {
      resultados = `<p>Nenhum planeta foi inserido. Por favor, tente novamente.</p>
      <a href="../../../../index.html">
      <button class="button">
        <h3 href="#" target="_blank"> Voltar
      </h3>
      <img src="galeria_planetas/voltar.png" alt="Ícone">
    </button>
    </a> 
      `;
  // Itera sobre cada dado no array de dados
    } else if (planetaEncontrado) {
    // Cria um novo elemento HTML para cada dado, formatando os dados dentro do HTML
    resultados = `
      <div class="item-resultado">
        <h2 href="#" target="_blank"> ${planetaEncontrado.nome1} </h2>
        <h3 href="#" target="_blank"> ${planetaEncontrado.nome2} </h3>
        <img class = "image-container" src=${planetaEncontrado.img}>
        <p class="descricao-meta"> Planeta: ${planetaEncontrado.nome2}<br>
        Descrição: ${planetaEncontrado.descricao}</p>
        <p class="descricao-meta"> História: ${planetaEncontrado.historia}<br>
        Nº de habitantes: ${planetaEncontrado.habitantes}</p>
        <p class="descricao-meta"> Clima: ${planetaEncontrado.clima}<br>
        Gravidade: ${planetaEncontrado.gravidade}</p>
        <a href=${planetaEncontrado.link} target="_blank">Mais informações</a>
      </div>
     <a href="../../../../index.html">
      <button class="button">
        <h3 href="#" target="_blank"> Voltar
      </h3>
      <img src="galeria_planetas/voltar.png" alt="Ícone">
    </button>
    </a>  
      `;
  } else {
    resultados = `<p>Este planeta não foi catalogado.</p>
    <a href="../../../../index.html">
      <button class="button">
        <h3 href="#" target="_blank"> Voltar
      </h3>
      <img src="galeria_planetas/voltar.png" alt="Ícone">
    </button>
    </a> 
    `;
    
  }
  
  // Função para contar os cliques
  
    // ... código existente ...
    // Verifica se o alienígena encontrado é um Anjo Lamentador
    //if (alienEncontrado.id === 'anjoLamentador') {
     //   resultados += `<img id="anjoImagem" src=${alienEncontrado.img} onclick="contarCliques()">`; // Adiciona um ID à imagem}



// Função para mudar o tema e o título (chamada ao retornar da página do vídeo)
  

  // Atualiza o conteúdo do elemento com o ID "resultados-pesquisa" com os resultados gerados
  section.innerHTML = resultados;
}



// Obtém uma referência ao elemento HTML com o ID "resultados-pesquisa"
let section = document.getElementById("resultados-pesquisa");

// Loga a referência ao elemento no console para verificação
console.log(section)
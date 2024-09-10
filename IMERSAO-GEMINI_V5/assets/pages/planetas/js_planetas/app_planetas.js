function pesquisar() {
  // Loga uma mensagem no console para indicar que a função foi chamada

  const termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
  const palavrasBusca = termoPesquisa.split(' '); //irá separar as palavras da busca
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  

  const planetaEncontrado = dados.filter(planeta => {
    const tituloMinusculo = planeta.nome1.toLowerCase();
    const termoPesquisaMinuscula = planeta.descricao.toLowerCase();
    const tagsMinusculas = planeta.tags.map(tag => tag.toLowerCase());
    return palavrasBusca.every(palavra => tituloMinusculo.includes(palavra) || termoPesquisaMinuscula.includes(palavra) ||
        tagsMinusculas.some(tag => tag.includes(palavra)));
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
    } else if (planetaEncontrado.length > 0) {
    // Cria um novo elemento HTML para cada dado, formatando os dados dentro do HTML
    planetaEncontrado.forEach(planeta => {
    resultados += `
      <div class="item-resultado">
        <h2 href="#" target="_blank"> ${planeta.nome1} </h2>
        <h3 href="#" target="_blank"> ${planeta.nome2} </h3>
        <img class = "image-container" src=${planeta.img}>
        <p class="descricao-meta"> Planeta: ${planeta.nome2}<br>
        Descrição: ${planeta.descricao}</p>
        <p class="descricao-meta"> História: ${planeta.historia}<br>
        Nº de habitantes: ${planeta.habitantes}</p>
        <p class="descricao-meta"> Clima: ${planeta.clima}<br>
        Gravidade: ${planetaEncontrado.gravidade}</p>
        <a href=${planeta.link} target="_blank">Mais informações</a>
      </div>
     <a href="../../../../index.html">
      <button class="button">
        <h3 href="#" target="_blank"> Voltar
      </h3>
      <img src="galeria_planetas/voltar.png" alt="Ícone">
    </button>
    </a>  
      `;
    });
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
  section.innerHTML = resultados;
}
  
  // Função para contar os cliques
  
    // ... código existente ...
    // Verifica se o alienígena encontrado é um Anjo Lamentador
    //if (alienEncontrado.id === 'anjoLamentador') {
     //   resultados += `<img id="anjoImagem" src=${alienEncontrado.img} onclick="contarCliques()">`; // Adiciona um ID à imagem}



// Função para mudar o tema e o título (chamada ao retornar da página do vídeo)
  

  // Atualiza o conteúdo do elemento com o ID "resultados-pesquisa" com os resultados gerados


// Obtém uma referência ao elemento HTML com o ID "resultados-pesquisa"
let section = document.getElementById("resultados-pesquisa");

// Loga a referência ao elemento no console para verificação
console.log(section)
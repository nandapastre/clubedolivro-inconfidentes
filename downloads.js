/*
  LISTA DE DOWNLOADS DO SITE

  Para acrescentar um material:
  1. Suba o arquivo (ou os arquivos) na pasta "downloads" do repositório.
  2. Acrescente um bloco novo no FIM da lista abaixo, copiando um dos existentes.
  3. Os blocos mais recentes (os últimos da lista) aparecem em "Novos downloads" na página inicial.

  Campos de cada bloco:
    livro     nome do livro, igual ao da estante (deixe "" para um material geral do clube)
    tipo      categoria do material, por exemplo "Marca-página", "Adesivo", "Cartão de visita".
              A categoria nova aparece sozinha nos filtros da página Downloads.
    arquivos  um ou mais caminhos de arquivo. Com 2 arquivos, os botões ficam "Frente" e "Verso".
    rotulos   (opcional) nome de cada botão, na mesma ordem dos arquivos
    titulo    (opcional) nome do cartão. Se faltar, vale o próprio tipo.

  Miniaturas: o site procura a imagem pequena em downloads/miniaturas/ com o mesmo nome do
  arquivo e a extensão .webp. Se ela não existir, usa o arquivo original (funciona, mas a
  página fica mais pesada).
*/

// Plural de cada tipo, usado nos botões de filtro. Tipo novo sem plural aqui ganha um "s" no fim.
window.DOWNLOADS_PLURAL = {
  "Marca-página": "Marca-páginas",
  "Adesivo": "Adesivos",
  "Cartão de visita": "Cartões de visita"
};

window.DOWNLOADS = [
  { livro: "E Não Sobrou Nenhum", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-e-nao-sobrou-nenhum-frente.png", "downloads/marca-paginas/marca-pagina-e-nao-sobrou-nenhum-verso.png"] },
  { livro: "Frankenstein", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-frankenstein-frente.png", "downloads/marca-paginas/marca-pagina-frankenstein-verso.png"] },
  { livro: "Sobre os Ossos dos Mortos", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-sobre-os-ossos-dos-mortos-frente.png", "downloads/marca-paginas/marca-pagina-sobre-os-ossos-dos-mortos-verso.png"] },
  { livro: "Encontro Marcado", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-encontro-marcado-frente.png", "downloads/marca-paginas/marca-pagina-encontro-marcado-verso.png"] },
  { livro: "A Pista de Gelo", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-a-pista-de-gelo-frente.png", "downloads/marca-paginas/marca-pagina-a-pista-de-gelo-verso.png"] },
  { livro: "Cem Anos de Solidão", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-cem-anos-de-solidao-frente.png", "downloads/marca-paginas/marca-pagina-cem-anos-de-solidao-verso.png"] },
  { livro: "A Cabeça do Santo", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-a-cabeca-do-santo-frente.png", "downloads/marca-paginas/marca-pagina-a-cabeca-do-santo-verso.png"] },
  { livro: "O Escravo", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-o-escravo-frente.png", "downloads/marca-paginas/marca-pagina-o-escravo-verso.png"] },
  { livro: "O Hobbit", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-o-hobbit-frente.png", "downloads/marca-paginas/marca-pagina-o-hobbit-verso.png"] },
  { livro: "O Mestre e a Margarida", tipo: "Marca-página", arquivos: ["downloads/marca-paginas/marca-pagina-o-mestre-e-a-margarida-frente.png", "downloads/marca-paginas/marca-pagina-o-mestre-e-a-margarida-verso.png"] },

  { livro: "O Escravo", tipo: "Adesivo", titulo: "Adesivos de Carolina Maria de Jesus", arquivos: ["downloads/adesivos/adesivo-o-escravo-1.png", "downloads/adesivos/adesivo-o-escravo-2.png"], rotulos: ["Adesivo 1", "Adesivo 2"] },
  { livro: "O Hobbit", tipo: "Adesivo", titulo: "Adesivo da porta de hobbit", arquivos: ["downloads/adesivos/adesivo-o-hobbit-porta.png"] },
  { livro: "O Mestre e a Margarida", tipo: "Cartão de visita", titulo: "Cartão de visita do Prof. Woland", arquivos: ["downloads/cartoes/cartao-de-visita-o-mestre-e-a-margarida-frente.png", "downloads/cartoes/cartao-de-visita-o-mestre-e-a-margarida-verso.png"] }
];

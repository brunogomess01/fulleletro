var links = new Array("index.html",
                      "produtos.html",
                      "lojas.html",
                      "contato.html");
var conteudos = new Array(
    "<img src=\"imagens/logo.png\" alt=\"Full Stack Eletro\" width=\"100px\"/>",
    "Produtos",
    "Nossas Lojas",
    "Contatos"
);                       

function escreveMenu(){
    document.writeln("<nav id=\"menu\">");
    for(i=0; i<links.length; i++){
        document.write("<a href=\""+links[i]+"\">");
        document.write(conteudos[i]);
        document.writeln("</a>");
    }
    document.writeln("</nav>");
}
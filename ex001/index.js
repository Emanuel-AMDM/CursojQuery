$().ready(function(){

    var div = $("div");
    var p = $("<p>Olá Mundo</p>");
    //COLOCA NO COMEÇO DA DIV(em cima)
    div.append(p);
    //COLOCA NO FINAL DA DIV(em baixo)
    $("<p>123 de oliveira 4</p>").prependTo(div);
    //TUDO DENTRO DAS TAG P VAO FICAR COM ESSE HTML DE BAIXO
    $("p").html("<strong>Negrito</strong> 111222333")
    //TUDO DENTRO DAS TAG P VAO FICAR COM ESSA STRING DE BAIXO
    $("p").text("<strong>Negrito</strong> 111222333")

    
});
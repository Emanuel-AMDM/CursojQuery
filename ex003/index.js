$().ready(function(){

    //cria um evento de target id onde me mostra a tag e o id do elemento que to chamando
    $("button").click(function(evento){
        console.log(evento.target)
        console.log(evento.target.id)
    })

    //mostra o codigo da tecla em que eu cliquei
    $("input").keydown(function(evento){
        console.log(evento.which)
    })

    //esconde e mostra senha dentro do input 
    $("#inputChangePass").click(function(){
        //armazena qual input vou usar
        var password = $("input")[0]
        //muda o type da input guardado na variavel password e faz uma condição para mudar de texto para password
        password.type = password.type == "text" ? "password" : "text"
    })
})
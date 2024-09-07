function pesquisar() {

    // Obtém a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo ="";
    let descricao="";
    let tags = "";

    // Itera sobre cada elemento do array 'dados'.
    if (!campoPesquisa) {
        section.innerHTML = "Campo Vazio";
        return
    }

    for (let dado of dados) {        
        console.log(dado.titulo);

        titulo=dado.titulo.toLowerCase();         
         descricao=dado.descrição.toLowerCase();
         tags=dado.tags.toLowerCase();

        // Constrói o HTML para cada resultado da pesquisa.

        if ((titulo.includes(campoPesquisa)) || (descricao.includes(campoPesquisa)) ||(tags.includes(campoPesquisa))) {

            //cria um ovo elemento

            resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>;                
            </div> `

        }

    }

    // Se pesquisa nao for encontrada
    console.log(resultados)

    if (!resultados) {
        resultados = `
        <div class="item-erro">
            <h2> ${campoPesquisa} </h2>
            <p class="descricao-meta">"Palavra não encontrada"</p>
        </div> `;
    }



    // Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultados;
}

/*
If (resultados == "") {

    resultados := `
    <div class="item-resultado">
        <h2> &{campoPesquisa} </h2>;
        <p class="descricao-meta">"Palavra não encontrada"</p>;
    </div> `
    
    
    
}*/

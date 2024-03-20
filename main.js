$('document').ready(function() {
    $('form').on('submit', function(e) {
    e.preventDefault()
    $('table, ul').slideDown()
    const nomeTarefa = $('#tarefas').val();
    const novoItem = $('<li></li>');
    $(`<form> ${nomeTarefa} <form/>`).appendTo(novoItem)
    $(novoItem).appendTo('ul')  
    })

    $('#botao-fechar').click(function(){
        $('ul').slideUp()
    })

    $('#botao-abrir').click(function(){
        $('ul').slideDown()
    })

    $('ul').on('click', 'li', function(){
        $(this).css("text-decoration", "line-through")
    })

})
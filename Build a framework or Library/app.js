var person = G$('sarah', 'Abdelwhab');



// person.greet().setLang('es').greet(true).log();

$('#btnLogin').click(function() {
    person.setLang($('#LangOptions').val()).HtmlGreeting('#greeting').log();


});
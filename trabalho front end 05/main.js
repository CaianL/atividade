function Validacao() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        var Camponome = document.getElementById("nome");
        var Campoemail = document.getElementById("email");
        var campotelefone = document.getElementById("telefone");
        var Padrãonome = /[A-Za-z\s]{1,100}/;
        var padrãotelefone = /\+55 \([1-9]{2}\) [2-9][0-9]{3,4}-[0-9]{4}/;
        var Padrãoemail = /[A-Za-z0-9\s]{5,25}@[A-Za-z\s]{5,10}\.com/;

        if (!Padrãonome.test(Camponome.value)) {
            Camponome.setCustomValidity("O nome deve conter no máximo 100 caracteres e não pode conter números.");
        } else {
            Camponome.setCustomValidity("");
        }

        if (!padrãotelefone.test(campotelefone.value)) {
            campotelefone.setCustomValidity("Por favor, insira um número de telefone válido no formato brasileiro (+55 xx xxxx-xxxx).");
        } else {
            campotelefone.setCustomValidity("");
        }

        if (!Padrãoemail.test(Campoemail.value)) {
            Campoemail.setCustomValidity("Insira um e-mail válido");
        } else {
            Campoemail.setCustomValidity("");
        }
    });
}
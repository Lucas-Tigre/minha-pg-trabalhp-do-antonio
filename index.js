document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('email').value;
    document.getElementById('message').innerText = `inscrição feita com sucesso : ${email}`;
});
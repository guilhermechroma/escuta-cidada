document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();

     const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        empresa: document.getElementById('empresa').value,
        linha: document.getElementById('linha').value,
        horario: document.getElementById('horario').value,
        data: document.getElementById('date').value,
        mensagem: document.getElementById('mensagem').value,
        notaTransporte: document.querySelector('input[name="nota_transporte"]:checked')?.value || null,
        notaSite: document.querySelector('input[name="nota_site"]:checked')?.value || null,

    };

     console.log(data);

     const response = await fetch('http://localhost:8000/api/feedback/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if (response.ok){
    const result = await response.json();
    console.log(result);
    alert("SUCESSO NA REQUISICAO");
    }else{
    alert('FALHA NA REQUISICAO');
    }
    
});

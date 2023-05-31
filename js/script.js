const form = document.getElementById('form')

var dados = {}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    var introducao = document.getElementById('introducao').value
    var nomeCliente = document.getElementById('nomeCliente').value
    var tipoServico = document.getElementById('tipoServico').value
    var data = document.getElementById('data').value
    var valorUnitario = document.getElementById('valorUnitario').value
    var numeroDeServicosPrestados = document.getElementById('numeroDeServicosPrestados').value


    dados = {
        introducao,
        nomeCliente,
        tipoServico,
        data,
        valorUnitario,
        numeroDeServicosPrestados
    }

    var element = `
                <header class="print">
                    <div class="print">
                        <img src="assets/logo.jpeg" width="150px" alt="Logo da Kieidimus, LDA">
                        </div>
                    <p class="print">
                        Lubango Rua Nova Lisboa, Bairro Chioco <br/>
                        Nif: 5417463248 <br/>
                        Telefone: + 244 925 785 529 <br/>
                        Correio Electronico: kieidimuslda@gmail.com
                    </p>
                </header>
                <main class="print">
                    <h1 class="print">
                        ${dados.introducao}    
                    </h1>   

                    <table class="print">
                        <tr>
                            <td>Nome da empresa ou cliente: </td>
                            <td> ${dados.nomeCliente} </td>
                        </tr>    
                        <tr>
                            <td>Tipo de serviço prestado: </td>
                            <td> ${dados.tipoServico} </td>
                        </tr>    
                        <tr>
                            <td>Data: </td>
                            <td> ${dados.data} </td>
                        </tr>    
                        <tr>
                            <td>Número de serviços prestados: </td>
                            <td> ${dados.numeroDeServicosPrestados} </td>
                        </tr>    
                        <tr>
                            <td>Valor Unitário por serviço prestado: </td>
                            <td> ${dados.valorUnitario},00KZ </td>
                        </tr>        
                        <tr>
                            <td>Valor total: </td>
                            <td> ${dados.valorUnitario * dados.numeroDeServicosPrestados},00KZ </td>
                        </tr>        
                    </table>
                </main>

                <footer class="print">
                    Respeitosamente <br/><br/>

                    _____________________<br/>
                    Kieidimus, LDA
                </footer>
            `

    var opt = {
        margin: 1,
        filename: 'factura.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();

    html2pdf(element, opt);

})
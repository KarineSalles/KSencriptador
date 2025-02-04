const textArea = document.querySelector ('.text-area');
const mensagem = document.querySelector ('.mensagem');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value='';
}

function encriptar(stringEncriptada) {

let matrizCodigo = [['e', 'enter'] , [ 'i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']]
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}

return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value='';
}

function desencriptar(stringDesencriptada) {

let matrizCodigo = [['e', 'enter'] , [ 'i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']]
stringDesencriptada = stringDesencriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}



return stringDesencriptada
}

function btnCopiar() {
    // Seleciona o texto na área de mensagem
    mensagem.select();
    mensagem.setSelectionRange(0, 99999); // Para dispositivos móveis

    try {
        // Copia o texto selecionado para a área de transferência
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }
}
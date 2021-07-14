resultadoRols = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let somaDados = 0;
for(let i = 0; i < 1000; i++){
    dado1 = Math.floor(Math.random() * 7);
    dado2 = Math.floor(Math.random() * 7);
 
    somaDados = dado1 + dado2;
    resultadoRols[somaDados-2] += 1;
 }
 const resultFinal = document.createElement('div');
 for(let i=0;i < resultadoRols.length; i++){
   
    let resultadoSomatoria = document.createElement('div');
    resultadoSomatoria.style.width = (resultadoRols[i]) +"%";
    resultadoSomatoria.style.maxWidth = '80%'
    resultadoSomatoria.style.height = '25px'
    resultadoSomatoria.style.background = 'gray';
    resultadoSomatoria.style.margin = '15px';
    resultadoSomatoria.style.border = '1px solid black';
    resultadoSomatoria.innerText = (i+2) + ': ' + resultadoRols[i];
    
    resultFinal.appendChild(resultadoSomatoria);

}
document.body.appendChild(resultFinal);

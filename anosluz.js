const conversor = document.querySelector('button')

conversor.onclick = () => {
  var anosLuz = Number(document.querySelector('input').value.replace('.',','))
  if (anosLuz < 1) {
    document.querySelector('span').innerHTML = "Valor inválido!"
  } else {
    document.querySelector('span').innerHTML = (anosLuz * 9460528404879.4).toFixed(2) + ' KM'
  } 
}
function calcular() {
    let celnum = document.getElementById('celnum')
    let res = document.getElementById('res')
    
    if (celnum.value == 0) {
        window.alert('[ERRO] Adicione um número!') 
    } else {
        res.innerHTML = `Grau Fahrenheit ${celnum.value*9/5+32}`
    }
}
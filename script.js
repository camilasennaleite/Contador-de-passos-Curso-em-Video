function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0){
        alert('[ERRO] Faltam dados no campo "Início!"')
    } else if (fim.value.length == 0){
        alert('[ERRO] Faltam dados no campo "Fim!"')
    
    } else if (passo.value.length == 0){
        alert('[ERRO] Faltam dados no campo "Passo!"')
    } else if (passo.value <=0 ) {
        alert('[ERRO] Informar número acima de 0 no campo "Passo!"')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
        for(let c = i; c <= f; c += p){
        res.innerHTML += `${c}, `
            }
        }else {
            for (let c = i; c >= f; c -= p){
            res.innerHTML += `${c}, `
            }
        }
    }
}
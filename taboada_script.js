function Tabuada(){
    var num = window.document.getElementeById('num')
    var end = document.getElementById('end')
    var n = Number(num.value)
    var e = Number(num.value)
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A Taboada do ${n} é: <br>`
    do {
        r = n*x
        res.innerHTML += `${r} <br>`
        x++
    } while(x <= e)

}
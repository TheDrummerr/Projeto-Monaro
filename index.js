var setaesquerda = window.document.getElementById("setaesquerda")
var img1arq = window.document.getElementById("img1arq")
var img2arq = window.document.getElementById("img2arq")
var lago = window.document.getElementById("lago")
var ingrid = window.document.getElementById("ingrid")
var setadireita = window.document.getElementById("setadireita")

function RolarParaDireita() {
    img1arq.style = "display:none"
    img2arq.style = "display:none"
    lago.style = "display:flex"
    ingrid.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    img1arq.style = "display:flex"
    img2arq.style = "display:flex"
    lago.style = "display:none"
    ingrid.style = "display:none"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}

var setaesquerda2 = window.document.getElementById("setaesquerda2")
var render1 = window.document.getElementById("render1")
var render2 = window.document.getElementById("render2")
var render3 = window.document.getElementById("render3")
var render4 = window.document.getElementById("render4")
var render5 = window.document.getElementById("render5")
var render6 = window.document.getElementById("render6")
var render7 = window.document.getElementById("render7")
var render8 = window.document.getElementById("render8")
var setadireita2 = window.document.getElementById("setdireita2")


function RolarParaEsquerda2(){
    render1.style = "display:flex"
    render2.style = "display:flex"
    render3.style = "display:flex"
    render4.style = "display:flex"
    render5.style = "display:none"
    render6.style = "display:none"
    render7.style = "display:none"
    render8.style = "display:none"
}

function RolarParaDireita2() {
    render1.style = "display:none"
    render2.style = "display:none"
    render3.style = "display:none"
    render4.style = "display:none"
    render5.style = "display:flex"
    render6.style = "display:flex"
    render7.style = "display:flex"
    render8.style = "display:flex"
}

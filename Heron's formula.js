document.getElementById("calculate").addEventListener("click", elements)

function elements(){
    // Input
    let a = +document.getElementById("Text1").value;
    let b = +document.getElementById("Text2").value;
    let c = +document.getElementById("Text3").value;

    // Proccess
    let area = HeronsFormula (a, b, c);

    // Output
    document.getElementById("NewArea").innerHTML = area;
}

function HeronsFormula(a, b, c) {
    let s = (a+b+c)/2
    let Area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    return (Area)
}
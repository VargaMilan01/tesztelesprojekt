function $(id) {
    return document.getElementById(id);
}

function szt_an(a1, d, n) {
    return a1+(n-1)*d;
}

function szt_Sn(a1, d, n) {
    return (n/2)*(2*a1+(n-1)*d);
}

function szt_atlag(a1, d, n) {
    return szt_Sn(a1, d, n)/n;
}

function szt_szoras(a1, d, n) {
    let szoras = 0;
    const atlag = szt_atlag(a1, d, n);
    for (let i=0; i<n; i++) {
        szoras += (szt_an(a1, d, i)-atlag)**2;
    }
    return Math.sqrt(szoras/n);
}

function szt_szamolas() {
    let a1 = $("a1").value*1;
    let d = $("d").value*1;
    let n = $("n").value*1;
    $("szt_an").innerHTML = szt_an(a1, d, n);
    $("szt_Sn").innerHTML = szt_Sn(a1, d, n);
    $("szt_atlag").innerHTML = szt_atlag(a1, d, n);
    $("szt_szoras").innerHTML = szt_szoras(a1, d, n);
}

$("szt_szamol").addEventListener("click", szt_szamolas);
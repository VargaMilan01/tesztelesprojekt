function mt_an(a1, q, n) {
    return a1*q**(n-1);
}

function mt_Sn(a1, q, n) {
    return a1*((q**n)-1)/(q-1);
}

function kamatos_kamat_Tn(T0, p, n) {
    return T0*(1+p/100)**n;
}

function kamatos_kamat_T0(Tn, p, n) {
    return Tn/(1+p/100)**n;
}

function kamatos_kamat_n(Tn, T0, p) {
    return Math.log(Tn/T0)/Math.log(1+p/100);
}

function mt_szamolas() {
    let a1 = document.getElementById("mt_a1").value*1;
    let q = document.getElementById("mt_q").value*1;
    let n = document.getElementById("mt_n").value*1;
    document.getElementById("mt_an").innerHTML = Math.round(mt_an(a1, q, n));
    document.getElementById("mt_Sn").innerHTML = Math.round(mt_Sn(a1, q, n));
}

function kk_szamolas() {
    let T0 = document.getElementById("kamatos_kamat_T0").value*1;
    let p = document.getElementById("kamatos_kamat_p").value*1;
    let n = document.getElementById("kamatos_kamat_n").value*1;
    document.getElementById("kamatos_kamat_Tn_kiir").innerHTML = Math.round(kamatos_kamat_Tn(T0, p, n)) + " Ft";
}

document.getElementById("mt_szamol").addEventListener("click", mt_szamolas);
document.getElementById("kk_szamol").addEventListener("click", kk_szamolas);
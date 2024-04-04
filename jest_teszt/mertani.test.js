// Eseménykezelést ki kell kommentezni Jest teszteléskor
const Szamol = require("../js/mertani");

test("a1=1; q=2; n=10 --> an=1024", () => {
    expect(Szamol.mt_an(1, 2, 10)).toBe(512);
    })

test("a1=2; q=3; n=6 --> Sn=728", () => {
    expect(Szamol.mt_Sn(2, 3, 6)).toBe(728);
    })

test("T0=100.000; p=5%; n=12 --> Tn=179.585,63", () => {
    expect(Szamol.kamatos_kamat_Tn(100000, 5, 12)).toBeCloseTo(179585.63);
    })
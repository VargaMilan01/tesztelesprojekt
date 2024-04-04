// Eseménykezelést ki kell kommentezni Jest teszteléskor
const Szamol = require("../js/szamtani");

test("a1=2; d=4; n=5 --> an=18", () => {
    expect(Szamol.szt_an(2, 4, 5)).toBe(18);
    })

test("a1=5; d=5; n=5 --> Sn=75", () => {
    expect(Szamol.szt_Sn(5, 5, 5)).toBe(75);
    })

test("a1=1; d=1; n=6 --> átlag=3,5", () => {
    expect(Szamol.szt_atlag(1, 1, 6)).toBe(3.5);
    })

test("a1=2; d=2; n=5 --> szórás=2,83", () => {
    expect(Szamol.szt_szoras(2, 2, 5)).toBeCloseTo(2.83);
    })
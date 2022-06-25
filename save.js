const almightyFormula = (a,b,c)=> {
    d = Math.sqrt( (b * b) -( 4 * a * c));
    X1 = (-b + d) /(2 * a);
    X2 = (-b - d) /(2 * a);
    e = {
        X1 : X1,
        X2 : X2
    }
    return e;

}
let question = almightyFormula(2,3,-2);
console.log(question)
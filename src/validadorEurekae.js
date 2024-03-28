 const prefijos=[55,53]
 const validadorEurekae = (valor) => {
   const inicio=Number(valor.substring(0,2));
   const evaluar=prefijos.indexOf(inicio)
    return evaluar>=0 && valor.length>=9 && valor.length<=15
 }
 export {validadorEurekae}
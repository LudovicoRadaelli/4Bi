function generaEsempio(n) {
    if(n === 0) {
        let b = Math.floor(Math.random()*12+2);
        let e = Math.floor(Math.random()*12+1);

        let str = `${b}`

        for(let i = 0; i < e -1; i++) {
            str += `\\cdot ${b} `
        }

        document.getElementById(`esempio${n}`).innerHTML = 
        `\\[
            ${b}^{\\color{red}{${e}}} = \\underset{\\color{red}{${e}}\\,\\,\\color{gray}{\\text{volte}}}{\\color{gray}{\\underbrace{\\color{black}{${str}}}}}
        \\]`

        MathJax.typesetClear([document.getElementById("esempio0")]);
        MathJax.typesetPromise([document.getElementById("esempio0")]).then(() => {});
    }

    if(n === 1) {

        let num = Math.floor(Math.random()*15 + 1);
        let den = Math.floor(Math.random()*7 + 1);
        let e = Math.floor(Math.random()*9 + 1);

        if(den !== 1) {
            document.getElementById("esempio"+n).innerHTML = 
            `\\[
                \\left( \\frac{\\color{#0F9D58}{${num}}}{\\color{blue}{${den}}} \\right)^{\\color{red}{\\boldsymbol{-}}\\color{black}{${e}}} = \\left(\\frac{\\color{blue}{${den}}}{\\color{#0F9D58}{${num}}}\\right)^{${e}}
            \\]`    
        } else {
            document.getElementById("esempio"+n).innerHTML = 
            `\\[
                \\color{#0F9D58}{${num}}^{\\color{red}{\\boldsymbol{-}}\\color{black}{${e}}} \\color{black}{} = \\left( \\frac{\\color{#0F9D58}{${num}}}{\\color{blue}{${den}}} \\right)^{\\color{red}{\\boldsymbol{-}}\\color{black}{${e}}} = \\left(\\frac{\\color{blue}{${den}}}{\\color{#0F9D58}{${num}}}\\right)^{${e}}
            \\]`
        }
        

        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }

    if(n === 2) {

        let num = Math.floor(Math.random()*15 + 1);
        let den = Math.floor(Math.random()*7 + 2);
        if(num === den) {
            den++;
        }
        let b = Math.floor(Math.random()*9 + 2);
        
        document.getElementById("esempio"+n).innerHTML = 
        `\\[
            \\sqrt[\\color{blue}{${den}}]{${b}^{^{\\color{red}{${num}}}}} = ${b}^{^{\\frac{\\color{red}{${num}}}{\\color{blue}{${den}}}}} 
        \\]`;    

        MathJax.typesetClear([document.getElementById("esempio"+n)]);
        MathJax.typesetPromise([document.getElementById("esempio"+n)]).then(() => {});
    }
}
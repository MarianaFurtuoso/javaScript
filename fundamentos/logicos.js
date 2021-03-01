function compras(trabalho1,trabalho2){
      const comprarSorvete = trabalho1 || trabalho2 // || é ou
     const comprartv50 = trabalho1 && trabalho2 //&& é e 
     //const comprartv32 = !!(trbalho1^trabalho)// bit a bit xour
     const comprartv32 = trabalho1!= trabalho2
     const  manterSaudavel = !comprarSorvete // operador unario

     return { comprarSorvete,comprartv50,comprartv32,manterSaudavel}// aqui esta criando o obj e atribuindo o valor que é resultado

    }

    console.log(compras(true,false))
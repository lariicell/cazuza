const reality = {
    nome: "Reality",
    info: {
    nome: "kardashians",
    participantes: " Kim, Kourtney e Khloé Kardashian e suas meias-irmãs, Kendall e Kylie Jenner, e sua mãe, Kris Jenner. "
    }
    };
    console.log(reality.info); 

    const kardashian = {
        nome: "kim",
        idade: 43
        };
        const jsonkardashian = JSON.stringify( kardashian );
        console.log(jsonkardashian ); 
        const objetoPessoa = JSON.parse(jsonkardashian );
        console.log(objetoPessoa.nome);
        var idade = 43;
        if (idade >= 18) {
        console.log("Você é maior de idade.");
        }
        const kardashians = {
            nome: "kylie",
            idade: 26
            };
            const jsonkardashians = JSON.stringify( kardashians );
            console.log(jsonkardashians ); 
            const objetoPessoas = JSON.parse(jsonkardashians );
            console.log(objetoPessoas.nome);
            var idade = 26;
            if (idade >= 18) {
            console.log("Você é maior de idade.");
            }



            const calculadora = {
                multiplicar: function(a, b) {
                return a * b;
                },
                dividir: function(a, b) {
                return a / b;
                }};
                console.log('seguidores kim ' + calculadora.multiplicar(347, 10000000)); 
                console.log('seguidores kylie ' + calculadora.dividir(380000000, 1));
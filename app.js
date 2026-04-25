
//FACTORIAL DE UN NUMERO

//Pidiendo el numero al usuario
let datoValido = false;
let numero = 0;

do
{
    let input = prompt("Digite el numero al que desea saber el factorial: ");

    //Verificando que el dato sea valido
    if (input === null || input.trim() === "")
    {
        alert("ERROR: Debe ingresar un valor");
    }

    else
    {
        const numeroValido = Number(input);

        if (isNaN(numeroValido) || numeroValido < 0)
        {
            alert("ERROR: Numero NO valido");
        }

        else
        {
            numero = numeroValido;
            datoValido = true;
        }
    }

} while (!datoValido);


//Mostrando resultado
let resultado = 1;

for (let i = 1; i <= numero; i ++)
{
    resultado *= i;    
}

alert(`El factorial de ${numero} es: ${resultado}`);
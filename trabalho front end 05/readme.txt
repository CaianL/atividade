Funções regEX:

Nome:[A-Za-z](delimita os caracteres de a ate z maiusculos e minusculos)
{1,100}(quantiddes de caracteres na forma "minimo,maximo")

e-mail:[A-Za-z0-9](mesmo de antes, incluindo os numeros)
@(obriga o arroba depois)
.com(mesma coisa, mais com o .com)

telefone:\+55 \([1-9]{2}\) (obriga o +55, e exatos 2 numeros de 1 a 9)
 [2-9][0-9]{3,4}-[0-9]{4}( obriga ter 3 numeros e 2 a 9, e de 0 a 9, depois 4 numeros de 0 a 9)

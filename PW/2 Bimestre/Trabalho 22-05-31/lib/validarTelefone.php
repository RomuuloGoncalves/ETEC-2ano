<?php

function verificaTelefone($numero){
    
        /*
            O que está dentro do preg_match é chamado regex

            #-- \ é para escapar alguns caracteres especiais que sem esse \ têm outra funcionalidade. Escapados com \ são o caractere mesmo.
            #-- ? quee dizer opcional, pode haver ou não.
            #-- {n} quer dizer "o caractere anterior" exatamente n vezes.f(preg_match("/\(?\d{2}\)?\s?\d{5}\-?\d{4}/", $phone)) {
        */

        $regex = '/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/';

        if (preg_match($regex, $numero) == false) {

            // O número não foi validado.
            return false;
        } else {

            // Telefone válido.
            return true;
        }        
}

?>
<?php



//*recuperare i file dal json (sarà una stringa);
$diskData = file_get_contents('./db/dischi.json');


//*inserendo qui l'header il browser riceverà con risposta dall'header un file json invece che un file html
//! header('Content-Type: application/json');

//*Assegno ad una variabile la decodifica di un array json in un array di array in php(array associativo dato dal true);
$diskList = json_decode($diskData, true);

//verifichiamo se c'è o no, faccio tirare fuori qualcosa
if (is_null($diskList)) {
    $result = [];
} else {
    $result = [];
    if (!isset($_GET['diskIndex'])) {
        $result = $diskList;
    } else {
        $result = $diskList[$_GET['diskIndex']];
    }
}

//Header application/json
header('Content-Type: application/json');

echo json_encode($result);
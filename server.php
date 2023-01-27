<?php
$diskData = file_get_contents('./db/dischi.json');
// echo $diskData;
$diskList = json_decode($diskData, true);


//verifichiamo se c'è o no, faccio tirare fuori qualcosa
//Header application/json
header('Content-Type: application/json');

echo json_encode($diskList);

//json_encode


// elaborazione dell'array asssociativo


//prendere i dati dal server ma non dal json;
<?php

$diskData = file_get_contents('./db/dischi.json');

// echo $diskData;

$diskList = json_decode($diskData, true);

var_dump($diskList);
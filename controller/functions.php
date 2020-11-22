<?php
$filename = $_FILES["file-csv"]["tmp_name"];
if ($_FILES["file-csv"]["size"] > 0) {
    $file = fopen($filename, "r");
    $datas = [];
    while (($getData = fgetcsv($file, 10000, ",")) !== FALSE) {
        $data = [
            $getData[0],
            $getData[1],
            $getData[2],
            $getData[3],
            $getData[4]
        ];
        array_push($datas, $data);
    }
    fclose($file);
}

$res = ['data' => $datas];
echo json_encode($res);

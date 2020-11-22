<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Export Table rate</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
    <script src="./app.js"></script>
    <style>
        .container {
            max-width: 1350px !important;
        }

        .custom-input {
            border: none;
            outline: none;
        }

        label {
            margin-right: 5px;
            font-weight: 600;
        }

        #includedContent,
        .form-group>input,
        select {
            margin-right: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1 class="my-5">Table rates export</h1>
        <div class="form-inline">
            <div class="form-group">
                <label for="rate-rule">Type</label>
                <select class="custom-select" name="rate-rule" id="rate-rule">
                    <option value="Order Subtotal (and above)">Price v. destination</option>
                    <option value="Weight (and above)">Weight v. destination</option>
                </select>
            </div>
            <div class="form-group">
                <label for="">Country</label>
                <div id="includedContent">
                    <?php include('country-select.php');?>
                </div>
            </div>
            <div class="form-group">
                <label for="" id="and-above">Order Subtotal</label>
                <input type="text" name="" id="above" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Ship price</label>
                <input type="text" name="" id="price" class="form-control">
            </div>
            <button class="btn btn-success" id="add-country">Add</button>
        </div>
        
        <div class="form-inline mt-2">
        </div>
        <br /><br /><br />
        <table class="table table-bordered">
            <thead class="thead-inverse">
                <tr>
                    <th>COUNTRY</th>
                    <th>REGION / STATE</th>
                    <th>ZIP / POSTAL CODE</th>
                    <th id="rule-col">ORDER SUBTOTAL (AND ABOVE)</th>
                    <th>SHIPPING PRICE</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="tbl-body"></tbody>
        </table>
        <button class="btn btn-success" id="add-row" style="margin-right: 5px">
            Add row
        </button>
        <button class="btn btn-primary" id="export-csv">Export</button>
    </div>
    </div>
</body>

</html>
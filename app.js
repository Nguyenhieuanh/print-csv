$(document).ready(function () {
    $("#rate-rule").change(function (e) {
        if ($("#rate-rule option:selected").val() == 1) {
            $("#rule-col").text("ORDER SUBTOTAL (AND ABOVE)");
            $('#and-above').text('Order Subtotal');
        } else {
            $("#rule-col").text("WEIGHT (AND ABOVE)");
            $('#and-above').text('Weight');
        }
    });

    $("#add-row").on("click", function () {
        var row =
            "<tr>" +
            '<th><input type="text" class="custom-input country-input" autocomplete="off"></th>' +
            '<th><input type="text" class="custom-input region-input" value="*"></th>' +
            '<th><input type="text" class="custom-input zip-input" value="*"></th>' +
            '<th><input type="text" class="custom-input above-input"></th>' +
            '<th><input type="text" class="custom-input price-input"></th>' +
            '<th><button class="btn btn-danger btn-delete btn-sm"><i class="far fa-trash-alt"></i></button></th>' +
            "</tr>";
        $("#tbl-body").append(row);
    });

    $('#add-country').on('click', function () {
        var countrySelect = $('.selectpicker').val();
        var subtotalOrWeight = $('#above').val();
        var shippingPrice = $('#price').val();
        countrySelect.forEach(element => {
            var row =
                "<tr>" +
                '<th><input type="text" class="custom-input country-input" value="' + element + '"autocomplete="off"></th>' +
                '<th><input type="text" class="custom-input region-input" value="*"></th>' +
                '<th><input type="text" class="custom-input zip-input" value="*"></th>' +
                '<th><input type="text" class="custom-input above-input" value="' + subtotalOrWeight +'"></th>' +
                '<th><input type="text" class="custom-input price-input" value="' + shippingPrice +'"></th>' +
                '<th><button class="btn btn-danger btn-delete btn-sm"><i class="far fa-trash-alt"></i></button></th>' +
                "</tr>";
            $("#tbl-body").append(row);
        });
        $('.selectpicker').val('');
        $('.filter-option-inner-inner').text('');
    })
});
$(function () {
    $("#includedContent").load("country-select.html");
});

$(document).on("click", ".btn-delete", function () {
    $(this).closest("tr").remove();
});

$(function () {
    var countries = [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo - Brazzaville",
        "Congo - Kinshasa",
        "Cook Islands",
        "Costa Rica",
        "Côte d’Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard &amp; McDonald Islands",
        "Honduras",
        "Hong Kong SAR China",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau SAR China",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar (Burma)",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "North Korea",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestinian Territories",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn Islands",
        "Poland",
        "Portugal",
        "Qatar",
        "Réunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Samoa",
        "San Marino",
        "São Tomé &amp; Príncipe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia &amp; South Sandwich Islands",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St. Barthélemy",
        "St. Helena",
        "St. Kitts &amp; Nevis",
        "St. Lucia",
        "St. Martin",
        "St. Pierre &amp; Miquelon",
        "St. Vincent &amp; Grenadines",
        "Sudan",
        "Suriname",
        "Svalbard &amp; Jan Mayen",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "U.S. Outlying Islands",
        "U.S. Virgin Islands",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Wallis &amp; Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];

    $(document).on("focus", ".country-input", function () {
        $(this).autocomplete({
            source: countries,
            minLength: 2,
        });
    });
});

function getCountryCode(obj, val) {
    return Object.keys(obj).find(
        (key) => obj[key].toUpperCase().trim() === val.toUpperCase().trim()
    );
}

$(document).on("click", "#export-csv", function () {
    var countryCodes = (function () {
        var json = null;
        $.ajax({
            async: false,
            global: false,
            url: "/countryCode.json",
            dataType: "json",
            success: function (data) {
                json = data;
            },
        });
        return json;
    })();
    var rule = $("#rate-rule option:selected").val();
    var countries = $(".country-input")
        .map((i, e) => e.value)
        .get();
    var regions = $(".region-input")
        .map((i, e) => e.value)
        .get();
    var zips = $(".zip-input")
        .map((i, e) => e.value)
        .get();
    var aboves = $(".above-input")
        .map((i, e) => e.value)
        .get();
    var price = $(".price-input")
        .map((i, e) => e.value)
        .get();
    const rows = [
        ["Country", "Region/State", "Zip/Postal Code", rule, "Shipping Price"],
    ];
    for (let i = 0; i < countries.length; i++) {
        var row = [
            getCountryCode(countryCodes, countries[i]),
            regions[i],
            zips[i],
            aboves[i],
            price[i],
        ];
        rows.push(row);
    }
    let csvContent =
        "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "tablerates.csv");
    document.body.appendChild(link);

    link.click();
});

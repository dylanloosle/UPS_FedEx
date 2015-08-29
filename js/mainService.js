var app = angular.module('rates');

app.service('mainService', function($http, $q){

    var apiKey = 'hgIpfiMAtS3S3m5H2MNCCw';
    var easypost = require('node-easypost')(apiKey);

    this.getRates = function(shipFromCo, shipFromAddr, shipFromAddr2, shipFromCity, shipFromState, shipFromZip, shipFromCtry, shipFromPh, shipToCo, shipToAddr, shipToCity, shipToState, shipToZip, shipToCtry, shipToPh, length, width, height, weight){
        var fromAddress = {
            name: shipFromCo,
            street1: shipFromAddr,
            street2: shipFromAddr2,
            city: shipFromCity,
            state: shipFromState,
            zip: shipFromZip,
            country: shipFromCtry,
            phone: shipFromPh
        };

        var toAddress = {
            name: shipToCo,
            street1: shipToAddr,
            city: shipToCity,
            state: shipToState,
            zip: shipToZip,
            country: shipToCtry,
            phone: shipToPh
        };
        var parcel = {
            length: length,
            width: width,
            height: height,
            weight: weight
        };
        easypost.Shipment.create({
            to_address: toAddress,
            from_address: fromAddress,
            parcel: parcel
        }, function(err, shipment) {
            // buy postage label with one of the rate objects
            shipment.buy({rate: shipment.lowestRate(['USPS', 'ups'])}, function(err, shipment) {
                console.log(shipment.tracking_code);
                console.log(shipment.postage_label.label_url);
            });
        });

    };



    this.getStates = function() {
        return states =
            [
            {
                value: "AL",
                name: "Alabama"
            },
            {
                value: "AK",
                name: "Alaska"
            },
            {
                value: "AZ",
                name: "Arizona"
            },
            {
                value: "AR",
                name: "Arkansas"
            },
            {
                value: "CA",
                name: "California"
            },
            {
                value: "CO",
                name: "Colorado"
            },
            {
                value: "CT",
                name: "Connecticut"
            },
            {
                value: "DE",
                name: "Delaware"
            },
            {
                value: "DC",
                name: "District Of Columbia"
            },
            {
                value: "FL",
                name: "Florida"
            },
            {
                value: "GA",
                name: "Georgia"
            },
            {
                value: "HI",
                name: "Hawaii"
            },
            {
                value: "ID",
                name: "Idaho"
            },
            {
                value: "IL",
                name: "Illinois"
            },
            {
                value:"IN",
                name: "Indiana"
            },
            {
                value: "IA",
                name: "Iowa"
            },
            {
                value: "KS",
                name: "Kansas"
            },
            {
                value: "KY",
                name: "Kentucky"
            },
            {
                value: "LA",
                name: "Louisiana"
            },
            {
                value: "ME",
                name: "Maine"
            },
            {
                value: "MD",
                name: "Maryland"
            },
            {
                value: "MA",
                name: "Massachusetts"
            },
            {
                value: "MI",
                name: "Michigan"
            },
            {
                value: "MN",
                name: "Minnesota"
            },
            {
                value: "MS",
                name: "Mississippi"
            },
            {
                value: "MO",
                name: "Missouri"
            },
            {
                value: "MT",
                name: "Montana"
            },
            {
                value: "NE",
                name: "Nebraska"
            },
            {
                value: "NV",
                name: "Nevada"
            },
            {
                value: "NH",
                name: "New Hampshire"
            },
            {
                value: "NJ",
                name: "New Jersey"
            },
            {
                value: "NM",
                name: "New Mexico"
            },
            {
                value: "NY",
                name: "New York"
            },
            {
                value: "NC",
                name: "North Carolina"
            },
            {
                value: "ND",
                name: "North Dakota"
            },
            {
                value: "OH",
                name: "Ohio"
            },
            {
                value: "OK",
                name: "Oklahoma"
            },
            {
                value: "OR",
                name: "Oregon"
            },
            {
                value: "PA",
                name: "Pennsylvania"
            },
            {
                value: "RI",
                name: "Rhode Island"
            },
            {
                value: "SC",
                name: "South Carolina"
            },
            {
                value: "SD",
                name: "South Dakota"
            },
            {
                value: "TN",
                name: "Tennessee"
            },
            {
                value: "TX",
                name: "Texas"
            },
            {
                value: "UT",
                name: "Utah"
            },
            {
                value: "VT",
                name: "Vermont"
            },
            {
                value: "VA",
                name: "Virginia"
            },
            {
                value: "WA",
                name: "Washington"
            },
            {
                value: "WV",
                name: "West Virginia"
            },
            {
                value: "WI",
                name: "Wisconsin"
            },
            {
                value: "WY",
                name: "Wyoming"



            }
        ];
    }
});
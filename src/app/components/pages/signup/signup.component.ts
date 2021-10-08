import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { UserService } from 'src/app/user.service';
import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  togglembcheck: boolean = true;
  languageSelected = 'es';

  defaultValue: Country = {
    name: 'Deutschland',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    numericCode: '276',
    callingCode: '+49'
  };

  countriesjson =[
    {
        "name": "Afghanistan",
        "dialCode": "+93",
        "isoCode": "AF",
        "flag": "https://www.countryflags.io/AF/shiny/24.png"
    },
    {
        "name": "Aland Islands",
        "dialCode": "+358",
        "isoCode": "AX",
        "flag": "https://www.countryflags.io/AX/shiny/24.png"
    },
    {
        "name": "Albania",
        "dialCode": "+355",
        "isoCode": "AL",
        "flag": "https://www.countryflags.io/AL/shiny/24.png"
    },
    {
        "name": "Algeria",
        "dialCode": "+213",
        "isoCode": "DZ",
        "flag": "https://www.countryflags.io/DZ/shiny/24.png"
    },
    {
        "name": "AmericanSamoa",
        "dialCode": "+1684",
        "isoCode": "AS",
        "flag": "https://www.countryflags.io/AS/shiny/24.png"
    },
    {
        "name": "Andorra",
        "dialCode": "+376",
        "isoCode": "AD",
        "flag": "https://www.countryflags.io/AD/shiny/24.png"
    },
    {
        "name": "Angola",
        "dialCode": "+244",
        "isoCode": "AO",
        "flag": "https://www.countryflags.io/AO/shiny/24.png"
    },
    {
        "name": "Anguilla",
        "dialCode": "+1264",
        "isoCode": "AI",
        "flag": "https://www.countryflags.io/AI/shiny/24.png"
    },
    {
        "name": "Antarctica",
        "dialCode": "+672",
        "isoCode": "AQ",
        "flag": "https://www.countryflags.io/AQ/shiny/24.png"
    },
    {
        "name": "Antigua and Barbuda",
        "dialCode": "+1268",
        "isoCode": "AG",
        "flag": "https://www.countryflags.io/AG/shiny/24.png"
    },
    {
        "name": "Argentina",
        "dialCode": "+54",
        "isoCode": "AR",
        "flag": "https://www.countryflags.io/AR/shiny/24.png"
    },
    {
        "name": "Armenia",
        "dialCode": "+374",
        "isoCode": "AM",
        "flag": "https://www.countryflags.io/AM/shiny/24.png"
    },
    {
        "name": "Aruba",
        "dialCode": "+297",
        "isoCode": "AW",
        "flag": "https://www.countryflags.io/AW/shiny/24.png"
    },
    {
        "name": "Ascension Island",
        "dialCode": "+247",
        "isoCode": "AC",
        "flag": "https://cdn.kcak11.com/flags/shiny/24.png"
    },
    {
        "name": "Australia",
        "dialCode": "+61",
        "isoCode": "AU",
        "flag": "https://www.countryflags.io/AU/shiny/24.png"
    },
    {
        "name": "Austria",
        "dialCode": "+43",
        "isoCode": "AT",
        "flag": "https://www.countryflags.io/AT/shiny/24.png"
    },
    {
        "name": "Azerbaijan",
        "dialCode": "+994",
        "isoCode": "AZ",
        "flag": "https://www.countryflags.io/AZ/shiny/24.png"
    },
    {
        "name": "Bahamas",
        "dialCode": "+1242",
        "isoCode": "BS",
        "flag": "https://www.countryflags.io/BS/shiny/24.png"
    },
    {
        "name": "Bahrain",
        "dialCode": "+973",
        "isoCode": "BH",
        "flag": "https://www.countryflags.io/BH/shiny/24.png"
    },
    {
        "name": "Bangladesh",
        "dialCode": "+880",
        "isoCode": "BD",
        "flag": "https://www.countryflags.io/BD/shiny/24.png"
    },
    {
        "name": "Barbados",
        "dialCode": "+1246",
        "isoCode": "BB",
        "flag": "https://www.countryflags.io/BB/shiny/24.png"
    },
    {
        "name": "Belarus",
        "dialCode": "+375",
        "isoCode": "BY",
        "flag": "https://www.countryflags.io/BY/shiny/24.png"
    },
    {
        "name": "Belgium",
        "dialCode": "+32",
        "isoCode": "BE",
        "flag": "https://www.countryflags.io/BE/shiny/24.png"
    },
    {
        "name": "Belize",
        "dialCode": "+501",
        "isoCode": "BZ",
        "flag": "https://www.countryflags.io/BZ/shiny/24.png"
    },
    {
        "name": "Benin",
        "dialCode": "+229",
        "isoCode": "BJ",
        "flag": "https://www.countryflags.io/BJ/shiny/24.png"
    },
    {
        "name": "Bermuda",
        "dialCode": "+1441",
        "isoCode": "BM",
        "flag": "https://www.countryflags.io/BM/shiny/24.png"
    },
    {
        "name": "Bhutan",
        "dialCode": "+975",
        "isoCode": "BT",
        "flag": "https://www.countryflags.io/BT/shiny/24.png"
    },
    {
        "name": "Bolivia",
        "dialCode": "+591",
        "isoCode": "BO",
        "flag": "https://www.countryflags.io/BO/shiny/24.png"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dialCode": "+387",
        "isoCode": "BA",
        "flag": "https://www.countryflags.io/BA/shiny/24.png"
    },
    {
        "name": "Botswana",
        "dialCode": "+267",
        "isoCode": "BW",
        "flag": "https://www.countryflags.io/BW/shiny/24.png"
    },
    {
        "name": "Brazil",
        "dialCode": "+55",
        "isoCode": "BR",
        "flag": "https://www.countryflags.io/BR/shiny/24.png"
    },
    {
        "name": "British Indian Ocean Territory",
        "dialCode": "+246",
        "isoCode": "IO",
        "flag": "https://www.countryflags.io/IO/shiny/24.png"
    },
    {
        "name": "Brunei Darussalam",
        "dialCode": "+673",
        "isoCode": "BN",
        "flag": "https://www.countryflags.io/BN/shiny/24.png"
    },
    {
        "name": "Bulgaria",
        "dialCode": "+359",
        "isoCode": "BG",
        "flag": "https://www.countryflags.io/BG/shiny/24.png"
    },
    {
        "name": "Burkina Faso",
        "dialCode": "+226",
        "isoCode": "BF",
        "flag": "https://www.countryflags.io/BF/shiny/24.png"
    },
    {
        "name": "Burundi",
        "dialCode": "+257",
        "isoCode": "BI",
        "flag": "https://www.countryflags.io/BI/shiny/24.png"
    },
    {
        "name": "Cambodia",
        "dialCode": "+855",
        "isoCode": "KH",
        "flag": "https://www.countryflags.io/KH/shiny/24.png"
    },
    {
        "name": "Cameroon",
        "dialCode": "+237",
        "isoCode": "CM",
        "flag": "https://www.countryflags.io/CM/shiny/24.png"
    },
    {
        "name": "Canada",
        "dialCode": "+1",
        "isoCode": "CA",
        "flag": "https://www.countryflags.io/CA/shiny/24.png"
    },
    {
        "name": "Cape Verde",
        "dialCode": "+238",
        "isoCode": "CV",
        "flag": "https://www.countryflags.io/CV/shiny/24.png"
    },
    {
        "name": "Cayman Islands",
        "dialCode": "+1345",
        "isoCode": "KY",
        "flag": "https://www.countryflags.io/KY/shiny/24.png"
    },
    {
        "name": "Central African Republic",
        "dialCode": "+236",
        "isoCode": "CF",
        "flag": "https://www.countryflags.io/CF/shiny/24.png"
    },
    {
        "name": "Chad",
        "dialCode": "+235",
        "isoCode": "TD",
        "flag": "https://www.countryflags.io/TD/shiny/24.png"
    },
    {
        "name": "Chile",
        "dialCode": "+56",
        "isoCode": "CL",
        "flag": "https://www.countryflags.io/CL/shiny/24.png"
    },
    {
        "name": "China",
        "dialCode": "+86",
        "isoCode": "CN",
        "flag": "https://www.countryflags.io/CN/shiny/24.png"
    },
    {
        "name": "Christmas Island",
        "dialCode": "+61",
        "isoCode": "CX",
        "flag": "https://www.countryflags.io/CX/shiny/24.png"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dialCode": "+61",
        "isoCode": "CC",
        "flag": "https://www.countryflags.io/CC/shiny/24.png"
    },
    {
        "name": "Colombia",
        "dialCode": "+57",
        "isoCode": "CO",
        "flag": "https://www.countryflags.io/CO/shiny/24.png"
    },
    {
        "name": "Comoros",
        "dialCode": "+269",
        "isoCode": "KM",
        "flag": "https://www.countryflags.io/KM/shiny/24.png"
    },
    {
        "name": "Congo",
        "dialCode": "+242",
        "isoCode": "CG",
        "flag": "https://www.countryflags.io/CG/shiny/24.png"
    },
    {
        "name": "Cook Islands",
        "dialCode": "+682",
        "isoCode": "CK",
        "flag": "https://www.countryflags.io/CK/shiny/24.png"
    },
    {
        "name": "Costa Rica",
        "dialCode": "+506",
        "isoCode": "CR",
        "flag": "https://www.countryflags.io/CR/shiny/24.png"
    },
    {
        "name": "Croatia",
        "dialCode": "+385",
        "isoCode": "HR",
        "flag": "https://www.countryflags.io/HR/shiny/24.png"
    },
    {
        "name": "Cuba",
        "dialCode": "+53",
        "isoCode": "CU",
        "flag": "https://www.countryflags.io/CU/shiny/24.png"
    },
    {
        "name": "Cyprus",
        "dialCode": "+357",
        "isoCode": "CY",
        "flag": "https://www.countryflags.io/CY/shiny/24.png"
    },
    {
        "name": "Czech Republic",
        "dialCode": "+420",
        "isoCode": "CZ",
        "flag": "https://www.countryflags.io/CZ/shiny/24.png"
    },
    {
        "name": "Democratic Republic of the Congo",
        "dialCode": "+243",
        "isoCode": "CD",
        "flag": "https://www.countryflags.io/CD/shiny/24.png"
    },
    {
        "name": "Denmark",
        "dialCode": "+45",
        "isoCode": "DK",
        "flag": "https://www.countryflags.io/DK/shiny/24.png"
    },
    {
        "name": "Djibouti",
        "dialCode": "+253",
        "isoCode": "DJ",
        "flag": "https://www.countryflags.io/DJ/shiny/24.png"
    },
    {
        "name": "Dominica",
        "dialCode": "+1767",
        "isoCode": "DM",
        "flag": "https://www.countryflags.io/DM/shiny/24.png"
    },
    {
        "name": "Dominican Republic",
        "dialCode": "+1849",
        "isoCode": "DO",
        "flag": "https://www.countryflags.io/DO/shiny/24.png"
    },
    {
        "name": "Ecuador",
        "dialCode": "+593",
        "isoCode": "EC",
        "flag": "https://www.countryflags.io/EC/shiny/24.png"
    },
    {
        "name": "Egypt",
        "dialCode": "+20",
        "isoCode": "EG",
        "flag": "https://www.countryflags.io/EG/shiny/24.png"
    },
    {
        "name": "El Salvador",
        "dialCode": "+503",
        "isoCode": "SV",
        "flag": "https://www.countryflags.io/SV/shiny/24.png"
    },
    {
        "name": "Equatorial Guinea",
        "dialCode": "+240",
        "isoCode": "GQ",
        "flag": "https://www.countryflags.io/GQ/shiny/24.png"
    },
    {
        "name": "Eritrea",
        "dialCode": "+291",
        "isoCode": "ER",
        "flag": "https://www.countryflags.io/ER/shiny/24.png"
    },
    {
        "name": "Estonia",
        "dialCode": "+372",
        "isoCode": "EE",
        "flag": "https://www.countryflags.io/EE/shiny/24.png"
    },
    {
        "name": "Eswatini",
        "dialCode": "+268",
        "isoCode": "SZ",
        "flag": "https://www.countryflags.io/SZ/shiny/24.png"
    },
    {
        "name": "Ethiopia",
        "dialCode": "+251",
        "isoCode": "ET",
        "flag": "https://www.countryflags.io/ET/shiny/24.png"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dialCode": "+500",
        "isoCode": "FK",
        "flag": "https://www.countryflags.io/FK/shiny/24.png"
    },
    {
        "name": "Faroe Islands",
        "dialCode": "+298",
        "isoCode": "FO",
        "flag": "https://www.countryflags.io/FO/shiny/24.png"
    },
    {
        "name": "Fiji",
        "dialCode": "+679",
        "isoCode": "FJ",
        "flag": "https://www.countryflags.io/FJ/shiny/24.png"
    },
    {
        "name": "Finland",
        "dialCode": "+358",
        "isoCode": "FI",
        "flag": "https://www.countryflags.io/FI/shiny/24.png"
    },
    {
        "name": "France",
        "dialCode": "+33",
        "isoCode": "FR",
        "flag": "https://www.countryflags.io/FR/shiny/24.png"
    },
    {
        "name": "French Guiana",
        "dialCode": "+594",
        "isoCode": "GF",
        "flag": "https://www.countryflags.io/GF/shiny/24.png"
    },
    {
        "name": "French Polynesia",
        "dialCode": "+689",
        "isoCode": "PF",
        "flag": "https://www.countryflags.io/PF/shiny/24.png"
    },
    {
        "name": "Gabon",
        "dialCode": "+241",
        "isoCode": "GA",
        "flag": "https://www.countryflags.io/GA/shiny/24.png"
    },
    {
        "name": "Gambia",
        "dialCode": "+220",
        "isoCode": "GM",
        "flag": "https://www.countryflags.io/GM/shiny/24.png"
    },
    {
        "name": "Georgia",
        "dialCode": "+995",
        "isoCode": "GE",
        "flag": "https://www.countryflags.io/GE/shiny/24.png"
    },
    {
        "name": "Germany",
        "dialCode": "+49",
        "isoCode": "DE",
        "flag": "https://www.countryflags.io/DE/shiny/24.png"
    },
    {
        "name": "Ghana",
        "dialCode": "+233",
        "isoCode": "GH",
        "flag": "https://www.countryflags.io/GH/shiny/24.png"
    },
    {
        "name": "Gibraltar",
        "dialCode": "+350",
        "isoCode": "GI",
        "flag": "https://www.countryflags.io/GI/shiny/24.png"
    },
    {
        "name": "Greece",
        "dialCode": "+30",
        "isoCode": "GR",
        "flag": "https://www.countryflags.io/GR/shiny/24.png"
    },
    {
        "name": "Greenland",
        "dialCode": "+299",
        "isoCode": "GL",
        "flag": "https://www.countryflags.io/GL/shiny/24.png"
    },
    {
        "name": "Grenada",
        "dialCode": "+1473",
        "isoCode": "GD",
        "flag": "https://www.countryflags.io/GD/shiny/24.png"
    },
    {
        "name": "Guadeloupe",
        "dialCode": "+590",
        "isoCode": "GP",
        "flag": "https://www.countryflags.io/GP/shiny/24.png"
    },
    {
        "name": "Guam",
        "dialCode": "+1671",
        "isoCode": "GU",
        "flag": "https://www.countryflags.io/GU/shiny/24.png"
    },
    {
        "name": "Guatemala",
        "dialCode": "+502",
        "isoCode": "GT",
        "flag": "https://www.countryflags.io/GT/shiny/24.png"
    },
    {
        "name": "Guernsey",
        "dialCode": "+44",
        "isoCode": "GG",
        "flag": "https://www.countryflags.io/GG/shiny/24.png"
    },
    {
        "name": "Guinea",
        "dialCode": "+224",
        "isoCode": "GN",
        "flag": "https://www.countryflags.io/GN/shiny/24.png"
    },
    {
        "name": "Guinea-Bissau",
        "dialCode": "+245",
        "isoCode": "GW",
        "flag": "https://www.countryflags.io/GW/shiny/24.png"
    },
    {
        "name": "Guyana",
        "dialCode": "+592",
        "isoCode": "GY",
        "flag": "https://www.countryflags.io/GY/shiny/24.png"
    },
    {
        "name": "Haiti",
        "dialCode": "+509",
        "isoCode": "HT",
        "flag": "https://www.countryflags.io/HT/shiny/24.png"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dialCode": "+379",
        "isoCode": "VA",
        "flag": "https://www.countryflags.io/VA/shiny/24.png"
    },
    {
        "name": "Honduras",
        "dialCode": "+504",
        "isoCode": "HN",
        "flag": "https://www.countryflags.io/HN/shiny/24.png"
    },
    {
        "name": "Hong Kong",
        "dialCode": "+852",
        "isoCode": "HK",
        "flag": "https://www.countryflags.io/HK/shiny/24.png"
    },
    {
        "name": "Hungary",
        "dialCode": "+36",
        "isoCode": "HU",
        "flag": "https://www.countryflags.io/HU/shiny/24.png"
    },
    {
        "name": "Iceland",
        "dialCode": "+354",
        "isoCode": "IS",
        "flag": "https://www.countryflags.io/IS/shiny/24.png"
    },
    {
        "name": "India",
        "dialCode": "+91",
        "isoCode": "IN",
        "flag": "https://www.countryflags.io/IN/shiny/24.png"
    },
    {
        "name": "Indonesia",
        "dialCode": "+62",
        "isoCode": "ID",
        "flag": "https://www.countryflags.io/ID/shiny/24.png"
    },
    {
        "name": "Iran",
        "dialCode": "+98",
        "isoCode": "IR",
        "flag": "https://www.countryflags.io/IR/shiny/24.png"
    },
    {
        "name": "Iraq",
        "dialCode": "+964",
        "isoCode": "IQ",
        "flag": "https://www.countryflags.io/IQ/shiny/24.png"
    },
    {
        "name": "Ireland",
        "dialCode": "+353",
        "isoCode": "IE",
        "flag": "https://www.countryflags.io/IE/shiny/24.png"
    },
    {
        "name": "Isle of Man",
        "dialCode": "+44",
        "isoCode": "IM",
        "flag": "https://www.countryflags.io/IM/shiny/24.png"
    },
    {
        "name": "Israel",
        "dialCode": "+972",
        "isoCode": "IL",
        "flag": "https://www.countryflags.io/IL/shiny/24.png"
    },
    {
        "name": "Italy",
        "dialCode": "+39",
        "isoCode": "IT",
        "flag": "https://www.countryflags.io/IT/shiny/24.png"
    },
    {
        "name": "Ivory Coast / Cote d'Ivoire",
        "dialCode": "+225",
        "isoCode": "CI",
        "flag": "https://www.countryflags.io/CI/shiny/24.png"
    },
    {
        "name": "Jamaica",
        "dialCode": "+1876",
        "isoCode": "JM",
        "flag": "https://www.countryflags.io/JM/shiny/24.png"
    },
    {
        "name": "Japan",
        "dialCode": "+81",
        "isoCode": "JP",
        "flag": "https://www.countryflags.io/JP/shiny/24.png"
    },
    {
        "name": "Jersey",
        "dialCode": "+44",
        "isoCode": "JE",
        "flag": "https://www.countryflags.io/JE/shiny/24.png"
    },
    {
        "name": "Jordan",
        "dialCode": "+962",
        "isoCode": "JO",
        "flag": "https://www.countryflags.io/JO/shiny/24.png"
    },
    {
        "name": "Kazakhstan",
        "dialCode": "+77",
        "isoCode": "KZ",
        "flag": "https://www.countryflags.io/KZ/shiny/24.png"
    },
    {
        "name": "Kenya",
        "dialCode": "+254",
        "isoCode": "KE",
        "flag": "https://www.countryflags.io/KE/shiny/24.png"
    },
    {
        "name": "Kiribati",
        "dialCode": "+686",
        "isoCode": "KI",
        "flag": "https://www.countryflags.io/KI/shiny/24.png"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dialCode": "+850",
        "isoCode": "KP",
        "flag": "https://www.countryflags.io/KP/shiny/24.png"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dialCode": "+82",
        "isoCode": "KR",
        "flag": "https://www.countryflags.io/KR/shiny/24.png"
    },
    {
        "name": "Kosovo",
        "dialCode": "+383",
        "isoCode": "XK",
        "flag": "https://www.countryflags.io/XK/shiny/24.png"
    },
    {
        "name": "Kuwait",
        "dialCode": "+965",
        "isoCode": "KW",
        "flag": "https://www.countryflags.io/KW/shiny/24.png"
    },
    {
        "name": "Kyrgyzstan",
        "dialCode": "+996",
        "isoCode": "KG",
        "flag": "https://www.countryflags.io/KG/shiny/24.png"
    },
    {
        "name": "Laos",
        "dialCode": "+856",
        "isoCode": "LA",
        "flag": "https://www.countryflags.io/LA/shiny/24.png"
    },
    {
        "name": "Latvia",
        "dialCode": "+371",
        "isoCode": "LV",
        "flag": "https://www.countryflags.io/LV/shiny/24.png"
    },
    {
        "name": "Lebanon",
        "dialCode": "+961",
        "isoCode": "LB",
        "flag": "https://www.countryflags.io/LB/shiny/24.png"
    },
    {
        "name": "Lesotho",
        "dialCode": "+266",
        "isoCode": "LS",
        "flag": "https://www.countryflags.io/LS/shiny/24.png"
    },
    {
        "name": "Liberia",
        "dialCode": "+231",
        "isoCode": "LR",
        "flag": "https://www.countryflags.io/LR/shiny/24.png"
    },
    {
        "name": "Libya",
        "dialCode": "+218",
        "isoCode": "LY",
        "flag": "https://www.countryflags.io/LY/shiny/24.png"
    },
    {
        "name": "Liechtenstein",
        "dialCode": "+423",
        "isoCode": "LI",
        "flag": "https://www.countryflags.io/LI/shiny/24.png"
    },
    {
        "name": "Lithuania",
        "dialCode": "+370",
        "isoCode": "LT",
        "flag": "https://www.countryflags.io/LT/shiny/24.png"
    },
    {
        "name": "Luxembourg",
        "dialCode": "+352",
        "isoCode": "LU",
        "flag": "https://www.countryflags.io/LU/shiny/24.png"
    },
    {
        "name": "Macau",
        "dialCode": "+853",
        "isoCode": "MO",
        "flag": "https://www.countryflags.io/MO/shiny/24.png"
    },
    {
        "name": "Madagascar",
        "dialCode": "+261",
        "isoCode": "MG",
        "flag": "https://www.countryflags.io/MG/shiny/24.png"
    },
    {
        "name": "Malawi",
        "dialCode": "+265",
        "isoCode": "MW",
        "flag": "https://www.countryflags.io/MW/shiny/24.png"
    },
    {
        "name": "Malaysia",
        "dialCode": "+60",
        "isoCode": "MY",
        "flag": "https://www.countryflags.io/MY/shiny/24.png"
    },
    {
        "name": "Maldives",
        "dialCode": "+960",
        "isoCode": "MV",
        "flag": "https://www.countryflags.io/MV/shiny/24.png"
    },
    {
        "name": "Mali",
        "dialCode": "+223",
        "isoCode": "ML",
        "flag": "https://www.countryflags.io/ML/shiny/24.png"
    },
    {
        "name": "Malta",
        "dialCode": "+356",
        "isoCode": "MT",
        "flag": "https://www.countryflags.io/MT/shiny/24.png"
    },
    {
        "name": "Marshall Islands",
        "dialCode": "+692",
        "isoCode": "MH",
        "flag": "https://www.countryflags.io/MH/shiny/24.png"
    },
    {
        "name": "Martinique",
        "dialCode": "+596",
        "isoCode": "MQ",
        "flag": "https://www.countryflags.io/MQ/shiny/24.png"
    },
    {
        "name": "Mauritania",
        "dialCode": "+222",
        "isoCode": "MR",
        "flag": "https://www.countryflags.io/MR/shiny/24.png"
    },
    {
        "name": "Mauritius",
        "dialCode": "+230",
        "isoCode": "MU",
        "flag": "https://www.countryflags.io/MU/shiny/24.png"
    },
    {
        "name": "Mayotte",
        "dialCode": "+262",
        "isoCode": "YT",
        "flag": "https://www.countryflags.io/YT/shiny/24.png"
    },
    {
        "name": "Mexico",
        "dialCode": "+52",
        "isoCode": "MX",
        "flag": "https://www.countryflags.io/MX/shiny/24.png"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dialCode": "+691",
        "isoCode": "FM",
        "flag": "https://www.countryflags.io/FM/shiny/24.png"
    },
    {
        "name": "Moldova",
        "dialCode": "+373",
        "isoCode": "MD",
        "flag": "https://www.countryflags.io/MD/shiny/24.png"
    },
    {
        "name": "Monaco",
        "dialCode": "+377",
        "isoCode": "MC",
        "flag": "https://www.countryflags.io/MC/shiny/24.png"
    },
    {
        "name": "Mongolia",
        "dialCode": "+976",
        "isoCode": "MN",
        "flag": "https://www.countryflags.io/MN/shiny/24.png"
    },
    {
        "name": "Montenegro",
        "dialCode": "+382",
        "isoCode": "ME",
        "flag": "https://www.countryflags.io/ME/shiny/24.png"
    },
    {
        "name": "Montserrat",
        "dialCode": "+1664",
        "isoCode": "MS",
        "flag": "https://www.countryflags.io/MS/shiny/24.png"
    },
    {
        "name": "Morocco",
        "dialCode": "+212",
        "isoCode": "MA",
        "flag": "https://www.countryflags.io/MA/shiny/24.png"
    },
    {
        "name": "Mozambique",
        "dialCode": "+258",
        "isoCode": "MZ",
        "flag": "https://www.countryflags.io/MZ/shiny/24.png"
    },
    {
        "name": "Myanmar",
        "dialCode": "+95",
        "isoCode": "MM",
        "flag": "https://www.countryflags.io/MM/shiny/24.png"
    },
    {
        "name": "Namibia",
        "dialCode": "+264",
        "isoCode": "NA",
        "flag": "https://www.countryflags.io/NA/shiny/24.png"
    },
    {
        "name": "Nauru",
        "dialCode": "+674",
        "isoCode": "NR",
        "flag": "https://www.countryflags.io/NR/shiny/24.png"
    },
    {
        "name": "Nepal",
        "dialCode": "+977",
        "isoCode": "NP",
        "flag": "https://www.countryflags.io/NP/shiny/24.png"
    },
    {
        "name": "Netherlands",
        "dialCode": "+31",
        "isoCode": "NL",
        "flag": "https://www.countryflags.io/NL/shiny/24.png"
    },
    {
        "name": "Netherlands Antilles",
        "dialCode": "+599",
        "isoCode": "AN",
        "flag": "https://www.countryflags.io/AN/shiny/24.png"
    },
    {
        "name": "New Caledonia",
        "dialCode": "+687",
        "isoCode": "NC",
        "flag": "https://www.countryflags.io/NC/shiny/24.png"
    },
    {
        "name": "New Zealand",
        "dialCode": "+64",
        "isoCode": "NZ",
        "flag": "https://www.countryflags.io/NZ/shiny/24.png"
    },
    {
        "name": "Nicaragua",
        "dialCode": "+505",
        "isoCode": "NI",
        "flag": "https://www.countryflags.io/NI/shiny/24.png"
    },
    {
        "name": "Niger",
        "dialCode": "+227",
        "isoCode": "NE",
        "flag": "https://www.countryflags.io/NE/shiny/24.png"
    },
    {
        "name": "Nigeria",
        "dialCode": "+234",
        "isoCode": "NG",
        "flag": "https://www.countryflags.io/NG/shiny/24.png"
    },
    {
        "name": "Niue",
        "dialCode": "+683",
        "isoCode": "NU",
        "flag": "https://www.countryflags.io/NU/shiny/24.png"
    },
    {
        "name": "Norfolk Island",
        "dialCode": "+672",
        "isoCode": "NF",
        "flag": "https://www.countryflags.io/NF/shiny/24.png"
    },
    {
        "name": "North Macedonia",
        "dialCode": "+389",
        "isoCode": "MK",
        "flag": "https://www.countryflags.io/MK/shiny/24.png"
    },
    {
        "name": "Northern Mariana Islands",
        "dialCode": "+1670",
        "isoCode": "MP",
        "flag": "https://www.countryflags.io/MP/shiny/24.png"
    },
    {
        "name": "Norway",
        "dialCode": "+47",
        "isoCode": "NO",
        "flag": "https://www.countryflags.io/NO/shiny/24.png"
    },
    {
        "name": "Oman",
        "dialCode": "+968",
        "isoCode": "OM",
        "flag": "https://www.countryflags.io/OM/shiny/24.png"
    },
    {
        "name": "Pakistan",
        "dialCode": "+92",
        "isoCode": "PK",
        "flag": "https://www.countryflags.io/PK/shiny/24.png"
    },
    {
        "name": "Palau",
        "dialCode": "+680",
        "isoCode": "PW",
        "flag": "https://www.countryflags.io/PW/shiny/24.png"
    },
    {
        "name": "Palestine",
        "dialCode": "+970",
        "isoCode": "PS",
        "flag": "https://www.countryflags.io/PS/shiny/24.png"
    },
    {
        "name": "Panama",
        "dialCode": "+507",
        "isoCode": "PA",
        "flag": "https://www.countryflags.io/PA/shiny/24.png"
    },
    {
        "name": "Papua New Guinea",
        "dialCode": "+675",
        "isoCode": "PG",
        "flag": "https://www.countryflags.io/PG/shiny/24.png"
    },
    {
        "name": "Paraguay",
        "dialCode": "+595",
        "isoCode": "PY",
        "flag": "https://www.countryflags.io/PY/shiny/24.png"
    },
    {
        "name": "Peru",
        "dialCode": "+51",
        "isoCode": "PE",
        "flag": "https://www.countryflags.io/PE/shiny/24.png"
    },
    {
        "name": "Philippines",
        "dialCode": "+63",
        "isoCode": "PH",
        "flag": "https://www.countryflags.io/PH/shiny/24.png"
    },
    {
        "name": "Pitcairn",
        "dialCode": "+872",
        "isoCode": "PN",
        "flag": "https://www.countryflags.io/PN/shiny/24.png"
    },
    {
        "name": "Poland",
        "dialCode": "+48",
        "isoCode": "PL",
        "flag": "https://www.countryflags.io/PL/shiny/24.png"
    },
    {
        "name": "Portugal",
        "dialCode": "+351",
        "isoCode": "PT",
        "flag": "https://www.countryflags.io/PT/shiny/24.png"
    },
    {
        "name": "Puerto Rico",
        "dialCode": "+1939",
        "isoCode": "PR",
        "flag": "https://www.countryflags.io/PR/shiny/24.png"
    },
    {
        "name": "Qatar",
        "dialCode": "+974",
        "isoCode": "QA",
        "flag": "https://www.countryflags.io/QA/shiny/24.png"
    },
    {
        "name": "Reunion",
        "dialCode": "+262",
        "isoCode": "RE",
        "flag": "https://www.countryflags.io/RE/shiny/24.png"
    },
    {
        "name": "Romania",
        "dialCode": "+40",
        "isoCode": "RO",
        "flag": "https://www.countryflags.io/RO/shiny/24.png"
    },
    {
        "name": "Russia",
        "dialCode": "+7",
        "isoCode": "RU",
        "flag": "https://www.countryflags.io/RU/shiny/24.png"
    },
    {
        "name": "Rwanda",
        "dialCode": "+250",
        "isoCode": "RW",
        "flag": "https://www.countryflags.io/RW/shiny/24.png"
    },
    {
        "name": "Saint Barthelemy",
        "dialCode": "+590",
        "isoCode": "BL",
        "flag": "https://www.countryflags.io/BL/shiny/24.png"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dialCode": "+290",
        "isoCode": "SH",
        "flag": "https://www.countryflags.io/SH/shiny/24.png"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dialCode": "+1869",
        "isoCode": "KN",
        "flag": "https://www.countryflags.io/KN/shiny/24.png"
    },
    {
        "name": "Saint Lucia",
        "dialCode": "+1758",
        "isoCode": "LC",
        "flag": "https://www.countryflags.io/LC/shiny/24.png"
    },
    {
        "name": "Saint Martin",
        "dialCode": "+590",
        "isoCode": "MF",
        "flag": "https://www.countryflags.io/MF/shiny/24.png"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dialCode": "+508",
        "isoCode": "PM",
        "flag": "https://www.countryflags.io/PM/shiny/24.png"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dialCode": "+1784",
        "isoCode": "VC",
        "flag": "https://www.countryflags.io/VC/shiny/24.png"
    },
    {
        "name": "Samoa",
        "dialCode": "+685",
        "isoCode": "WS",
        "flag": "https://www.countryflags.io/WS/shiny/24.png"
    },
    {
        "name": "San Marino",
        "dialCode": "+378",
        "isoCode": "SM",
        "flag": "https://www.countryflags.io/SM/shiny/24.png"
    },
    {
        "name": "Sao Tome and Principe",
        "dialCode": "+239",
        "isoCode": "ST",
        "flag": "https://www.countryflags.io/ST/shiny/24.png"
    },
    {
        "name": "Saudi Arabia",
        "dialCode": "+966",
        "isoCode": "SA",
        "flag": "https://www.countryflags.io/SA/shiny/24.png"
    },
    {
        "name": "Senegal",
        "dialCode": "+221",
        "isoCode": "SN",
        "flag": "https://www.countryflags.io/SN/shiny/24.png"
    },
    {
        "name": "Serbia",
        "dialCode": "+381",
        "isoCode": "RS",
        "flag": "https://www.countryflags.io/RS/shiny/24.png"
    },
    {
        "name": "Seychelles",
        "dialCode": "+248",
        "isoCode": "SC",
        "flag": "https://www.countryflags.io/SC/shiny/24.png"
    },
    {
        "name": "Sierra Leone",
        "dialCode": "+232",
        "isoCode": "SL",
        "flag": "https://www.countryflags.io/SL/shiny/24.png"
    },
    {
        "name": "Singapore",
        "dialCode": "+65",
        "isoCode": "SG",
        "flag": "https://www.countryflags.io/SG/shiny/24.png"
    },
    {
        "name": "Sint Maarten",
        "dialCode": "+1721",
        "isoCode": "SX",
        "flag": "https://www.countryflags.io/SX/shiny/24.png"
    },
    {
        "name": "Slovakia",
        "dialCode": "+421",
        "isoCode": "SK",
        "flag": "https://www.countryflags.io/SK/shiny/24.png"
    },
    {
        "name": "Slovenia",
        "dialCode": "+386",
        "isoCode": "SI",
        "flag": "https://www.countryflags.io/SI/shiny/24.png"
    },
    {
        "name": "Solomon Islands",
        "dialCode": "+677",
        "isoCode": "SB",
        "flag": "https://www.countryflags.io/SB/shiny/24.png"
    },
    {
        "name": "Somalia",
        "dialCode": "+252",
        "isoCode": "SO",
        "flag": "https://www.countryflags.io/SO/shiny/24.png"
    },
    {
        "name": "South Africa",
        "dialCode": "+27",
        "isoCode": "ZA",
        "flag": "https://www.countryflags.io/ZA/shiny/24.png"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dialCode": "+500",
        "isoCode": "GS",
        "flag": "https://www.countryflags.io/GS/shiny/24.png"
    },
    {
        "name": "South Sudan",
        "dialCode": "+211",
        "isoCode": "SS",
        "flag": "https://www.countryflags.io/SS/shiny/24.png"
    },
    {
        "name": "Spain",
        "dialCode": "+34",
        "isoCode": "ES",
        "flag": "https://www.countryflags.io/ES/shiny/24.png"
    },
    {
        "name": "Sri Lanka",
        "dialCode": "+94",
        "isoCode": "LK",
        "flag": "https://www.countryflags.io/LK/shiny/24.png"
    },
    {
        "name": "Sudan",
        "dialCode": "+249",
        "isoCode": "SD",
        "flag": "https://www.countryflags.io/SD/shiny/24.png"
    },
    {
        "name": "Suriname",
        "dialCode": "+597",
        "isoCode": "SR",
        "flag": "https://www.countryflags.io/SR/shiny/24.png"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dialCode": "+47",
        "isoCode": "SJ",
        "flag": "https://www.countryflags.io/SJ/shiny/24.png"
    },
    {
        "name": "Sweden",
        "dialCode": "+46",
        "isoCode": "SE",
        "flag": "https://www.countryflags.io/SE/shiny/24.png"
    },
    {
        "name": "Switzerland",
        "dialCode": "+41",
        "isoCode": "CH",
        "flag": "https://www.countryflags.io/CH/shiny/24.png"
    },
    {
        "name": "Syrian Arab Republic",
        "dialCode": "+963",
        "isoCode": "SY",
        "flag": "https://www.countryflags.io/SY/shiny/24.png"
    },
    {
        "name": "Taiwan",
        "dialCode": "+886",
        "isoCode": "TW",
        "flag": "https://www.countryflags.io/TW/shiny/24.png"
    },
    {
        "name": "Tajikistan",
        "dialCode": "+992",
        "isoCode": "TJ",
        "flag": "https://www.countryflags.io/TJ/shiny/24.png"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dialCode": "+255",
        "isoCode": "TZ",
        "flag": "https://www.countryflags.io/TZ/shiny/24.png"
    },
    {
        "name": "Thailand",
        "dialCode": "+66",
        "isoCode": "TH",
        "flag": "https://www.countryflags.io/TH/shiny/24.png"
    },
    {
        "name": "Timor-Leste",
        "dialCode": "+670",
        "isoCode": "TL",
        "flag": "https://www.countryflags.io/TL/shiny/24.png"
    },
    {
        "name": "Togo",
        "dialCode": "+228",
        "isoCode": "TG",
        "flag": "https://www.countryflags.io/TG/shiny/24.png"
    },
    {
        "name": "Tokelau",
        "dialCode": "+690",
        "isoCode": "TK",
        "flag": "https://www.countryflags.io/TK/shiny/24.png"
    },
    {
        "name": "Tonga",
        "dialCode": "+676",
        "isoCode": "TO",
        "flag": "https://www.countryflags.io/TO/shiny/24.png"
    },
    {
        "name": "Trinidad and Tobago",
        "dialCode": "+1868",
        "isoCode": "TT",
        "flag": "https://www.countryflags.io/TT/shiny/24.png"
    },
    {
        "name": "Tunisia",
        "dialCode": "+216",
        "isoCode": "TN",
        "flag": "https://www.countryflags.io/TN/shiny/24.png"
    },
    {
        "name": "Turkey",
        "dialCode": "+90",
        "isoCode": "TR",
        "flag": "https://www.countryflags.io/TR/shiny/24.png"
    },
    {
        "name": "Turkmenistan",
        "dialCode": "+993",
        "isoCode": "TM",
        "flag": "https://www.countryflags.io/TM/shiny/24.png"
    },
    {
        "name": "Turks and Caicos Islands",
        "dialCode": "+1649",
        "isoCode": "TC",
        "flag": "https://www.countryflags.io/TC/shiny/24.png"
    },
    {
        "name": "Tuvalu",
        "dialCode": "+688",
        "isoCode": "TV",
        "flag": "https://www.countryflags.io/TV/shiny/24.png"
    },
    {
        "name": "Uganda",
        "dialCode": "+256",
        "isoCode": "UG",
        "flag": "https://www.countryflags.io/UG/shiny/24.png"
    },
    {
        "name": "Ukraine",
        "dialCode": "+380",
        "isoCode": "UA",
        "flag": "https://www.countryflags.io/UA/shiny/24.png"
    },
    {
        "name": "United Arab Emirates",
        "dialCode": "+971",
        "isoCode": "AE",
        "flag": "https://www.countryflags.io/AE/shiny/24.png"
    },
    {
        "name": "United Kingdom",
        "dialCode": "+44",
        "isoCode": "GB",
        "flag": "https://www.countryflags.io/GB/shiny/24.png"
    },
    {
        "name": "United States",
        "dialCode": "+1",
        "isoCode": "US",
        "flag": "https://www.countryflags.io/US/shiny/24.png"
    },
    {
        "name": "Uruguay",
        "dialCode": "+598",
        "isoCode": "UY",
        "flag": "https://www.countryflags.io/UY/shiny/24.png"
    },
    {
        "name": "Uzbekistan",
        "dialCode": "+998",
        "isoCode": "UZ",
        "flag": "https://www.countryflags.io/UZ/shiny/24.png"
    },
    {
        "name": "Vanuatu",
        "dialCode": "+678",
        "isoCode": "VU",
        "flag": "https://www.countryflags.io/VU/shiny/24.png"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dialCode": "+58",
        "isoCode": "VE",
        "flag": "https://www.countryflags.io/VE/shiny/24.png"
    },
    {
        "name": "Vietnam",
        "dialCode": "+84",
        "isoCode": "VN",
        "flag": "https://www.countryflags.io/VN/shiny/24.png"
    },
    {
        "name": "Virgin Islands, British",
        "dialCode": "+1284",
        "isoCode": "VG",
        "flag": "https://www.countryflags.io/VG/shiny/24.png"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dialCode": "+1340",
        "isoCode": "VI",
        "flag": "https://www.countryflags.io/VI/shiny/24.png"
    },
    {
        "name": "Wallis and Futuna",
        "dialCode": "+681",
        "isoCode": "WF",
        "flag": "https://www.countryflags.io/WF/shiny/24.png"
    },
    {
        "name": "Yemen",
        "dialCode": "+967",
        "isoCode": "YE",
        "flag": "https://www.countryflags.io/YE/shiny/24.png"
    },
    {
        "name": "Zambia",
        "dialCode": "+260",
        "isoCode": "ZM",
        "flag": "https://www.countryflags.io/ZM/shiny/24.png"
    },
    {
        "name": "Zimbabwe",
        "dialCode": "+263",
        "isoCode": "ZW",
        "flag": "https://www.countryflags.io/ZW/shiny/24.png"
    }
]

  predefinedCountries: Country[] = [
    {
      name: 'Germany',
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      numericCode: '276',
      callingCode: '+49'
    },
    {
      name: 'Greece',
      alpha2Code: 'GR',
      alpha3Code: 'GRC',
      numericCode: '300',
      callingCode: '+30'
    },
    {
      name: 'France',
      alpha2Code: 'FR',
      alpha3Code: 'FRA',
      numericCode: '250',
      callingCode: '+33'
    },
    {
      name: 'Belgium',
      alpha2Code: 'BE',
      alpha3Code: 'BEL',
      numericCode: '056',
      callingCode: '+32'
    }
  ];

  sessionid: any;
  hide = true;
  auth: any;
  usertype: any;
  allprofilefor: any;
  allmaritalstatus: any;
  allcountry: any;
  mobilenumber: any;
  signupuser = new FormGroup({
    Profilecreatedby: new FormControl('610cc184fb791a5fb1afb3b0', Validators.required),
    firstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Gender: new FormControl('Male', Validators.required),
    dd: new FormControl('1', Validators.required),
    mm: new FormControl('1', Validators.required),
    yyyy: new FormControl('2000', Validators.required),
    DOB: new FormControl(''),
    ConfirmEmail: new FormControl('', Validators.required),
    Maritalstatus: new FormControl('6144459b4a9280296c14aed9', Validators.required),
    Mobile: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required),
    agree_terms_conditions: new FormControl('1', Validators.required),
  });

  verifyotpform = new FormGroup({
    input1: new FormControl('', Validators.required),
    input2: new FormControl('', Validators.required),
    input3: new FormControl('', Validators.required),
    input4: new FormControl('', Validators.required),

  });

  changenumberform = new FormGroup({
    Mobile: new FormControl('', Validators.required),
  });

  otpsection = false;
  success = false;
  constructor(
    public userService: UserService,
    private adminService: AdminService,
    public routes: Router,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getallreligion();
    this.getallflags();
    this.getmaritalstatus();
  }

  getallreligion() {
    this.userService.getprofilefordd().subscribe(
      (response: any) => {
        console.log(response);
        this.allprofilefor = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getmaritalstatus() {
    this.adminService.getallmaritalstatus().subscribe(
      (response: any) => {
        console.log(response);
        this.allmaritalstatus = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCountrySelected(country: Country) {
    console.log(country);
  }

  submitandmovetootp() {
    console.log(this.signupuser.value);
    const DOBcal = `${this.signupuser.value.yyyy}-${this.signupuser.value.mm}-${this.signupuser.value.dd}`;
    this.signupuser.patchValue({ DOB: DOBcal });
    console.log(this.signupuser.value);
    this.userService.usersignup(this.signupuser.value).subscribe(
      (response: any) => {
        console.log(response);
        this.otpsection = true;
        this.mobilenumber = this.signupuser.value.Mobile;
        this.usertype = response.user_type;
        this.auth = true;
        console.log(response.token);
        localStorage.setItem('auth-token', response.token);
        this.sendotp();
      },
      (error) => {
        if (error.error.msg === 'User Already Exists') {
          this.toastr.error(error.error.msg + ' Please Login');
          this.routes.navigate(['/login']);
        } else {
          this.toastr.error(error.error.msg);
          console.log(error);
        }
      }
    );
  }

  getallflags() {
    this.userService.getallflags().subscribe(
      (response: any) => {
        this.allcountry = response.data;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendotp() {
    console.log(this.signupuser.value.Mobile);
    this.userService
      .sendotp({ Mobile: this.signupuser.value.Mobile })
      .subscribe(
        (response: any) => {
          console.log(response);

          console.log(response.response.body);
          const bodyresp = JSON.parse(response.response.body);
          console.log(bodyresp);
          this.sessionid = bodyresp.Details;
          localStorage.setItem('sessionid', this.sessionid);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  resendotp() {
    this.sendotp();
  }

  verifyotp() {
    const mainotp = `${this.verifyotpform.value.input1}${this.verifyotpform.value.input2}${this.verifyotpform.value.input3}${this.verifyotpform.value.input4}`;
    const intotp = parseInt(mainotp, 10);
    console.log(intotp);
    console.log(this.mobilenumber);
    console.log(this.sessionid);
    const getsessionid = localStorage.getItem('sessionid');
    console.log(getsessionid);
    // dd4329b8-9d8a-4137-800d-1b2494a837f0
    const grpobj = {
      otp: intotp,
      Mobile: this.mobilenumber,
      session_id: this.sessionid || getsessionid,
    };
    console.log(grpobj);
    this.userService.verifyotp(grpobj).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Registration successfull');
        this.routes.navigate(['/user-info']);
        localStorage.setItem('sessionid', '');
      },
      (error) => {
        console.log(error);
        this.toastr.success('Incorrect Otp');
      }
    );
  }

  changenumber() {
    console.log('button clicked');
    if (this.togglembcheck == false) {
      this.togglembcheck = true;
    } else {
      this.togglembcheck = false;
    }
  }

  onDigitInput(event) {
    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }

  // submitchangenumber() {
  //   console.log(this.changenumberform.value);
  // }

  changenumberotp() {
    console.log(this.changenumberform.value.Mobile);
    this.userService
      .sendotp({ Mobile: this.changenumberform.value.Mobile })
      .subscribe(
        (response: any) => {
          console.log(response);

          console.log(response.response.body);
          const bodyresp = JSON.parse(response.response.body);
          console.log(bodyresp);
          this.sessionid = bodyresp.Details;
          localStorage.setItem('sessionid', this.sessionid);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  submitchangenumber() {
    console.log(this.changenumberform.value);
    this.userService.addotheruserdetails(this.changenumberform.value).subscribe(
      (response: any) => {
        console.log(response);
        this.toastr.success('Mobile Number Changed');
        this.mobilenumber = this.changenumberform.value.Mobile;
        this.togglembcheck = true;
        this.changenumberotp();
        this.changenumberform.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

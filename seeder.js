require('dotenv').config() // for dev db seeding
const mongoose = require('mongoose');
const Data = require('./models/data');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });



var data = [
	{
    "Total production by all exporting countries": "Angola",
    "": "(R/A)",
    "__1": 50,
    "__2": 79,
    "__3": 78,
    "__4": 33,
    "__5": 77,
    "__6": 62,
    "__7": 71,
    "__8": 64,
    "__9": 85,
    "__10": 55,
    "__11": 50,
    "__12": 21,
    "__13": 57,
    "__14": 38,
    "__15": 15,
    "__16": 25,
    "__17": 35,
    "__18": 36,
    "__19": 38,
    "__20": 13,
    "__21": 35,
    "__22": 29,
    "__23": 33,
    "__24": 35,
    "__25": 39,
    "__26": 41,
    "__27": 45,
    "__28": 35,
    "__29": 40
  },
  {
    "Total production by all exporting countries": "Bolivia",
    "": "(A)",
    "__1": 123,
    "__2": 107,
    "__3": 123,
    "__4": 57,
    "__5": 122,
    "__6": 152,
    "__7": 133,
    "__8": 153,
    "__9": 150,
    "__10": 184,
    "__11": 173,
    "__12": 118,
    "__13": 149,
    "__14": 125,
    "__15": 170,
    "__16": 129,
    "__17": 164,
    "__18": 133,
    "__19": 135,
    "__20": 142,
    "__21": 130,
    "__22": 143,
    "__23": 115,
    "__24": 128,
    "__25": 106,
    "__26": 89,
    "__27": 81,
    "__28": 85,
    "__29": 90
  },
  {
    "Total production by all exporting countries": "Brazil",
    "": "(A/R)",
    "__1": "27,286",
    "__2": "27,293",
    "__3": "34,603",
    "__4": "28,167",
    "__5": "28,192",
    "__6": "18,060",
    "__7": "29,197",
    "__8": "26,148",
    "__9": "36,761",
    "__10": "47,578",
    "__11": "31,310",
    "__12": "31,365",
    "__13": "48,352",
    "__14": "28,873",
    "__15": "39,281",
    "__16": "32,933",
    "__17": "42,987",
    "__18": "38,972",
    "__19": "50,490",
    "__20": "43,977",
    "__21": "53,428",
    "__22": "50,592",
    "__23": "55,420",
    "__24": "54,698",
    "__25": "52,299",
    "__26": "52,426",
    "__27": "56,764",
    "__28": "51,000",
    "__29": "60,000"
  },
  {
    "Total production by all exporting countries": "Burundi",
    "": "(A)",
    "__1": 487,
    "__2": 667,
    "__3": 620,
    "__4": 393,
    "__5": 664,
    "__6": 434,
    "__7": 401,
    "__8": 250,
    "__9": 492,
    "__10": 351,
    "__11": 487,
    "__12": 144,
    "__13": 454,
    "__14": 338,
    "__15": 437,
    "__16": 103,
    "__17": 499,
    "__18": 133,
    "__19": 412,
    "__20": 112,
    "__21": 353,
    "__22": 204,
    "__23": 406,
    "__24": 163,
    "__25": 248,
    "__26": 274,
    "__27": 249,
    "__28": 176,
    "__29": 200
  },
  {
    "Total production by all exporting countries": "Ecuador",
    "": "(A/R)",
    "__1": "1,504",
    "__2": "2,124",
    "__3": "1,185",
    "__4": "2,069",
    "__5": "2,376",
    "__6": "1,888",
    "__7": "1,993",
    "__8": "1,191",
    "__9": "1,206",
    "__10": "1,198",
    "__11": 854,
    "__12": 793,
    "__13": 582,
    "__14": 641,
    "__15": 780,
    "__16": 935,
    "__17": "1,035",
    "__18": 950,
    "__19": 771,
    "__20": 813,
    "__21": 854,
    "__22": 825,
    "__23": 828,
    "__24": 666,
    "__25": 644,
    "__26": 644,
    "__27": 645,
    "__28": 624,
    "__29": 640
  },
  {
    "Total production by all exporting countries": "Indonesia",
    "": "(R/A)",
    "__1": "7,441",
    "__2": "8,493",
    "__3": "5,569",
    "__4": "6,743",
    "__5": "5,368",
    "__6": "4,573",
    "__7": "8,221",
    "__8": "7,621",
    "__9": "7,296",
    "__10": "6,557",
    "__11": "6,987",
    "__12": "6,833",
    "__13": "6,731",
    "__14": "6,404",
    "__15": "7,536",
    "__16": "9,159",
    "__17": "7,483",
    "__18": "7,777",
    "__19": "9,612",
    "__20": "11,380",
    "__21": "9,129",
    "__22": "6,889",
    "__23": "13,070",
    "__24": "12,818",
    "__25": "10,862",
    "__26": "12,535",
    "__27": "11,491",
    "__28": "10,902",
    "__29": "11,500"
  },
  {
    "Total production by all exporting countries": "Madagascar",
    "": "(R)",
    "__1": 982,
    "__2": 933,
    "__3": "1,122",
    "__4": 442,
    "__5": 641,
    "__6": 785,
    "__7": 849,
    "__8": 624,
    "__9": 992,
    "__10": 427,
    "__11": 362,
    "__12": 147,
    "__13": 445,
    "__14": 435,
    "__15": 522,
    "__16": 599,
    "__17": 587,
    "__18": 614,
    "__19": 728,
    "__20": 457,
    "__21": 530,
    "__22": 585,
    "__23": 500,
    "__24": 584,
    "__25": 501,
    "__26": 425,
    "__27": 421,
    "__28": 407,
    "__29": 400
  },
  {
    "Total production by all exporting countries": "Malawi",
    "": "(A)",
    "__1": 105,
    "__2": 124,
    "__3": 137,
    "__4": 62,
    "__5": 84,
    "__6": 91,
    "__7": 49,
    "__8": 61,
    "__9": 64,
    "__10": 59,
    "__11": 63,
    "__12": 60,
    "__13": 42,
    "__14": 48,
    "__15": 21,
    "__16": 24,
    "__17": 17,
    "__18": 19,
    "__19": 21,
    "__20": 17,
    "__21": 17,
    "__22": 26,
    "__23": 23,
    "__24": 28,
    "__25": 25,
    "__26": 21,
    "__27": 20,
    "__28": 12,
    "__29": 12
  },
  {
    "Total production by all exporting countries": "Papua New Guinea",
    "": "(A/R)",
    "__1": 963,
    "__2": 747,
    "__3": 900,
    "__4": "1,019",
    "__5": "1,139",
    "__6": "1,002",
    "__7": "1,089",
    "__8": "1,074",
    "__9": "1,352",
    "__10": "1,387",
    "__11": "1,041",
    "__12": "1,063",
    "__13": "1,085",
    "__14": "1,155",
    "__15": 998,
    "__16": "1,268",
    "__17": 807,
    "__18": 968,
    "__19": "1,028",
    "__20": "1,038",
    "__21": 867,
    "__22": "1,414",
    "__23": 716,
    "__24": 835,
    "__25": 798,
    "__26": 712,
    "__27": "1,171",
    "__28": 734,
    "__29": 800
  },
  {
    "Total production by all exporting countries": "Paraguay",
    "": "(A)",
    "__1": 131,
    "__2": 80,
    "__3": 54,
    "__4": 70,
    "__5": 25,
    "__6": 23,
    "__7": 26,
    "__8": 23,
    "__9": 58,
    "__10": 20,
    "__11": 42,
    "__12": 20,
    "__13": 26,
    "__14": 52,
    "__15": 26,
    "__16": 45,
    "__17": 26,
    "__18": 39,
    "__19": 20,
    "__20": 20,
    "__21": 20,
    "__22": 20,
    "__23": 20,
    "__24": 20,
    "__25": 20,
    "__26": 20,
    "__27": 20,
    "__28": 20,
    "__29": 20
  },
  {
    "Total production by all exporting countries": "Peru",
    "": "(A)",
    "__1": 937,
    "__2": "1,200",
    "__3": "1,762",
    "__4": 665,
    "__5": "1,179",
    "__6": "1,871",
    "__7": "1,806",
    "__8": "1,930",
    "__9": "2,102",
    "__10": "2,744",
    "__11": "2,676",
    "__12": "2,829",
    "__13": "3,000",
    "__14": "2,686",
    "__15": "3,425",
    "__16": "2,489",
    "__17": "4,319",
    "__18": "3,063",
    "__19": "3,872",
    "__20": "3,286",
    "__21": "4,069",
    "__22": "5,373",
    "__23": "4,450",
    "__24": "4,106",
    "__25": "2,883",
    "__26": "3,304",
    "__27": "4,223",
    "__28": "4,280",
    "__29": "4,300"
  },
  {
    "Total production by all exporting countries": "Rwanda",
    "": "(A)",
    "__1": 535,
    "__2": 484,
    "__3": 639,
    "__4": 444,
    "__5": 22,
    "__6": 329,
    "__7": 293,
    "__8": 193,
    "__9": 223,
    "__10": 307,
    "__11": 273,
    "__12": 296,
    "__13": 320,
    "__14": 266,
    "__15": 450,
    "__16": 337,
    "__17": 351,
    "__18": 224,
    "__19": 369,
    "__20": 259,
    "__21": 323,
    "__22": 251,
    "__23": 259,
    "__24": 258,
    "__25": 238,
    "__26": 293,
    "__27": 231,
    "__28": 245,
    "__29": 270
  },
  {
    "Total production by all exporting countries": "Timor-Leste",
    "": "(A)",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": "",
    "__10": "",
    "__11": 7,
    "__12": 33,
    "__13": 37,
    "__14": 42,
    "__15": 17,
    "__16": 24,
    "__17": 46,
    "__18": 36,
    "__19": 48,
    "__20": 47,
    "__21": 60,
    "__22": 47,
    "__23": 61,
    "__24": 80,
    "__25": 111,
    "__26": 59,
    "__27": 82,
    "__28": 73,
    "__29": 80
  },
  {
    "Total production by all exporting countries": "Zimbabwe",
    "": "(A)",
    "__1": 252,
    "__2": 201,
    "__3": 78,
    "__4": 12,
    "__5": 106,
    "__6": 131,
    "__7": 174,
    "__8": 130,
    "__9": 149,
    "__10": 125,
    "__11": 109,
    "__12": 121,
    "__13": 110,
    "__14": 92,
    "__15": 120,
    "__16": 66,
    "__17": 45,
    "__18": 31,
    "__19": 24,
    "__20": 21,
    "__21": 10,
    "__22": 9,
    "__23": 7,
    "__24": 9,
    "__25": 15,
    "__26": 14,
    "__27": 15,
    "__28": 6,
    "__29": 8
  },
  {
    "Total production by all exporting countries": "",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": "",
    "__10": "",
    "__11": "",
    "__12": "",
    "__13": "",
    "__14": "",
    "__15": "",
    "__16": "",
    "__17": "",
    "__18": "",
    "__19": "",
    "__20": "",
    "__21": "",
    "__22": "",
    "__23": "",
    "__24": "",
    "__25": "",
    "__26": "",
    "__27": "",
    "__28": "",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "July group",
    "": "",
    "__1": "3,618",
    "__2": "2,927",
    "__3": "3,161",
    "__4": "2,979",
    "__5": "3,049",
    "__6": "3,469",
    "__7": "3,014",
    "__8": "3,274",
    "__9": "2,687",
    "__10": "2,860",
    "__11": "2,445",
    "__12": "2,064",
    "__13": "2,269",
    "__14": "1,956",
    "__15": "2,267",
    "__16": "2,108",
    "__17": "2,176",
    "__18": "2,254",
    "__19": "2,948",
    "__20": "2,232",
    "__21": "1,887",
    "__22": "1,775",
    "__23": "2,263",
    "__24": "1,888",
    "__25": "1,793",
    "__26": "1,986",
    "__27": "1,933",
    "__28": "1,805",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Congo, Rep. of",
    "": "(R)",
    "__1": 3,
    "__2": 3,
    "__3": 3,
    "__4": 3,
    "__5": 8,
    "__6": 12,
    "__7": 14,
    "__8": 3,
    "__9": 3,
    "__10": 3,
    "__11": 3,
    "__12": 3,
    "__13": 3,
    "__14": 3,
    "__15": 3,
    "__16": 3,
    "__17": 3,
    "__18": 3,
    "__19": 3,
    "__20": 3,
    "__21": 3,
    "__22": 3,
    "__23": 3,
    "__24": 3,
    "__25": 3,
    "__26": 3,
    "__27": 3,
    "__28": 3,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Cuba",
    "": "(A)",
    "__1": 414,
    "__2": 302,
    "__3": 284,
    "__4": 285,
    "__5": 284,
    "__6": 285,
    "__7": 366,
    "__8": 300,
    "__9": 280,
    "__10": 328,
    "__11": 312,
    "__12": 285,
    "__13": 239,
    "__14": 224,
    "__15": 180,
    "__16": 100,
    "__17": 105,
    "__18": 110,
    "__19": 133,
    "__20": 92,
    "__21": 108,
    "__22": 100,
    "__23": 88,
    "__24": 107,
    "__25": 101,
    "__26": 100,
    "__27": 103,
    "__28": 100,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Dominican Republic",
    "": "(A)",
    "__1": 880,
    "__2": 321,
    "__3": 638,
    "__4": 604,
    "__5": 730,
    "__6": 886,
    "__7": 519,
    "__8": 941,
    "__9": 487,
    "__10": 607,
    "__11": 467,
    "__12": 387,
    "__13": 455,
    "__14": 351,
    "__15": 491,
    "__16": 310,
    "__17": 387,
    "__18": 465,
    "__19": 645,
    "__20": 352,
    "__21": 378,
    "__22": 491,
    "__23": 488,
    "__24": 425,
    "__25": 397,
    "__26": 400,
    "__27": 412,
    "__28": 400,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Haiti",
    "": "(A)",
    "__1": 393,
    "__2": 463,
    "__3": 500,
    "__4": 451,
    "__5": 450,
    "__6": 514,
    "__7": 428,
    "__8": 432,
    "__9": 439,
    "__10": 399,
    "__11": 420,
    "__12": 403,
    "__13": 374,
    "__14": 374,
    "__15": 365,
    "__16": 356,
    "__17": 362,
    "__18": 359,
    "__19": 359,
    "__20": 351,
    "__21": 350,
    "__22": 349,
    "__23": 350,
    "__24": 345,
    "__25": 343,
    "__26": 341,
    "__27": 342,
    "__28": 340,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Philippines",
    "": "(R/A)",
    "__1": 974,
    "__2": "1,018",
    "__3": 920,
    "__4": 875,
    "__5": 877,
    "__6": 850,
    "__7": 890,
    "__8": 935,
    "__9": 677,
    "__10": 622,
    "__11": 341,
    "__12": 263,
    "__13": 255,
    "__14": 293,
    "__15": 355,
    "__16": 432,
    "__17": 441,
    "__18": 446,
    "__19": 587,
    "__20": 730,
    "__21": 189,
    "__22": 180,
    "__23": 177,
    "__24": 186,
    "__25": 193,
    "__26": 208,
    "__27": 215,
    "__28": 200,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Tanzania",
    "": "(A/R)",
    "__1": 932,
    "__2": 790,
    "__3": 786,
    "__4": 734,
    "__5": 679,
    "__6": 897,
    "__7": 764,
    "__8": 624,
    "__9": 739,
    "__10": 842,
    "__11": 809,
    "__12": 624,
    "__13": 824,
    "__14": 612,
    "__15": 763,
    "__16": 804,
    "__17": 822,
    "__18": 810,
    "__19": "1,186",
    "__20": 675,
    "__21": 846,
    "__22": 641,
    "__23": "1,151",
    "__24": 811,
    "__25": 753,
    "__26": 930,
    "__27": 846,
    "__28": 750,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Zambia",
    "": "(A)",
    "__1": 23,
    "__2": 29,
    "__3": 29,
    "__4": 27,
    "__5": 21,
    "__6": 26,
    "__7": 33,
    "__8": 38,
    "__9": 62,
    "__10": 59,
    "__11": 93,
    "__12": 100,
    "__13": 119,
    "__14": 100,
    "__15": 110,
    "__16": 103,
    "__17": 56,
    "__18": 61,
    "__19": 35,
    "__20": 28,
    "__21": 13,
    "__22": 11,
    "__23": 5,
    "__24": 11,
    "__25": 3,
    "__26": 4,
    "__27": 13,
    "__28": 12,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "",
    "": "",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": "",
    "__10": "",
    "__11": "",
    "__12": "",
    "__13": "",
    "__14": "",
    "__15": "",
    "__16": "",
    "__17": "",
    "__18": "",
    "__19": "",
    "__20": "",
    "__21": "",
    "__22": "",
    "__23": "",
    "__24": "",
    "__25": "",
    "__26": "",
    "__27": "",
    "__28": "",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "October group",
    "": "",
    "__1": "48,689",
    "__2": "55,645",
    "__3": "48,739",
    "__4": "47,491",
    "__5": "50,173",
    "__6": "54,185",
    "__7": "55,937",
    "__8": "56,931",
    "__9": "55,398",
    "__10": "67,725",
    "__11": "66,793",
    "__12": "62,229",
    "__13": "59,002",
    "__14": "62,356",
    "__15": "60,161",
    "__16": "61,558",
    "__17": "69,283",
    "__18": "66,672",
    "__19": "63,605",
    "__20": "64,192",
    "__21": "67,775",
    "__22": "76,267",
    "__23": "73,088",
    "__24": "77,750",
    "__25": "77,976",
    "__26": "80,718",
    "__27": "81,657",
    "__28": "88,157",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Benin",
    "": "(R)",
    "__1": 0,
    "__2": 0,
    "__3": 2,
    "__4": 0,
    "__5": 0,
    "__6": 0,
    "__7": 0,
    "__8": 0,
    "__9": 0,
    "__10": 0,
    "__11": 0,
    "__12": 0,
    "__13": 0,
    "__14": 0,
    "__15": 0,
    "__16": 0,
    "__17": 0,
    "__18": 0,
    "__19": 0,
    "__20": 0,
    "__21": 0,
    "__22": 0,
    "__23": 0,
    "__24": 0,
    "__25": 0,
    "__26": 0,
    "__27": 0,
    "__28": 0,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Cameroon",
    "": "(R/A)",
    "__1": "1,682",
    "__2": "1,726",
    "__3": 260,
    "__4": 683,
    "__5": 406,
    "__6": 660,
    "__7": "1,432",
    "__8": 889,
    "__9": "1,114",
    "__10": "1,370",
    "__11": "1,113",
    "__12": 686,
    "__13": 801,
    "__14": 900,
    "__15": 727,
    "__16": 870,
    "__17": 818,
    "__18": 795,
    "__19": 725,
    "__20": 902,
    "__21": 527,
    "__22": 669,
    "__23": 371,
    "__24": 404,
    "__25": 483,
    "__26": 391,
    "__27": 292,
    "__28": 375,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Central African Republic",
    "": "(R)",
    "__1": 175,
    "__2": 125,
    "__3": 134,
    "__4": 166,
    "__5": 250,
    "__6": 108,
    "__7": 208,
    "__8": 114,
    "__9": 215,
    "__10": 241,
    "__11": 113,
    "__12": 68,
    "__13": 92,
    "__14": 43,
    "__15": 29,
    "__16": 23,
    "__17": 114,
    "__18": 43,
    "__19": 60,
    "__20": 112,
    "__21": 78,
    "__22": 91,
    "__23": 23,
    "__24": 90,
    "__25": 63,
    "__26": 100,
    "__27": 37,
    "__28": 50,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Colombia",
    "": "(A)",
    "__1": "14,268",
    "__2": "17,815",
    "__3": "15,189",
    "__4": "10,298",
    "__5": "12,862",
    "__6": "12,963",
    "__7": "10,719",
    "__8": "12,219",
    "__9": "10,979",
    "__10": "9,679",
    "__11": "10,400",
    "__12": "11,962",
    "__13": "11,735",
    "__14": "11,230",
    "__15": "11,573",
    "__16": "12,564",
    "__17": "11,759",
    "__18": "12,515",
    "__19": "8,663",
    "__20": "8,098",
    "__21": "8,523",
    "__22": "7,652",
    "__23": "9,927",
    "__24": "12,163",
    "__25": "13,339",
    "__26": "14,009",
    "__27": "14,634",
    "__28": "14,000",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Congo, Dem. Rep. of",
    "": "(R/A)",
    "__1": "1,580",
    "__2": "1,230",
    "__3": "1,180",
    "__4": 980,
    "__5": "1,298",
    "__6": "1,098",
    "__7": 795,
    "__8": 811,
    "__9": 738,
    "__10": 477,
    "__11": 363,
    "__12": 423,
    "__13": 338,
    "__14": 451,
    "__15": 360,
    "__16": 336,
    "__17": 378,
    "__18": 416,
    "__19": 422,
    "__20": 346,
    "__21": 305,
    "__22": 357,
    "__23": 334,
    "__24": 347,
    "__25": 335,
    "__26": 371,
    "__27": 324,
    "__28": 335,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Costa Rica",
    "": "(A)",
    "__1": "2,562",
    "__2": "2,760",
    "__3": "2,998",
    "__4": "2,359",
    "__5": "2,482",
    "__6": "2,844",
    "__7": "2,222",
    "__8": "2,617",
    "__9": "2,445",
    "__10": "2,485",
    "__11": "2,419",
    "__12": "2,247",
    "__13": "2,043",
    "__14": "1,886",
    "__15": "1,876",
    "__16": "1,653",
    "__17": "1,706",
    "__18": "1,797",
    "__19": "1,500",
    "__20": "1,477",
    "__21": "1,614",
    "__22": "1,831",
    "__23": "1,823",
    "__24": "1,552",
    "__25": "1,475",
    "__26": "1,440",
    "__27": "1,372",
    "__28": "1,560",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Côte d'Ivoire",
    "": "(R)",
    "__1": "2,940",
    "__2": "4,129",
    "__3": "2,246",
    "__4": "2,293",
    "__5": "3,006",
    "__6": "2,532",
    "__7": "4,859",
    "__8": "4,164",
    "__9": "1,992",
    "__10": "6,320",
    "__11": "4,846",
    "__12": "3,596",
    "__13": "3,010",
    "__14": "2,981",
    "__15": "2,136",
    "__16": "2,099",
    "__17": "2,848",
    "__18": "1,338",
    "__19": "2,526",
    "__20": "1,989",
    "__21": 837,
    "__22": "2,216",
    "__23": "1,994",
    "__24": "2,598",
    "__25": "1,728",
    "__26": "1,289",
    "__27": 817,
    "__28": "1,300",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "El Salvador",
    "": "(A)",
    "__1": "2,465",
    "__2": "2,198",
    "__3": "3,001",
    "__4": "2,378",
    "__5": "2,293",
    "__6": "2,585",
    "__7": "2,534",
    "__8": "2,175",
    "__9": "2,055",
    "__10": "2,598",
    "__11": "1,704",
    "__12": "1,694",
    "__13": "1,361",
    "__14": "1,380",
    "__15": "1,197",
    "__16": "1,319",
    "__17": "1,234",
    "__18": "1,505",
    "__19": "1,450",
    "__20": "1,075",
    "__21": "1,873",
    "__22": "1,164",
    "__23": "1,240",
    "__24": 515,
    "__25": 665,
    "__26": 565,
    "__27": 610,
    "__28": 740,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Equatorial Guinea",
    "": "(R)",
    "__1": 4,
    "__2": 3,
    "__3": 2,
    "__4": 0,
    "__5": 3,
    "__6": 2,
    "__7": 1,
    "__8": 2,
    "__9": 1,
    "__10": 0,
    "__11": 0,
    "__12": 0,
    "__13": 0,
    "__14": 0,
    "__15": 0,
    "__16": 0,
    "__17": 0,
    "__18": 0,
    "__19": 0,
    "__20": 0,
    "__21": 0,
    "__22": 0,
    "__23": 0,
    "__24": 0,
    "__25": 0,
    "__26": 0,
    "__27": 0,
    "__28": 0,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Ethiopia",
    "": "(A)",
    "__1": "2,909",
    "__2": "2,925",
    "__3": "1,825",
    "__4": "2,967",
    "__5": "2,763",
    "__6": "3,165",
    "__7": "3,407",
    "__8": "3,057",
    "__9": "2,928",
    "__10": "3,784",
    "__11": "3,115",
    "__12": "4,044",
    "__13": "4,094",
    "__14": "4,394",
    "__15": "5,213",
    "__16": "4,779",
    "__17": "5,551",
    "__18": "5,967",
    "__19": "4,949",
    "__20": "6,931",
    "__21": "7,500",
    "__22": "6,798",
    "__23": "6,233",
    "__24": "6,427",
    "__25": "6,575",
    "__26": "6,714",
    "__27": "7,297",
    "__28": "7,650",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Gabon",
    "": "(R)",
    "__1": 3,
    "__2": 2,
    "__3": 3,
    "__4": 3,
    "__5": 8,
    "__6": 2,
    "__7": 1,
    "__8": 3,
    "__9": 4,
    "__10": 2,
    "__11": 0,
    "__12": 1,
    "__13": 1,
    "__14": 0,
    "__15": 0,
    "__16": 1,
    "__17": 1,
    "__18": 1,
    "__19": 2,
    "__20": 0,
    "__21": 2,
    "__22": 1,
    "__23": 1,
    "__24": 0,
    "__25": 1,
    "__26": 1,
    "__27": 1,
    "__28": 1,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Ghana",
    "": "(R)",
    "__1": 38,
    "__2": 76,
    "__3": 37,
    "__4": 45,
    "__5": 57,
    "__6": 57,
    "__7": 32,
    "__8": 27,
    "__9": 54,
    "__10": 89,
    "__11": 76,
    "__12": 7,
    "__13": 34,
    "__14": 18,
    "__15": 18,
    "__16": 12,
    "__17": 20,
    "__18": 35,
    "__19": 26,
    "__20": 37,
    "__21": 92,
    "__22": 94,
    "__23": 82,
    "__24": 45,
    "__25": 19,
    "__26": 9,
    "__27": 8,
    "__28": 16,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Guatemala",
    "": "(A/R)",
    "__1": "3,271",
    "__2": "3,497",
    "__3": "4,318",
    "__4": "3,536",
    "__5": "3,787",
    "__6": "4,002",
    "__7": "4,525",
    "__8": "4,219",
    "__9": "4,893",
    "__10": "5,120",
    "__11": "4,940",
    "__12": "3,669",
    "__13": "4,070",
    "__14": "3,610",
    "__15": "3,703",
    "__16": "3,676",
    "__17": "3,950",
    "__18": "4,100",
    "__19": "3,785",
    "__20": "3,835",
    "__21": "3,950",
    "__22": "3,850",
    "__23": "3,763",
    "__24": "3,189",
    "__25": "3,310",
    "__26": "3,410",
    "__27": "3,684",
    "__28": "3,800",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Guinea",
    "": "(R)",
    "__1": 44,
    "__2": 91,
    "__3": 76,
    "__4": 64,
    "__5": 198,
    "__6": 104,
    "__7": 148,
    "__8": 172,
    "__9": 421,
    "__10": 364,
    "__11": 400,
    "__12": 236,
    "__13": 328,
    "__14": 366,
    "__15": 316,
    "__16": 525,
    "__17": 473,
    "__18": 323,
    "__19": 505,
    "__20": 499,
    "__21": 386,
    "__22": 386,
    "__23": 234,
    "__24": 101,
    "__25": 165,
    "__26": 286,
    "__27": 270,
    "__28": 215,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Guyana",
    "": "(R)",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": 6,
    "__10": 5,
    "__11": 3,
    "__12": 5,
    "__13": 5,
    "__14": 5,
    "__15": 6,
    "__16": 7,
    "__17": 8,
    "__18": 9,
    "__19": 10,
    "__20": 9,
    "__21": 9,
    "__22": 10,
    "__23": 10,
    "__24": 2,
    "__25": 9,
    "__26": 11,
    "__27": 10,
    "__28": 10,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Honduras",
    "": "(A)",
    "__1": "1,568",
    "__2": "2,322",
    "__3": "1,918",
    "__4": "1,829",
    "__5": "2,181",
    "__6": "1,909",
    "__7": "2,004",
    "__8": "2,564",
    "__9": "2,195",
    "__10": "2,985",
    "__11": "2,667",
    "__12": "3,036",
    "__13": "2,496",
    "__14": "2,968",
    "__15": "2,575",
    "__16": "3,204",
    "__17": "3,461",
    "__18": "3,640",
    "__19": "3,450",
    "__20": "3,603",
    "__21": "4,331",
    "__22": "5,882",
    "__23": "4,686",
    "__24": "4,583",
    "__25": "5,268",
    "__26": "5,786",
    "__27": "7,457",
    "__28": "8,349",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "India",
    "": "(R/A)",
    "__1": "2,829",
    "__2": "3,000",
    "__3": "2,823",
    "__4": "3,533",
    "__5": "3,002",
    "__6": "3,717",
    "__7": "3,417",
    "__8": "3,805",
    "__9": "4,417",
    "__10": "4,867",
    "__11": "5,020",
    "__12": "5,010",
    "__13": "4,588",
    "__14": "4,508",
    "__15": "4,592",
    "__16": "4,567",
    "__17": "4,800",
    "__18": "4,367",
    "__19": "4,378",
    "__20": "4,827",
    "__21": "5,033",
    "__22": "5,233",
    "__23": "5,303",
    "__24": "5,075",
    "__25": "5,450",
    "__26": "5,800",
    "__27": "5,200",
    "__28": "5,840",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Jamaica",
    "": "(A)",
    "__1": 23,
    "__2": 39,
    "__3": 26,
    "__4": 34,
    "__5": 45,
    "__6": 43,
    "__7": 54,
    "__8": 47,
    "__9": 29,
    "__10": 38,
    "__11": 37,
    "__12": 31,
    "__13": 37,
    "__14": 37,
    "__15": 21,
    "__16": 34,
    "__17": 40,
    "__18": 20,
    "__19": 32,
    "__20": 25,
    "__21": 21,
    "__22": 24,
    "__23": 24,
    "__24": 20,
    "__25": 21,
    "__26": 20,
    "__27": 18,
    "__28": 17,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Kenya",
    "": "(A)",
    "__1": "1,485",
    "__2": "1,514",
    "__3": "1,316",
    "__4": "1,328",
    "__5": "1,663",
    "__6": "1,664",
    "__7": "1,247",
    "__8": 882,
    "__9": "1,173",
    "__10": "1,502",
    "__11": "1,002",
    "__12": 991,
    "__13": 945,
    "__14": 673,
    "__15": 736,
    "__16": 660,
    "__17": 826,
    "__18": 652,
    "__19": 541,
    "__20": 630,
    "__21": 641,
    "__22": 757,
    "__23": 875,
    "__24": 838,
    "__25": 765,
    "__26": 789,
    "__27": 783,
    "__28": 790,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Lao, People's Dem. Rep. of",
    "": "(R)",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": 171,
    "__10": 239,
    "__11": 212,
    "__12": 258,
    "__13": 402,
    "__14": 361,
    "__15": 379,
    "__16": 280,
    "__17": 391,
    "__18": 393,
    "__19": 406,
    "__20": 434,
    "__21": 544,
    "__22": 514,
    "__23": 541,
    "__24": 538,
    "__25": 499,
    "__26": 516,
    "__27": 465,
    "__28": 475,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Liberia",
    "": "(R)",
    "__1": 3,
    "__2": 3,
    "__3": 3,
    "__4": 5,
    "__5": 5,
    "__6": 5,
    "__7": 5,
    "__8": 5,
    "__9": 18,
    "__10": 12,
    "__11": 12,
    "__12": 12,
    "__13": 12,
    "__14": 5,
    "__15": 6,
    "__16": 5,
    "__17": 7,
    "__18": 7,
    "__19": 12,
    "__20": 13,
    "__21": 10,
    "__22": 10,
    "__23": 10,
    "__24": 6,
    "__25": 7,
    "__26": 10,
    "__27": 12,
    "__28": 12,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Mexico",
    "": "(A)",
    "__1": "4,674",
    "__2": "4,727",
    "__3": "3,401",
    "__4": "5,023",
    "__5": "4,159",
    "__6": "5,300",
    "__7": "5,110",
    "__8": "4,802",
    "__9": "4,801",
    "__10": "6,219",
    "__11": "4,815",
    "__12": "4,438",
    "__13": "4,351",
    "__14": "4,201",
    "__15": "3,867",
    "__16": "4,225",
    "__17": "4,200",
    "__18": "4,150",
    "__19": "4,651",
    "__20": "4,109",
    "__21": "4,001",
    "__22": "4,561",
    "__23": "4,327",
    "__24": "3,916",
    "__25": "3,591",
    "__26": "2,903",
    "__27": "3,781",
    "__28": "4,000",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Nepal",
    "": "(A)",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": "",
    "__10": "",
    "__11": "",
    "__12": "",
    "__13": "",
    "__14": 1,
    "__15": 1,
    "__16": 1,
    "__17": 2,
    "__18": 1,
    "__19": 1,
    "__20": 1,
    "__21": 3,
    "__22": 2,
    "__23": 1,
    "__24": 1,
    "__25": 2,
    "__26": 2,
    "__27": 1,
    "__28": 2,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Nicaragua",
    "": "(A)",
    "__1": 461,
    "__2": 707,
    "__3": 547,
    "__4": 706,
    "__5": 683,
    "__6": 985,
    "__7": 793,
    "__8": "1,084",
    "__9": "1,073",
    "__10": "1,554",
    "__11": "1,572",
    "__12": "1,079",
    "__13": "1,170",
    "__14": "1,509",
    "__15": "1,068",
    "__16": "1,432",
    "__17": "1,428",
    "__18": "1,906",
    "__19": "1,445",
    "__20": "1,871",
    "__21": "1,638",
    "__22": "2,193",
    "__23": "1,873",
    "__24": "2,060",
    "__25": "1,898",
    "__26": "2,133",
    "__27": "2,575",
    "__28": "2,500",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Nigeria",
    "": "(R)",
    "__1": 29,
    "__2": 44,
    "__3": 49,
    "__4": 45,
    "__5": 52,
    "__6": 53,
    "__7": 46,
    "__8": 45,
    "__9": 53,
    "__10": 45,
    "__11": 49,
    "__12": 44,
    "__13": 50,
    "__14": 46,
    "__15": 45,
    "__16": 69,
    "__17": 51,
    "__18": 42,
    "__19": 50,
    "__20": 34,
    "__21": 42,
    "__22": 47,
    "__23": 41,
    "__24": 41,
    "__25": 43,
    "__26": 41,
    "__27": 43,
    "__28": 42,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Panama",
    "": "(A)",
    "__1": 215,
    "__2": 193,
    "__3": 197,
    "__4": 142,
    "__5": 248,
    "__6": 209,
    "__7": 211,
    "__8": 217,
    "__9": 192,
    "__10": 166,
    "__11": 170,
    "__12": 160,
    "__13": 140,
    "__14": 172,
    "__15": 90,
    "__16": 176,
    "__17": 173,
    "__18": 176,
    "__19": 149,
    "__20": 138,
    "__21": 114,
    "__22": 106,
    "__23": 116,
    "__24": 113,
    "__25": 106,
    "__26": 127,
    "__27": 120,
    "__28": 106,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Sierra Leone",
    "": "(R)",
    "__1": 43,
    "__2": 54,
    "__3": 39,
    "__4": 37,
    "__5": 73,
    "__6": 44,
    "__7": 41,
    "__8": 50,
    "__9": 27,
    "__10": 59,
    "__11": 49,
    "__12": 79,
    "__13": 42,
    "__14": 36,
    "__15": 15,
    "__16": 60,
    "__17": 31,
    "__18": 40,
    "__19": 86,
    "__20": 91,
    "__21": 33,
    "__22": 78,
    "__23": 61,
    "__24": 32,
    "__25": 46,
    "__26": 46,
    "__27": 38,
    "__28": 43,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Sri Lanka",
    "": "(R)",
    "__1": 96,
    "__2": 82,
    "__3": 53,
    "__4": 54,
    "__5": 42,
    "__6": 36,
    "__7": 37,
    "__8": 58,
    "__9": 46,
    "__10": 32,
    "__11": 33,
    "__12": 32,
    "__13": 34,
    "__14": 37,
    "__15": 32,
    "__16": 35,
    "__17": 33,
    "__18": 33,
    "__19": 31,
    "__20": 32,
    "__21": 37,
    "__22": 36,
    "__23": 35,
    "__24": 37,
    "__25": 36,
    "__26": 36,
    "__27": 37,
    "__28": 37,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Thailand",
    "": "(R/A)",
    "__1": 757,
    "__2": "1,469",
    "__3": "1,255",
    "__4": "1,275",
    "__5": "1,399",
    "__6": "1,317",
    "__7": "1,404",
    "__8": "1,293",
    "__9": 916,
    "__10": "1,273",
    "__11": "1,692",
    "__12": 715,
    "__13": 732,
    "__14": 827,
    "__15": 884,
    "__16": "1,064",
    "__17": 822,
    "__18": 650,
    "__19": 675,
    "__20": 795,
    "__21": 828,
    "__22": 831,
    "__23": 608,
    "__24": 638,
    "__25": 845,
    "__26": 762,
    "__27": 538,
    "__28": 500,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Togo",
    "": "(R)",
    "__1": 161,
    "__2": 433,
    "__3": 86,
    "__4": 195,
    "__5": 176,
    "__6": 84,
    "__7": 291,
    "__8": 221,
    "__9": 321,
    "__10": 263,
    "__11": 197,
    "__12": 112,
    "__13": 68,
    "__14": 144,
    "__15": 166,
    "__16": 140,
    "__17": 134,
    "__18": 125,
    "__19": 138,
    "__20": 202,
    "__21": 160,
    "__22": 160,
    "__23": 84,
    "__24": 172,
    "__25": 143,
    "__26": 81,
    "__27": 22,
    "__28": 55,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Trinidad & Tobago",
    "": "(R)",
    "__1": 15,
    "__2": 18,
    "__3": 14,
    "__4": 16,
    "__5": 18,
    "__6": 18,
    "__7": 18,
    "__8": 19,
    "__9": 17,
    "__10": 17,
    "__11": 16,
    "__12": 16,
    "__13": 17,
    "__14": 16,
    "__15": 15,
    "__16": 15,
    "__17": 12,
    "__18": 12,
    "__19": 11,
    "__20": 11,
    "__21": 10,
    "__22": 11,
    "__23": 12,
    "__24": 12,
    "__25": 12,
    "__26": 12,
    "__27": 12,
    "__28": 12,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Uganda",
    "": "(R/A)",
    "__1": "1,955",
    "__2": "2,088",
    "__3": "2,185",
    "__4": "3,142",
    "__5": "2,393",
    "__6": "3,244",
    "__7": "3,419",
    "__8": "3,440",
    "__9": "3,386",
    "__10": "2,862",
    "__11": "3,401",
    "__12": "3,158",
    "__13": "2,890",
    "__14": "2,599",
    "__15": "2,613",
    "__16": "2,175",
    "__17": "2,894",
    "__18": "3,490",
    "__19": "3,335",
    "__20": "2,894",
    "__21": "3,267",
    "__22": "3,115",
    "__23": "3,914",
    "__24": "3,633",
    "__25": "3,744",
    "__26": "3,650",
    "__27": "4,962",
    "__28": "5,100",
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Venezuela",
    "": "(A)",
    "__1": "1,122",
    "__2": 941,
    "__3": "1,215",
    "__4": "1,333",
    "__5": 989,
    "__6": "1,467",
    "__7": "1,206",
    "__8": 951,
    "__9": "1,597",
    "__10": "1,367",
    "__11": "1,450",
    "__12": "1,265",
    "__13": "1,484",
    "__14": "1,421",
    "__15": "1,327",
    "__16": "1,506",
    "__17": "1,571",
    "__18": "1,520",
    "__19": 932,
    "__20": "1,214",
    "__21": "1,202",
    "__22": 902,
    "__23": 952,
    "__24": 804,
    "__25": 650,
    "__26": 500,
    "__27": 525,
    "__28": 550,
    "__29": ""
  },
  {
    "country": "Vietnam",
    "": "(R/A)",
    "__1": "1,310",
    "__2": "1,438",
    "__3": "2,340",
    "__4": "3,020",
    "__5": "3,632",
    "__6": "3,970",
    "__7": "5,752",
    "__8": "6,979",
    "__9": "7,052",
    "__10": "11,631",
    "__11": "14,841",
    "__12": "13,093",
    "__13": "11,574",
    "__14": "15,337",
    "__15": "14,370",
    "__16": "13,842",
    "__17": "19,340",
    "__18": "16,405",
    "__19": "18,438",
    "__20": "17,825",
    "__21": "20,000",
    "__22": "26,500",
    "__23": "23,402",
    "__24": "27,610",
    "__25": "26,500",
    "__26": "28,737",
    "__27": "25,540",
    "__28": "29,500",
    "__29": ""
  },
  {
    "country": "Yemen",
    "": "(A)",
    "__1": "",
    "__2": "",
    "__3": "",
    "__4": "",
    "__5": "",
    "__6": "",
    "__7": "",
    "__8": "",
    "__9": 69,
    "__10": 61,
    "__11": 64,
    "__12": 62,
    "__13": 57,
    "__14": 193,
    "__15": 206,
    "__16": 203,
    "__17": 207,
    "__18": 198,
    "__19": 220,
    "__20": 135,
    "__21": 161,
    "__22": 185,
    "__23": 188,
    "__24": 187,
    "__25": 183,
    "__26": 171,
    "__27": 173,
    "__28": 175,
    "__29": ""
  },
  {
    "Total production by all exporting countries": "Total",
    "": "",
    "__1": "93,102",
    "__2": "101,104",
    "__3": "98,771",
    "__4": "90,646",
    "__5": "93,217",
    "__6": "87,056",
    "__7": "103,252",
    "__8": "99,667",
    "__9": "109,015",
    "__10": "131,576",
    "__11": "113,673",
    "__12": "108,135",
    "__13": "122,662",
    "__14": "105,506",
    "__15": "116,225",
    "__16": "111,803",
    "__17": "129,858",
    "__18": "121,920",
    "__19": "134,120",
    "__20": "128,006",
    "__21": "139,486",
    "__22": "144,448",
    "__23": "151,258",
    "__24": "154,066",
    "__25": "148,559",
    "__26": "153,561",
    "__27": "159,047",
    "__28": "158,560",
    "__29": ""
  },
  
]

function cleanData(obj) {
  

}

let newData = data.filter( obj => {
    return parseInt(obj.__28)
  })
  .filter( obj => {
    return !obj.country
  })
  .map((obj) => {
    return {
      country: obj["Total production by all exporting countries"],
      "2014": parseInt((obj.__24).toString().replace(",", "")),
      "2015": parseInt((obj.__25).toString().replace(",", "")),
      "2016": parseInt((obj.__26).toString().replace(",", "")),
      "2017": parseInt((obj.__27).toString().replace(",", "")),
      "2018": parseInt((obj.__28).toString().replace(",", ""))
    }
})

// console.log(newData)
Data.insertMany(newData, (err, data) => {
  console.log( err ? err : "seeding successful")	
  process.exit()
});


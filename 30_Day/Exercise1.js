const countriesOriginal = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://flagcdn.com/ax.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://flagcdn.com/ax.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://flagcdn.com/al.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://flagcdn.com/dz.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://flagcdn.com/as.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://flagcdn.com/ad.svg',
      currency: 'Euro'
    },
    {
      name: 'Angola',
      capital: 'Luanda',
      languages: ['Portuguese'],
      population: 25868000,
      flag: 'https://flagcdn.com/ag.svg',
      currency: 'Angolan kwanza'
    },
    {
      name: 'Anguilla',
      capital: 'The Valley',
      languages: ['English'],
      population: 13452,
      flag: 'https://flagcdn.com/ai.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Antarctica',
      capital: '',
      languages: ['English', 'Russian'],
      population: 1000,
      flag: 'https://flagcdn.com/aq.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Antigua and Barbuda',
      capital: "Saint John's",
      languages: ['English'],
      population: 86295,
      flag: 'https://flagcdn.com/at.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Argentina',
      capital: 'Buenos Aires',
      languages: ['Spanish', 'Guaraní'],
      population: 43590400,
      flag: 'https://flagcdn.com/ar.svg',
      currency: 'Argentine peso'
    },
    {
      name: 'Armenia',
      capital: 'Yerevan',
      languages: ['Armenian', 'Russian'],
      population: 2994400,
      flag: 'https://flagcdn.com/am.svg',
      currency: 'Armenian dram'
    },
    {
      name: 'Aruba',
      capital: 'Oranjestad',
      languages: ['Dutch', '(Eastern) Punjabi'],
      population: 107394,
      flag: 'https://flagcdn.com/aw.svg',
      currency: 'Aruban florin'
    },
    {
      name: 'Australia',
      capital: 'Canberra',
      languages: ['English'],
      population: 24117360,
      flag: 'https://flagcdn.com/au.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Austria',
      capital: 'Vienna',
      languages: ['German'],
      population: 8725931,
      flag: 'https://flagcdn.com/at.svg',
      currency: 'Euro'
    },
    {
      name: 'Azerbaijan',
      capital: 'Baku',
      languages: ['Azerbaijani'],
      population: 9730500,
      flag: 'https://flagcdn.com/az.svg',
      currency: 'Azerbaijani manat'
    },
    {
      name: 'Bahamas',
      capital: 'Nassau',
      languages: ['English'],
      population: 378040,
      flag: 'https://flagcdn.com/bs.svg',
      currency: 'Bahamian dollar'
    },
    {
      name: 'Bahrain',
      capital: 'Manama',
      languages: ['Arabic'],
      population: 1404900,
      flag: 'https://flagcdn.com/bh.svg',
      currency: 'Bahraini dinar'
    },
    {
      name: 'Bangladesh',
      capital: 'Dhaka',
      languages: ['Bengali'],
      population: 161006790,
      flag: 'https://flagcdn.com/bg.svg',
      currency: 'Bangladeshi taka'
    },
    {
      name: 'Barbados',
      capital: 'Bridgetown',
      languages: ['English'],
      population: 285000,
      flag: 'https://flagcdn.com/br.svg',
      currency: 'Barbadian dollar'
    },
    {
      name: 'Belarus',
      capital: 'Minsk',
      languages: ['Belarusian', 'Russian'],
      population: 9498700,
      flag: 'https://flagcdn.com/bl.svg',
      currency: 'New Belarusian ruble'
    },
    {
      name: 'Belgium',
      capital: 'Brussels',
      languages: ['Dutch', 'French', 'German'],
      population: 11319511,
      flag: 'https://flagcdn.com/be.svg',
      currency: 'Euro'
    },
    {
      name: 'Belize',
      capital: 'Belmopan',
      languages: ['English', 'Spanish'],
      population: 370300,
      flag: 'https://flagcdn.com/bl.svg',
      currency: 'Belize dollar'
    },
    {
      name: 'Benin',
      capital: 'Porto-Novo',
      languages: ['French'],
      population: 10653654,
      flag: 'https://flagcdn.com/bj.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Bermuda',
      capital: 'Hamilton',
      languages: ['English'],
      population: 61954,
      flag: 'https://flagcdn.com/bm.svg',
      currency: 'Bermudian dollar'
    },
    {
      name: 'Bhutan',
      capital: 'Thimphu',
      languages: ['Dzongkha'],
      population: 775620,
      flag: 'https://flagcdn.com/bt.svg',
      currency: 'Bhutanese ngultrum'
    },
    {
      name: 'Bolivia (Plurinational State of)',
      capital: 'Sucre',
      languages: ['Spanish', 'Aymara', 'Quechua'],
      population: 10985059,
      flag: 'https://flagcdn.com/bo.svg',
      currency: 'Bolivian boliviano'
    },
    {
      name: 'Bonaire, Sint Eustatius and Saba',
      capital: 'Kralendijk',
      languages: ['Dutch'],
      population: 17408,
      flag: 'https://flagcdn.com/bq.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Bosnia and Herzegovina',
      capital: 'Sarajevo',
      languages: ['Bosnian', 'Croatian', 'Serbian'],
      population: 3531159,
      flag: 'https://flagcdn.com/bi.svg',
      currency: 'Bosnia and Herzegovina convertible mark'
    },
    {
      name: 'Botswana',
      capital: 'Gaborone',
      languages: ['English', 'Tswana'],
      population: 2141206,
      flag: 'https://flagcdn.com/bw.svg',
      currency: 'Botswana pula'
    },
    {
      name: 'Bouvet Island',
      capital: '',
      languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
      population: 0,
      flag: 'https://flagcdn.com/bv.svg',
      currency: 'Norwegian krone'
    },
    {
      name: 'Brazil',
      capital: 'Brasília',
      languages: ['Portuguese'],
      population: 206135893,
      flag: 'https://flagcdn.com/br.svg',
      currency: 'Brazilian real'
    },
    {
      name: 'British Indian Ocean Territory',
      capital: 'Diego Garcia',
      languages: ['English'],
      population: 3000,
      flag: 'https://flagcdn.com/io.svg',
      currency: 'United States dollar'
    },
    {
      name: 'United States Minor Outlying Islands',
      capital: '',
      languages: ['English'],
      population: 300,
      flag: 'https://flagcdn.com/um.svg',
      currency: 'United States Dollar'
    },
    {
      name: 'Virgin Islands (British)',
      capital: 'Road Town',
      languages: ['English'],
      population: 28514,
      flag: 'https://flagcdn.com/vg.svg',
      currency: '[D]'
    },
    {
      name: 'Virgin Islands (U.S.)',
      capital: 'Charlotte Amalie',
      languages: ['English'],
      population: 114743,
      flag: 'https://flagcdn.com/vi.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Brunei Darussalam',
      capital: 'Bandar Seri Begawan',
      languages: ['Malay'],
      population: 411900,
      flag: 'https://flagcdn.com/br.svg',
      currency: 'Brunei dollar'
    },
    {
      name: 'Bulgaria',
      capital: 'Sofia',
      languages: ['Bulgarian'],
      population: 7153784,
      flag: 'https://flagcdn.com/bg.svg',
      currency: 'Bulgarian lev'
    },
    {
      name: 'Burkina Faso',
      capital: 'Ouagadougou',
      languages: ['French', 'Fula'],
      population: 19034397,
      flag: 'https://flagcdn.com/bf.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Burundi',
      capital: 'Bujumbura',
      languages: ['French', 'Kirundi'],
      population: 10114505,
      flag: 'https://flagcdn.com/bd.svg',
      currency: 'Burundian franc'
    },
    {
      name: 'Cambodia',
      capital: 'Phnom Penh',
      languages: ['Khmer'],
      population: 15626444,
      flag: 'https://flagcdn.com/kh.svg',
      currency: 'Cambodian riel'
    },
    {
      name: 'Cameroon',
      capital: 'Yaoundé',
      languages: ['English', 'French'],
      population: 22709892,
      flag: 'https://flagcdn.com/cm.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Canada',
      capital: 'Ottawa',
      languages: ['English', 'French'],
      population: 36155487,
      flag: 'https://flagcdn.com/ca.svg',
      currency: 'Canadian dollar'
    },
    {
      name: 'Cabo Verde',
      capital: 'Praia',
      languages: ['Portuguese'],
      population: 531239,
      flag: 'https://flagcdn.com/cv.svg',
      currency: 'Cape Verdean escudo'
    },
    {
      name: 'Cayman Islands',
      capital: 'George Town',
      languages: ['English'],
      population: 58238,
      flag: 'https://flagcdn.com/cy.svg',
      currency: 'Cayman Islands dollar'
    },
    {
      name: 'Central African Republic',
      capital: 'Bangui',
      languages: ['French', 'Sango'],
      population: 4998000,
      flag: 'https://flagcdn.com/ca.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chad',
      capital: "N'Djamena",
      languages: ['French', 'Arabic'],
      population: 14497000,
      flag: 'https://flagcdn.com/tc.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Chile',
      capital: 'Santiago',
      languages: ['Spanish'],
      population: 18191900,
      flag: 'https://flagcdn.com/ch.svg',
      currency: 'Chilean peso'
    },
    {
      name: 'China',
      capital: 'Beijing',
      languages: ['Chinese'],
      population: 1377422166,
      flag: 'https://flagcdn.com/cn.svg',
      currency: 'Chinese yuan'
    },
    {
      name: 'Christmas Island',
      capital: 'Flying Fish Cove',
      languages: ['English'],
      population: 2072,
      flag: 'https://flagcdn.com/cx.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Cocos (Keeling) Islands',
      capital: 'West Island',
      languages: ['English'],
      population: 550,
      flag: 'https://flagcdn.com/cc.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Colombia',
      capital: 'Bogotá',
      languages: ['Spanish'],
      population: 48759958,
      flag: 'https://flagcdn.com/co.svg',
      currency: 'Colombian peso'
    },
    {
      name: 'Comoros',
      capital: 'Moroni',
      languages: ['Arabic', 'French'],
      population: 806153,
      flag: 'https://flagcdn.com/km.svg',
      currency: 'Comorian franc'
    },
    {
      name: 'Congo',
      capital: 'Brazzaville',
      languages: ['French', 'Lingala'],
      population: 4741000,
      flag: 'https://flagcdn.com/cd.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Congo (Democratic Republic of the)',
      capital: 'Kinshasa',
      languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
      population: 85026000,
      flag: 'https://flagcdn.com/cg.svg',
      currency: 'Congolese franc'
    },
    {
      name: 'Cook Islands',
      capital: 'Avarua',
      languages: ['English'],
      population: 18100,
      flag: 'https://flagcdn.com/ck.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Costa Rica',
      capital: 'San José',
      languages: ['Spanish'],
      population: 4890379,
      flag: 'https://flagcdn.com/cr.svg',
      currency: 'Costa Rican colón'
    },
    {
      name: 'Croatia',
      capital: 'Zagreb',
      languages: ['Croatian'],
      population: 4190669,
      flag: 'https://flagcdn.com/hr.svg',
      currency: 'Croatian kuna'
    },
    {
      name: 'Cuba',
      capital: 'Havana',
      languages: ['Spanish'],
      population: 11239004,
      flag: 'https://flagcdn.com/cu.svg',
      currency: 'Cuban convertible peso'
    },
    {
      name: 'Curaçao',
      capital: 'Willemstad',
      languages: ['Dutch', '(Eastern) Punjabi', 'English'],
      population: 154843,
      flag: 'https://flagcdn.com/cw.svg',
      currency: 'Netherlands Antillean guilder'
    },
    {
      name: 'Cyprus',
      capital: 'Nicosia',
      languages: ['Greek (modern)', 'Turkish', 'Armenian'],
      population: 847000,
      flag: 'https://flagcdn.com/cy.svg',
      currency: 'Euro'
    },
    {
      name: 'Czech Republic',
      capital: 'Prague',
      languages: ['Czech', 'Slovak'],
      population: 10558524,
      flag: 'https://flagcdn.com/cz.svg',
      currency: 'Czech koruna'
    },
    {
      name: 'Denmark',
      capital: 'Copenhagen',
      languages: ['Danish'],
      population: 5717014,
      flag: 'https://flagcdn.com/dk.svg',
      currency: 'Danish krone'
    },
    {
      name: 'Djibouti',
      capital: 'Djibouti',
      languages: ['French', 'Arabic'],
      population: 900000,
      flag: 'https://flagcdn.com/dj.svg',
      currency: 'Djiboutian franc'
    },
    {
      name: 'Dominica',
      capital: 'Roseau',
      languages: ['English'],
      population: 71293,
      flag: 'https://flagcdn.com/dm.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Dominican Republic',
      capital: 'Santo Domingo',
      languages: ['Spanish'],
      population: 10075045,
      flag: 'https://flagcdn.com/do.svg',
      currency: 'Dominican peso'
    },
    {
      name: 'Ecuador',
      capital: 'Quito',
      languages: ['Spanish'],
      population: 16545799,
      flag: 'https://flagcdn.com/ec.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Egypt',
      capital: 'Cairo',
      languages: ['Arabic'],
      population: 91290000,
      flag: 'https://flagcdn.com/eg.svg',
      currency: 'Egyptian pound'
    },
    {
      name: 'El Salvador',
      capital: 'San Salvador',
      languages: ['Spanish'],
      population: 6520675,
      flag: 'https://flagcdn.com/sl.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Equatorial Guinea',
      capital: 'Malabo',
      languages: ['Spanish', 'French'],
      population: 1222442,
      flag: 'https://flagcdn.com/gn.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Eritrea',
      capital: 'Asmara',
      languages: ['Tigrinya', 'Arabic', 'English'],
      population: 5352000,
      flag: 'https://flagcdn.com/er.svg',
      currency: 'Eritrean nakfa'
    },
    {
      name: 'Estonia',
      capital: 'Tallinn',
      languages: ['Estonian'],
      population: 1315944,
      flag: 'https://flagcdn.com/es.svg',
      currency: 'Euro'
    },
    {
      name: 'Ethiopia',
      capital: 'Addis Ababa',
      languages: ['Amharic'],
      population: 92206005,
      flag: 'https://flagcdn.com/et.svg',
      currency: 'Ethiopian birr'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      capital: 'Stanley',
      languages: ['English'],
      population: 2563,
      flag: 'https://flagcdn.com/fk.svg',
      currency: 'Falkland Islands pound'
    },
    {
      name: 'Faroe Islands',
      capital: 'Tórshavn',
      languages: ['Faroese'],
      population: 49376,
      flag: 'https://flagcdn.com/fr.svg',
      currency: 'Danish krone'
    },
    {
      name: 'Fiji',
      capital: 'Suva',
      languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
      population: 867000,
      flag: 'https://flagcdn.com/fj.svg',
      currency: 'Fijian dollar'
    },
    {
      name: 'Finland',
      capital: 'Helsinki',
      languages: ['Finnish', 'Swedish'],
      population: 5491817,
      flag: 'https://flagcdn.com/fi.svg',
      currency: 'Euro'
    },
    {
      name: 'France',
      capital: 'Paris',
      languages: ['French'],
      population: 66710000,
      flag: 'https://flagcdn.com/fr.svg',
      currency: 'Euro'
    },
    {
      name: 'French Guiana',
      capital: 'Cayenne',
      languages: ['French'],
      population: 254541,
      flag: 'https://flagcdn.com/gu.svg',
      currency: 'Euro'
    },
    {
      name: 'French Polynesia',
      capital: 'Papeetē',
      languages: ['French'],
      population: 271800,
      flag: 'https://flagcdn.com/py.svg',
      currency: 'CFP franc'
    },
    {
      name: 'French Southern Territories',
      capital: 'Port-aux-Français',
      languages: ['French'],
      population: 140,
      flag: 'https://flagcdn.com/at.svg',
      currency: 'Euro'
    },
    {
      name: 'Gabon',
      capital: 'Libreville',
      languages: ['French'],
      population: 1802278,
      flag: 'https://flagcdn.com/ga.svg',
      currency: 'Central African CFA franc'
    },
    {
      name: 'Gambia',
      capital: 'Banjul',
      languages: ['English'],
      population: 1882450,
      flag: 'https://flagcdn.com/gm.svg',
      currency: 'Gambian dalasi'
    },
    {
      name: 'Georgia',
      capital: 'Tbilisi',
      languages: ['Georgian'],
      population: 3720400,
      flag: 'https://flagcdn.com/ge.svg',
      currency: 'Georgian Lari'
    },
    {
      name: 'Germany',
      capital: 'Berlin',
      languages: ['German'],
      population: 81770900,
      flag: 'https://flagcdn.com/de.svg',
      currency: 'Euro'
    },
    {
      name: 'Ghana',
      capital: 'Accra',
      languages: ['English'],
      population: 27670174,
      flag: 'https://flagcdn.com/gh.svg',
      currency: 'Ghanaian cedi'
    },
    {
      name: 'Gibraltar',
      capital: 'Gibraltar',
      languages: ['English'],
      population: 33140,
      flag: 'https://flagcdn.com/gi.svg',
      currency: 'Gibraltar pound'
    },
    {
      name: 'Greece',
      capital: 'Athens',
      languages: ['Greek (modern)'],
      population: 10858018,
      flag: 'https://flagcdn.com/gr.svg',
      currency: 'Euro'
    },
    {
      name: 'Greenland',
      capital: 'Nuuk',
      languages: ['Kalaallisut'],
      population: 55847,
      flag: 'https://flagcdn.com/gr.svg',
      currency: 'Danish krone'
    },
    {
      name: 'Grenada',
      capital: "St. George's",
      languages: ['English'],
      population: 103328,
      flag: 'https://flagcdn.com/gr.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Guadeloupe',
      capital: 'Basse-Terre',
      languages: ['French'],
      population: 400132,
      flag: 'https://flagcdn.com/gl.svg',
      currency: 'Euro'
    },
    {
      name: 'Guam',
      capital: 'Hagåtña',
      languages: ['English', 'Chamorro', 'Spanish'],
      population: 184200,
      flag: 'https://flagcdn.com/gu.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Guatemala',
      capital: 'Guatemala City',
      languages: ['Spanish'],
      population: 16176133,
      flag: 'https://flagcdn.com/gt.svg',
      currency: 'Guatemalan quetzal'
    },
    {
      name: 'Guernsey',
      capital: 'St. Peter Port',
      languages: ['English', 'French'],
      population: 62999,
      flag: 'https://flagcdn.com/gg.svg',
      currency: 'British pound'
    },
    {
      name: 'Guinea',
      capital: 'Conakry',
      languages: ['French', 'Fula'],
      population: 12947000,
      flag: 'https://flagcdn.com/gi.svg',
      currency: 'Guinean franc'
    },
    {
      name: 'Guinea-Bissau',
      capital: 'Bissau',
      languages: ['Portuguese'],
      population: 1547777,
      flag: 'https://flagcdn.com/gn.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Guyana',
      capital: 'Georgetown',
      languages: ['English'],
      population: 746900,
      flag: 'https://flagcdn.com/gu.svg',
      currency: 'Guyanese dollar'
    },
    {
      name: 'Haiti',
      capital: 'Port-au-Prince',
      languages: ['French', 'Haitian'],
      population: 11078033,
      flag: 'https://flagcdn.com/ht.svg',
      currency: 'Haitian gourde'
    },
    {
      name: 'Heard Island and McDonald Islands',
      capital: '',
      languages: ['English'],
      population: 0,
      flag: 'https://flagcdn.com/hm.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Holy See',
      capital: 'Rome',
      languages: ['Latin', 'Italian', 'French', 'German'],
      population: 451,
      flag: 'https://flagcdn.com/va.svg',
      currency: 'Euro'
    },
    {
      name: 'Honduras',
      capital: 'Tegucigalpa',
      languages: ['Spanish'],
      population: 8576532,
      flag: 'https://flagcdn.com/hn.svg',
      currency: 'Honduran lempira'
    },
    {
      name: 'Hong Kong',
      capital: 'City of Victoria',
      languages: ['English', 'Chinese'],
      population: 7324300,
      flag: 'https://flagcdn.com/hk.svg',
      currency: 'Hong Kong dollar'
    },
    {
      name: 'Hungary',
      capital: 'Budapest',
      languages: ['Hungarian'],
      population: 9823000,
      flag: 'https://flagcdn.com/hu.svg',
      currency: 'Hungarian forint'
    },
    {
      name: 'Iceland',
      capital: 'Reykjavík',
      languages: ['Icelandic'],
      population: 334300,
      flag: 'https://flagcdn.com/is.svg',
      currency: 'Icelandic króna'
    },
    {
      name: 'India',
      capital: 'New Delhi',
      languages: ['Hindi', 'English'],
      population: 1295210000,
      flag: 'https://flagcdn.com/in.svg',
      currency: 'Indian rupee'
    },
    {
      name: 'Indonesia',
      capital: 'Jakarta',
      languages: ['Indonesian'],
      population: 258705000,
      flag: 'https://flagcdn.com/id.svg',
      currency: 'Indonesian rupiah'
    },
    {
      name: "Côte d'Ivoire",
      capital: 'Yamoussoukro',
      languages: ['French'],
      population: 22671331,
      flag: 'https://flagcdn.com/ci.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Iran (Islamic Republic of)',
      capital: 'Tehran',
      languages: ['Persian (Farsi)'],
      population: 79369900,
      flag: 'https://flagcdn.com/ir.svg',
      currency: 'Iranian rial'
    },
    {
      name: 'Iraq',
      capital: 'Baghdad',
      languages: ['Arabic', 'Kurdish'],
      population: 37883543,
      flag: 'https://flagcdn.com/ir.svg',
      currency: 'Iraqi dinar'
    },
    {
      name: 'Ireland',
      capital: 'Dublin',
      languages: ['Irish', 'English'],
      population: 6378000,
      flag: 'https://flagcdn.com/ir.svg',
      currency: 'Euro'
    },
    {
      name: 'Isle of Man',
      capital: 'Douglas',
      languages: ['English', 'Manx'],
      population: 84497,
      flag: 'https://flagcdn.com/im.svg',
      currency: 'British pound'
    },
    {
      name: 'Israel',
      capital: 'Jerusalem',
      languages: ['Hebrew (modern)', 'Arabic'],
      population: 8527400,
      flag: 'https://flagcdn.com/is.svg',
      currency: 'Israeli new shekel'
    },
    {
      name: 'Italy',
      capital: 'Rome',
      languages: ['Italian'],
      population: 60665551,
      flag: 'https://flagcdn.com/it.svg',
      currency: 'Euro'
    },
    {
      name: 'Jamaica',
      capital: 'Kingston',
      languages: ['English'],
      population: 2723246,
      flag: 'https://flagcdn.com/jm.svg',
      currency: 'Jamaican dollar'
    },
    {
      name: 'Japan',
      capital: 'Tokyo',
      languages: ['Japanese'],
      population: 126960000,
      flag: 'https://flagcdn.com/jp.svg',
      currency: 'Japanese yen'
    },
    {
      name: 'Jersey',
      capital: 'Saint Helier',
      languages: ['English', 'French'],
      population: 100800,
      flag: 'https://flagcdn.com/je.svg',
      currency: 'British pound'
    },
    {
      name: 'Jordan',
      capital: 'Amman',
      languages: ['Arabic'],
      population: 9531712,
      flag: 'https://flagcdn.com/jo.svg',
      currency: 'Jordanian dinar'
    },
    {
      name: 'Kazakhstan',
      capital: 'Astana',
      languages: ['Kazakh', 'Russian'],
      population: 17753200,
      flag: 'https://flagcdn.com/kz.svg',
      currency: 'Kazakhstani tenge'
    },
    {
      name: 'Kenya',
      capital: 'Nairobi',
      languages: ['English', 'Swahili'],
      population: 47251000,
      flag: 'https://flagcdn.com/ke.svg',
      currency: 'Kenyan shilling'
    },
    {
      name: 'Kiribati',
      capital: 'South Tarawa',
      languages: ['English'],
      population: 113400,
      flag: 'https://flagcdn.com/ki.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Kuwait',
      capital: 'Kuwait City',
      languages: ['Arabic'],
      population: 4183658,
      flag: 'https://flagcdn.com/kw.svg',
      currency: 'Kuwaiti dinar'
    },
    {
      name: 'Kyrgyzstan',
      capital: 'Bishkek',
      languages: ['Kyrgyz', 'Russian'],
      population: 6047800,
      flag: 'https://flagcdn.com/kg.svg',
      currency: 'Kyrgyzstani som'
    },
    {
      name: "Lao People's Democratic Republic",
      capital: 'Vientiane',
      languages: ['Lao'],
      population: 6492400,
      flag: 'https://flagcdn.com/la.svg',
      currency: 'Lao kip'
    },
    {
      name: 'Latvia',
      capital: 'Riga',
      languages: ['Latvian'],
      population: 1961600,
      flag: 'https://flagcdn.com/lv.svg',
      currency: 'Euro'
    },
    {
      name: 'Lebanon',
      capital: 'Beirut',
      languages: ['Arabic', 'French'],
      population: 5988000,
      flag: 'https://flagcdn.com/lb.svg',
      currency: 'Lebanese pound'
    },
    {
      name: 'Lesotho',
      capital: 'Maseru',
      languages: ['English', 'Southern Sotho'],
      population: 1894194,
      flag: 'https://flagcdn.com/ls.svg',
      currency: 'Lesotho loti'
    },
    {
      name: 'Liberia',
      capital: 'Monrovia',
      languages: ['English'],
      population: 4615000,
      flag: 'https://flagcdn.com/lb.svg',
      currency: 'Liberian dollar'
    },
    {
      name: 'Libya',
      capital: 'Tripoli',
      languages: ['Arabic'],
      population: 6385000,
      flag: 'https://flagcdn.com/lb.svg',
      currency: 'Libyan dinar'
    },
    {
      name: 'Liechtenstein',
      capital: 'Vaduz',
      languages: ['German'],
      population: 37623,
      flag: 'https://flagcdn.com/li.svg',
      currency: 'Swiss franc'
    },
    {
      name: 'Lithuania',
      capital: 'Vilnius',
      languages: ['Lithuanian'],
      population: 2872294,
      flag: 'https://flagcdn.com/lt.svg',
      currency: 'Euro'
    },
    {
      name: 'Luxembourg',
      capital: 'Luxembourg',
      languages: ['French', 'German', 'Luxembourgish'],
      population: 576200,
      flag: 'https://flagcdn.com/lu.svg',
      currency: 'Euro'
    },
    {
      name: 'Macao',
      capital: '',
      languages: ['Chinese', 'Portuguese'],
      population: 649100,
      flag: 'https://flagcdn.com/ma.svg',
      currency: 'Macanese pataca'
    },
    {
      name: 'Macedonia (the former Yugoslav Republic of)',
      capital: 'Skopje',
      languages: ['Macedonian'],
      population: 2058539,
      flag: 'https://flagcdn.com/mk.svg',
      currency: 'Macedonian denar'
    },
    {
      name: 'Madagascar',
      capital: 'Antananarivo',
      languages: ['French', 'Malagasy'],
      population: 22434363,
      flag: 'https://flagcdn.com/md.svg',
      currency: 'Malagasy ariary'
    },
    {
      name: 'Malawi',
      capital: 'Lilongwe',
      languages: ['English', 'Chichewa'],
      population: 16832910,
      flag: 'https://flagcdn.com/mw.svg',
      currency: 'Malawian kwacha'
    },
    {
      name: 'Malaysia',
      capital: 'Kuala Lumpur',
      languages: ['Malaysian'],
      population: 31405416,
      flag: 'https://flagcdn.com/my.svg',
      currency: 'Malaysian ringgit'
    },
    {
      name: 'Maldives',
      capital: 'Malé',
      languages: ['Divehi'],
      population: 344023,
      flag: 'https://flagcdn.com/md.svg',
      currency: 'Maldivian rufiyaa'
    },
    {
      name: 'Mali',
      capital: 'Bamako',
      languages: ['French'],
      population: 18135000,
      flag: 'https://flagcdn.com/ml.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Malta',
      capital: 'Valletta',
      languages: ['Maltese', 'English'],
      population: 425384,
      flag: 'https://flagcdn.com/ml.svg',
      currency: 'Euro'
    },
    {
      name: 'Marshall Islands',
      capital: 'Majuro',
      languages: ['English', 'Marshallese'],
      population: 54880,
      flag: 'https://flagcdn.com/mh.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Martinique',
      capital: 'Fort-de-France',
      languages: ['French'],
      population: 378243,
      flag: 'https://flagcdn.com/mt.svg',
      currency: 'Euro'
    },
    {
      name: 'Mauritania',
      capital: 'Nouakchott',
      languages: ['Arabic'],
      population: 3718678,
      flag: 'https://flagcdn.com/mr.svg',
      currency: 'Mauritanian ouguiya'
    },
    {
      name: 'Mauritius',
      capital: 'Port Louis',
      languages: ['English'],
      population: 1262879,
      flag: 'https://flagcdn.com/mu.svg',
      currency: 'Mauritian rupee'
    },
    {
      name: 'Mayotte',
      capital: 'Mamoudzou',
      languages: ['French'],
      population: 226915,
      flag: 'https://flagcdn.com/my.svg',
      currency: 'Euro'
    },
    {
      name: 'Mexico',
      capital: 'Mexico City',
      languages: ['Spanish'],
      population: 122273473,
      flag: 'https://flagcdn.com/me.svg',
      currency: 'Mexican peso'
    },
    {
      name: 'Micronesia (Federated States of)',
      capital: 'Palikir',
      languages: ['English'],
      population: 102800,
      flag: 'https://flagcdn.com/fm.svg',
      currency: '[D]'
    },
    {
      name: 'Moldova (Republic of)',
      capital: 'Chișinău',
      languages: ['Romanian'],
      population: 3553100,
      flag: 'https://flagcdn.com/md.svg',
      currency: 'Moldovan leu'
    },
    {
      name: 'Monaco',
      capital: 'Monaco',
      languages: ['French'],
      population: 38400,
      flag: 'https://flagcdn.com/mc.svg',
      currency: 'Euro'
    },
    {
      name: 'Mongolia',
      capital: 'Ulan Bator',
      languages: ['Mongolian'],
      population: 3093100,
      flag: 'https://flagcdn.com/mn.svg',
      currency: 'Mongolian tögrög'
    },
    {
      name: 'Montenegro',
      capital: 'Podgorica',
      languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
      population: 621810,
      flag: 'https://flagcdn.com/mn.svg',
      currency: 'Euro'
    },
    {
      name: 'Montserrat',
      capital: 'Plymouth',
      languages: ['English'],
      population: 4922,
      flag: 'https://flagcdn.com/ms.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Morocco',
      capital: 'Rabat',
      languages: ['Arabic'],
      population: 33337529,
      flag: 'https://flagcdn.com/ma.svg',
      currency: 'Moroccan dirham'
    },
    {
      name: 'Mozambique',
      capital: 'Maputo',
      languages: ['Portuguese'],
      population: 26423700,
      flag: 'https://flagcdn.com/mo.svg',
      currency: 'Mozambican metical'
    },
    {
      name: 'Myanmar',
      capital: 'Naypyidaw',
      languages: ['Burmese'],
      population: 51419420,
      flag: 'https://flagcdn.com/mm.svg',
      currency: 'Burmese kyat'
    },
    {
      name: 'Namibia',
      capital: 'Windhoek',
      languages: ['English', 'Afrikaans'],
      population: 2324388,
      flag: 'https://flagcdn.com/na.svg',
      currency: 'Namibian dollar'
    },
    {
      name: 'Nauru',
      capital: 'Yaren',
      languages: ['English', 'Nauruan'],
      population: 10084,
      flag: 'https://flagcdn.com/nr.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Nepal',
      capital: 'Kathmandu',
      languages: ['Nepali'],
      population: 28431500,
      flag: 'https://flagcdn.com/np.svg',
      currency: 'Nepalese rupee'
    },
    {
      name: 'Netherlands',
      capital: 'Amsterdam',
      languages: ['Dutch'],
      population: 17019800,
      flag: 'https://flagcdn.com/nl.svg',
      currency: 'Euro'
    },
    {
      name: 'New Caledonia',
      capital: 'Nouméa',
      languages: ['French'],
      population: 268767,
      flag: 'https://flagcdn.com/nc.svg',
      currency: 'CFP franc'
    },
    {
      name: 'New Zealand',
      capital: 'Wellington',
      languages: ['English', 'Māori'],
      population: 4697854,
      flag: 'https://flagcdn.com/nz.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Nicaragua',
      capital: 'Managua',
      languages: ['Spanish'],
      population: 6262703,
      flag: 'https://flagcdn.com/ni.svg',
      currency: 'Nicaraguan córdoba'
    },
    {
      name: 'Niger',
      capital: 'Niamey',
      languages: ['French'],
      population: 20715000,
      flag: 'https://flagcdn.com/ne.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Nigeria',
      capital: 'Abuja',
      languages: ['English'],
      population: 186988000,
      flag: 'https://flagcdn.com/ng.svg',
      currency: 'Nigerian naira'
    },
    {
      name: 'Niue',
      capital: 'Alofi',
      languages: ['English'],
      population: 1470,
      flag: 'https://flagcdn.com/ni.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Norfolk Island',
      capital: 'Kingston',
      languages: ['English'],
      population: 2302,
      flag: 'https://flagcdn.com/nf.svg',
      currency: 'Australian dollar'
    },
    {
      name: "Korea (Democratic People's Republic of)",
      capital: 'Pyongyang',
      languages: ['Korean'],
      population: 25281000,
      flag: 'https://flagcdn.com/pr.svg',
      currency: 'North Korean won'
    },
    {
      name: 'Northern Mariana Islands',
      capital: 'Saipan',
      languages: ['English', 'Chamorro'],
      population: 56940,
      flag: 'https://flagcdn.com/mn.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Norway',
      capital: 'Oslo',
      languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
      population: 5223256,
      flag: 'https://flagcdn.com/no.svg',
      currency: 'Norwegian krone'
    },
    {
      name: 'Oman',
      capital: 'Muscat',
      languages: ['Arabic'],
      population: 4420133,
      flag: 'https://flagcdn.com/om.svg',
      currency: 'Omani rial'
    },
    {
      name: 'Pakistan',
      capital: 'Islamabad',
      languages: ['English', 'Urdu'],
      population: 194125062,
      flag: 'https://flagcdn.com/pa.svg',
      currency: 'Pakistani rupee'
    },
    {
      name: 'Palau',
      capital: 'Ngerulmud',
      languages: ['English'],
      population: 17950,
      flag: 'https://flagcdn.com/pl.svg',
      currency: '[E]'
    },
    {
      name: 'Palestine, State of',
      capital: 'Ramallah',
      languages: ['Arabic'],
      population: 4682467,
      flag: 'https://flagcdn.com/ps.svg',
      currency: 'Israeli new sheqel'
    },
    {
      name: 'Panama',
      capital: 'Panama City',
      languages: ['Spanish'],
      population: 3814672,
      flag: 'https://flagcdn.com/pa.svg',
      currency: 'Panamanian balboa'
    },
    {
      name: 'Papua New Guinea',
      capital: 'Port Moresby',
      languages: ['English'],
      population: 8083700,
      flag: 'https://flagcdn.com/pn.svg',
      currency: 'Papua New Guinean kina'
    },
    {
      name: 'Paraguay',
      capital: 'Asunción',
      languages: ['Spanish', 'Guaraní'],
      population: 6854536,
      flag: 'https://flagcdn.com/pr.svg',
      currency: 'Paraguayan guaraní'
    },
    {
      name: 'Peru',
      capital: 'Lima',
      languages: ['Spanish'],
      population: 31488700,
      flag: 'https://flagcdn.com/pe.svg',
      currency: 'Peruvian sol'
    },
    {
      name: 'Philippines',
      capital: 'Manila',
      languages: ['English'],
      population: 103279800,
      flag: 'https://flagcdn.com/ph.svg',
      currency: 'Philippine peso'
    },
    {
      name: 'Pitcairn',
      capital: 'Adamstown',
      languages: ['English'],
      population: 56,
      flag: 'https://flagcdn.com/pn.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Poland',
      capital: 'Warsaw',
      languages: ['Polish'],
      population: 38437239,
      flag: 'https://flagcdn.com/pl.svg',
      currency: 'Polish złoty'
    },
    {
      name: 'Portugal',
      capital: 'Lisbon',
      languages: ['Portuguese'],
      population: 10374822,
      flag: 'https://flagcdn.com/pr.svg',
      currency: 'Euro'
    },
    {
      name: 'Puerto Rico',
      capital: 'San Juan',
      languages: ['Spanish', 'English'],
      population: 3474182,
      flag: 'https://flagcdn.com/pr.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Qatar',
      capital: 'Doha',
      languages: ['Arabic'],
      population: 2587564,
      flag: 'https://flagcdn.com/qa.svg',
      currency: 'Qatari riyal'
    },
    {
      name: 'Republic of Kosovo',
      capital: 'Pristina',
      languages: ['Albanian', 'Serbian'],
      population: 1733842,
      flag: 'https://flagcdn.com/xk.svg',
      currency: 'Euro'
    },
    {
      name: 'Réunion',
      capital: 'Saint-Denis',
      languages: ['French'],
      population: 840974,
      flag: 'https://flagcdn.com/re.svg',
      currency: 'Euro'
    },
    {
      name: 'Romania',
      capital: 'Bucharest',
      languages: ['Romanian'],
      population: 19861408,
      flag: 'https://flagcdn.com/ro.svg',
      currency: 'Romanian leu'
    },
    {
      name: 'Russian Federation',
      capital: 'Moscow',
      languages: ['Russian'],
      population: 146599183,
      flag: 'https://flagcdn.com/ru.svg',
      currency: 'Russian ruble'
    },
    {
      name: 'Rwanda',
      capital: 'Kigali',
      languages: ['Kinyarwanda', 'English', 'French'],
      population: 11553188,
      flag: 'https://flagcdn.com/rw.svg',
      currency: 'Rwandan franc'
    },
    {
      name: 'Saint Barthélemy',
      capital: 'Gustavia',
      languages: ['French'],
      population: 9417,
      flag: 'https://flagcdn.com/bl.svg',
      currency: 'Euro'
    },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      capital: 'Jamestown',
      languages: ['English'],
      population: 4255,
      flag: 'https://flagcdn.com/sh.svg',
      currency: 'Saint Helena pound'
    },
    {
      name: 'Saint Kitts and Nevis',
      capital: 'Basseterre',
      languages: ['English'],
      population: 46204,
      flag: 'https://flagcdn.com/kn.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Saint Lucia',
      capital: 'Castries',
      languages: ['English'],
      population: 186000,
      flag: 'https://flagcdn.com/lc.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Saint Martin (French part)',
      capital: 'Marigot',
      languages: ['English', 'French', 'Dutch'],
      population: 36979,
      flag: 'https://flagcdn.com/ma.svg',
      currency: 'Euro'
    },
    {
      name: 'Saint Pierre and Miquelon',
      capital: 'Saint-Pierre',
      languages: ['French'],
      population: 6069,
      flag: 'https://flagcdn.com/pm.svg',
      currency: 'Euro'
    },
    {
      name: 'Saint Vincent and the Grenadines',
      capital: 'Kingstown',
      languages: ['English'],
      population: 109991,
      flag: 'https://flagcdn.com/vc.svg',
      currency: 'East Caribbean dollar'
    },
    {
      name: 'Samoa',
      capital: 'Apia',
      languages: ['Samoan', 'English'],
      population: 194899,
      flag: 'https://flagcdn.com/ws.svg',
      currency: 'Samoan tālā'
    },
    {
      name: 'San Marino',
      capital: 'City of San Marino',
      languages: ['Italian'],
      population: 33005,
      flag: 'https://flagcdn.com/sm.svg',
      currency: 'Euro'
    },
    {
      name: 'Sao Tome and Principe',
      capital: 'São Tomé',
      languages: ['Portuguese'],
      population: 187356,
      flag: 'https://flagcdn.com/st.svg',
      currency: 'São Tomé and Príncipe dobra'
    },
    {
      name: 'Saudi Arabia',
      capital: 'Riyadh',
      languages: ['Arabic'],
      population: 32248200,
      flag: 'https://flagcdn.com/sa.svg',
      currency: 'Saudi riyal'
    },
    {
      name: 'Senegal',
      capital: 'Dakar',
      languages: ['French'],
      population: 14799859,
      flag: 'https://flagcdn.com/se.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Serbia',
      capital: 'Belgrade',
      languages: ['Serbian'],
      population: 7076372,
      flag: 'https://flagcdn.com/sr.svg',
      currency: 'Serbian dinar'
    },
    {
      name: 'Seychelles',
      capital: 'Victoria',
      languages: ['French', 'English'],
      population: 91400,
      flag: 'https://flagcdn.com/sy.svg',
      currency: 'Seychellois rupee'
    },
    {
      name: 'Sierra Leone',
      capital: 'Freetown',
      languages: ['English'],
      population: 7075641,
      flag: 'https://flagcdn.com/sl.svg',
      currency: 'Sierra Leonean leone'
    },
    {
      name: 'Singapore',
      capital: 'Singapore',
      languages: ['English', 'Malay', 'Tamil', 'Chinese'],
      population: 5535000,
      flag: 'https://flagcdn.com/sg.svg',
      currency: 'Brunei dollar'
    },
    {
      name: 'Sint Maarten (Dutch part)',
      capital: 'Philipsburg',
      languages: ['Dutch', 'English'],
      population: 38247,
      flag: 'https://flagcdn.com/sx.svg',
      currency: 'Netherlands Antillean guilder'
    },
    {
      name: 'Slovakia',
      capital: 'Bratislava',
      languages: ['Slovak'],
      population: 5426252,
      flag: 'https://flagcdn.com/sv.svg',
      currency: 'Euro'
    },
    {
      name: 'Slovenia',
      capital: 'Ljubljana',
      languages: ['Slovene'],
      population: 2064188,
      flag: 'https://flagcdn.com/sv.svg',
      currency: 'Euro'
    },
    {
      name: 'Solomon Islands',
      capital: 'Honiara',
      languages: ['English'],
      population: 642000,
      flag: 'https://flagcdn.com/sl.svg',
      currency: 'Solomon Islands dollar'
    },
    {
      name: 'Somalia',
      capital: 'Mogadishu',
      languages: ['Somali', 'Arabic'],
      population: 11079000,
      flag: 'https://flagcdn.com/so.svg',
      currency: 'Somali shilling'
    },
    {
      name: 'South Africa',
      capital: 'Pretoria',
      languages: [
        'Afrikaans',
        'English',
        'Southern Ndebele',
        'Southern Sotho',
        'Swati',
        'Tswana',
      ],
      population: 55653654,
      flag: 'https://flagcdn.com/za.svg',
      currency: 'South African rand'
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      capital: 'King Edward Point',
      languages: ['English'],
      population: 30,
      flag: 'https://flagcdn.com/sg.svg',
      currency: 'British pound'
    },
    {
      name: 'Korea (Republic of)',
      capital: 'Seoul',
      languages: ['Korean'],
      population: 50801405,
      flag: 'https://flagcdn.com/kr.svg',
      currency: 'South Korean won'
    },
    {
      name: 'South Sudan',
      capital: 'Juba',
      languages: ['English'],
      population: 12131000,
      flag: 'https://flagcdn.com/ss.svg',
      currency: 'South Sudanese pound'
    },
    {
      name: 'Spain',
      capital: 'Madrid',
      languages: ['Spanish'],
      population: 46438422,
      flag: 'https://flagcdn.com/es.svg',
      currency: 'Euro'
    },
    {
      name: 'Sri Lanka',
      capital: 'Colombo',
      languages: ['Sinhalese', 'Tamil'],
      population: 20966000,
      flag: 'https://flagcdn.com/lk.svg',
      currency: 'Sri Lankan rupee'
    },
    {
      name: 'Sudan',
      capital: 'Khartoum',
      languages: ['Arabic', 'English'],
      population: 39598700,
      flag: 'https://flagcdn.com/sd.svg',
      currency: 'Sudanese pound'
    },
    {
      name: 'Suriname',
      capital: 'Paramaribo',
      languages: ['Dutch'],
      population: 541638,
      flag: 'https://flagcdn.com/sr.svg',
      currency: 'Surinamese dollar'
    },
    {
      name: 'Svalbard and Jan Mayen',
      capital: 'Longyearbyen',
      languages: ['Norwegian'],
      population: 2562,
      flag: 'https://flagcdn.com/sj.svg',
      currency: 'Norwegian krone'
    },
    {
      name: 'Swaziland',
      capital: 'Lobamba',
      languages: ['English', 'Swati'],
      population: 1132657,
      flag: 'https://flagcdn.com/sz.svg',
      currency: 'Swazi lilangeni'
    },
    {
      name: 'Sweden',
      capital: 'Stockholm',
      languages: ['Swedish'],
      population: 9894888,
      flag: 'https://flagcdn.com/se.svg',
      currency: 'Swedish krona'
    },
    {
      name: 'Switzerland',
      capital: 'Bern',
      languages: ['German', 'French', 'Italian'],
      population: 8341600,
      flag: 'https://flagcdn.com/ch.svg',
      currency: 'Swiss franc'
    },
    {
      name: 'Syrian Arab Republic',
      capital: 'Damascus',
      languages: ['Arabic'],
      population: 18564000,
      flag: 'https://flagcdn.com/sy.svg',
      currency: 'Syrian pound'
    },
    {
      name: 'Taiwan',
      capital: 'Taipei',
      languages: ['Chinese'],
      population: 23503349,
      flag: 'https://flagcdn.com/tw.svg',
      currency: 'New Taiwan dollar'
    },
    {
      name: 'Tajikistan',
      capital: 'Dushanbe',
      languages: ['Tajik', 'Russian'],
      population: 8593600,
      flag: 'https://flagcdn.com/tj.svg',
      currency: 'Tajikistani somoni'
    },
    {
      name: 'Tanzania, United Republic of',
      capital: 'Dodoma',
      languages: ['Swahili', 'English'],
      population: 55155000,
      flag: 'https://flagcdn.com/tz.svg',
      currency: 'Tanzanian shilling'
    },
    {
      name: 'Thailand',
      capital: 'Bangkok',
      languages: ['Thai'],
      population: 65327652,
      flag: 'https://flagcdn.com/th.svg',
      currency: 'Thai baht'
    },
    {
      name: 'Timor-Leste',
      capital: 'Dili',
      languages: ['Portuguese'],
      population: 1167242,
      flag: 'https://flagcdn.com/tl.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Togo',
      capital: 'Lomé',
      languages: ['French'],
      population: 7143000,
      flag: 'https://flagcdn.com/tg.svg',
      currency: 'West African CFA franc'
    },
    {
      name: 'Tokelau',
      capital: 'Fakaofo',
      languages: ['English'],
      population: 1411,
      flag: 'https://flagcdn.com/tk.svg',
      currency: 'New Zealand dollar'
    },
    {
      name: 'Tonga',
      capital: "Nuku'alofa",
      languages: ['English', 'Tonga (Tonga Islands)'],
      population: 103252,
      flag: 'https://flagcdn.com/to.svg',
      currency: 'Tongan paʻanga'
    },
    {
      name: 'Trinidad and Tobago',
      capital: 'Port of Spain',
      languages: ['English'],
      population: 1349667,
      flag: 'https://flagcdn.com/tt.svg',
      currency: 'Trinidad and Tobago dollar'
    },
    {
      name: 'Tunisia',
      capital: 'Tunis',
      languages: ['Arabic'],
      population: 11154400,
      flag: 'https://flagcdn.com/tn.svg',
      currency: 'Tunisian dinar'
    },
    {
      name: 'Turkey',
      capital: 'Ankara',
      languages: ['Turkish'],
      population: 78741053,
      flag: 'https://flagcdn.com/tr.svg',
      currency: 'Turkish lira'
    },
    {
      name: 'Turkmenistan',
      capital: 'Ashgabat',
      languages: ['Turkmen', 'Russian'],
      population: 4751120,
      flag: 'https://flagcdn.com/tk.svg',
      currency: 'Turkmenistan manat'
    },
    {
      name: 'Turks and Caicos Islands',
      capital: 'Cockburn Town',
      languages: ['English'],
      population: 31458,
      flag: 'https://flagcdn.com/tc.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Tuvalu',
      capital: 'Funafuti',
      languages: ['English'],
      population: 10640,
      flag: 'https://flagcdn.com/tv.svg',
      currency: 'Australian dollar'
    },
    {
      name: 'Uganda',
      capital: 'Kampala',
      languages: ['English', 'Swahili'],
      population: 33860700,
      flag: 'https://flagcdn.com/ug.svg',
      currency: 'Ugandan shilling'
    },
    {
      name: 'Ukraine',
      capital: 'Kiev',
      languages: ['Ukrainian'],
      population: 42692393,
      flag: 'https://flagcdn.com/ua.svg',
      currency: 'Ukrainian hryvnia'
    },
    {
      name: 'United Arab Emirates',
      capital: 'Abu Dhabi',
      languages: ['Arabic'],
      population: 9856000,
      flag: 'https://flagcdn.com/ar.svg',
      currency: 'United Arab Emirates dirham'
    },
    {
      name: 'United Kingdom of Great Britain and Northern Ireland',
      capital: 'London',
      languages: ['English'],
      population: 65110000,
      flag: 'https://flagcdn.com/gb.svg',
      currency: 'British pound'
    },
    {
      name: 'United States of America',
      capital: 'Washington, D.C.',
      languages: ['English'],
      population: 323947000,
      flag: 'https://flagcdn.com/us.svg',
      currency: 'United States dollar'
    },
    {
      name: 'Uruguay',
      capital: 'Montevideo',
      languages: ['Spanish'],
      population: 3480222,
      flag: 'https://flagcdn.com/uy.svg',
      currency: 'Uruguayan peso'
    },
    {
      name: 'Uzbekistan',
      capital: 'Tashkent',
      languages: ['Uzbek', 'Russian'],
      population: 31576400,
      flag: 'https://flagcdn.com/uz.svg',
      currency: "Uzbekistani so'm"
    },
    {
      name: 'Vanuatu',
      capital: 'Port Vila',
      languages: ['Bislama', 'English', 'French'],
      population: 277500,
      flag: 'https://flagcdn.com/vu.svg',
      currency: 'Vanuatu vatu'
    },
    {
      name: 'Venezuela (Bolivarian Republic of)',
      capital: 'Caracas',
      languages: ['Spanish'],
      population: 31028700,
      flag: 'https://flagcdn.com/ve.svg',
      currency: 'Venezuelan bolívar'
    },
    {
      name: 'Viet Nam',
      capital: 'Hanoi',
      languages: ['Vietnamese'],
      population: 92700000,
      flag: 'https://flagcdn.com/vn.svg',
      currency: 'Vietnamese đồng'
    },
    {
      name: 'Wallis and Futuna',
      capital: 'Mata-Utu',
      languages: ['French'],
      population: 11750,
      flag: 'https://flagcdn.com/wf.svg',
      currency: 'CFP franc'
    },
    {
      name: 'Western Sahara',
      capital: 'El Aaiún',
      languages: ['Spanish'],
      population: 510713,
      flag: 'https://flagcdn.com/es.svg',
      currency: 'Moroccan dirham'
    },
    {
      name: 'Yemen',
      capital: "Sana'a",
      languages: ['Arabic'],
      population: 27478000,
      flag: 'https://flagcdn.com/ye.svg',
      currency: 'Yemeni rial'
    },
    {
      name: 'Zambia',
      capital: 'Lusaka',
      languages: ['English'],
      population: 15933883,
      flag: 'https://flagcdn.com/zm.svg',
      currency: 'Zambian kwacha'
    },
    {
      name: 'Zimbabwe',
      capital: 'Harare',
      languages: ['English', 'Shona', 'Northern Ndebele'],
      population: 14240168,
      flag: 'https://flagcdn.com/zw.svg',
      currency: 'Botswana pula'
    }
]

$('.btn').click( () => {
  $('.hide1').toggleClass('show');
  $('.hide1').toggleClass('hide');
});

function fixFlagCountryCode(){
  let ISO = [
    {
      "englishShortName": "Afghanistan",
      "frenchShortName": "Afghanistan (l')",
      "alpha2Code": "AF",
      "alpha3Code": "AFG",
      "numeric": 4
    },    {
      "englishShortName": "Åland Islands",
      "frenchShortName": "Åland(les Îles)",
      "alpha2Code": "AX",
      "alpha3Code": "ALA",
      "numeric": 248
    },
    {
      "englishShortName": "Albania",
      "frenchShortName": "Albanie (l')",
      "alpha2Code": "AL",
      "alpha3Code": "ALB",
      "numeric": 8
    },
    {
      "englishShortName": "Algeria",
      "frenchShortName": "Algérie (l')",
      "alpha2Code": "DZ",
      "alpha3Code": "DZA",
      "numeric": 12
    },
    {
      "englishShortName": "American Samoa",
      "frenchShortName": "Samoa américaines (les)",
      "alpha2Code": "AS",
      "alpha3Code": "ASM",
      "numeric": 16
    },
    {
      "englishShortName": "Andorra",
      "frenchShortName": "Andorre (l')",
      "alpha2Code": "AD",
      "alpha3Code": "AND",
      "numeric": 20
    },
    {
      "englishShortName": "Angola",
      "frenchShortName": "Angola (l')",
      "alpha2Code": "AO",
      "alpha3Code": "AGO",
      "numeric": 24
    },
    {
      "englishShortName": "Anguilla",
      "frenchShortName": "Anguilla",
      "alpha2Code": "AI",
      "alpha3Code": "AIA",
      "numeric": 660
    },
    {
      "englishShortName": "Antarctica",
      "frenchShortName": "Antarctique (l')",
      "alpha2Code": "AQ",
      "alpha3Code": "ATA",
      "numeric": 10
    },
    {
      "englishShortName": "Antigua and Barbuda",
      "frenchShortName": "Antigua-et-Barbuda",
      "alpha2Code": "AG",
      "alpha3Code": "ATG",
      "numeric": 28
    },
    {
      "englishShortName": "Argentina",
      "frenchShortName": "Argentine (l')",
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "numeric": 32
    },
    {
      "englishShortName": "Armenia",
      "frenchShortName": "Arménie (l')",
      "alpha2Code": "AM",
      "alpha3Code": "ARM",
      "numeric": 51
    },
    {
      "englishShortName": "Aruba",
      "frenchShortName": "Aruba",
      "alpha2Code": "AW",
      "alpha3Code": "ABW",
      "numeric": 533
    },
    {
      "englishShortName": "Australia",
      "frenchShortName": "Australie (l')",
      "alpha2Code": "AU",
      "alpha3Code": "AUS",
      "numeric": 36
    },
    {
      "englishShortName": "Austria",
      "frenchShortName": "Autriche (l')",
      "alpha2Code": "AT",
      "alpha3Code": "AUT",
      "numeric": 40
    },
    {
      "englishShortName": "Azerbaijan",
      "frenchShortName": "Azerbaïdjan (l')",
      "alpha2Code": "AZ",
      "alpha3Code": "AZE",
      "numeric": 31
    },
    {
      "englishShortName": "Bahamas (the)",
      "frenchShortName": "Bahamas (les)",
      "alpha2Code": "BS",
      "alpha3Code": "BHS",
      "numeric": 44
    },
    {
      "englishShortName": "Bahrain",
      "frenchShortName": "Bahreïn",
      "alpha2Code": "BH",
      "alpha3Code": "BHR",
      "numeric": 48
    },
    {
      "englishShortName": "Bangladesh",
      "frenchShortName": "Bangladesh (le)",
      "alpha2Code": "BD",
      "alpha3Code": "BGD",
      "numeric": 50
    },
    {
      "englishShortName": "Barbados",
      "frenchShortName": "Barbade (la)",
      "alpha2Code": "BB",
      "alpha3Code": "BRB",
      "numeric": 52
    },
    {
      "englishShortName": "Belarus",
      "frenchShortName": "Bélarus (le)",
      "alpha2Code": "BY",
      "alpha3Code": "BLR",
      "numeric": 112
    },
    {
      "englishShortName": "Belgium",
      "frenchShortName": "Belgique (la)",
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "numeric": 56
    },
    {
      "englishShortName": "Belize",
      "frenchShortName": "Belize (le)",
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ",
      "numeric": 84
    },
    {
      "englishShortName": "Benin",
      "frenchShortName": "Bénin (le)",
      "alpha2Code": "BJ",
      "alpha3Code": "BEN",
      "numeric": 204
    },
    {
      "englishShortName": "Bermuda",
      "frenchShortName": "Bermudes (les)",
      "alpha2Code": "BM",
      "alpha3Code": "BMU",
      "numeric": 60
    },
    {
      "englishShortName": "Bhutan",
      "frenchShortName": "Bhoutan (le)",
      "alpha2Code": "BT",
      "alpha3Code": "BTN",
      "numeric": 64
    },
    {
      "englishShortName": "Bolivia (Plurinational State of)",
      "frenchShortName": "Bolivie (État plurinational de)",
      "alpha2Code": "BO",
      "alpha3Code": "BOL",
      "numeric": 68
    },
    {
      "englishShortName": "Bonaire, Sint Eustatius and Saba",
      "frenchShortName": "Bonaire, Saint-Eustache et Saba",
      "alpha2Code": "BQ",
      "alpha3Code": "BES",
      "numeric": 535
    },
    {
      "englishShortName": "Bosnia and Herzegovina",
      "frenchShortName": "Bosnie-Herzégovine (la)",
      "alpha2Code": "BA",
      "alpha3Code": "BIH",
      "numeric": 70
    },
    {
      "englishShortName": "Botswana",
      "frenchShortName": "Botswana (le)",
      "alpha2Code": "BW",
      "alpha3Code": "BWA",
      "numeric": 72
    },
    {
      "englishShortName": "Bouvet Island",
      "frenchShortName": "Bouvet (l'Île)",
      "alpha2Code": "BV",
      "alpha3Code": "BVT",
      "numeric": 74
    },
    {
      "englishShortName": "Brazil",
      "frenchShortName": "Brésil (le)",
      "alpha2Code": "BR",
      "alpha3Code": "BRA",
      "numeric": 76
    },
    {
      "englishShortName": "British Indian Ocean Territory (the)",
      "frenchShortName": "Indien (le Territoire britannique de l'océan)",
      "alpha2Code": "IO",
      "alpha3Code": "IOT",
      "numeric": 86
    },
    {
      "englishShortName": "United States Minor Outlying Islands (the)",
      "frenchShortName": "Îles mineures éloignées des États-Unis (les)",
      "alpha2Code": "UM",
      "alpha3Code": "UMI",
      "numeric": 581
    }
    ,
    {
      "englishShortName": "Virgin Islands (British)",
      "frenchShortName": "Vierges britanniques (les Îles)",
      "alpha2Code": "VG",
      "alpha3Code": "VGB",
      "numeric": 92
    },
    {
      "englishShortName": "Virgin Islands (U.S.)",
      "frenchShortName": "Vierges des États-Unis (les Îles)",
      "alpha2Code": "VI",
      "alpha3Code": "VIR",
      "numeric": 850
    },
    {
      "englishShortName": "Brunei Darussalam",
      "frenchShortName": "Brunéi Darussalam (le)",
      "alpha2Code": "BN",
      "alpha3Code": "BRN",
      "numeric": 96
    },
    {
      "englishShortName": "Bulgaria",
      "frenchShortName": "Bulgarie (la)",
      "alpha2Code": "BG",
      "alpha3Code": "BGR",
      "numeric": 100
    },
    {
      "englishShortName": "Burkina Faso",
      "frenchShortName": "Burkina Faso (le)",
      "alpha2Code": "BF",
      "alpha3Code": "BFA",
      "numeric": 854
    },
    {
      "englishShortName": "Burundi",
      "frenchShortName": "Burundi (le)",
      "alpha2Code": "BI",
      "alpha3Code": "BDI",
      "numeric": 108
    },
    {
      "englishShortName": "Cambodia",
      "frenchShortName": "Cambodge (le)",
      "alpha2Code": "KH",
      "alpha3Code": "KHM",
      "numeric": 116
    },
    {
      "englishShortName": "Cameroon",
      "frenchShortName": "Cameroun (le)",
      "alpha2Code": "CM",
      "alpha3Code": "CMR",
      "numeric": 120
    },
    {
      "englishShortName": "Canada",
      "frenchShortName": "Canada (le)",
      "alpha2Code": "CA",
      "alpha3Code": "CAN",
      "numeric": 124
    },
    {
      "englishShortName": "Cabo Verde",
      "frenchShortName": "Cabo Verde",
      "alpha2Code": "CV",
      "alpha3Code": "CPV",
      "numeric": 132
    },
    {
      "englishShortName": "Cayman Islands (the)",
      "frenchShortName": "Caïmans (les Îles)",
      "alpha2Code": "KY",
      "alpha3Code": "CYM",
      "numeric": 136
    },
    {
      "englishShortName": "Central African Republic (the)",
      "frenchShortName": "République centrafricaine (la)",
      "alpha2Code": "CF",
      "alpha3Code": "CAF",
      "numeric": 140
    },
    {
      "englishShortName": "Chad",
      "frenchShortName": "Tchad (le)",
      "alpha2Code": "TD",
      "alpha3Code": "TCD",
      "numeric": 148
    },
    {
      "englishShortName": "Chile",
      "frenchShortName": "Chili (le)",
      "alpha2Code": "CL",
      "alpha3Code": "CHL",
      "numeric": 152
    },
    {
      "englishShortName": "China",
      "frenchShortName": "Chine (la)",
      "alpha2Code": "CN",
      "alpha3Code": "CHN",
      "numeric": 156
    },
    {
      "englishShortName": "Christmas Island",
      "frenchShortName": "Christmas (l'Île)",
      "alpha2Code": "CX",
      "alpha3Code": "CXR",
      "numeric": 162
    },
    {
      "englishShortName": "Cocos (Keeling) Islands (the)",
      "frenchShortName": "Cocos (les Îles)/ Keeling (les Îles)",
      "alpha2Code": "CC",
      "alpha3Code": "CCK",
      "numeric": 166
    },
    {
      "englishShortName": "Colombia",
      "frenchShortName": "Colombie (la)",
      "alpha2Code": "CO",
      "alpha3Code": "COL",
      "numeric": 170
    },
    {
      "englishShortName": "Comoros (the)",
      "frenchShortName": "Comores (les)",
      "alpha2Code": "KM",
      "alpha3Code": "COM",
      "numeric": 174
    },
    {
      "englishShortName": "Congo (the)",
      "frenchShortName": "Congo (le)",
      "alpha2Code": "CG",
      "alpha3Code": "COG",
      "numeric": 178
    },
    {
      "englishShortName": "Congo (the Democratic Republic of the)",
      "frenchShortName": "Congo (la République démocratique du)",
      "alpha2Code": "CD",
      "alpha3Code": "COD",
      "numeric": 180
    },
    {
      "englishShortName": "Cook Islands (the)",
      "frenchShortName": "Cook (les Îles)",
      "alpha2Code": "CK",
      "alpha3Code": "COK",
      "numeric": 184
    },
    {
      "englishShortName": "Costa Rica",
      "frenchShortName": "Costa Rica (le)",
      "alpha2Code": "CR",
      "alpha3Code": "CRI",
      "numeric": 188
    },
    {
      "englishShortName": "Croatia",
      "frenchShortName": "Croatie (la)",
      "alpha2Code": "HR",
      "alpha3Code": "HRV",
      "numeric": 191
    },
    {
      "englishShortName": "Cuba",
      "frenchShortName": "Cuba",
      "alpha2Code": "CU",
      "alpha3Code": "CUB",
      "numeric": 192
    },
    {
      "englishShortName": "Curaçao",
      "frenchShortName": "Curaçao",
      "alpha2Code": "CW",
      "alpha3Code": "CUW",
      "numeric": 531
    },
    {
      "englishShortName": "Cyprus",
      "frenchShortName": "Chypre",
      "alpha2Code": "CY",
      "alpha3Code": "CYP",
      "numeric": 196
    },
    {
      "englishShortName": "Czechia",
      "frenchShortName": "Tchéquie (la)",
      "alpha2Code": "CZ",
      "alpha3Code": "CZE",
      "numeric": 203
    },
    {
      "englishShortName": "Denmark",
      "frenchShortName": "Danemark (le)",
      "alpha2Code": "DK",
      "alpha3Code": "DNK",
      "numeric": 208
    },
    {
      "englishShortName": "Djibouti",
      "frenchShortName": "Djibouti",
      "alpha2Code": "DJ",
      "alpha3Code": "DJI",
      "numeric": 262
    },
    {
      "englishShortName": "Dominica",
      "frenchShortName": "Dominique (la)",
      "alpha2Code": "DM",
      "alpha3Code": "DMA",
      "numeric": 212
    },
    {
      "englishShortName": "Dominican Republic (the)",
      "frenchShortName": "dominicaine (la République)",
      "alpha2Code": "DO",
      "alpha3Code": "DOM",
      "numeric": 214
    },
    {
      "englishShortName": "Ecuador",
      "frenchShortName": "Équateur (l')",
      "alpha2Code": "EC",
      "alpha3Code": "ECU",
      "numeric": 218
    },
    {
      "englishShortName": "Egypt",
      "frenchShortName": "Égypte (l')",
      "alpha2Code": "EG",
      "alpha3Code": "EGY",
      "numeric": 818
    },
    {
      "englishShortName": "El Salvador",
      "frenchShortName": "El Salvador",
      "alpha2Code": "SV",
      "alpha3Code": "SLV",
      "numeric": 222
    },
    {
      "englishShortName": "Equatorial Guinea",
      "frenchShortName": "Guinée équatoriale (la)",
      "alpha2Code": "GQ",
      "alpha3Code": "GNQ",
      "numeric": 226
    },
    {
      "englishShortName": "Eritrea",
      "frenchShortName": "Érythrée (l')",
      "alpha2Code": "ER",
      "alpha3Code": "ERI",
      "numeric": 232
    },
    {
      "englishShortName": "Estonia",
      "frenchShortName": "Estonie (l')",
      "alpha2Code": "EE",
      "alpha3Code": "EST",
      "numeric": 233
    },
    {
      "englishShortName": "Ethiopia",
      "frenchShortName": "Éthiopie (l')",
      "alpha2Code": "ET",
      "alpha3Code": "ETH",
      "numeric": 231
    },
    {
      "englishShortName": "Falkland Islands (the) [Malvinas]",
      "frenchShortName": "Falkland (les Îles)/Malouines (les Îles)",
      "alpha2Code": "FK",
      "alpha3Code": "FLK",
      "numeric": 238
    },
    {
      "englishShortName": "Faroe Islands (the)",
      "frenchShortName": "Féroé (les Îles)",
      "alpha2Code": "FO",
      "alpha3Code": "FRO",
      "numeric": 234
    },
    {
      "englishShortName": "Fiji",
      "frenchShortName": "Fidji (les)",
      "alpha2Code": "FJ",
      "alpha3Code": "FJI",
      "numeric": 242
    },
    {
      "englishShortName": "Finland",
      "frenchShortName": "Finlande (la)",
      "alpha2Code": "FI",
      "alpha3Code": "FIN",
      "numeric": 246
    },
    {
      "englishShortName": "France",
      "frenchShortName": "France (la)",
      "alpha2Code": "FR",
      "alpha3Code": "FRA",
      "numeric": 250
    },
    {
      "englishShortName": "French Guiana",
      "frenchShortName": "Guyane française (la )",
      "alpha2Code": "GF",
      "alpha3Code": "GUF",
      "numeric": 254
    },
    {
      "englishShortName": "French Polynesia",
      "frenchShortName": "Polynésie française (la)",
      "alpha2Code": "PF",
      "alpha3Code": "PYF",
      "numeric": 258
    },
    {
      "englishShortName": "French Southern Territories (the)",
      "frenchShortName": "Terres australes françaises (les)",
      "alpha2Code": "TF",
      "alpha3Code": "ATF",
      "numeric": 260
    },
    {
      "englishShortName": "Gabon",
      "frenchShortName": "Gabon (le)",
      "alpha2Code": "GA",
      "alpha3Code": "GAB",
      "numeric": 266
    },
    {
      "englishShortName": "Gambia (the)",
      "frenchShortName": "Gambie (la)",
      "alpha2Code": "GM",
      "alpha3Code": "GMB",
      "numeric": 270
    },
    {
      "englishShortName": "Georgia",
      "frenchShortName": "Géorgie (la)",
      "alpha2Code": "GE",
      "alpha3Code": "GEO",
      "numeric": 268
    },
    {
      "englishShortName": "Germany",
      "frenchShortName": "Allemagne (l')",
      "alpha2Code": "DE",
      "alpha3Code": "DEU",
      "numeric": 276
    },
    {
      "englishShortName": "Ghana",
      "frenchShortName": "Ghana (le)",
      "alpha2Code": "GH",
      "alpha3Code": "GHA",
      "numeric": 288
    },
    {
      "englishShortName": "Gibraltar",
      "frenchShortName": "Gibraltar",
      "alpha2Code": "GI",
      "alpha3Code": "GIB",
      "numeric": 292
    },
    {
      "englishShortName": "Greece",
      "frenchShortName": "Grèce (la)",
      "alpha2Code": "GR",
      "alpha3Code": "GRC",
      "numeric": 300
    },
    {
      "englishShortName": "Greenland",
      "frenchShortName": "Groenland (le)",
      "alpha2Code": "GL",
      "alpha3Code": "GRL",
      "numeric": 304
    },
    {
      "englishShortName": "Grenada",
      "frenchShortName": "Grenade (la)",
      "alpha2Code": "GD",
      "alpha3Code": "GRD",
      "numeric": 308
    },
    {
      "englishShortName": "Guadeloupe",
      "frenchShortName": "Guadeloupe (la)",
      "alpha2Code": "GP",
      "alpha3Code": "GLP",
      "numeric": 312
    },
    {
      "englishShortName": "Guam",
      "frenchShortName": "Guam",
      "alpha2Code": "GU",
      "alpha3Code": "GUM",
      "numeric": 316
    },
    {
      "englishShortName": "Guatemala",
      "frenchShortName": "Guatemala (le)",
      "alpha2Code": "GT",
      "alpha3Code": "GTM",
      "numeric": 320
    },
    {
      "englishShortName": "Guernsey",
      "frenchShortName": "Guernesey",
      "alpha2Code": "GG",
      "alpha3Code": "GGY",
      "numeric": 831
    },
    {
      "englishShortName": "Guinea",
      "frenchShortName": "Guinée (la)",
      "alpha2Code": "GN",
      "alpha3Code": "GIN",
      "numeric": 324
    },
    {
      "englishShortName": "Guinea-Bissau",
      "frenchShortName": "Guinée-Bissau (la)",
      "alpha2Code": "GW",
      "alpha3Code": "GNB",
      "numeric": 624
    },
    {
      "englishShortName": "Guyana",
      "frenchShortName": "Guyana (le)",
      "alpha2Code": "GY",
      "alpha3Code": "GUY",
      "numeric": 328
    },
    {
      "englishShortName": "Haiti",
      "frenchShortName": "Haïti",
      "alpha2Code": "HT",
      "alpha3Code": "HTI",
      "numeric": 332
    },
    {
      "englishShortName": "Heard Island and McDonald Islands",
      "frenchShortName": "Heard-et-Îles MacDonald (l'Île)",
      "alpha2Code": "HM",
      "alpha3Code": "HMD",
      "numeric": 334
    },
    {
      "englishShortName": "Holy See (the)",
      "frenchShortName": "Saint-Siège (le)",
      "alpha2Code": "VA",
      "alpha3Code": "VAT",
      "numeric": 336
    },
    {
      "englishShortName": "Honduras",
      "frenchShortName": "Honduras (le)",
      "alpha2Code": "HN",
      "alpha3Code": "HND",
      "numeric": 340
    },
    {
      "englishShortName": "Hong Kong",
      "frenchShortName": "Hong Kong",
      "alpha2Code": "HK",
      "alpha3Code": "HKG",
      "numeric": 344
    },
    {
      "englishShortName": "Hungary",
      "frenchShortName": "Hongrie (la)",
      "alpha2Code": "HU",
      "alpha3Code": "HUN",
      "numeric": 348
    },
    {
      "englishShortName": "Iceland",
      "frenchShortName": "Islande (l')",
      "alpha2Code": "IS",
      "alpha3Code": "ISL",
      "numeric": 352
    },
    {
      "englishShortName": "India",
      "frenchShortName": "Inde (l')",
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "numeric": 356
    },
    {
      "englishShortName": "Indonesia",
      "frenchShortName": "Indonésie (l')",
      "alpha2Code": "ID",
      "alpha3Code": "IDN",
      "numeric": 360
    },{
      "englishShortName": "Côte d'Ivoire",
      "frenchShortName": "Côte d'Ivoire (la)",
      "alpha2Code": "CI",
      "alpha3Code": "CIV",
      "numeric": 384
    },
    {
      "englishShortName": "Iran (Islamic Republic of)",
      "frenchShortName": "Iran (République Islamique d')",
      "alpha2Code": "IR",
      "alpha3Code": "IRN",
      "numeric": 364
    },
    {
      "englishShortName": "Iraq",
      "frenchShortName": "Iraq (l')",
      "alpha2Code": "IQ",
      "alpha3Code": "IRQ",
      "numeric": 368
    },
    {
      "englishShortName": "Ireland",
      "frenchShortName": "Irlande (l')",
      "alpha2Code": "IE",
      "alpha3Code": "IRL",
      "numeric": 372
    },
    {
      "englishShortName": "Isle of Man",
      "frenchShortName": "Île de Man",
      "alpha2Code": "IM",
      "alpha3Code": "IMN",
      "numeric": 833
    },
    {
      "englishShortName": "Israel",
      "frenchShortName": "Israël",
      "alpha2Code": "IL",
      "alpha3Code": "ISR",
      "numeric": 376
    },
    {
      "englishShortName": "Italy",
      "frenchShortName": "Italie (l')",
      "alpha2Code": "IT",
      "alpha3Code": "ITA",
      "numeric": 380
    },
    {
      "englishShortName": "Jamaica",
      "frenchShortName": "Jamaïque (la)",
      "alpha2Code": "JM",
      "alpha3Code": "JAM",
      "numeric": 388
    },
    {
      "englishShortName": "Japan",
      "frenchShortName": "Japon (le)",
      "alpha2Code": "JP",
      "alpha3Code": "JPN",
      "numeric": 392
    },
    {
      "englishShortName": "Jersey",
      "frenchShortName": "Jersey",
      "alpha2Code": "JE",
      "alpha3Code": "JEY",
      "numeric": 832
    },
    {
      "englishShortName": "Jordan",
      "frenchShortName": "Jordanie (la)",
      "alpha2Code": "JO",
      "alpha3Code": "JOR",
      "numeric": 400
    },
    {
      "englishShortName": "Kazakhstan",
      "frenchShortName": "Kazakhstan (le)",
      "alpha2Code": "KZ",
      "alpha3Code": "KAZ",
      "numeric": 398
    },
    {
      "englishShortName": "Kenya",
      "frenchShortName": "Kenya (le)",
      "alpha2Code": "KE",
      "alpha3Code": "KEN",
      "numeric": 404
    },
    {
      "englishShortName": "Kiribati",
      "frenchShortName": "Kiribati",
      "alpha2Code": "KI",
      "alpha3Code": "KIR",
      "numeric": 296
    },
    {
      "englishShortName": "Kuwait",
      "frenchShortName": "Koweït (le)",
      "alpha2Code": "KW",
      "alpha3Code": "KWT",
      "numeric": 414
    },
    {
      "englishShortName": "Kyrgyzstan",
      "frenchShortName": "Kirghizistan (le)",
      "alpha2Code": "KG",
      "alpha3Code": "KGZ",
      "numeric": 417
    },
    {
      "englishShortName": "Lao People's Democratic Republic (the)",
      "frenchShortName": "Lao (la République démocratique populaire)",
      "alpha2Code": "LA",
      "alpha3Code": "LAO",
      "numeric": 418
    },
    {
      "englishShortName": "Latvia",
      "frenchShortName": "Lettonie (la)",
      "alpha2Code": "LV",
      "alpha3Code": "LVA",
      "numeric": 428
    },
    {
      "englishShortName": "Lebanon",
      "frenchShortName": "Liban (le)",
      "alpha2Code": "LB",
      "alpha3Code": "LBN",
      "numeric": 422
    },
    {
      "englishShortName": "Lesotho",
      "frenchShortName": "Lesotho (le)",
      "alpha2Code": "LS",
      "alpha3Code": "LSO",
      "numeric": 426
    },
    {
      "englishShortName": "Liberia",
      "frenchShortName": "Libéria (le)",
      "alpha2Code": "LR",
      "alpha3Code": "LBR",
      "numeric": 430
    },
    {
      "englishShortName": "Libya",
      "frenchShortName": "Libye (la)",
      "alpha2Code": "LY",
      "alpha3Code": "LBY",
      "numeric": 434
    },
    {
      "englishShortName": "Liechtenstein",
      "frenchShortName": "Liechtenstein (le)",
      "alpha2Code": "LI",
      "alpha3Code": "LIE",
      "numeric": 438
    },
    {
      "englishShortName": "Lithuania",
      "frenchShortName": "Lituanie (la)",
      "alpha2Code": "LT",
      "alpha3Code": "LTU",
      "numeric": 440
    },
    {
      "englishShortName": "Luxembourg",
      "frenchShortName": "Luxembourg (le)",
      "alpha2Code": "LU",
      "alpha3Code": "LUX",
      "numeric": 442
    },
    {
      "englishShortName": "Macao",
      "frenchShortName": "Macao",
      "alpha2Code": "MO",
      "alpha3Code": "MAC",
      "numeric": 446
    },
    {
      "englishShortName": "North Macedonia",
      "frenchShortName": "Macédoine du Nord (la)",
      "alpha2Code": "MK",
      "alpha3Code": "MKD",
      "numeric": 807
    },
    {
      "englishShortName": "Madagascar",
      "frenchShortName": "Madagascar",
      "alpha2Code": "MG",
      "alpha3Code": "MDG",
      "numeric": 450
    },
    {
      "englishShortName": "Malawi",
      "frenchShortName": "Malawi (le)",
      "alpha2Code": "MW",
      "alpha3Code": "MWI",
      "numeric": 454
    },
    {
      "englishShortName": "Malaysia",
      "frenchShortName": "Malaisie (la)",
      "alpha2Code": "MY",
      "alpha3Code": "MYS",
      "numeric": 458
    },
    {
      "englishShortName": "Maldives",
      "frenchShortName": "Maldives (les)",
      "alpha2Code": "MV",
      "alpha3Code": "MDV",
      "numeric": 462
    },
    {
      "englishShortName": "Mali",
      "frenchShortName": "Mali (le)",
      "alpha2Code": "ML",
      "alpha3Code": "MLI",
      "numeric": 466
    },
    {
      "englishShortName": "Malta",
      "frenchShortName": "Malte",
      "alpha2Code": "MT",
      "alpha3Code": "MLT",
      "numeric": 470
    },
    {
      "englishShortName": "Marshall Islands (the)",
      "frenchShortName": "Marshall (les Îles)",
      "alpha2Code": "MH",
      "alpha3Code": "MHL",
      "numeric": 584
    },
    {
      "englishShortName": "Martinique",
      "frenchShortName": "Martinique (la)",
      "alpha2Code": "MQ",
      "alpha3Code": "MTQ",
      "numeric": 474
    },
    {
      "englishShortName": "Mauritania",
      "frenchShortName": "Mauritanie (la)",
      "alpha2Code": "MR",
      "alpha3Code": "MRT",
      "numeric": 478
    },
    {
      "englishShortName": "Mauritius",
      "frenchShortName": "Maurice",
      "alpha2Code": "MU",
      "alpha3Code": "MUS",
      "numeric": 480
    },
    {
      "englishShortName": "Mayotte",
      "frenchShortName": "Mayotte",
      "alpha2Code": "YT",
      "alpha3Code": "MYT",
      "numeric": 175
    },
    {
      "englishShortName": "Mexico",
      "frenchShortName": "Mexique (le)",
      "alpha2Code": "MX",
      "alpha3Code": "MEX",
      "numeric": 484
    },
    {
      "englishShortName": "Micronesia (Federated States of)",
      "frenchShortName": "Micronésie (États fédérés de)",
      "alpha2Code": "FM",
      "alpha3Code": "FSM",
      "numeric": 583
    },
    {
      "englishShortName": "Moldova (the Republic of)",
      "frenchShortName": "Moldova (la République de)",
      "alpha2Code": "MD",
      "alpha3Code": "MDA",
      "numeric": 498
    },
    {
      "englishShortName": "Monaco",
      "frenchShortName": "Monaco",
      "alpha2Code": "MC",
      "alpha3Code": "MCO",
      "numeric": 492
    },
    {
      "englishShortName": "Mongolia",
      "frenchShortName": "Mongolie (la)",
      "alpha2Code": "MN",
      "alpha3Code": "MNG",
      "numeric": 496
    },
    {
      "englishShortName": "Montenegro",
      "frenchShortName": "Monténégro (le)",
      "alpha2Code": "ME",
      "alpha3Code": "MNE",
      "numeric": 499
    },
    {
      "englishShortName": "Montserrat",
      "frenchShortName": "Montserrat",
      "alpha2Code": "MS",
      "alpha3Code": "MSR",
      "numeric": 500
    },
    {
      "englishShortName": "Morocco",
      "frenchShortName": "Maroc (le)",
      "alpha2Code": "MA",
      "alpha3Code": "MAR",
      "numeric": 504
    },
    {
      "englishShortName": "Mozambique",
      "frenchShortName": "Mozambique (le)",
      "alpha2Code": "MZ",
      "alpha3Code": "MOZ",
      "numeric": 508
    },
    {
      "englishShortName": "Myanmar",
      "frenchShortName": "Myanmar (le)",
      "alpha2Code": "MM",
      "alpha3Code": "MMR",
      "numeric": 104
    },
    {
      "englishShortName": "Namibia",
      "frenchShortName": "Namibie (la)",
      "alpha2Code": "NA",
      "alpha3Code": "NAM",
      "numeric": 516
    },
    {
      "englishShortName": "Nauru",
      "frenchShortName": "Nauru",
      "alpha2Code": "NR",
      "alpha3Code": "NRU",
      "numeric": 520
    },
    {
      "englishShortName": "Nepal",
      "frenchShortName": "Népal (le)",
      "alpha2Code": "NP",
      "alpha3Code": "NPL",
      "numeric": 524
    },
    {
      "englishShortName": "Netherlands (the)",
      "frenchShortName": "Pays-Bas (les)",
      "alpha2Code": "NL",
      "alpha3Code": "NLD",
      "numeric": 528
    },
    {
      "englishShortName": "New Caledonia",
      "frenchShortName": "Nouvelle-Calédonie (la)",
      "alpha2Code": "NC",
      "alpha3Code": "NCL",
      "numeric": 540
    },
    {
      "englishShortName": "New Zealand",
      "frenchShortName": "Nouvelle-Zélande (la)",
      "alpha2Code": "NZ",
      "alpha3Code": "NZL",
      "numeric": 554
    },
    {
      "englishShortName": "Nicaragua",
      "frenchShortName": "Nicaragua (le)",
      "alpha2Code": "NI",
      "alpha3Code": "NIC",
      "numeric": 558
    },
    {
      "englishShortName": "Niger (the)",
      "frenchShortName": "Niger (le)",
      "alpha2Code": "NE",
      "alpha3Code": "NER",
      "numeric": 562
    },
    {
      "englishShortName": "Nigeria",
      "frenchShortName": "Nigéria (le)",
      "alpha2Code": "NG",
      "alpha3Code": "NGA",
      "numeric": 566
    },
    {
      "englishShortName": "Niue",
      "frenchShortName": "Niue",
      "alpha2Code": "NU",
      "alpha3Code": "NIU",
      "numeric": 570
    },
    {
      "englishShortName": "Korea (the Democratic People's Republic of)",
      "frenchShortName": "Corée (la République populaire démocratique de)",
      "alpha2Code": "KP",
      "alpha3Code": "PRK",
      "numeric": 408
    },
    {
      "englishShortName": "North Macedonia",
      "frenchShortName": "Macédoine du Nord (la)",
      "alpha2Code": "MK",
      "alpha3Code": "MKD",
      "numeric": 807
    },
    {
      "englishShortName": "Northern Mariana Islands (the)",
      "frenchShortName": "Mariannes du Nord (les Îles)",
      "alpha2Code": "MP",
      "alpha3Code": "MNP",
      "numeric": 580
    },
    {
      "englishShortName": "Norway",
      "frenchShortName": "Norvège (la)",
      "alpha2Code": "NO",
      "alpha3Code": "NOR",
      "numeric": 578
    },
    {
      "englishShortName": "Oman",
      "frenchShortName": "Oman",
      "alpha2Code": "OM",
      "alpha3Code": "OMN",
      "numeric": 512
    },
    {
      "englishShortName": "Pakistan",
      "frenchShortName": "Pakistan (le)",
      "alpha2Code": "PK",
      "alpha3Code": "PAK",
      "numeric": 586
    },
    {
      "englishShortName": "Palau",
      "frenchShortName": "Palaos (les)",
      "alpha2Code": "PW",
      "alpha3Code": "PLW",
      "numeric": 585
    },
    {
      "englishShortName": "Palestine, State of",
      "frenchShortName": "Palestine, État de",
      "alpha2Code": "PS",
      "alpha3Code": "PSE",
      "numeric": 275
    },
    {
      "englishShortName": "Panama",
      "frenchShortName": "Panama (le)",
      "alpha2Code": "PA",
      "alpha3Code": "PAN",
      "numeric": 591
    },
    {
      "englishShortName": "Papua New Guinea",
      "frenchShortName": "Papouasie-Nouvelle-Guinée (la)",
      "alpha2Code": "PG",
      "alpha3Code": "PNG",
      "numeric": 598
    },
    {
      "englishShortName": "Paraguay",
      "frenchShortName": "Paraguay (le)",
      "alpha2Code": "PY",
      "alpha3Code": "PRY",
      "numeric": 600
    },
    {
      "englishShortName": "Peru",
      "frenchShortName": "Pérou (le)",
      "alpha2Code": "PE",
      "alpha3Code": "PER",
      "numeric": 604
    },
    {
      "englishShortName": "Philippines (the)",
      "frenchShortName": "Philippines (les)",
      "alpha2Code": "PH",
      "alpha3Code": "PHL",
      "numeric": 608
    },
    {
      "englishShortName": "Pitcairn",
      "frenchShortName": "Pitcairn",
      "alpha2Code": "PN",
      "alpha3Code": "PCN",
      "numeric": 612
    },
    {
      "englishShortName": "Poland",
      "frenchShortName": "Pologne (la)",
      "alpha2Code": "PL",
      "alpha3Code": "POL",
      "numeric": 616
    },
    {
      "englishShortName": "Portugal",
      "frenchShortName": "Portugal (le)",
      "alpha2Code": "PT",
      "alpha3Code": "PRT",
      "numeric": 620
    },
    {
      "englishShortName": "Puerto Rico",
      "frenchShortName": "Porto Rico",
      "alpha2Code": "PR",
      "alpha3Code": "PRI",
      "numeric": 630
    },
    {
      "englishShortName": "Qatar",
      "frenchShortName": "Qatar (le)",
      "alpha2Code": "QA",
      "alpha3Code": "QAT",
      "numeric": 634
    },
    {
      "englishShortName": "Republic of Kosovo",
      "frenchShortName": "Republic of Kosovo",
      "alpha2Code": "XK",
      "alpha3Code": "UNK",
      "numeric": 122
    },
    {
      "englishShortName": "Réunion",
      "frenchShortName": "Réunion (La)",
      "alpha2Code": "RE",
      "alpha3Code": "REU",
      "numeric": 638
    },
    {
      "englishShortName": "Romania",
      "frenchShortName": "Roumanie (la)",
      "alpha2Code": "RO",
      "alpha3Code": "ROU",
      "numeric": 642
    },
    {
      "englishShortName": "Russian Federation (the)",
      "frenchShortName": "Russie (la Fédération de)",
      "alpha2Code": "RU",
      "alpha3Code": "RUS",
      "numeric": 643
    },
    {
      "englishShortName": "Rwanda",
      "frenchShortName": "Rwanda (le)",
      "alpha2Code": "RW",
      "alpha3Code": "RWA",
      "numeric": 646
    },
    {
      "englishShortName": "Saint Barthélemy",
      "frenchShortName": "Saint-Barthélemy",
      "alpha2Code": "BL",
      "alpha3Code": "BLM",
      "numeric": 652
    },
    {
      "englishShortName": "Saint Helena, Ascension and Tristan da Cunha",
      "frenchShortName": "Sainte-Hélène, Ascension et Tristan da Cunha",
      "alpha2Code": "SH",
      "alpha3Code": "SHN",
      "numeric": 654
    },
    {
      "englishShortName": "Saint Kitts and Nevis",
      "frenchShortName": "Saint-Kitts-et-Nevis",
      "alpha2Code": "KN",
      "alpha3Code": "KNA",
      "numeric": 659
    },
    {
      "englishShortName": "Saint Lucia",
      "frenchShortName": "Sainte-Lucie",
      "alpha2Code": "LC",
      "alpha3Code": "LCA",
      "numeric": 662
    },
    {
      "englishShortName": "Saint Martin (French part)",
      "frenchShortName": "Saint-Martin (partie française)",
      "alpha2Code": "MF",
      "alpha3Code": "MAF",
      "numeric": 663
    },
    {
      "englishShortName": "Saint Pierre and Miquelon",
      "frenchShortName": "Saint-Pierre-et-Miquelon",
      "alpha2Code": "PM",
      "alpha3Code": "SPM",
      "numeric": 666
    },
    {
      "englishShortName": "Saint Vincent and the Grenadines",
      "frenchShortName": "Saint-Vincent-et-les Grenadines",
      "alpha2Code": "VC",
      "alpha3Code": "VCT",
      "numeric": 670
    },
    {
      "englishShortName": "Samoa",
      "frenchShortName": "Samoa (le)",
      "alpha2Code": "WS",
      "alpha3Code": "WSM",
      "numeric": 882
    },
    {
      "englishShortName": "San Marino",
      "frenchShortName": "Saint-Marin",
      "alpha2Code": "SM",
      "alpha3Code": "SMR",
      "numeric": 674
    },
    {
      "englishShortName": "Sao Tome and Principe",
      "frenchShortName": "Sao Tomé-et-Principe",
      "alpha2Code": "ST",
      "alpha3Code": "STP",
      "numeric": 678
    },
    {
      "englishShortName": "Saudi Arabia",
      "frenchShortName": "Arabie saoudite (l')",
      "alpha2Code": "SA",
      "alpha3Code": "SAU",
      "numeric": 682
    },
    {
      "englishShortName": "Senegal",
      "frenchShortName": "Sénégal (le)",
      "alpha2Code": "SN",
      "alpha3Code": "SEN",
      "numeric": 686
    },
    {
      "englishShortName": "Serbia",
      "frenchShortName": "Serbie (la)",
      "alpha2Code": "RS",
      "alpha3Code": "SRB",
      "numeric": 688
    },
    {
      "englishShortName": "Seychelles",
      "frenchShortName": "Seychelles (les)",
      "alpha2Code": "SC",
      "alpha3Code": "SYC",
      "numeric": 690
    },
    {
      "englishShortName": "Sierra Leone",
      "frenchShortName": "Sierra Leone (la)",
      "alpha2Code": "SL",
      "alpha3Code": "SLE",
      "numeric": 694
    },
    {
      "englishShortName": "Singapore",
      "frenchShortName": "Singapour",
      "alpha2Code": "SG",
      "alpha3Code": "SGP",
      "numeric": 702
    },
    {
      "englishShortName": "Sint Maarten (Dutch part)",
      "frenchShortName": "Saint-Martin (partie néerlandaise)",
      "alpha2Code": "SX",
      "alpha3Code": "SXM",
      "numeric": 534
    },
    {
      "englishShortName": "Slovakia",
      "frenchShortName": "Slovaquie (la)",
      "alpha2Code": "SK",
      "alpha3Code": "SVK",
      "numeric": 703
    },
    {
      "englishShortName": "Slovenia",
      "frenchShortName": "Slovénie (la)",
      "alpha2Code": "SI",
      "alpha3Code": "SVN",
      "numeric": 705
    },
    {
      "englishShortName": "Solomon Islands",
      "frenchShortName": "Salomon (les Îles)",
      "alpha2Code": "SB",
      "alpha3Code": "SLB",
      "numeric": 90
    },
    {
      "englishShortName": "Somalia",
      "frenchShortName": "Somalie (la)",
      "alpha2Code": "SO",
      "alpha3Code": "SOM",
      "numeric": 706
    },
    {
      "englishShortName": "South Africa",
      "frenchShortName": "Afrique du Sud (l')",
      "alpha2Code": "ZA",
      "alpha3Code": "ZAF",
      "numeric": 710
    },
    {
      "englishShortName": "South Georgia and the South Sandwich Islands",
      "frenchShortName": "Géorgie du Sud-et-les Îles Sandwich du Sud (la)",
      "alpha2Code": "GS",
      "alpha3Code": "SGS",
      "numeric": 239
    },
    {
      "englishShortName": "Korea (the Republic of)",
      "frenchShortName": "Corée (la République de)",
      "alpha2Code": "KR",
      "alpha3Code": "KOR",
      "numeric": 410
    },
    {
      "englishShortName": "South Sudan",
      "frenchShortName": "Soudan du Sud (le)",
      "alpha2Code": "SS",
      "alpha3Code": "SSD",
      "numeric": 728
    },
    {
      "englishShortName": "Spain",
      "frenchShortName": "Espagne (l')",
      "alpha2Code": "ES",
      "alpha3Code": "ESP",
      "numeric": 724
    },
    {
      "englishShortName": "Sri Lanka",
      "frenchShortName": "Sri Lanka",
      "alpha2Code": "LK",
      "alpha3Code": "LKA",
      "numeric": 144
    },
    {
      "englishShortName": "Sudan (the)",
      "frenchShortName": "Soudan (le)",
      "alpha2Code": "SD",
      "alpha3Code": "SDN",
      "numeric": 729
    },
    {
      "englishShortName": "Suriname",
      "frenchShortName": "Suriname (le)",
      "alpha2Code": "SR",
      "alpha3Code": "SUR",
      "numeric": 740
    },
    {
      "englishShortName": "Svalbard and Jan Mayen",
      "frenchShortName": "Svalbard et l'Île Jan Mayen (le)",
      "alpha2Code": "SJ",
      "alpha3Code": "SJM",
      "numeric": 744
    },
    {
      "englishShortName": "Eswatini",
      "frenchShortName": "Eswatini (l')",
      "alpha2Code": "SZ",
      "alpha3Code": "SWZ",
      "numeric": 748
    },
    {
      "englishShortName": "Sweden",
      "frenchShortName": "Suède (la)",
      "alpha2Code": "SE",
      "alpha3Code": "SWE",
      "numeric": 752
    },
    {
      "englishShortName": "Switzerland",
      "frenchShortName": "Suisse (la)",
      "alpha2Code": "CH",
      "alpha3Code": "CHE",
      "numeric": 756
    },
    {
      "englishShortName": "Syrian Arab Republic (the)",
      "frenchShortName": "République arabe syrienne (la)",
      "alpha2Code": "SY",
      "alpha3Code": "SYR",
      "numeric": 760
    },
    {
      "englishShortName": "Taiwan (Province of China)",
      "frenchShortName": "Taïwan (Province de Chine)",
      "alpha2Code": "TW",
      "alpha3Code": "TWN",
      "numeric": 158
    },
    {
      "englishShortName": "Tajikistan",
      "frenchShortName": "Tadjikistan (le)",
      "alpha2Code": "TJ",
      "alpha3Code": "TJK",
      "numeric": 762
    },
    {
      "englishShortName": "Tanzania, the United Republic of",
      "frenchShortName": "Tanzanie (la République-Unie de)",
      "alpha2Code": "TZ",
      "alpha3Code": "TZA",
      "numeric": 834
    },
    {
      "englishShortName": "Thailand",
      "frenchShortName": "Thaïlande (la)",
      "alpha2Code": "TH",
      "alpha3Code": "THA",
      "numeric": 764
    },
    {
      "englishShortName": "Timor-Leste",
      "frenchShortName": "Timor-Leste (le)",
      "alpha2Code": "TL",
      "alpha3Code": "TLS",
      "numeric": 626
    },
    {
      "englishShortName": "Togo",
      "frenchShortName": "Togo (le)",
      "alpha2Code": "TG",
      "alpha3Code": "TGO",
      "numeric": 768
    },
    {
      "englishShortName": "Tokelau",
      "frenchShortName": "Tokelau (les)",
      "alpha2Code": "TK",
      "alpha3Code": "TKL",
      "numeric": 772
    },
    {
      "englishShortName": "Tonga",
      "frenchShortName": "Tonga (les)",
      "alpha2Code": "TO",
      "alpha3Code": "TON",
      "numeric": 776
    },
    {
      "englishShortName": "Trinidad and Tobago",
      "frenchShortName": "Trinité-et-Tobago (la)",
      "alpha2Code": "TT",
      "alpha3Code": "TTO",
      "numeric": 780
    },
    {
      "englishShortName": "Tunisia",
      "frenchShortName": "Tunisie (la)",
      "alpha2Code": "TN",
      "alpha3Code": "TUN",
      "numeric": 788
    },
    {
      "englishShortName": "Turkey",
      "frenchShortName": "Turquie (la)",
      "alpha2Code": "TR",
      "alpha3Code": "TUR",
      "numeric": 792
    },
    {
      "englishShortName": "Turkmenistan",
      "frenchShortName": "Turkménistan (le)",
      "alpha2Code": "TM",
      "alpha3Code": "TKM",
      "numeric": 795
    },
    {
      "englishShortName": "Turks and Caicos Islands (the)",
      "frenchShortName": "Turks-et-Caïcos (les Îles)",
      "alpha2Code": "TC",
      "alpha3Code": "TCA",
      "numeric": 796
    },
    {
      "englishShortName": "Tuvalu",
      "frenchShortName": "Tuvalu (les)",
      "alpha2Code": "TV",
      "alpha3Code": "TUV",
      "numeric": 798
    },
    {
      "englishShortName": "Uganda",
      "frenchShortName": "Ouganda (l')",
      "alpha2Code": "UG",
      "alpha3Code": "UGA",
      "numeric": 800
    },
    {
      "englishShortName": "Ukraine",
      "frenchShortName": "Ukraine (l')",
      "alpha2Code": "UA",
      "alpha3Code": "UKR",
      "numeric": 804
    },
    {
      "englishShortName": "United Arab Emirates (the)",
      "frenchShortName": "Émirats arabes unis (les)",
      "alpha2Code": "AE",
      "alpha3Code": "ARE",
      "numeric": 784
    },
    {
      "englishShortName": "United Kingdom of Great Britain and Northern Ireland (the)",
      "frenchShortName": "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord (le)",
      "alpha2Code": "GB",
      "alpha3Code": "GBR",
      "numeric": 826
    },
    {
      "englishShortName": "United States of America (the)",
      "frenchShortName": "États-Unis d'Amérique (les)",
      "alpha2Code": "US",
      "alpha3Code": "USA",
      "numeric": 840
    },
    {
      "englishShortName": "Uruguay",
      "frenchShortName": "Uruguay (l')",
      "alpha2Code": "UY",
      "alpha3Code": "URY",
      "numeric": 858
    },
    {
      "englishShortName": "Uzbekistan",
      "frenchShortName": "Ouzbékistan (l')",
      "alpha2Code": "UZ",
      "alpha3Code": "UZB",
      "numeric": 860
    },
    {
      "englishShortName": "Vanuatu",
      "frenchShortName": "Vanuatu (le)",
      "alpha2Code": "VU",
      "alpha3Code": "VUT",
      "numeric": 548
    },
    {
      "englishShortName": "Venezuela (Bolivarian Republic of)",
      "frenchShortName": "Venezuela (République bolivarienne du)",
      "alpha2Code": "VE",
      "alpha3Code": "VEN",
      "numeric": 862
    },
    {
      "englishShortName": "Viet Nam",
      "frenchShortName": "Viet Nam (le)",
      "alpha2Code": "VN",
      "alpha3Code": "VNM",
      "numeric": 704
    },
    {
      "englishShortName": "Wallis and Futuna",
      "frenchShortName": "Wallis-et-Futuna",
      "alpha2Code": "WF",
      "alpha3Code": "WLF",
      "numeric": 876
    },
    {
      "englishShortName": "Western Sahara*",
      "frenchShortName": "Sahara occidental (le)*",
      "alpha2Code": "EH",
      "alpha3Code": "ESH",
      "numeric": 732
    },
    {
      "englishShortName": "Yemen",
      "frenchShortName": "Yémen (le)",
      "alpha2Code": "YE",
      "alpha3Code": "YEM",
      "numeric": 887
    },
    {
      "englishShortName": "Zambia",
      "frenchShortName": "Zambie (la)",
      "alpha2Code": "ZM",
      "alpha3Code": "ZMB",
      "numeric": 894
    },
    {
      "englishShortName": "Zimbabwe",
      "frenchShortName": "Zimbabwe (le)",
      "alpha2Code": "ZW",
      "alpha3Code": "ZWE",
      "numeric": 716
    },
  ]
  let countryCode = [];
  for(country of ISO.sort()){
    countryCode.push(country.alpha2Code.toLowerCase());
  }
  for(let i = 0;i < 250;i++){
    countriesOriginal[i].flag = `https://flagcdn.com/${countryCode[i]}.svg`;
  };
}

fixFlagCountryCode();

let countries = [];

for(country of countriesOriginal){
  let populationLength = country.population.toString().length;
  let populationArrReverse = [];
  let populationArr = [];
  for(let i = populationLength-1;i >= 0;i--){
    populationArrReverse.push(country.population.toString()[i]);
  };
  if(populationArrReverse.length > 3){
    populationArrReverse[3] += ',';
  }
  if(populationArrReverse.length > 6){
    populationArrReverse[6] += ',';
  }
  if(populationArrReverse.length > 9){
    populationArrReverse[9] += ',';
  }
  for(let i = populationArrReverse.length-1;i >= 0;i--){
    populationArr.push(populationArrReverse[i]);
  };
  country.populationText = populationArr.join('');
  countries.push(country);
}

let outputBox = document.querySelector('.output-box');
let outputs = countries;

function outputCountries(arr){
    outputBox.innerHTML = '';
    for(country of arr){
        let countryBox = document.createElement('div');
        let countryFlagBox = document.createElement('img');
        let countryName = document.createElement('p');
        let countryInfo = document.createElement('div');
        let capital = document.createElement('span');
        let languages = document.createElement('span');
        let languages2 = document.createElement('span');
        let languages3 = document.createElement('span');
        let population = document.createElement('span');
    
        countryBox.style.display = 'inline-block';
        countryBox.style.backgroundColor = 'white';
        countryBox.style.padding = '15px';
        countryBox.style.margin = '5px 0';
        countryBox.style.width = '200px';
        countryFlagBox.setAttribute('src',country.flag)
        countryFlagBox.style.width = '160px'
        countryFlagBox.style.height = '80px'
        countryFlagBox.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
        countryName.innerText = country.name;
        countryName.style.textAlign = 'center';
        countryName.style.color = 'var(--primary)';
        countryName.style.letterSpacing = '1px';
        countryName.style.margin = '10px 0';
        countryName.style.fontWeight = 'bold';
        capital.innerText = `Capital: ${country.capital}`;
    
        if(country.languages.length < 2){
            languages.innerText = `Languages: ${country.languages}`;
        }else{
            languages.innerText = `Languages: ${country.languages[0]},`;
            for(let i = 1;i < country.languages.length;i++){
                if(i < 4){
                  if(i == country.languages.length-1){
                    languages2.innerText += country.languages[i];
                  }else{
                    languages2.innerText += country.languages[i] + ',';
                  }
                }else{
                  if(i == country.languages.length-1){
                    languages3.innerText += country.languages[i];
                  }else{
                    languages3.innerText += country.languages[i] + ',';
                  }
                }
            };
        };
    
        languages.style.display = 'block';
        languages2.style.display = 'block';
        population.innerText = `Population: ${country.population}`;
        population.style.display = 'block';
        
        countryInfo.appendChild(capital);
        countryInfo.appendChild(languages);
        countryInfo.appendChild(languages2);
        countryInfo.appendChild(languages3);
        countryInfo.appendChild(population);
        countryBox.appendChild(countryFlagBox);
        countryBox.appendChild(countryName);
        countryBox.appendChild(countryInfo);
    
        $('.output-box').append(countryBox);
    }
}

outputCountries(countries);

$('.name-btn').click( () => {
    if($('.name-btn .up-icon').hasClass('show')){
        let reverseCountries = [];
        for(let i = outputs.length-1;i >= 0;i--){
            reverseCountries.push(outputs[i]);
        };
        outputCountries(reverseCountries);
    }else{
        outputCountries(outputs);
    }
});

$('.capital-btn').click( () => {
    if($('.capital-btn .up-icon').hasClass('show')){
        let capitalArr = [];
        for(country of outputs){
            capitalArr.push(country.capital);
        }
        let capitalReverse = capitalArr.sort().reverse();
        let capitalReverseCountries = [];
        for(let i = 0;i < capitalReverse.length;i++){
            for(country of outputs){
                if(country.capital == capitalReverse[i]){
                    capitalReverseCountries.push(country);
                };
            };
        };
        capitalReverseCountries.splice(58,2);
        capitalReverseCountries.splice(144,2);
        outputCountries(capitalReverseCountries.slice(0,250));
    }else{
        let capitalArr = [];
        for(country of outputs){
            capitalArr.push(country.capital);
        }
        let capitalSort = capitalArr.sort();
        let capitalSortCountries = [];
        for(let i = 0;i < capitalSort.length;i++){
            for(country of outputs){
                if(country.capital == capitalSort[i]){
                    capitalSortCountries.push(country);
                };
            };
        };
        capitalSortCountries.splice(58,2);
        capitalSortCountries.splice(144,2);
        if(outputs.length == 250){
          outputCountries(capitalSortCountries.slice(20,270));
        }else{
          outputCountries(capitalSortCountries.slice(0,250));
        }
    }
});

$('.population-btn').click( () => {
    if($('.population-btn .up-icon').hasClass('show')){
        let populationArr = [];
        for(country of outputs){
            populationArr.push(country.population);
        };
        let populationReverse = [];
        for(let j = 0;j < outputs.length;j++){
            let num = 0;
            for(population of populationArr){
                if(population > num){
                    num = population;
                };
            };
            let a = populationArr.filter( el => el !== num);
            populationReverse.push(num);
            populationArr = a;
        }
        let populationReverseCountries = [];
        for(let i = 0;i < populationReverse.length;i++){
            for(country of outputs){
                if(populationReverse[i] == country.population){
                    populationReverseCountries.push(country);
                };
            };
        };
        outputCountries(populationReverseCountries.slice(0,250));
    }else{
        let populationArr = [];
        for(country of outputs){
            populationArr.push(country.population);
        };
        let populationSort = [];
        for(let j = 0;j < outputs.length;j++){
            let num = 1377422166;
            for(population of populationArr){
                if(population <= num){
                    num = population;
                };
            };
            let a = populationArr.filter( el => el !== num);
            populationSort.push(num);
            populationArr = a;
        }
        let populationSortCountries = [];
        for(let i = 0;i < populationSort.length;i++){
            for(country of outputs){
                if(populationSort[i] == country.population){
                    populationSortCountries.push(country);
                    console.log(i)
                };
            };
        };
        outputCountries(populationSortCountries.slice(0,250));
    }
});

let searchInfoBox = document.querySelector('.search-info-box');

$('.input').keyup( () => {
  outputs = [];
  let inputValue = $('.input').val();
  for(country of countries){
    if(country.name.toUpperCase().match(inputValue.toUpperCase()) || country.capital.toUpperCase().match(inputValue.toUpperCase())){
      outputs.push(country);
    }
  };
  outputCountries(outputs);
  chartOutput3();
  searchInfoBox.innerHTML = '';
  let searchInfo = document.createElement('span');
  searchInfo.innerText = `${outputs.length} countries satisfied the search criteria`;
  searchInfoBox.appendChild(searchInfo);
})

let worldPopulationArr = [];

for(country of countries){
  worldPopulationArr.push(country.population);
};

let totalPopulation = worldPopulationArr.reduce( (a,b) => {
  return a + b;
},0);

let worldSpokenArr = [];
for(country of countries){
  for(let i = 0; i < country.languages.length;i++){
    worldSpokenArr.push(country.languages[i]);
  };
};

let totalSpoken = worldSpokenArr.length;

let worldPopulation = [{name:'World',population : totalPopulation,populationText : '7,349,137,231'}];

let worldSpoken = [{name : 'World',count : totalSpoken}];

let chartBox = document.createElement('div');

function chartOutput(arr,active){
  for(country of arr){
    let chartOutputBox = document.createElement('div');
    let chartOutputCountry = document.createElement('span');
    let chartOuter = document.createElement('div');
    let chartInner = document.createElement('div');
    let chartResult = document.createElement('span');
    let percentage1 = (country.population / totalPopulation) * 100 ;
    let percentage2 = (country.count / totalSpoken) * 100 ;

    chartOutputBox.style.display = 'flex';
    chartOutputBox.style.margin = '20px';
    chartOutputCountry.innerText = country.name;
    chartOutputCountry.style.width = '150px';
    chartOutputCountry.style.display = 'flex';
    chartOutputCountry.style.alignItems = 'center';
    chartOuter.style.width = '700px'; 
    chartOuter.style.height = '50px';
    chartOuter.style.margin = '0 10px';
    chartOuter.style.position = 'relative';
    
    if(active == 'population'){
      chartInner.style.width = `${percentage1}%`;
      chartResult.innerText = country.populationText;
    }

    if(active == 'languages'){
      chartInner.style.width = `${percentage2}%`;
      chartResult.innerText = country.count;
    }

    chartInner.style.height = '50px';
    chartInner.style.backgroundColor = 'var(--primary)';
    chartResult.style.width = '100px';
    chartResult.style.display = 'flex';
    chartResult.style.alignItems = 'center';

    chartOuter.appendChild(chartInner);
    chartOutputBox.appendChild(chartOutputCountry);
    chartOutputBox.appendChild(chartOuter);
    chartOutputBox.appendChild(chartResult);
    chartBox.appendChild(chartOutputBox);
  }
}

$('.chart-output-box').append(chartBox);

function chartOutput2(arr){
  if($('.population-btn2').hasClass('active')){
    chartBox.innerHTML = '';
    $('.chart-input-text').text('World Population');
    chartOutput(worldPopulation,'population');
    chartOutput(arr,'population');
  }

  if($('.languages-btn2').hasClass('active')){
    chartBox.innerHTML = '';
    $('.chart-input-text').text('World Languages');
    chartOutput(worldSpoken,'languages');
    chartOutput(arr,'languages');
  }
}

function tenMostPopulatedCountries(){
  let tenMostCountries = [];
  let countriesArr = [];
  for(country of countries){
    countriesArr.push(country);
  }
  for(let i = 0;i < 10;i++){
    let num = 0;

    for(country of countriesArr){
      if(country.population > num){
        num = country.population;
      };
    };

    let newCountries = countriesArr.filter( el => el.population !== num);
    let mostPopulatedCountries = countriesArr.filter( el => el.population == num);
    tenMostCountries.push(mostPopulatedCountries[0]);

    countriesArr = newCountries;
  }
  chartOutput2(tenMostCountries);
  $('.chart-input-text').text('10 most populated countries in the world');
}

tenMostPopulatedCountries();

let languagesCount = function(arr){
  let languagesArr = [];
  for(country of arr){
    for(let i = 0; i < country.languages.length;i++){
      languagesArr.push(country.languages[i]);
    };
  };
  let newLanguagesArr = new Set(languagesArr);
  let languagesCount2 = [];
  for(language of newLanguagesArr){
    let languagesCount1 = languagesArr.filter( el => el == language);
    languagesCount2.push({name : languagesCount1[0], count : languagesCount1.length});
  }
  return(languagesCount2);
}

function tenMostSpokenLanguages(){
  let languagesCount2 = languagesCount(countries);
  let tenMostLanguages = [];
  
  for(let j = 0;j < 10;j++){
    let num = 0;
    for(language of languagesCount2){
      if(language.count > num){
        num = language.count;
      }
    };
    let newLanguages = languagesCount2.filter( el => el.count !== num); 
    let mostSpokenLanguages = languagesCount2.filter( el => el.count == num);
    tenMostLanguages.push(mostSpokenLanguages[0]);

    languagesCount2 = newLanguages;
  }
  chartOutput2(tenMostLanguages);
  console.log(languagesCount2);
  $('.chart-input-text').text('10 most spoken languages in the world');
}

function chartOutput3(){
  if(outputs.length == 250){
    if($('.population-btn2').hasClass('active')){
      tenMostPopulatedCountries();
    }else{
      tenMostSpokenLanguages();
    }
  }else{
    if($('.population-btn2').hasClass('active')){
      chartOutput2(outputs);
    }else{
      chartOutput2(languagesCount(outputs));
    };
  };
}

$('.btn2').click( () => {
  $('.btn2').toggleClass('active');
  chartOutput3();
});

$('.population-btn2').click( () => {
  $('.population-btn2').addClass('active');
  $('.languages-btn2').removeClass('active');
  chartOutput3();
});

$('.languages-btn2').click( () => {
  $('.languages-btn2').addClass('active');
  $('.population-btn2').removeClass('active');
  chartOutput3();
});
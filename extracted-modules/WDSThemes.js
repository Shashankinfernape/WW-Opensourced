__d("WDSThemes", [], function(t, n, r, o, a, i, l) {
    "use strict";
    const On = "@media (prefers-color-scheme: dark)";
    const Bn = {
        blackAlpha05: "rgba(0, 0, 0, 0.05)",
        blackAlpha10: "rgba(0, 0, 0, 0.1)",
        blackAlpha20: "rgba(0, 0, 0, 0.2)",
        blackAlpha30: "rgba(0, 0, 0, 0.3)",
        blackAlpha40: "rgba(0, 0, 0, 0.4)",
        blackAlpha50: "rgba(0, 0, 0, 0.5)",
        blackAlpha60: "rgba(0, 0, 0, 0.6)",
        blackAlpha70: "rgba(0, 0, 0, 0.7)",
        blackAlpha80: "rgba(0, 0, 0, 0.8)",
        blackAlpha90: "rgba(0, 0, 0, 0.9)",
        blackOpaque: "#000000",
        brown100: "#F4DED1",
        brown1000: "#090706",
        brown150: "#EDD2C2",
        brown200: "#E5C6B2",
        brown250: "#E0B69C",
        brown300: "#DBA685",
        brown350: "#CE9571",
        brown400: "#C0835D",
        brown450: "#AE7555",
        brown50: "#FEF9F6",
        brown500: "#9E6947",
        brown550: "#925F40",
        brown600: "#855538",
        brown650: "#704931",
        brown700: "#5B3C29",
        brown75: "#FCEDE3",
        brown750: "#483224",
        brown800: "#35271E",
        brown850: "#2A1F18",
        brown900: "#1F1712",
        brown950: "#140F0C",
        cobalt100: "#D2E8FE",
        cobalt1000: "#040D16",
        cobalt150: "#B6D9FE",
        cobalt200: "#99CAFE",
        cobalt250: "#76B8FE",
        cobalt300: "#53A6FD",
        cobalt350: "#2A91FD",
        cobalt400: "#007BFC",
        cobalt450: "#006FE4",
        cobalt50: "#F2F8FF",
        cobalt500: "#0063CB",
        cobalt550: "#025AB7",
        cobalt600: "#0451A3",
        cobalt650: "#06478D",
        cobalt700: "#073D76",
        cobalt75: "#E1F0FF",
        cobalt750: "#08325C",
        cobalt800: "#092642",
        cobalt850: "#082037",
        cobalt900: "#071A2C",
        cobalt950: "#051321",
        coolGray100: "#EAEDEE",
        coolGray1000: "#0A1014",
        coolGray150: "#DFE2E3",
        coolGray200: "#D4D6D8",
        coolGray250: "#C4C8CB",
        coolGray300: "#B3B9BD",
        coolGray350: "#A0A7AB",
        coolGray400: "#8D9599",
        coolGray450: "#7D858A",
        coolGray50: "#F7F8FA",
        coolGray500: "#6C757A",
        coolGray550: "#646C71",
        coolGray600: "#5B6368",
        coolGray650: "#4D555B",
        coolGray700: "#3E474D",
        coolGray75: "#F1F2F4",
        coolGray750: "#2F373C",
        coolGray800: "#20272B",
        coolGray850: "#192024",
        coolGray900: "#12181C",
        coolGray950: "#0E1418",
        coolGrayAlpha05: "rgba(17, 27, 33, 0.05)",
        coolGrayAlpha10: "rgba(17, 27, 33, 0.1)",
        coolGrayAlpha20: "rgba(17, 27, 33, 0.2)",
        coolGrayAlpha30: "rgba(17, 27, 33, 0.3)",
        coolGrayAlpha40: "rgba(17, 27, 33, 0.4)",
        coolGrayAlpha50: "rgba(17, 27, 33, 0.5)",
        coolGrayAlpha60: "rgba(17, 27, 33, 0.6)",
        coolGrayAlpha70: "rgba(17, 27, 33, 0.7)",
        coolGrayAlpha80: "rgba(17, 27, 33, 0.8)",
        coolGrayAlpha90: "rgba(17, 27, 33, 0.9)",
        cream100: "#EFE9E0",
        cream1000: "#0E0D0B",
        cream150: "#EAE0D3",
        cream200: "#E5DBCD",
        cream250: "#DDCFBC",
        cream300: "#D4C3AB",
        cream350: "#CBB699",
        cream400: "#C1A886",
        cream450: "#AE9675",
        cream50: "#FAF8F5",
        cream500: "#9F8465",
        cream550: "#876F54",
        cream600: "#7B654C",
        cream650: "#665440",
        cream700: "#504334",
        cream75: "#F5F1EB",
        cream750: "#3E352A",
        cream800: "#2C2720",
        cream850: "#25211B",
        cream900: "#1D1A16",
        cream950: "#161410",
        emerald100: "#D5FDED",
        emerald1000: "#041512",
        emerald150: "#C4F9E4",
        emerald200: "#B2F5DA",
        emerald250: "#96ECCF",
        emerald300: "#7AE3C3",
        emerald350: "#40D9B0",
        emerald400: "#06CF9C",
        emerald450: "#03BC90",
        emerald50: "#F0FFF9",
        emerald500: "#00A884",
        emerald550: "#009477",
        emerald600: "#008069",
        emerald650: "#096E5C",
        emerald700: "#125C4E",
        emerald75: "#E1FEF2",
        emerald750: "#0E493D",
        emerald800: "#0A332C",
        emerald850: "#092C26",
        emerald900: "#07241F",
        emerald950: "#061D19",
        green100: "#D9FDD3",
        green1000: "#08120F",
        green150: "#C3FDC0",
        green200: "#ACFCAC",
        green250: "#8FF499",
        green300: "#71EB85",
        green350: "#4BDF76",
        green400: "#25D366",
        green450: "#21C063",
        green50: "#F2FDF0",
        green500: "#1DAA61",
        green500Alpha30: "rgba(29, 170, 97, 0.3)",
        green500Alpha60: "rgba(29, 170, 97, 0.6)",
        green550: "#1C995B",
        green600: "#1B8755",
        green650: "#18744A",
        green700: "#15603E",
        green75: "#E7FCE3",
        green750: "#144D37",
        green800: "#103529",
        green850: "#0E2C23",
        green900: "#0C241C",
        green950: "#0A1B16",
        lemon100: "#FEFACA",
        lemon1000: "#141201",
        lemon150: "#FDF9B7",
        lemon200: "#FDF7A4",
        lemon250: "#FDF691",
        lemon300: "#FDF46B",
        lemon350: "#FDF144",
        lemon400: "#FBEB1E",
        lemon450: "#E6D81B",
        lemon50: "#FEFDF0",
        lemon500: "#D2C419",
        lemon550: "#BDB116",
        lemon600: "#A99E13",
        lemon650: "#948B11",
        lemon700: "#80770E",
        lemon75: "#FEFCDD",
        lemon750: "#6B640C",
        lemon800: "#575109",
        lemon850: "#423E06",
        lemon900: "#2E2A04",
        lemon950: "#211E03",
        lime100: "#E8FFCA",
        lime1000: "#101708",
        lime150: "#E2FFBB",
        lime200: "#DCFFAD",
        lime250: "#D3FBA0",
        lime300: "#CAF792",
        lime350: "#BDF07C",
        lime400: "#AFE966",
        lime450: "#A1D75E",
        lime50: "#F4FEE6",
        lime500: "#93C455",
        lime550: "#85B24D",
        lime600: "#77A045",
        lime650: "#698D3C",
        lime700: "#5C7B34",
        lime75: "#EEFED8",
        lime750: "#4E682B",
        lime800: "#405623",
        lime850: "#32441B",
        lime900: "#243112",
        lime950: "#1A240D",
        neutralGray100: "#EEEEEE",
        neutralGray1000: "#0A0A0A",
        neutralGray150: "#E3E3E3",
        neutralGray200: "#D8D8D8",
        neutralGray250: "#CBCBCB",
        neutralGray300: "#BDBDBD",
        neutralGray350: "#A8A8A8",
        neutralGray400: "#959393",
        neutralGray450: "#858586",
        neutralGray50: "#FAFAFA",
        neutralGray500: "#757778",
        neutralGray550: "#6A6C6C",
        neutralGray600: "#606263",
        neutralGray650: "#535555",
        neutralGray700: "#424445",
        neutralGray75: "#F4F4F4",
        neutralGray750: "#333536",
        neutralGray800: "#242626",
        neutralGray850: "#1D1F1F",
        neutralGray900: "#161717",
        neutralGray950: "#101111",
        olive100: "#EEF4BE",
        olive1000: "#111307",
        olive150: "#E8EFAD",
        olive200: "#E1E99B",
        olive250: "#DBE48A",
        olive300: "#D4DF78",
        olive350: "#CCD86A",
        olive400: "#C3D05B",
        olive450: "#A5B337",
        olive50: "#FBFEE1",
        olive500: "#98A433",
        olive550: "#8A962E",
        olive600: "#7D872A",
        olive650: "#6F7926",
        olive700: "#626A21",
        olive75: "#F5F9D0",
        olive750: "#545C1D",
        olive800: "#474D18",
        olive850: "#393F14",
        olive900: "#2C3010",
        olive950: "#1E220B",
        orange100: "#FEE2D8",
        orange1000: "#0C0908",
        orange150: "#FED2C3",
        orange200: "#FDC1AD",
        orange250: "#FDAC91",
        orange300: "#FC9775",
        orange350: "#FB7E54",
        orange400: "#FA6533",
        orange450: "#DF5C30",
        orange50: "#FFF7F5",
        orange500: "#C4532D",
        orange550: "#AF4C2B",
        orange600: "#9A4529",
        orange650: "#833D27",
        orange700: "#6B3424",
        orange75: "#FFEBE6",
        orange750: "#502B21",
        orange800: "#35221E",
        orange850: "#2B1C19",
        orange900: "#211613",
        orange950: "#160F0E",
        pink100: "#FFDAE7",
        pink1000: "#090608",
        pink150: "#FFC3D7",
        pink200: "#FFABC7",
        pink250: "#FF8FB4",
        pink300: "#FF72A1",
        pink350: "#FF508B",
        pink400: "#FF2E74",
        pink450: "#EA2C6D",
        pink50: "#FFF5F8",
        pink500: "#D42A66",
        pink550: "#BC285D",
        pink600: "#A32553",
        pink650: "#882249",
        pink700: "#6D1E3E",
        pink75: "#FFEBF1",
        pink750: "#521C34",
        pink800: "#36192A",
        pink850: "#2B1422",
        pink900: "#201019",
        pink950: "#140B11",
        plum100: "#FDCCFF",
        plum1000: "#0E0311",
        plum150: "#FDBFFF",
        plum200: "#FCB3FF",
        plum250: "#FBA6FF",
        plum300: "#E78CED",
        plum350: "#E074E8",
        plum400: "#C15ADD",
        plum450: "#B53FD6",
        plum50: "#FFE5FF",
        plum500: "#A924CE",
        plum550: "#9223B1",
        plum600: "#7A2394",
        plum650: "#632277",
        plum700: "#4B215A",
        plum75: "#FFDBFF",
        plum750: "#430D52",
        plum800: "#371341",
        plum850: "#2B1830",
        plum900: "#27162C",
        plum950: "#1B0D1F",
        purple100: "#E8E0FF",
        purple1000: "#0F0F1A",
        purple150: "#DDD2FF",
        purple200: "#D1C4FF",
        purple250: "#BCABFF",
        purple300: "#A791FF",
        purple350: "#937CFF",
        purple400: "#7F66FF",
        purple450: "#6F57EF",
        purple50: "#F7F5FF",
        purple500: "#5E47DE",
        purple550: "#533FC7",
        purple600: "#4837AF",
        purple650: "#413595",
        purple700: "#3A327B",
        purple75: "#EFEBFF",
        purple750: "#2F2B61",
        purple800: "#242447",
        purple850: "#1F1F3C",
        purple900: "#1A1A31",
        purple950: "#141425",
        red100: "#FBD8DC",
        red1000: "#10090D",
        red150: "#FBB9C0",
        red200: "#FA99A4",
        red250: "#FB7583",
        red300: "#FB5061",
        red350: "#F3284D",
        red400: "#EA0038",
        red400Alpha30: "rgba(234, 0, 56, 0.3)",
        red450: "#D10335",
        red50: "#FEEFF2",
        red500: "#B80531",
        red550: "#A50D33",
        red600: "#911435",
        red650: "#791632",
        red700: "#61182E",
        red75: "#FDE8EB",
        red750: "#4A1728",
        red800: "#321622",
        red850: "#2A131D",
        red900: "#211018",
        red950: "#190C12",
        skyBlue100: "#CAECFA",
        skyBlue1000: "#030D12",
        skyBlue150: "#AFE2F8",
        skyBlue200: "#93D7F5",
        skyBlue250: "#73CAF0",
        skyBlue300: "#53BDEB",
        skyBlue350: "#2AADE7",
        skyBlue400: "#009DE2",
        skyBlue450: "#018ECC",
        skyBlue50: "#F2FAFE",
        skyBlue500: "#027EB5",
        skyBlue550: "#0372A4",
        skyBlue600: "#046692",
        skyBlue650: "#06597E",
        skyBlue700: "#074B6A",
        skyBlue75: "#DEF3FC",
        skyBlue750: "#083C54",
        skyBlue800: "#092C3D",
        skyBlue850: "#082432",
        skyBlue900: "#061D28",
        skyBlue950: "#05151D",
        sunset100: "#FFDBCC",
        sunset1000: "#0B0504",
        sunset150: "#FFC1B3",
        sunset200: "#FFA799",
        sunset250: "#FF7A66",
        sunset300: "#FF553B",
        sunset350: "#E5381D",
        sunset400: "#CB2910",
        sunset450: "#B52610",
        sunset50: "#FDEAE7",
        sunset500: "#A0220F",
        sunset550: "#8A1F0F",
        sunset600: "#801100",
        sunset650: "#660E00",
        sunset700: "#57140A",
        sunset75: "#FEE3DA",
        sunset750: "#48120A",
        sunset800: "#38100A",
        sunset850: "#290E0A",
        sunset900: "#1F0B08",
        sunset950: "#150806",
        teal100: "#CBF2EE",
        teal1000: "#051415",
        teal150: "#B0E7E1",
        teal200: "#95DBD4",
        teal250: "#6CD1C6",
        teal300: "#42C7B8",
        teal350: "#22B7A8",
        teal400: "#02A698",
        teal450: "#029588",
        teal50: "#EDFAFA",
        teal500: "#028377",
        teal550: "#03776D",
        teal600: "#046A62",
        teal650: "#065C56",
        teal700: "#074D4A",
        teal75: "#DFF6F5",
        teal750: "#083D3D",
        teal800: "#092D2F",
        teal850: "#082729",
        teal900: "#072122",
        teal950: "#061A1C",
        transparent: "transparent",
        warmGray100: "#F1EEEB",
        warmGray1000: "#0B0A0A",
        warmGray150: "#E6E3E0",
        warmGray200: "#DBD8D4",
        warmGray250: "#CFCBC6",
        warmGray300: "#C2BDB8",
        warmGray300Alpha15: "rgba(194, 189, 184, 0.15)",
        warmGray350: "#B1ABA5",
        warmGray400: "#9F9891",
        warmGray450: "#8E8881",
        warmGray50: "#FBFAF9",
        warmGray500: "#7C7771",
        warmGray550: "#716D67",
        warmGray600: "#66625D",
        warmGray650: "#57534F",
        warmGray700: "#474440",
        warmGray75: "#F7F5F3",
        warmGray750: "#373532",
        warmGray800: "#262524",
        warmGray850: "#1F1E1D",
        warmGray900: "#171616",
        warmGray950: "#111010",
        whiteAlpha05: "rgba(255, 255, 255, 0.05)",
        whiteAlpha10: "rgba(255, 255, 255, 0.1)",
        whiteAlpha20: "rgba(255, 255, 255, 0.2)",
        whiteAlpha30: "rgba(255, 255, 255, 0.3)",
        whiteAlpha40: "rgba(255, 255, 255, 0.4)",
        whiteAlpha50: "rgba(255, 255, 255, 0.5)",
        whiteAlpha60: "rgba(255, 255, 255, 0.6)",
        whiteAlpha70: "rgba(255, 255, 255, 0.7)",
        whiteAlpha80: "rgba(255, 255, 255, 0.8)",
        whiteAlpha90: "rgba(255, 255, 255, 0.9)",
        whiteOpaque: "#FFFFFF",
        yellow100: "#FFF0D4",
        yellow1000: "#13100C",
        yellow150: "#FFEAC2",
        yellow200: "#FFE4AF",
        yellow250: "#FFDB94",
        yellow300: "#FFD279",
        yellow350: "#FFC659",
        yellow400: "#FFB938",
        yellow450: "#E8A12E",
        yellow50: "#FFFCF5",
        yellow500: "#C58730",
        yellow550: "#B77B28",
        yellow600: "#9D6C2C",
        yellow650: "#855D29",
        yellow700: "#6D4E26",
        yellow75: "#FFF7E5",
        yellow750: "#523D23",
        yellow800: "#362C1F",
        yellow850: "#2D251A",
        yellow900: "#251E16",
        yellow950: "#1C1711"
    };
    const Wn = {
        black: "0, 0, 0",
        brown100: "244, 222, 209",
        brown1000: "9, 7, 6",
        brown150: "237, 210, 194",
        brown200: "229, 198, 178",
        brown250: "224, 182, 156",
        brown300: "219, 166, 133",
        brown350: "206, 149, 113",
        brown400: "192, 131, 93",
        brown450: "174, 117, 85",
        brown50: "254, 249, 246",
        brown500: "158, 105, 71",
        brown550: "146, 95, 64",
        brown600: "133, 85, 56",
        brown650: "112, 73, 49",
        brown700: "91, 60, 41",
        brown75: "252, 237, 227",
        brown750: "72, 50, 36",
        brown800: "53, 39, 30",
        brown850: "42, 31, 24",
        brown900: "31, 23, 18",
        brown950: "20, 15, 12",
        cobalt100: "210, 232, 254",
        cobalt1000: "4, 13, 22",
        cobalt150: "182, 217, 254",
        cobalt200: "153, 202, 254",
        cobalt250: "118, 184, 254",
        cobalt300: "83, 166, 253",
        cobalt350: "42, 145, 253",
        cobalt400: "0, 123, 252",
        cobalt450: "0, 111, 228",
        cobalt50: "242, 248, 255",
        cobalt500: "0, 99, 203",
        cobalt550: "2, 90, 183",
        cobalt600: "4, 81, 163",
        cobalt650: "6, 71, 141",
        cobalt700: "7, 61, 118",
        cobalt75: "225, 240, 255",
        cobalt750: "8, 50, 92",
        cobalt800: "9, 38, 66",
        cobalt850: "8, 32, 55",
        cobalt900: "7, 26, 44",
        cobalt950: "5, 19, 33",
        coolGray100: "234, 237, 238",
        coolGray1000: "10, 16, 20",
        coolGray150: "223, 226, 227",
        coolGray200: "212, 214, 216",
        coolGray250: "196, 200, 203",
        coolGray300: "179, 185, 189",
        coolGray350: "160, 167, 171",
        coolGray400: "141, 149, 153",
        coolGray450: "125, 133, 138",
        coolGray50: "247, 248, 250",
        coolGray500: "108, 117, 122",
        coolGray550: "100, 108, 113",
        coolGray600: "91, 99, 104",
        coolGray650: "77, 85, 91",
        coolGray700: "62, 71, 77",
        coolGray75: "241, 242, 244",
        coolGray750: "47, 55, 60",
        coolGray800: "32, 39, 43",
        coolGray850: "25, 32, 36",
        coolGray900: "18, 24, 28",
        coolGray950: "14, 20, 24",
        coolGrayBase: "17, 27, 33",
        cream100: "239, 233, 224",
        cream1000: "14, 13, 11",
        cream150: "234, 224, 211",
        cream200: "229, 219, 205",
        cream250: "221, 207, 188",
        cream300: "212, 195, 171",
        cream350: "203, 182, 153",
        cream400: "193, 168, 134",
        cream450: "174, 150, 117",
        cream50: "250, 248, 245",
        cream500: "159, 132, 101",
        cream550: "135, 111, 84",
        cream600: "123, 101, 76",
        cream650: "102, 84, 64",
        cream700: "80, 67, 52",
        cream75: "245, 241, 235",
        cream750: "62, 53, 42",
        cream800: "44, 39, 32",
        cream850: "37, 33, 27",
        cream900: "29, 26, 22",
        cream950: "22, 20, 16",
        emerald100: "213, 253, 237",
        emerald1000: "4, 21, 18",
        emerald150: "196, 249, 228",
        emerald200: "178, 245, 218",
        emerald250: "150, 236, 207",
        emerald300: "122, 227, 195",
        emerald350: "64, 217, 176",
        emerald400: "6, 207, 156",
        emerald450: "3, 188, 144",
        emerald50: "240, 255, 249",
        emerald500: "0, 168, 132",
        emerald550: "0, 148, 119",
        emerald600: "0, 128, 105",
        emerald650: "9, 110, 92",
        emerald700: "18, 92, 78",
        emerald75: "225, 254, 242",
        emerald750: "14, 73, 61",
        emerald800: "10, 51, 44",
        emerald850: "9, 44, 38",
        emerald900: "7, 36, 31",
        emerald950: "6, 29, 25",
        green100: "217, 253, 211",
        green1000: "8, 18, 15",
        green150: "195, 253, 192",
        green200: "172, 252, 172",
        green250: "143, 244, 153",
        green300: "113, 235, 133",
        green350: "75, 223, 118",
        green400: "37, 211, 102",
        green450: "33, 192, 99",
        green50: "242, 253, 240",
        green500: "29, 170, 97",
        green550: "28, 153, 91",
        green600: "27, 135, 85",
        green650: "24, 116, 74",
        green700: "21, 96, 62",
        green75: "231, 252, 227",
        green750: "20, 77, 55",
        green800: "16, 53, 41",
        green850: "14, 44, 35",
        green900: "12, 36, 28",
        green950: "10, 27, 22",
        lemon100: "254, 250, 202",
        lemon1000: "20, 18, 1",
        lemon150: "253, 249, 183",
        lemon200: "253, 247, 164",
        lemon250: "253, 246, 145",
        lemon300: "253, 244, 107",
        lemon350: "253, 241, 68",
        lemon400: "251, 235, 30",
        lemon450: "230, 216, 27",
        lemon50: "254, 253, 240",
        lemon500: "210, 196, 25",
        lemon550: "189, 177, 22",
        lemon600: "169, 158, 19",
        lemon650: "148, 139, 17",
        lemon700: "128, 119, 14",
        lemon75: "254, 252, 221",
        lemon750: "107, 100, 12",
        lemon800: "87, 81, 9",
        lemon850: "66, 62, 6",
        lemon900: "46, 42, 4",
        lemon950: "33, 30, 3",
        lime100: "232, 255, 202",
        lime1000: "16, 23, 8",
        lime150: "226, 255, 187",
        lime200: "220, 255, 173",
        lime250: "211, 251, 160",
        lime300: "202, 247, 146",
        lime350: "189, 240, 124",
        lime400: "175, 233, 102",
        lime450: "161, 215, 94",
        lime50: "244, 254, 230",
        lime500: "147, 196, 85",
        lime550: "133, 178, 77",
        lime600: "119, 160, 69",
        lime650: "105, 141, 60",
        lime700: "92, 123, 52",
        lime75: "238, 254, 216",
        lime750: "78, 104, 43",
        lime800: "64, 86, 35",
        lime850: "50, 68, 27",
        lime900: "36, 49, 18",
        lime950: "26, 36, 13",
        neutralGray100: "238, 238, 238",
        neutralGray1000: "10, 10, 10",
        neutralGray150: "227, 227, 227",
        neutralGray200: "216, 216, 216",
        neutralGray250: "203, 203, 203",
        neutralGray300: "189, 189, 189",
        neutralGray350: "168, 168, 168",
        neutralGray400: "149, 147, 147",
        neutralGray450: "133, 133, 134",
        neutralGray50: "250, 250, 250",
        neutralGray500: "117, 119, 120",
        neutralGray550: "106, 108, 108",
        neutralGray600: "96, 98, 99",
        neutralGray650: "83, 85, 85",
        neutralGray700: "66, 68, 69",
        neutralGray75: "244, 244, 244",
        neutralGray750: "51, 53, 54",
        neutralGray800: "36, 38, 38",
        neutralGray850: "29, 31, 31",
        neutralGray900: "22, 23, 23",
        neutralGray950: "16, 17, 17",
        olive100: "238, 244, 190",
        olive1000: "17, 19, 7",
        olive150: "232, 239, 173",
        olive200: "225, 233, 155",
        olive250: "219, 228, 138",
        olive300: "212, 223, 120",
        olive350: "204, 216, 106",
        olive400: "195, 208, 91",
        olive450: "165, 179, 55",
        olive50: "251, 254, 225",
        olive500: "152, 164, 51",
        olive550: "138, 150, 46",
        olive600: "125, 135, 42",
        olive650: "111, 121, 38",
        olive700: "98, 106, 33",
        olive75: "245, 249, 208",
        olive750: "84, 92, 29",
        olive800: "71, 77, 24",
        olive850: "57, 63, 20",
        olive900: "44, 48, 16",
        olive950: "30, 34, 11",
        orange100: "254, 226, 216",
        orange1000: "12, 9, 8",
        orange150: "254, 210, 195",
        orange200: "253, 193, 173",
        orange250: "253, 172, 145",
        orange300: "252, 151, 117",
        orange350: "251, 126, 84",
        orange400: "250, 101, 51",
        orange450: "223, 92, 48",
        orange50: "255, 247, 245",
        orange500: "196, 83, 45",
        orange550: "175, 76, 43",
        orange600: "154, 69, 41",
        orange650: "131, 61, 39",
        orange700: "107, 52, 36",
        orange75: "255, 235, 230",
        orange750: "80, 43, 33",
        orange800: "53, 34, 30",
        orange850: "43, 28, 25",
        orange900: "33, 22, 19",
        orange950: "22, 15, 14",
        pink100: "255, 218, 231",
        pink1000: "9, 6, 8",
        pink150: "255, 195, 215",
        pink200: "255, 171, 199",
        pink250: "255, 143, 180",
        pink300: "255, 114, 161",
        pink350: "255, 80, 139",
        pink400: "255, 46, 116",
        pink450: "234, 44, 109",
        pink50: "255, 245, 248",
        pink500: "212, 42, 102",
        pink550: "188, 40, 93",
        pink600: "163, 37, 83",
        pink650: "136, 34, 73",
        pink700: "109, 30, 62",
        pink75: "255, 235, 241",
        pink750: "82, 28, 52",
        pink800: "54, 25, 42",
        pink850: "43, 20, 34",
        pink900: "32, 16, 25",
        pink950: "20, 11, 17",
        plum100: "253, 204, 255",
        plum1000: "14, 3, 17",
        plum150: "253, 191, 255",
        plum200: "252, 179, 255",
        plum250: "251, 166, 255",
        plum300: "231, 140, 237",
        plum350: "224, 116, 232",
        plum400: "193, 90, 221",
        plum450: "181, 63, 214",
        plum50: "255, 229, 255",
        plum500: "169, 36, 206",
        plum550: "146, 35, 177",
        plum600: "122, 35, 148",
        plum650: "99, 34, 119",
        plum700: "75, 33, 90",
        plum75: "255, 219, 255",
        plum750: "67, 13, 82",
        plum800: "55, 19, 65",
        plum850: "43, 24, 48",
        plum900: "39, 22, 44",
        plum950: "27, 13, 31",
        purple100: "232, 224, 255",
        purple1000: "15, 15, 26",
        purple150: "221, 210, 255",
        purple200: "209, 196, 255",
        purple250: "188, 171, 255",
        purple300: "167, 145, 255",
        purple350: "147, 124, 255",
        purple400: "127, 102, 255",
        purple450: "111, 87, 239",
        purple50: "247, 245, 255",
        purple500: "94, 71, 222",
        purple550: "83, 63, 199",
        purple600: "72, 55, 175",
        purple650: "65, 53, 149",
        purple700: "58, 50, 123",
        purple75: "239, 235, 255",
        purple750: "47, 43, 97",
        purple800: "36, 36, 71",
        purple850: "31, 31, 60",
        purple900: "26, 26, 49",
        purple950: "20, 20, 37",
        red100: "251, 216, 220",
        red1000: "16, 9, 13",
        red150: "251, 185, 192",
        red200: "250, 153, 164",
        red250: "251, 117, 131",
        red300: "251, 80, 97",
        red350: "243, 40, 77",
        red400: "234, 0, 56",
        red450: "209, 3, 53",
        red50: "254, 239, 242",
        red500: "184, 5, 49",
        red550: "165, 13, 51",
        red600: "145, 20, 53",
        red650: "121, 22, 50",
        red700: "97, 24, 46",
        red75: "253, 232, 235",
        red750: "74, 23, 40",
        red800: "50, 22, 34",
        red850: "42, 19, 29",
        red900: "33, 16, 24",
        red950: "25, 12, 18",
        skyBlue100: "202, 236, 250",
        skyBlue1000: "3, 13, 18",
        skyBlue150: "175, 226, 248",
        skyBlue200: "147, 215, 245",
        skyBlue250: "115, 202, 240",
        skyBlue300: "83, 189, 235",
        skyBlue350: "42, 173, 231",
        skyBlue400: "0, 157, 226",
        skyBlue450: "1, 142, 204",
        skyBlue50: "242, 250, 254",
        skyBlue500: "2, 126, 181",
        skyBlue550: "3, 114, 164",
        skyBlue600: "4, 102, 146",
        skyBlue650: "6, 89, 126",
        skyBlue700: "7, 75, 106",
        skyBlue75: "222, 243, 252",
        skyBlue750: "8, 60, 84",
        skyBlue800: "9, 44, 61",
        skyBlue850: "8, 36, 50",
        skyBlue900: "6, 29, 40",
        skyBlue950: "5, 21, 29",
        sunset100: "255, 219, 204",
        sunset1000: "11, 5, 4",
        sunset150: "255, 193, 179",
        sunset200: "255, 167, 153",
        sunset250: "255, 122, 102",
        sunset300: "255, 85, 59",
        sunset350: "229, 56, 29",
        sunset400: "203, 41, 16",
        sunset450: "181, 38, 16",
        sunset50: "253, 234, 231",
        sunset500: "160, 34, 15",
        sunset550: "138, 31, 15",
        sunset600: "128, 17, 0",
        sunset650: "102, 14, 0",
        sunset700: "87, 20, 10",
        sunset75: "254, 227, 218",
        sunset750: "72, 18, 10",
        sunset800: "56, 16, 10",
        sunset850: "41, 14, 10",
        sunset900: "31, 11, 8",
        sunset950: "21, 8, 6",
        teal100: "203, 242, 238",
        teal1000: "5, 20, 21",
        teal150: "176, 231, 225",
        teal200: "149, 219, 212",
        teal250: "108, 209, 198",
        teal300: "66, 199, 184",
        teal350: "34, 183, 168",
        teal400: "2, 166, 152",
        teal450: "2, 149, 136",
        teal50: "237, 250, 250",
        teal500: "2, 131, 119",
        teal550: "3, 119, 109",
        teal600: "4, 106, 98",
        teal650: "6, 92, 86",
        teal700: "7, 77, 74",
        teal75: "223, 246, 245",
        teal750: "8, 61, 61",
        teal800: "9, 45, 47",
        teal850: "8, 39, 41",
        teal900: "7, 33, 34",
        teal950: "6, 26, 28",
        warmGray100: "241, 238, 235",
        warmGray1000: "11, 10, 10",
        warmGray150: "230, 227, 224",
        warmGray200: "219, 216, 212",
        warmGray250: "207, 203, 198",
        warmGray300: "194, 189, 184",
        warmGray350: "177, 171, 165",
        warmGray400: "159, 152, 145",
        warmGray450: "142, 136, 129",
        warmGray50: "251, 250, 249",
        warmGray500: "124, 119, 113",
        warmGray550: "113, 109, 103",
        warmGray600: "102, 98, 93",
        warmGray650: "87, 83, 79",
        warmGray700: "71, 68, 64",
        warmGray75: "247, 245, 243",
        warmGray750: "55, 53, 50",
        warmGray800: "38, 37, 36",
        warmGray850: "31, 30, 29",
        warmGray900: "23, 22, 22",
        warmGray950: "17, 16, 16",
        white: "255, 255, 255",
        yellow100: "255, 240, 212",
        yellow1000: "19, 16, 12",
        yellow150: "255, 234, 194",
        yellow200: "255, 228, 175",
        yellow250: "255, 219, 148",
        yellow300: "255, 210, 121",
        yellow350: "255, 198, 89",
        yellow400: "255, 185, 56",
        yellow450: "232, 161, 46",
        yellow50: "255, 252, 245",
        yellow500: "197, 135, 48",
        yellow550: "183, 123, 40",
        yellow600: "157, 108, 44",
        yellow650: "133, 93, 41",
        yellow700: "109, 78, 38",
        yellow75: "255, 247, 229",
        yellow750: "82, 61, 35",
        yellow800: "54, 44, 31",
        yellow850: "45, 37, 26",
        yellow900: "37, 30, 22",
        yellow950: "28, 23, 17"
    };
    const qn = {
        spacingQuarter: {
            [On]: "2px",
            default: "2px"
        },
        spacingHalf: {
            [On]: "4px",
            default: "4px"
        },
        spacingSingle: {
            [On]: "8px",
            default: "8px"
        },
        spacingSinglePlus: {
            [On]: "12px",
            default: "12px"
        },
        spacingDouble: {
            [On]: "16px",
            default: "16px"
        },
        spacingDoublePlus: {
            [On]: "20px",
            default: "20px"
        },
        spacingTriple: {
            [On]: "24px",
            default: "24px"
        },
        spacingTriplePlus: {
            [On]: "28px",
            default: "28px"
        },
        spacingQuad: {
            [On]: "32px",
            default: "32px"
        },
        spacingQuint: {
            [On]: "40px",
            default: "40px"
        }
    };
    const Un = {
        borderRadiusCircle: {
            [On]: "9999px",
            default: "9999px"
        },
        borderRadiusTriplePlus: {
            [On]: "28px",
            default: "28px"
        },
        borderRadiusTriple: {
            [On]: "24px",
            default: "24px"
        },
        borderRadiusDouble: {
            [On]: "16px",
            default: "16px"
        },
        borderRadiusSinglePlus: {
            [On]: "12px",
            default: "12px"
        },
        borderRadiusSingle: {
            [On]: "8px",
            default: "8px"
        },
        borderRadiusHalfPlus: {
            [On]: "6px",
            default: "6px"
        },
        borderRadiusHalf: {
            [On]: "4px",
            default: "4px"
        },
        borderRadiusNone: {
            [On]: "0px",
            default: "0px"
        }
    };
    const Vn = {
        popoverShadow: {
            [On]: "0 12px 16px -4px rgb(10 10 10 / 0.1)",
            default: "0 12px 16px -4px rgb(10 10 10 / 0.1)"
        }
    };
    const Hn = babelHelpers.extends({}, qn, Un, Vn, {
        "--WDS-accent": {
            [On]: Bn.green450,
            default: Bn.green500
        },
        "--WDS-accent-deemphasized": {
            [On]: Bn.green800,
            default: Bn.green100
        },
        "--WDS-accent-deemphasized-RGB": {
            [On]: Wn.green800,
            default: Wn.green100
        },
        "--WDS-accent-emphasized": {
            [On]: Bn.green100,
            default: Bn.green700
        },
        "--WDS-accent-emphasized-RGB": {
            [On]: Wn.green100,
            default: Wn.green700
        },
        "--WDS-accent-RGB": {
            [On]: Wn.green450,
            default: Wn.green500
        },
        "--WDS-background-dimmer": {
            [On]: "rgb(0, 0, 0, 0.32)",
            default: "rgb(0, 0, 0, 0.32)"
        },
        "--WDS-background-dimmer-RGB": {
            [On]: Bn.green450,
            default: Bn.green500
        },
        "--WDS-background-elevated-wash-inset": {
            [On]: Bn.neutralGray850,
            default: Bn.warmGray75
        },
        "--WDS-background-elevated-wash-inset-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.warmGray75
        },
        "--WDS-background-elevated-wash-plain": {
            [On]: Bn.neutralGray850,
            default: Bn.whiteOpaque
        },
        "--WDS-background-elevated-wash-plain-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.white
        },
        "--WDS-background-wash-inset": {
            [On]: Bn.neutralGray900,
            default: Bn.warmGray75
        },
        "--WDS-background-wash-inset-RGB": {
            [On]: Wn.neutralGray900,
            default: Wn.warmGray75
        },
        "--WDS-background-wash-plain": {
            [On]: Bn.neutralGray900,
            default: Bn.whiteOpaque
        },
        "--WDS-background-wash-plain-RGB": {
            [On]: Wn.neutralGray900,
            default: Wn.white
        },
        "--WDS-components-active-list-row": {
            [On]: Bn.whiteAlpha10,
            default: Bn.warmGray300Alpha15
        },
        "--WDS-components-active-list-row-RGB": {
            [On]: Wn.white,
            default: Wn.warmGray300
        },
        "--WDS-components-filter-surface-selected": {
            [On]: Bn.green800,
            default: Bn.green100
        },
        "--WDS-components-filter-surface-selected-RGB": {
            [On]: Wn.green800,
            default: Wn.green100
        },
        "--WDS-components-outline-profile-photo": {
            [On]: Bn.whiteAlpha10,
            default: Bn.blackAlpha10
        },
        "--WDS-components-outline-profile-photo-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-components-profile-photo-content-brown": {
            [On]: Bn.brown300,
            default: Bn.brown600
        },
        "--WDS-components-profile-photo-content-brown-RGB": {
            [On]: Wn.brown300,
            default: Wn.brown600
        },
        "--WDS-components-profile-photo-content-cobalt": {
            [On]: Bn.cobalt300,
            default: Bn.cobalt500
        },
        "--WDS-components-profile-photo-content-cobalt-RGB": {
            [On]: Wn.cobalt300,
            default: Wn.cobalt500
        },
        "--WDS-components-profile-photo-content-green": {
            [On]: Bn.green400,
            default: Bn.green600
        },
        "--WDS-components-profile-photo-content-green-RGB": {
            [On]: Wn.green400,
            default: Wn.green600
        },
        "--WDS-components-profile-photo-content-gray": {
            [On]: Bn.neutralGray300,
            default: Bn.neutralGray500
        },
        "--WDS-components-profile-photo-content-gray-RGB": {
            [On]: Wn.neutralGray300,
            default: Wn.neutralGray500
        },
        "--WDS-components-profile-photo-content-purple": {
            [On]: Bn.purple300,
            default: Bn.purple500
        },
        "--WDS-components-profile-photo-content-purple-RGB": {
            [On]: Wn.purple300,
            default: Wn.purple500
        },
        "--WDS-components-profile-photo-content-orange": {
            [On]: Bn.orange300,
            default: Bn.orange500
        },
        "--WDS-components-profile-photo-content-orange-RGB": {
            [On]: Wn.orange300,
            default: Wn.orange500
        },
        "--WDS-components-profile-photo-content-pink": {
            [On]: Bn.pink300,
            default: Bn.pink500
        },
        "--WDS-components-profile-photo-content-pink-RGB": {
            [On]: Wn.pink300,
            default: Wn.pink500
        },
        "--WDS-components-profile-photo-content-red": {
            [On]: Bn.red300,
            default: Bn.red500
        },
        "--WDS-components-profile-photo-content-red-RGB": {
            [On]: Wn.red300,
            default: Wn.red500
        },
        "--WDS-components-profile-photo-content-sky-blue": {
            [On]: Bn.skyBlue300,
            default: Bn.skyBlue500
        },
        "--WDS-components-profile-photo-content-sky-blue-RGB": {
            [On]: Wn.skyBlue300,
            default: Wn.skyBlue500
        },
        "--WDS-components-profile-photo-content-teal": {
            [On]: Bn.teal300,
            default: Bn.teal500
        },
        "--WDS-components-profile-photo-content-teal-RGB": {
            [On]: Wn.teal300,
            default: Wn.teal500
        },
        "--WDS-components-profile-photo-content-yellow": {
            [On]: Bn.yellow300,
            default: Bn.yellow600
        },
        "--WDS-components-profile-photo-content-yellow-RGB": {
            [On]: Wn.yellow300,
            default: Wn.yellow600
        },
        "--WDS-components-profile-photo-surface-brown": {
            [On]: Bn.brown800,
            default: Bn.brown100
        },
        "--WDS-components-profile-photo-surface-brown-RGB": {
            [On]: Wn.brown800,
            default: Wn.brown100
        },
        "--WDS-components-profile-photo-surface-cobalt": {
            [On]: Bn.cobalt800,
            default: Bn.cobalt100
        },
        "--WDS-components-profile-photo-surface-cobalt-RGB": {
            [On]: Wn.cobalt800,
            default: Wn.cobalt100
        },
        "--WDS-components-profile-photo-surface-green": {
            [On]: Bn.green800,
            default: Bn.green100
        },
        "--WDS-components-profile-photo-surface-green-RGB": {
            [On]: Wn.green800,
            default: Wn.green100
        },
        "--WDS-components-profile-photo-surface-gray": {
            [On]: Bn.neutralGray800,
            default: Bn.neutralGray100
        },
        "--WDS-components-profile-photo-surface-gray-RGB": {
            [On]: Wn.neutralGray800,
            default: Wn.neutralGray100
        },
        "--WDS-components-profile-photo-surface-purple": {
            [On]: Bn.purple800,
            default: Bn.purple100
        },
        "--WDS-components-profile-photo-surface-purple-RGB": {
            [On]: Wn.purple800,
            default: Wn.purple100
        },
        "--WDS-components-profile-photo-surface-orange": {
            [On]: Bn.orange800,
            default: Bn.orange100
        },
        "--WDS-components-profile-photo-surface-orange-RGB": {
            [On]: Wn.orange800,
            default: Wn.orange100
        },
        "--WDS-components-profile-photo-surface-pink": {
            [On]: Bn.pink800,
            default: Bn.pink100
        },
        "--WDS-components-profile-photo-surface-pink-RGB": {
            [On]: Wn.pink800,
            default: Wn.pink100
        },
        "--WDS-components-profile-photo-surface-red": {
            [On]: Bn.red800,
            default: Bn.red100
        },
        "--WDS-components-profile-photo-surface-red-RGB": {
            [On]: Wn.red800,
            default: Wn.red100
        },
        "--WDS-components-profile-photo-surface-sky-blue": {
            [On]: Bn.skyBlue800,
            default: Bn.skyBlue100
        },
        "--WDS-components-profile-photo-surface-sky-blue-RGB": {
            [On]: Wn.skyBlue800,
            default: Wn.skyBlue100
        },
        "--WDS-components-profile-photo-surface-teal": {
            [On]: Bn.teal800,
            default: Bn.teal100
        },
        "--WDS-components-profile-photo-surface-teal-RGB": {
            [On]: Wn.teal800,
            default: Wn.teal100
        },
        "--WDS-components-profile-photo-surface-yellow": {
            [On]: Bn.yellow800,
            default: Bn.yellow100
        },
        "--WDS-components-profile-photo-surface-yellow-RGB": {
            [On]: Wn.yellow800,
            default: Wn.yellow100
        },
        "--WDS-components-profile-photo-status-ring-close-friends": {
            [On]: Bn.plum400,
            default: Bn.plum400
        },
        "--WDS-components-platform-gesture-bar": {
            [On]: Bn.whiteAlpha60,
            default: Bn.blackAlpha50
        },
        "--WDS-components-platform-gesture-bar-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-components-platform-status-bar": {
            [On]: Bn.whiteOpaque,
            default: Bn.blackAlpha80
        },
        "--WDS-components-platform-status-bar-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-components-surface-nav-bar": {
            [On]: Bn.neutralGray850,
            default: Bn.warmGray75
        },
        "--WDS-components-surface-nav-bar-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.warmGray75
        },
        "--WDS-content-action-default": {
            [On]: Bn.neutralGray50,
            default: Bn.neutralGray1000
        },
        "--WDS-content-action-default-RGB": {
            [On]: Wn.neutralGray50,
            default: Wn.neutralGray1000
        },
        "--WDS-content-action-emphasized": {
            [On]: Bn.green450,
            default: Bn.green600
        },
        "--WDS-content-action-emphasized-RGB": {
            [On]: Wn.green450,
            default: Wn.green600
        },
        "--WDS-content-deemphasized": {
            [On]: Bn.whiteAlpha60,
            default: Bn.blackAlpha60
        },
        "--WDS-content-deemphasized-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-content-default": {
            [On]: Bn.neutralGray50,
            default: Bn.neutralGray1000
        },
        "--WDS-content-default-RGB": {
            [On]: Wn.neutralGray50,
            default: Wn.neutralGray1000
        },
        "--WDS-content-disabled": {
            [On]: Bn.neutralGray700,
            default: Bn.neutralGray300
        },
        "--WDS-content-disabled-RGB": {
            [On]: Wn.neutralGray700,
            default: Wn.neutralGray300
        },
        "--WDS-content-external-link": {
            [On]: Bn.green450,
            default: Bn.green600
        },
        "--WDS-content-external-link-RGB": {
            [On]: Wn.green450,
            default: Wn.green600
        },
        "--WDS-content-inverse": {
            [On]: Bn.neutralGray1000,
            default: Bn.whiteOpaque
        },
        "--WDS-content-inverse-RGB": {
            [On]: Wn.neutralGray1000,
            default: Wn.white
        },
        "--WDS-content-on-accent": {
            [On]: Bn.neutralGray1000,
            default: Bn.whiteOpaque
        },
        "--WDS-content-on-accent-RGB": {
            [On]: Wn.neutralGray1000,
            default: Wn.white
        },
        "--WDS-content-read": {
            [On]: Bn.skyBlue300,
            default: Bn.cobalt400
        },
        "--WDS-content-read-RGB": {
            [On]: Wn.skyBlue300,
            default: Wn.cobalt400
        },
        "--WDS-lines-divider": {
            [On]: Bn.whiteAlpha10,
            default: Bn.blackAlpha10
        },
        "--WDS-lines-divider-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-lines-outline-deemphasized": {
            [On]: Bn.whiteAlpha10,
            default: Bn.blackAlpha20
        },
        "--WDS-lines-outline-deemphasized-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-lines-outline-default": {
            [On]: Bn.neutralGray500,
            default: Bn.neutralGray400
        },
        "--WDS-lines-outline-default-RGB": {
            [On]: Wn.neutralGray500,
            default: Wn.neutralGray400
        },
        "--WDS-persistent-activity-indicator": {
            [On]: Bn.green400,
            default: Bn.green400
        },
        "--WDS-persistent-activity-indicator-RGB": {
            [On]: Wn.green400,
            default: Wn.green400
        },
        "--WDS-persistent-always-black": {
            [On]: Bn.neutralGray1000,
            default: Bn.neutralGray1000
        },
        "--WDS-persistent-always-black-RGB": {
            [On]: Wn.neutralGray1000,
            default: Wn.neutralGray1000
        },
        "--WDS-persistent-always-branded": {
            [On]: Bn.green450,
            default: Bn.green500
        },
        "--WDS-persistent-always-branded-RGB": {
            [On]: Wn.green450,
            default: Wn.green500
        },
        "--WDS-persistent-always-white": {
            [On]: Bn.whiteOpaque,
            default: Bn.whiteOpaque
        },
        "--WDS-persistent-always-white-RGB": {
            [On]: Wn.white,
            default: Wn.white
        },
        "--WDS-persistent-verified": {
            [On]: "#0085F4",
            default: "#0085F4"
        },
        "--WDS-persistent-verified-RGB": {
            [On]: "0, 133, 244",
            default: "0, 133, 244"
        },
        "--WDS-secondary-negative": {
            [On]: Bn.red300,
            default: Bn.red400
        },
        "--WDS-secondary-negative-deemphasized": {
            [On]: Bn.red800,
            default: Bn.red75
        },
        "--WDS-secondary-negative-deemphasized-RGB": {
            [On]: Wn.red800,
            default: Wn.red75
        },
        "--WDS-secondary-negative-emphasized": {
            [On]: Bn.red200,
            default: Bn.red500
        },
        "--WDS-secondary-negative-emphasized-RGB": {
            [On]: Wn.red200,
            default: Wn.red500
        },
        "--WDS-secondary-negative-RGB": {
            [On]: Wn.red300,
            default: Wn.red400
        },
        "--WDS-secondary-positive": {
            [On]: Bn.green300,
            default: Bn.green500
        },
        "--WDS-secondary-positive-deemphasized": {
            [On]: Bn.green800,
            default: Bn.green75
        },
        "--WDS-secondary-positive-deemphasized-RGB": {
            [On]: Wn.green800,
            default: Wn.green75
        },
        "--WDS-secondary-positive-RGB": {
            [On]: Wn.green300,
            default: Wn.green500
        },
        "--WDS-secondary-warning": {
            [On]: Bn.yellow300,
            default: Bn.yellow400
        },
        "--WDS-secondary-warning-deemphasized": {
            [On]: Bn.yellow800,
            default: Bn.yellow75
        },
        "--WDS-secondary-warning-deemphasized-RGB": {
            [On]: Wn.yellow800,
            default: Wn.yellow75
        },
        "--WDS-secondary-warning-RGB": {
            [On]: Wn.yellow300,
            default: Wn.yellow400
        },
        "--WDS-surface-default": {
            [On]: Bn.neutralGray900,
            default: Bn.whiteOpaque
        },
        "--WDS-surface-default-RGB": {
            [On]: Wn.neutralGray900,
            default: Wn.white
        },
        "--WDS-surface-elevated-default": {
            [On]: Bn.neutralGray850,
            default: Bn.whiteOpaque
        },
        "--WDS-surface-elevated-default-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.white
        },
        "--WDS-surface-elevated-emphasized": {
            [On]: Bn.neutralGray800,
            default: Bn.warmGray75
        },
        "--WDS-surface-elevated-emphasized-RGB": {
            [On]: Wn.neutralGray800,
            default: Wn.warmGray75
        },
        "--WDS-surface-emphasized": {
            [On]: Bn.neutralGray850,
            default: Bn.warmGray75
        },
        "--WDS-surface-emphasized-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.warmGray75
        },
        "--WDS-surface-highlight": {
            [On]: Bn.whiteAlpha10,
            default: Bn.warmGray300Alpha15
        },
        "--WDS-surface-highlight-RGB": {
            [On]: Wn.white,
            default: Wn.warmGray300
        },
        "--WDS-surface-inverse": {
            [On]: Bn.neutralGray100,
            default: Bn.neutralGray800
        },
        "--WDS-surface-inverse-RGB": {
            [On]: Wn.neutralGray100,
            default: Wn.neutralGray800
        },
        "--WDS-surface-pressed": {
            [On]: Bn.whiteAlpha20,
            default: Bn.blackAlpha20
        },
        "--WDS-surface-pressed-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-systems-bubble-content-business": {
            [On]: Bn.emerald400,
            default: Bn.blackAlpha60
        },
        "--WDS-systems-bubble-content-business-RGB": {
            [On]: Wn.emerald400,
            default: Wn.black
        },
        "--WDS-systems-bubble-content-deemphasized": {
            [On]: Bn.whiteAlpha60,
            default: Bn.blackAlpha60
        },
        "--WDS-systems-bubble-content-deemphasized-RGB": {
            [On]: Wn.white,
            default: Wn.black
        },
        "--WDS-systems-bubble-content-e2e": {
            [On]: Bn.yellow300,
            default: Bn.blackAlpha60
        },
        "--WDS-systems-bubble-content-e2e-RGB": {
            [On]: Wn.yellow300,
            default: Wn.black
        },
        "--WDS-systems-bubble-surface-business": {
            [On]: Bn.neutralGray850,
            default: Bn.emerald100
        },
        "--WDS-systems-bubble-surface-business-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.emerald100
        },
        "--WDS-systems-bubble-surface-e2e": {
            [On]: Bn.neutralGray850,
            default: Bn.yellow100
        },
        "--WDS-systems-bubble-surface-e2e-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.yellow100
        },
        "--WDS-systems-bubble-surface-incoming": {
            [On]: Bn.neutralGray800,
            default: Bn.whiteOpaque
        },
        "--WDS-systems-bubble-surface-incoming-RGB": {
            [On]: Wn.neutralGray800,
            default: Wn.white
        },
        "--WDS-systems-bubble-surface-outgoing": {
            [On]: Bn.green750,
            default: Bn.green100
        },
        "--WDS-systems-bubble-surface-outgoing-RGB": {
            [On]: Wn.green750,
            default: Wn.green100
        },
        "--WDS-systems-bubble-surface-overlay": {
            [On]: Bn.blackAlpha20,
            default: Bn.warmGray300Alpha15
        },
        "--WDS-systems-bubble-surface-overlay-RGB": {
            [On]: Wn.black,
            default: Wn.warmGray300
        },
        "--WDS-systems-bubble-surface-system": {
            [On]: Bn.neutralGray850,
            default: Bn.whiteAlpha90
        },
        "--WDS-systems-bubble-surface-system-RGB": {
            [On]: Wn.neutralGray850,
            default: Wn.white
        },
        "--WDS-systems-chat-background-wallpaper": {
            [On]: Bn.neutralGray900,
            default: Bn.cream75
        },
        "--WDS-systems-chat-background-wallpaper-RGB": {
            [On]: Wn.neutralGray900,
            default: Wn.cream75
        },
        "--WDS-systems-chat-foreground-wallpaper": {
            [On]: Bn.whiteAlpha10,
            default: Bn.cream150
        },
        "--WDS-systems-chat-foreground-wallpaper-RGB": {
            [On]: Wn.white,
            default: Wn.cream150
        },
        "--WDS-systems-chat-surface-composer": {
            [On]: Bn.neutralGray800,
            default: Bn.whiteOpaque
        },
        "--WDS-systems-chat-surface-composer-RGB": {
            [On]: Wn.neutralGray800,
            default: Wn.white
        },
        "--WDS-systems-chat-surface-tray": {
            [On]: Bn.neutralGray900,
            default: Bn.warmGray75
        },
        "--WDS-systems-chat-surface-tray-RGB": {
            [On]: Wn.neutralGray900,
            default: Wn.warmGray75
        },
        "--WDS-systems-status-seen": {
            [On]: Bn.neutralGray500,
            default: Bn.warmGray300
        },
        "--WDS-systems-status-seen-RGB": {
            [On]: Wn.neutralGray500,
            default: Wn.warmGray300
        },
        "--WDS-systems-attachment-drawing": {
            [On]: Bn.sunset300,
            default: Bn.sunset300
        }
    });
    const Gn = Object.fromEntries(Object.entries(Hn).map((e)=>[
            e[0],
            e[1].default ?? e[1]
        ]));
    const zn = Object.fromEntries(Object.entries(Hn).map((e)=>[
            e[0],
            e[1][On] ?? e[1]
        ]));
    const jn = babelHelpers.extends({}, Hn, {
        "--WDS-accent": {
            [On]: Bn.neutralGray50,
            default: Bn.warmGray900
        },
        "--WDS-accent-deemphasized": {
            [On]: Bn.neutralGray800,
            default: Bn.warmGray100
        },
        "--WDS-accent-deemphasized-RGB": {
            [On]: Wn.neutralGray800,
            default: Wn.warmGray100
        },
        "--WDS-accent-emphasized": {
            [On]: Bn.neutralGray75,
            default: Bn.warmGray800
        },
        "--WDS-accent-emphasized-RGB": {
            [On]: Wn.neutralGray75,
            default: Wn.warmGray800
        },
        "--WDS-accent-RGB": {
            [On]: Wn.neutralGray50,
            default: Wn.warmGray900
        },
        "--WDS-components-filter-surface-selected": {
            [On]: Bn.neutralGray700,
            default: Bn.warmGray200
        },
        "--WDS-components-filter-surface-selected-RGB": {
            [On]: Wn.neutralGray700,
            default: Wn.warmGray200
        }
    });
    const Kn = Object.fromEntries(Object.entries(jn).map((e)=>[
            e[0],
            e[1].default ?? e[1]
        ]));
    const Qn = Object.fromEntries(Object.entries(jn).map((e)=>[
            e[0],
            e[1][On] ?? e[1]
        ]));
    const Xn = babelHelpers.extends({}, Gn, {
        "--WDS-content-default": Bn.neutralGray1000,
        "--WDS-content-default-RGB": Wn.neutralGray1000,
        "--WDS-content-deemphasized": Bn.neutralGray550,
        "--WDS-content-deemphasized-RGB": Wn.neutralGray550,
        "--WDS-content-disabled": Bn.neutralGray300,
        "--WDS-content-disabled-RGB": Wn.neutralGray300,
        "--WDS-content-external-link": Bn.green600,
        "--WDS-content-external-link-RGB": Wn.green600,
        "--WDS-background-wash-inset": Bn.neutralGray75,
        "--WDS-background-wash-inset-RGB": Wn.neutralGray75,
        "--WDS-background-elevated-wash-inset": Bn.neutralGray75,
        "--WDS-background-elevated-wash-inset-RGB": Wn.neutralGray75,
        "--WDS-background-dimmer": Bn.blackAlpha30,
        "--WDS-surface-emphasized": Bn.neutralGray75,
        "--WDS-surface-emphasized-RGB": Wn.neutralGray75,
        "--WDS-surface-elevated-emphasized": Bn.neutralGray75,
        "--WDS-surface-elevated-emphasized-RGB": Wn.neutralGray75,
        "--WDS-surface-inverse": "#1F1F1F",
        "--WDS-surface-inverse-RGB": "31, 31, 31",
        "--WDS-surface-pressed": Bn.blackAlpha20,
        "--WDS-surface-pressed-RGB": Wn.black,
        "--WDS-lines-divider": Bn.blackAlpha20,
        "--WDS-lines-divider-RGB": Wn.black,
        "--WDS-lines-outline-default": Bn.neutralGray400,
        "--WDS-lines-outline-default-RGB": Wn.neutralGray400,
        "--WDS-lines-outline-deemphasized": Bn.blackAlpha20,
        "--WDS-lines-outline-deemphasized-RGB": Wn.black,
        "--WDS-persistent-always-black": Bn.neutralGray1000,
        "--WDS-persistent-always-black-RGB": Wn.neutralGray1000
    });
    const Yn = babelHelpers.extends({}, zn, {
        "--WDS-content-default": Bn.neutralGray50,
        "--WDS-content-default-RGB": Wn.neutralGray50,
        "--WDS-content-deemphasized": Bn.neutralGray400,
        "--WDS-content-deemphasized-RGB": Wn.neutralGray400,
        "--WDS-content-disabled": Bn.neutralGray700,
        "--WDS-content-disabled-RGB": Wn.neutralGray700,
        "--WDS-content-external-link": Bn.green450,
        "--WDS-content-external-link-RGB": Wn.green450,
        "--WDS-background-wash-plain": Bn.neutralGray1000,
        "--WDS-background-wash-plain-RGB": Wn.neutralGray1000,
        "--WDS-background-wash-inset": Bn.neutralGray1000,
        "--WDS-background-wash-inset-RGB": Wn.neutralGray1000,
        "--WDS-background-elevated-wash-plain": Bn.neutralGray900,
        "--WDS-background-elevated-wash-plain-RGB": Wn.neutralGray900,
        "--WDS-background-elevated-wash-inset": Bn.neutralGray900,
        "--WDS-background-elevated-wash-inset-RGB": Wn.neutralGray900,
        "--WDS-background-dimmer": Bn.blackAlpha40,
        "--WDS-surface-default": Bn.neutralGray900,
        "--WDS-surface-default-RGB": Wn.neutralGray900,
        "--WDS-surface-emphasized": Bn.neutralGray800,
        "--WDS-surface-emphasized-RGB": Wn.neutralGray800,
        "--WDS-surface-elevated-default": Bn.neutralGray800,
        "--WDS-surface-elevated-default-RGB": Wn.neutralGray800,
        "--WDS-surface-elevated-emphasized": Bn.neutralGray700,
        "--WDS-surface-elevated-emphasized-RGB": Wn.neutralGray700,
        "--WDS-surface-inverse": "#F4F4F4",
        "--WDS-surface-inverse-RGB": "244, 244, 244",
        "--WDS-surface-pressed": Bn.whiteAlpha20,
        "--WDS-persistent-always-black": Bn.neutralGray1000,
        "--WDS-persistent-always-black-RGB": Wn.neutralGray1000
    });
    const Jn = babelHelpers.extends({}, Gn, {
        "--WDS-content-action-default": Bn.coolGray1000,
        "--WDS-content-action-default-RGB": Wn.coolGray1000,
        "--WDS-content-default": Bn.coolGray1000,
        "--WDS-content-default-RGB": Wn.coolGray1000,
        "--WDS-content-deemphasized": Bn.coolGray600,
        "--WDS-content-deemphasized-RGB": Wn.coolGray600,
        "--WDS-content-disabled": Bn.coolGray300,
        "--WDS-content-disabled-RGB": Wn.coolGray300,
        "--WDS-content-external-link": Bn.cobalt500,
        "--WDS-content-external-link-RGB": Wn.cobalt500,
        "--WDS-surface-inverse": Bn.coolGray800,
        "--WDS-surface-inverse-RGB": Wn.coolGray800,
        "--WDS-surface-pressed": Bn.coolGrayAlpha20,
        "--WDS-surface-pressed-RGB": Wn.coolGrayBase,
        "--WDS-lines-divider": Bn.coolGrayAlpha10,
        "--WDS-lines-divider-RGB": Wn.coolGrayBase,
        "--WDS-lines-outline-default": Bn.coolGray400,
        "--WDS-lines-outline-default-RGB": Wn.coolGray400,
        "--WDS-lines-outline-deemphasized": Bn.coolGrayAlpha20,
        "--WDS-lines-outline-deemphasized-RGB": Wn.coolGrayBase,
        "--WDS-persistent-always-black": Bn.coolGray1000,
        "--WDS-persistent-always-black-RGB": Wn.coolGray1000
    });
    const Zn = babelHelpers.extends({}, zn, {
        "--WDS-content-action-default": Bn.coolGray50,
        "--WDS-content-action-default-RGB": Wn.coolGray50,
        "--WDS-content-default": Bn.coolGray50,
        "--WDS-content-default-RGB": Wn.coolGray50,
        "--WDS-content-deemphasized": Bn.coolGray400,
        "--WDS-content-deemphasized-RGB": Wn.coolGray400,
        "--WDS-content-disabled": Bn.coolGray700,
        "--WDS-content-disabled-RGB": Wn.coolGray700,
        "--WDS-content-external-link": Bn.skyBlue300,
        "--WDS-content-external-link-RGB": Wn.skyBlue300,
        "--WDS-content-inverse": Bn.coolGray1000,
        "--WDS-content-inverse-RGB": Wn.coolGray1000,
        "--WDS-content-on-accent": Bn.coolGray1000,
        "--WDS-content-on-accent-RGB": Wn.coolGray1000,
        "--WDS-background-wash-plain": Bn.coolGray1000,
        "--WDS-background-wash-plain-RGB": Wn.coolGray1000,
        "--WDS-background-wash-inset": Bn.coolGray1000,
        "--WDS-background-wash-inset-RGB": Wn.coolGray1000,
        "--WDS-background-elevated-wash-plain": Bn.coolGray900,
        "--WDS-background-elevated-wash-plain-RGB": Wn.coolGray900,
        "--WDS-background-elevated-wash-inset": Bn.coolGray900,
        "--WDS-background-elevated-wash-inset-RGB": Wn.coolGray900,
        "--WDS-surface-default": Bn.coolGray1000,
        "--WDS-surface-default-RGB": Wn.coolGray1000,
        "--WDS-surface-emphasized": Bn.coolGray900,
        "--WDS-surface-emphasized-RGB": Wn.coolGray900,
        "--WDS-surface-elevated-default": Bn.coolGray900,
        "--WDS-surface-elevated-default-RGB": Wn.coolGray900,
        "--WDS-surface-elevated-emphasized": Bn.coolGray800,
        "--WDS-surface-elevated-emphasized-RGB": Wn.coolGray800,
        "--WDS-surface-inverse": Bn.coolGray100,
        "--WDS-surface-inverse-RGB": Wn.coolGray100,
        "--WDS-surface-pressed": Bn.whiteAlpha20,
        "--WDS-lines-outline-default": Bn.coolGray500,
        "--WDS-lines-outline-default-RGB": Wn.coolGray500,
        "--WDS-persistent-always-black": Bn.coolGray1000,
        "--WDS-persistent-always-black-RGB": Wn.coolGray1000
    });
    const er = {
        xoeyzqq: "xfmqtgv xoeyzqq",
        $$css: true
    };
    const tr = {
        xoeyzqq: "xodxds6 xoeyzqq",
        $$css: true
    };
    const nr = {
        xoeyzqq: "x1umy8rd xoeyzqq",
        $$css: true
    };
    const rr = {
        xoeyzqq: "x1tkf7af xoeyzqq",
        $$css: true
    };
    const or = {
        xoeyzqq: "x1aj9qoi xoeyzqq",
        $$css: true
    };
    const ar = {
        xoeyzqq: "x4skxjj xoeyzqq",
        $$css: true
    };
    const ir = {
        xoeyzqq: "xm7eazi xoeyzqq",
        $$css: true
    };
    const lr = {
        xoeyzqq: "xhtg2ui xoeyzqq",
        $$css: true
    };
    const sr = {
        xoeyzqq: "xuxuz6f xoeyzqq",
        $$css: true
    };
    const ur = {
        xoeyzqq: "x1w9d4se xoeyzqq",
        $$css: true
    };
    l.WDSSystemTheme = er;
    l.WDSLightTheme = tr;
    l.WDSDarkTheme = nr;
    l.WDSSMBSystemTheme = rr;
    l.WDSSMBLightTheme = or;
    l.WDSSMBDarkTheme = ar;
    l.WDSLightThemeIOS = ir;
    l.WDSDarkThemeIOS = lr;
    l.WDSLightThemeAndroid = sr;
    l.WDSDarkThemeAndroid = ur;
}, 98);
__d("WAWebLeadStageColors", [], function(t, n, r, o, a, i) {
    function e(e) {
        switch(e){
            case 0:
                return "#D1C4FF";
            case 1:
                return "#FFABC7";
            case 2:
                return "#03776D";
            case 3:
                return "#0451A3";
            case 4:
                return "#CBB699";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function l(e) {
        switch(e){
            case 0:
                return 12;
            case 1:
                return 17;
            case 2:
                return 20;
            case 3:
                return 19;
            case 4:
                return 8;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    i.getLeadStageDotColor = e;
    i.getLeadStagePillColorIndex = l;
}, 66);
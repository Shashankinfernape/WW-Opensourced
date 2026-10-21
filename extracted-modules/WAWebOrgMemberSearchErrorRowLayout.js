__d("WAWebOrgMemberSearchErrorRowLayout", [], function(t, n, r, o, a, i) {
    const e = 3;
    function l(e) {
        if (s(e)) {
            return c + u;
        }
        return c;
    }
    function s(e) {
        switch(e){
            case "offline":
                return true;
            case "unavailable":
                return false;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    var u = 20;
    var c = e * u + 4;
    i.ORG_MEMBER_SEARCH_ERROR_LINES = e;
    i.getOrgMemberSearchErrorHeight = l;
    i.orgMemberSearchErrorOffersRetry = s;
}, 66);
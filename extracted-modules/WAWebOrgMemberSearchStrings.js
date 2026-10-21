__d("WAWebOrgMemberSearchStrings", [
    "fbt"
], function(t, n, r, o, a, i, l, s) {
    const e = 300;
    function u(e) {
        switch(e){
            case "offline":
                return s._("Couldn't load organization members. Check your internet connection.");
            case "unavailable":
                return s._("Can't search for organization members right now. Try again later.");
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function c() {
        return s._("Other org members");
    }
    l.ORG_MEMBER_SEARCH_DEBOUNCE_MS = e;
    l.getOrgMemberSearchErrorText = u;
    l.getOrgMemberSearchHeader = c;
}, 226);
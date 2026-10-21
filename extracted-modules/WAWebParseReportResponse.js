__d("WAWebParseReportResponse", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t) {
        e: {
            const n = t;
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "GroupReportResponseError" && "value" in n) {
                const r = n.value;
                const a = parseInt(r.errorSpamIqErrors.value.code, 10);
                const i = r.errorSpamIqErrors.value.text;
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseGroupReportResponse: server response with ",
                    ", ",
                    ""
                ])), a, i);
                return {
                    errorCode: a,
                    errorText: i
                };
                break e;
            }
            if ((typeof n === "object" && n !== null || typeof n === "function") && n.name === "GroupReportResponseSuccess" && "value" in n) {
                const l = n.value;
                return l;
            }
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
        }
    }
    function c(e) {
        switch(e.name){
            case "IndividualReportResponseError":
                {
                    const t = parseInt(e.value.errorSpamIqErrors.value.code, 10);
                    const n = e.value.errorSpamIqErrors.value.text;
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "parseIndividualReportResponse: server response with ",
                        ", ",
                        ""
                    ])), t, n);
                    return {
                        errorCode: t,
                        errorText: n
                    };
                }
            default:
                e.name;
                return e.value;
        }
    }
    l.parseGroupReportResponse = u;
    l.parseIndividualReportResponse = c;
}, 98);
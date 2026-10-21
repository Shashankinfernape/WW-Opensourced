__d("WAWebBuildType", [
    "$InternalEnum",
    "WAWebEnvironment",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        RELEASE: 0,
        BETA: 1,
        ALPHA: 2,
        DEBUG: 3
    });
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb();
            const n = r("WAWebEnvironment").getEnvironment();
            return ((t)=>{
                if (Array.isArray(t) && t.length === 2 && t[0] === "prod" && t[1] === true) {
                    return e.BETA;
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === "prod" && t[1] === false) {
                    return e.RELEASE;
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === "intern" && t[1] === true) {
                    return e.DEBUG;
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === "intern" && t[1] === false || Array.isArray(t) && t.length === 2 && t[0] === "dev" && t[1] === true) {
                    return e.BETA;
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === "dev" && t[1] === false) {
                    return e.DEBUG;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            })([
                n,
                t
            ]);
        });
        return u.apply(this, arguments);
    }
    l.BuildType = e;
    l.getBuildType = s;
}, 98);
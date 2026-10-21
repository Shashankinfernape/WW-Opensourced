__d("WAWebFalcoCanonicalAppBuild", [
    "WAWebWamEnumAppBuildType",
    "WAWebWamUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebWamUtils").getAppBuild();
        if (e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.DEBUG) {
            return "debug";
        }
        if (e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.ALPHA) {
            return "alpha";
        }
        if (e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.BETA) {
            return "beta";
        }
        if (e === o("WAWebWamEnumAppBuildType").APP_BUILD_TYPE.RELEASE) {
            return "release";
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    l.default = e;
}, 98);
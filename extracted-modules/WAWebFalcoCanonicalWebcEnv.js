__d("WAWebFalcoCanonicalWebcEnv", [
    "WAWebWamEnumWebcEnvCode",
    "WAWebWamUtils"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = {
        [(s = o("WAWebWamEnumWebcEnvCode")).WEBC_ENV_CODE.PROD]: "prod",
        [s.WEBC_ENV_CODE.INTERN]: "intern",
        [s.WEBC_ENV_CODE.DEV]: "dev",
        [s.WEBC_ENV_CODE.E2E]: "e2e"
    };
    function c() {
        return u[o("WAWebWamUtils").getWamEnv()];
    }
    l.default = c;
}, 98);
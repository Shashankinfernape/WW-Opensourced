__d("RSTCrypt", [
    "RSTConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        encrypt(t) {
            if (!r("RSTConfig").ENCRYPT_DB) {
                return t;
            }
            try {
                return btoa(t);
            } catch (e) {
                return t;
            }
        }
        decrypt(t) {
            if (r("RSTConfig").ENCRYPT_DB) {
                return this.decryptEnforce(t);
            }
            return {
                result: t,
                exception: false
            };
        }
        decryptEnforce(t) {
            try {
                return {
                    result: atob(t),
                    exception: false
                };
            } catch (e) {
                return {
                    result: t,
                    exception: true
                };
            }
        }
    }
    const s = new e;
    l.default = s;
}, 98);
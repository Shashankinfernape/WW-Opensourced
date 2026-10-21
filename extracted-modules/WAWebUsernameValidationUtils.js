__d("WAWebUsernameValidationUtils", [
    "WAWebUsernameConstants"
], function(t, n, r, o, a, i, l) {
    const e = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
    const s = new Set("0123456789".split(""));
    const u = new Set([].concat(Array.from(e), Array.from(s), [
        "_",
        "."
    ]));
    const c = [
        ".com",
        ".org",
        ".net",
        ".int",
        ".edu",
        ".gov",
        ".mil",
        ".arpa",
        ".html",
        ".htm",
        ".txt",
        ".xml"
    ];
    const d = [
        "whatsapp",
        "instagram",
        "facebook",
        "oculus"
    ];
    function m(t) {
        const n = t.toLowerCase();
        if (Array.from(t).every((e)=>u.has(e))) {
            if (t.length < o("WAWebUsernameConstants").USERNAME_MIN_LENGTH || t.length > o("WAWebUsernameConstants").USERNAME_MAX_LENGTH) {
                return {
                    isValid: false,
                    errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_LENGTH
                };
            }
            if (Array.from(t).some((t)=>e.has(t))) {
                if (t.startsWith(".") || t.endsWith(".") || t.includes("..")) {
                    return {
                        isValid: false,
                        errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_PERIODS
                    };
                }
                if (n.startsWith("www.")) {
                    return {
                        isValid: false,
                        errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_WWW_PREFIX
                    };
                }
                if (c.some((e)=>n.endsWith(e))) {
                    return {
                        isValid: false,
                        errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_DOMAIN_SUFFIX
                    };
                }
                if (d.some((e)=>n.includes(e))) {
                    return {
                        isValid: false,
                        errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_WORD
                    };
                }
                return {
                    isValid: true
                };
            }
            return {
                isValid: false,
                errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_NO_LETTERS
            };
        }
        return {
            isValid: false,
            errorType: o("WAWebUsernameConstants").UsernameValidationErrorType.INVALID_CHARACTER
        };
    }
    l.validateUsernameLocally = m;
}, 98);
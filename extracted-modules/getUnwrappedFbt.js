__d("getUnwrappedFbt", [
    "FbtResultGK"
], function(t, n, r, o, a, i, l) {
    function e({ contents }) {
        const inlineMode = r("FbtResultGK").inlineMode;
        const shouldReturnFbtResult = r("FbtResultGK").shouldReturnFbtResult;
        if (!shouldReturnFbtResult && inlineMode !== "REPORT") {
            if (contents?.length === 1 && typeof contents[0] === "string") {
                return contents[0];
            }
            return contents;
        }
    }
    l.default = e;
}, 98);
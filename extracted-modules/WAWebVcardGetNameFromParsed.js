__d("WAWebVcardGetNameFromParsed", [
    "WAWebWidFormat"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        let t = null;
        const { FN, NICKNAME, TEL } = e;
        if (FN != null && FN[0]) {
            t = FN[0].value;
        } else if (NICKNAME != null && NICKNAME[0]) {
            t = NICKNAME[0].value;
        } else if (TEL != null && TEL[0]) {
            const l = TEL[0];
            const s = l.properties.waid?.[0];
            t = s ? o("WAWebWidFormat").widToFormattedUser(s) : l.value;
        }
        return t;
    }
    l.vcardGetNameFromParsed = e;
}, 98);
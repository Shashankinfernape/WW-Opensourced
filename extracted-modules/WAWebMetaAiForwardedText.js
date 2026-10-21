__d("WAWebMetaAiForwardedText", [], function(t, n, r, o, a, i) {
    const e = "\n ̶ ̶ ̶ ̶ ̶ ̶\n";
    function l(t, n) {
        const r = t ?? "";
        if (n == null || n === "") {
            return r;
        }
        if (r === "") {
            return n;
        }
        return r + e + n;
    }
    i.META_AI_MESSAGE_SEPARATOR = e;
    i.composeMetaAiForwardedText = l;
}, 66);
__d("WAWebEmojiCompile", [
    "WATrie",
    "escapeRegex",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const trie = r("WATrie").fromForwardsStrings(e.sort((e, t)=>t.length - e.length).map((e)=>`${e}${u}`));
        return s({
            depth: 0,
            prefix: null,
            prevChar: null,
            trie
        });
    }
    function s({ depth, fe0fIsRequiredArg, prefix, prevChar, trie }) {
        const l = [];
        let d = false;
        let fe0fIsRequiredArg_1 = fe0fIsRequiredArg;
        if (fe0fIsRequiredArg_1 == null && !r("isStringNullOrEmpty")(prefix)) {
            if (depth === 1) {
                const p = c.has(prefix);
                if (p) {
                    fe0fIsRequiredArg_1 = true;
                }
            } else {
                if (!r("isStringNullOrEmpty")(prevChar) && depth === 2) {
                    fe0fIsRequiredArg_1 = c.has(prevChar + prefix);
                }
            }
        }
        trie.getChildren().forEach((e)=>{
            if (e.prefix === u) {
                d = true;
                return;
            }
            l.push(s({
                depth: depth + 1,
                fe0fIsRequiredArg: fe0fIsRequiredArg_1,
                prefix: e.prefix,
                prevChar: prefix,
                trie: e.node
            }));
        });
        const _ = prefix === String.fromCodePoint(65039) && prevChar != null && fe0fIsRequiredArg_1 !== true ? `${String.fromCodePoint(65039)}?` : r("escapeRegex")(prefix || "");
        let f = l.length === 0 ? "" : `(?:${l.join("|")})`;
        if (f && d) {
            f += "?";
        }
        return `${_}${f}`;
    }
    var u = "\n";
    var c = new Set([
        String.fromCodePoint(169),
        String.fromCodePoint(174),
        String.fromCodePoint(8482),
        String.fromCodePoint(9823),
        String.fromCodePoint(9854),
        String.fromCodePoint(12336)
    ]);
    l.default = e;
}, 98);
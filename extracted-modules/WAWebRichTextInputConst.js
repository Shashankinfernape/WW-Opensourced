__d("WAWebRichTextInputConst", [], function(t, n, r, o, a, i) {
    const e = "@";
    const l = "\u200B";
    const s = `${l}(\\d+@(c\\.us|lid|bot))${l}`;
    const u = `${l}((\\d+-)?\\d+@g\\.us)${l}`;
    i.AT_SYMBOL = e;
    i.ZWS = l;
    i.userJidRegexStr = s;
    i.groupJidRegexStr = u;
}, 66);
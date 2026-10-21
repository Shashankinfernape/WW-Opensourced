__d("WAWebActiveMessageRanges", [
    "WALogger",
    "WALongInt",
    "WAWebApiActiveMessageRanges",
    "WAWebHandleForMessageRangeEnums",
    "WAWebSchemaActiveMessageRanges",
    "WAWebTimestampConversionUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, n) {
        if (t == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing message range from row."
            ])));
            return o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN;
        }
        const { lastMessageTimestamp: r, messages: a } = t;
        const i = o("WAWebTimestampConversionUtils").maybeMillisecondsToSeconds(r ?? 0);
        if (i !== (r ?? 0)) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: last message timestamp was converted to seconds from ",
                ""
            ])), r).sendLogs("syncd: last message timestamp was converted to seconds", {
                sampling: 0.01
            });
        }
        if (n.t != null && n.t < o("WALongInt").numberOrThrowIfTooLarge(i)) {
            return o("WAWebHandleForMessageRangeEnums").RangeContain.CONTAINS_BY_TIMESTAMP;
        }
        const l = n.id;
        for (const u of a){
            const c = u.key;
            if (c != null && l != null && c.id === l.id) {
                return o("WAWebHandleForMessageRangeEnums").RangeContain.CONTAINS_BY_ADDITIONAL;
            }
        }
        return o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e.remote.toString()).then((n)=>{
                n.forEach((n)=>{
                    if ([
                        o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive,
                        o("WAWebSchemaActiveMessageRanges").ActiveRangeAction.MarkChatAsRead
                    ].includes(n.action) && u(n.actionValue.messageRange, {
                        id: e,
                        t
                    }) === o("WAWebHandleForMessageRangeEnums").RangeContain.DOES_NOT_CONTAIN) {
                        return o("WAWebApiActiveMessageRanges").removeActiveMessageRange(e.remote.toString(), n.action);
                    }
                });
            });
        });
        return d.apply(this, arguments);
    }
    l.rangeContainsMessage = u;
    l.checkAndRemoveActiveMessageRanges = c;
}, 98);
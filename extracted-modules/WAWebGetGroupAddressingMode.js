__d("WAWebGetGroupAddressingMode", [
    "WALogger",
    "WAWebDBGroupsGroupMetadata",
    "WAWebHandleMsgCommon",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isGroup()) {
                const t = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
                if (t == null) {
                    return null;
                }
                if (t.isLidAddressingMode == null) {
                    return o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
                }
                if (t.isLidAddressingMode) {
                    return o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid;
                }
                return o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = new Map;
            const r = yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(t);
            const a = [];
            const i = [];
            t.map((e, t)=>{
                if (!e.isGroup()) {
                    n.set(e.toString(), null);
                    if (a.length < 3) {
                        a.push(e.toString());
                    }
                    return;
                }
                const l = r[t];
                if (l != null) {
                    n.set(l.id, l.isLidAddressingMode === true ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
                } else {
                    n.set(e.toString(), null);
                    if (i.length < 3) {
                        i.push(e.toString());
                    }
                }
            });
            if (a.length > 0) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkGetGroupAddressingMode: called with ",
                    " non-groups => ",
                    ""
                ])), a.length, a).sendLogs("get-group-addressing-mode-called-for-non-group", {
                    sampling: 0.001
                });
            }
            if (i.length > 0) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkGetGroupAddressingMode: ",
                    " missing metadata => ",
                    ""
                ])), i.length, i).sendLogs("get-group-addressing-mode-missing-group-metadata", {
                    sampling: 0.001
                });
            }
            return n;
        });
        return m.apply(this, arguments);
    }
    l.getGroupAddressingMode = u;
    l.bulkGetGroupAddressingMode = d;
}, 98);
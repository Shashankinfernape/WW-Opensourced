__d("WAWebOrphanBotMsgError", [], function(t, n, r, o, a, i) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, `decryptMsmsgBotMessage: orphan bot message (${n})`) || this;
            r.name = "OrphanBotMsgError";
            r.message = `decryptMsmsgBotMessage: orphan bot message (${n})`;
            r.reason = n;
            r.targetMsgKey = t;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = e;
}, 66);
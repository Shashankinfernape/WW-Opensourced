__d("WAWebCommsProcessAck", [
    "WALogger",
    "WAWebActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebDBMessageRangeIndex",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const t = e.attrs;
        const { from: n, id: r, t: a } = t;
        if (e.attrs.class === "message") {
            const i = o("WAWebWidFactory").createWid(String(n));
            const l = u(e);
            m({
                id: String(r),
                rcat: l,
                remote: i,
                timestamp: parseInt(a, 10)
            });
            d(l, String(r), i);
        }
    }
    function u({ content: r }) {
        if (!Array.isArray(r) || r[0]?.tag !== "rcat") {
            return null;
        }
        const o = r[0]?.content;
        if (Array.isArray(o)) {
            return null;
        }
        return o;
    }
    function c(e, t) {
        if (t.isGroup()) {
            return new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: t,
                id: e,
                participant: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            });
        }
        return new (r("WAWebMsgKey"))({
            fromMe: true,
            remote: t,
            id: e
        });
    }
    function d(e, t, n) {
        if (e != null) {
            o("WAWebBackendApi").frontendFireAndForget("updateMsgRcat", {
                msgKey: String(c(t, n)),
                rcat: e
            });
        }
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ id: n, rcat: r, remote: a, timestamp: i }) {
            const l = c(n, a);
            const s = String(l);
            try {
                const u = yield o("WAWebSchemaMessage").getMessageTable().get(s);
                if (u?.type === o("WAWebMsgType").MSG_TYPE.REACTION) {
                    return;
                }
                const d = o("WAWebDBMessageRangeIndex").MessagePropertyType.cast(u == null ? void 0 : u.messageRangeIndex.split("_")[1]);
                o("WAWebSchemaMessage").getMessageTable().merge(s, {
                    messageRangeIndex: o("WAWebDBMessageRangeIndex").craftMessageRangeIndex(a.toString(), false, d === o("WAWebDBMessageRangeIndex").MessagePropertyType.SystemMessage, i),
                    rcat: r
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processAckForOutgoingMessage: failed to update in storage"
                ]))).verbose().sendLogs("message processAckForOutgoingMessage failed");
                throw t;
            }
            return o("WAWebActiveMessageRanges").checkAndRemoveActiveMessageRanges(l, i);
        });
        return p.apply(this, arguments);
    }
    l.default = s;
}, 98);
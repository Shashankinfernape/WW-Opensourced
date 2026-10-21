__d("WAWebStatusMsgDataUtils", [
    "WAJids",
    "WATimeUtils",
    "WAWebAck",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 4286237861;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const c = (t.text || "").trim();
            if (c === "") {
                return null;
            }
            const d = n ?? o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
            const m = o("WAWebLidStatusMigrationUtils").matWidConvert(o("WAWebUserPrefsMeUser").getMeUserOrThrow());
            const p = n?.isNewsletter() ?? false;
            let _;
            if (!p) {
                _ = o("WAWebLidStatusMigrationUtils").matWidConvert(m);
            }
            const f = new (r("WAWebMsgKey"))({
                fromMe: true,
                remote: d,
                id: yield r("WAWebMsgKey").newId(),
                participant: _
            });
            const g = {
                id: f,
                body: c,
                author: m,
                backgroundColor: t.color ?? e,
                type: "chat",
                kind: o("WAWebMsgType").MsgKind.Chat,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: undefined,
                t: o("WATimeUtils").unixTime(),
                from: m,
                to: d,
                isNewMsg: true,
                local: true,
                ack: o("WAWebAck").ACK.CLOCK,
                font: t.font ?? undefined,
                messageSecret: o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() ? self.crypto.getRandomValues(new Uint8Array(32)) : null,
                canBeReshared: false,
                forwardedNewsletterMessageInfo: t.forwardedNewsletterMessageInfo ?? undefined,
                statusAttributions: t.statusAttributions ?? undefined
            };
            return g;
        });
        return u.apply(this, arguments);
    }
    l.createTextStatusMsgData = s;
}, 98);
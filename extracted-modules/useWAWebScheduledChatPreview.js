__d("useWAWebScheduledChatPreview", [
    "WALogger",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebScheduledMsgStore",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatValues",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useRef, useState } = u;
    function _(t) {
        const l = o("useWAWebChatValues").useChatValues(t.id, [
            o("WAWebFrontendChatGetters").getLastScheduledCreatedMsg
        ]);
        const s = l[0];
        const msgId = s?.id?.toString() ?? null;
        const _ = useState(null);
        const f = _[0];
        const g = _[1];
        const hRef = useRef(null);
        const y = useCallback(function() {
            hRef.current?.();
            if (msgId != null) {
                let r = false;
                hRef.current = function() {
                    r = true;
                };
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        const n = yield o("WAWebScheduledMsgStore").getScheduledMessagesForChat(o("WAWebWidToJid").widToChatJid(t.id));
                        let a = null;
                        for (const i of n){
                            if (a == null || i.createdAt > a.createdAt) {
                                a = i;
                            }
                        }
                        const scheduled = a != null ? yield o("WAWebScheduledMsgStore").decryptScheduledMsgPreview(a) : null;
                        if (r) {
                            return;
                        }
                        g({
                            msgId,
                            scheduled
                        });
                    } catch (error) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebScheduledChatPreview] failed to resolve preview ",
                            ""
                        ])), error).sendLogs("scheduled-preview-resolve-failed");
                    }
                })();
            }
        }, [
            t.id,
            msgId
        ]);
        useEffect(function() {
            y();
            return function() {
                hRef.current?.();
            };
        }, [
            y
        ]);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_changed_from_bridge", y);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scheduled_msg_revealed_from_bridge", y);
        if (msgId == null) {
            return null;
        }
        const C = f != null && f.msgId === msgId ? f : null;
        return C?.scheduled ?? null;
    }
    l.default = _;
}, 98);
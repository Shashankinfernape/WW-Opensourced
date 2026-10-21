__d("WAWebChatTimestamp.react", [
    "WAWeb-moment",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useMemo } = u;
    function M1Component(e) {
        "use no forget";
        const { t, timestampColor } = e;
        const a = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        const i = o("useWAWebMsgValues").useOptionalMsgValues(e.msg.id, [
            o("WAWebMsgGetters").getT
        ]);
        const l = i != null ? i[0] : 0;
        o("useWAWebListener").useListener(o("WAWebClock").Clock, o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT, a);
        const u = useCallback(function() {
            if (t != null) {
                return Math.max(t, l);
            }
            return l;
        }, [
            l,
            t
        ]);
        const m = useMemo(function() {
            const e = r("WAWeb-moment")().startOf("day").subtract(7, "day");
            return u() >= e.unix();
        }, [
            u
        ]);
        o("useWAWebListener").useListener(m ? o("WAWebCmd").Cmd : null, "midnight", a);
        if (i == null) {
            return null;
        }
        const Component = r("WDSText.react");
        return <Component type={timestampColor === "accent" ? "Body3Emphasized" : "Body3"} colorName={timestampColor ?? "contentDeemphasized"}>{o("WAWebClock").Clock.relativeStr(u())}</Component>;
    }
    M1Component.displayName = `${M1Component.name} [from ${i.id}]`;
    function P1Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { chat, timestampColor } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendChatGetters").getPreviewMessage,
                o("WAWebChatGetters").getT
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(chat.id, a);
        const l = i[0];
        const u = i[1];
        if (!l) {
            return null;
        }
        let c;
        if (t[1] !== u || t[2] !== l || t[3] !== timestampColor) {
            c = <M1Component msg={l} t={u} timestampColor={timestampColor}/>;
            t[1] = u;
            t[2] = l;
            t[3] = timestampColor;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(6);
        const { chat, msg, timestampColor } = e;
        if (chat) {
            let i;
            if (t[0] !== chat || t[1] !== timestampColor) {
                i = <P1Component chat={chat} timestampColor={timestampColor}/>;
                t[0] = chat;
                t[1] = timestampColor;
                t[2] = i;
            } else {
                i = t[2];
            }
            return i;
        }
        if (msg) {
            let l;
            if (t[3] !== msg || t[4] !== timestampColor) {
                l = <M1Component msg={msg} timestampColor={timestampColor}/>;
                t[3] = msg;
                t[4] = timestampColor;
                t[5] = l;
            } else {
                l = t[5];
            }
            return l;
        }
        return null;
    }
    l.default = _;
}, 98);
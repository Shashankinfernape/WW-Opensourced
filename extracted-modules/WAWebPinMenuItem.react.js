__d("WAWebPinMenuItem.react", [
    "fbt",
    "WAWebChatGetters",
    "WDSIconIcPushPin.react",
    "WDSIconWdsIcPushPinSlash.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(12);
        const { chat, disabled, onPinOrUnpin } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebChatGetters").getPin,
                o("WAWebChatGetters").getIsNewsletter
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const s = o("useWAWebChatValues").useChatValues(chat.id, l);
        const c = s[0];
        let m;
        if (t[1] !== c || t[2] !== onPinOrUnpin) {
            m = function() {
                onPinOrUnpin(!c);
            };
            t[1] = c;
            t[2] = onPinOrUnpin;
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        const _ = c != null && c !== 0;
        let f;
        if (t[4] !== chat || t[5] !== _) {
            f = _ ? d.getUnpinText(chat) : d.getPinText(chat);
            t[4] = chat;
            t[5] = _;
            t[6] = f;
        } else {
            f = t[6];
        }
        const g = f;
        const h = r(_ ? "WDSIconWdsIcPushPinSlash.react" : "WDSIconIcPushPin.react");
        let y;
        if (t[7] !== disabled || t[8] !== p || t[9] !== h || t[10] !== g) {
            const Component = r("WDSMenuItem.react");
            y = <Component key="PinChat" Icon={h} title={g} onPress={p} testid="mi-pin" disabled={disabled}/>;
            t[7] = disabled;
            t[8] = p;
            t[9] = h;
            t[10] = g;
            t[11] = y;
        } else {
            y = t[11];
        }
        return y;
    }
    var d = {
        getPinText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Pin channel");
            }
            return s._("Pin chat");
        },
        getUnpinText: function(t) {
            if (o("WAWebChatGetters").getIsNewsletter(t)) {
                return s._("Unpin channel");
            }
            return s._("Unpin chat");
        }
    };
    l.default = c;
}, 226);
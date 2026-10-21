__d("WAWebMessageBubbleHiddenText.react", [
    "WAWebClassnames",
    "WAWebClock",
    "WAWebConnModel",
    "WAWebContactGetters",
    "WAWebCopyPasteCopyable.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(e, t) {
        const n = t ?? "";
        if (e && o("WAWebConnModel").Conn.pushname != null && o("WAWebConnModel").Conn.pushname !== "") {
            return o("WAWebConnModel").Conn.pushname;
        }
        return n;
    }
    function DComponent(t) {
        const n = o("react-compiler-runtime").c(16);
        const { children, className, contact, msgKey, onClick, style, xstyle } = t;
        let _;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebFrontendContactGetters").getFormattedUser,
                o("WAWebContactGetters").getIsMe
            ];
            n[0] = _;
        } else {
            _ = n[0];
        }
        const f = o("useWAWebContactValues").useContactValues(contact.id, _);
        const g = f[0];
        const h = f[1];
        let y;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            y = [
                o("WAWebMsgGetters").getT,
                o("WAWebFrontendMsgGetters").getSenderObj
            ];
            n[1] = y;
        } else {
            y = n[1];
        }
        const C = o("useWAWebMsgValues").useMsgValues(msgKey, y);
        const b = C[0];
        let v;
        if (n[2] !== b) {
            v = o("WAWebClock").Clock.timeStr(b);
            n[2] = b;
            n[3] = v;
        } else {
            v = n[3];
        }
        const S = v;
        let R;
        if (n[4] !== g || n[5] !== h) {
            R = c(h, g);
            n[4] = g;
            n[5] = h;
            n[6] = R;
        } else {
            R = n[6];
        }
        const L = R;
        let E;
        if (n[7] !== className || n[8] !== xstyle) {
            E = o("WAWebClassnames").classnamesConvertMeToStylexPlease(className, (e || (e = r("stylex")))(xstyle));
            n[7] = className;
            n[8] = xstyle;
            n[9] = E;
        } else {
            E = n[9];
        }
        const prePlainText = `[${S}] ${L}: `;
        let I;
        if (n[10] !== children || n[11] !== onClick || n[12] !== style || n[13] !== E || n[14] !== prePlainText) {
            const Component = o("WAWebCopyPasteCopyable.react").CopyableDiv;
            I = <Component className={E} onClick={onClick} prePlainText={prePlainText} style={style}>{children}</Component>;
            n[10] = children;
            n[11] = onClick;
            n[12] = style;
            n[13] = E;
            n[14] = prePlainText;
            n[15] = I;
        } else {
            I = n[15];
        }
        return I;
    }
    l.default = DComponent;
}, 98);
__d("WAWebMemberLabelHooks", [
    "WAWebMemberLabelCollection",
    "WAWebMemberLabelKey",
    "WAWebMemberLabelsFrontendUtils",
    "WAWebUserPrefsMeUser",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(chatId, t) {
        return new (r("WAWebMemberLabelKey"))({
            chatId,
            member: t
        });
    }
    function c(e) {
        if (e) {
            return r("WAWebMemberLabelCollection").get(e)?.label;
        }
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e) {
            n = c(e);
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const a = useState(n);
        const i = a[0];
        const l = a[1];
        let u;
        if (t[2] !== e) {
            u = e?.toString() ?? "";
            t[2] = e;
            t[3] = u;
        } else {
            u = t[3];
        }
        const m = u;
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = function(t) {
                let e = t?.label;
                if (e === "") {
                    e = null;
                }
                l(e);
            };
            t[4] = p;
        } else {
            p = t[4];
        }
        o("useWAWebListener").useListener(r("WAWebMemberLabelCollection"), m, p);
        return i;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(4);
        let n;
        if (t[0] !== e) {
            const a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            n = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom({
                from: "chat_and_member",
                chat: e,
                member: a
            });
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        const l = d(n);
        let s;
        if (t[2] !== l) {
            s = r("isStringNotNullAndNotWhitespaceOnly")(l);
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        return s;
    }
    l.createMemberLabelKey = u;
    l.useMemberLabelValue = d;
    l.useHasSelfMemberLabelForChat = m;
}, 98);
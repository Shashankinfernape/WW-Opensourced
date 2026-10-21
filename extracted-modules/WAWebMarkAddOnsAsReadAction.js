__d("WAWebMarkAddOnsAsReadAction", [
    "WAWebCommentCollection",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageAddOnType",
    "WAWebPollsPollVoteCollection",
    "WAWebReactionsCollection",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(e.values()).flat();
            if (t.length !== 0) {
                yield o("WAWebSendReadReceiptJob").sendAddOnReadReceipts(t);
                const n = new Map;
                for (const [a, i] of e){
                    n.set(a, i.map(({ msgKey })=>msgKey));
                }
                yield o("WAWebMarkAddOnsAsReadJob").markAddOnsAsReadJob(n);
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        for (const [n, a] of e){
            switch(n){
                case o("WAWebMessageAddOnType").MessageAddOnType.Reaction:
                    o("WAWebReactionsCollection").ReactionsCollection.markReactionsAsRead(a);
                    break;
                case o("WAWebMessageAddOnType").MessageAddOnType.PollVote:
                    for (const i of a){
                        const l = o("WAWebPollsPollVoteCollection").PollVoteCollection.getByMsgKey(i);
                        if (l != null) {
                            l.read = true;
                        }
                    }
                    break;
                case o("WAWebMessageAddOnType").MessageAddOnType.Comment:
                    for (const s of a){
                        const u = o("WAWebCommentCollection").CommentCollection.getByMsgKey(s);
                        if (u != null) {
                            u.read = true;
                        }
                    }
                    break;
                default:
                    if (a != null && a.length > 0) {
                        throw r("err")(`Unsupported add-on type: ${String(n)}`);
                    }
            }
        }
    }
    function m() {
        const e = o("react-compiler-runtime").c(5);
        const t = r("useLazyRef")(p);
        let n;
        if (e[0] !== t) {
            n = function() {
                if (!(!document.hasFocus() || t.current.size === 0)) {
                    u(t.current);
                    t.current = new Map;
                }
            };
            e[0] = t;
            e[1] = n;
        } else {
            n = e[1];
        }
        const a = n;
        let i;
        if (e[2] !== a || e[3] !== t) {
            i = function({ addOns, addOnType }) {
                let i = t.current.get(addOnType);
                if (i == null) {
                    i = [];
                    t.current.set(addOnType, i);
                }
                i.push(...addOns);
                a();
            };
            e[2] = a;
            e[3] = t;
            e[4] = i;
        } else {
            i = e[4];
        }
        const l = i;
        o("useWAWebListener").useListener(window, "focus", a);
        return l;
    }
    function p() {
        return new Map;
    }
    l.markAddOnsAsReadUiAction = d;
    l.useMarkAddOnsAsRead = m;
}, 98);
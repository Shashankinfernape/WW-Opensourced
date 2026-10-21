__d("WAWebPollsMessageComponent", [
    "WAWebMsgGetters",
    "WAWebPollResultSnapshotUtils",
    "WAWebPollsMessageComponentView",
    "WAWebPollsUseResults",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebNewsletterPollsResults"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msgKey"
    ];
    const s = [
        "msgKey"
    ];
    const u = [
        "msgKey"
    ];
    const c = [
        "msgKey"
    ];
    let d;
    const m = d || (d = o("react"));
    function p(t) {
        const n = o("react-compiler-runtime").c(10);
        let r;
        let a;
        if (n[0] !== t) {
            r = t.msgKey;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        let i;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            n[3] = i;
        } else {
            i = n[3];
        }
        const l = o("useWAWebMsgValues").useMsgValues(r, i);
        const s = l[0];
        if (s) {
            let u;
            if (n[4] !== r || n[5] !== a) {
                u = <F16 {...babelHelpers.extends({
                    msgKey: r
                }, a)}/>;
                n[4] = r;
                n[5] = a;
                n[6] = u;
            } else {
                u = n[6];
            }
            return u;
        }
        let c;
        if (n[7] !== r || n[8] !== a) {
            c = <_ {...babelHelpers.extends({
                msgKey: r
            }, a)}/>;
            n[7] = r;
            n[8] = a;
            n[9] = c;
        } else {
            c = n[9];
        }
        return c;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(7);
        let n;
        let r;
        if (t[0] !== e) {
            n = e.msgKey;
            r = babelHelpers.objectWithoutPropertiesLoose(e, s);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        const a = o("WAWebPollsUseResults").useResults(n);
        let i;
        if (t[3] !== n || t[4] !== a || t[5] !== r) {
            i = m.jsx(o("WAWebPollsMessageComponentView").PollCreationMessageComponent, babelHelpers.extends({
                msgKey: n
            }, r, {
                optionsToResults: a
            }));
            t[3] = n;
            t[4] = a;
            t[5] = r;
            t[6] = i;
        } else {
            i = t[6];
        }
        return i;
    }
    function F16(e) {
        const t = o("react-compiler-runtime").c(7);
        let n;
        let r;
        if (t[0] !== e) {
            n = e.msgKey;
            r = babelHelpers.objectWithoutPropertiesLoose(e, u);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        const a = o("useWAWebNewsletterPollsResults").useNewsletterPollsResults(n);
        let i;
        if (t[3] !== n || t[4] !== a || t[5] !== r) {
            i = m.jsx(o("WAWebPollsMessageComponentView").PollCreationMessageComponent, babelHelpers.extends({
                msgKey: n
            }, r, {
                optionsToResults: a
            }));
            t[3] = n;
            t[4] = a;
            t[5] = r;
            t[6] = i;
        } else {
            i = t[6];
        }
        return i;
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(12);
        let n;
        let r;
        if (t[0] !== e) {
            n = e.msgKey;
            r = babelHelpers.objectWithoutPropertiesLoose(e, c);
            t[0] = e;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        let a;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getPollVotesSnapshot
            ];
            t[3] = a;
        } else {
            a = t[3];
        }
        const i = o("useWAWebMsgValues").useMsgValues(n, a);
        const l = i[0];
        let s;
        if (t[4] !== l?.pollVotes) {
            s = l?.pollVotes ?? [];
            t[4] = l?.pollVotes;
            t[5] = s;
        } else {
            s = t[5];
        }
        let d;
        if (t[6] !== s) {
            d = o("WAWebPollResultSnapshotUtils").aggegateVoteSnapshot(s);
            t[6] = s;
            t[7] = d;
        } else {
            d = t[7];
        }
        const p = d;
        let _;
        if (t[8] !== n || t[9] !== p || t[10] !== r) {
            _ = m.jsx(o("WAWebPollsMessageComponentView").PollSnapshotMessageComponent, babelHelpers.extends({
                msgKey: n
            }, r, {
                optionsToResults: p
            }));
            t[8] = n;
            t[9] = p;
            t[10] = r;
            t[11] = _;
        } else {
            _ = t[11];
        }
        return _;
    }
    l.Poll = p;
    l.PollResultSnapshot = g;
}, 98);
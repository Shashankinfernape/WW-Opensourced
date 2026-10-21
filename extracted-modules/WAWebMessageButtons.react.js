__d("WAWebMessageButtons.react", [
    "WAWebBizAiHubReplyButtonUtils",
    "WAWebButtonGetters",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMAIBAPrimaryRedirectPopup.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebSendButtonsMsgReplyChatAction",
    "WAWebSendMsgResultAction",
    "react",
    "react-compiler-runtime",
    "useWAWebButtonValues",
    "useWAWebMsgValues",
    "useWAWebSetModelValue",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 3;
    const c = 10;
    function D8Component(e) {
        const t = o("react-compiler-runtime").c(20);
        const { isStacked, msgKey, replyButton } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getBizBotType,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const c = u[0];
        const d = u[1];
        const m = u[2];
        let p;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebButtonGetters").getSelected,
                o("WAWebButtonGetters").getDisplayText,
                o("WAWebButtonGetters").getId
            ];
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = o("useWAWebButtonValues").useButtonValues(replyButton, p);
        const f = _[0];
        const g = _[1];
        const h = _[2];
        const y = f || msgKey.fromMe && d != null;
        const C = o("useWAWebSetModelValue").useSetModelValue(replyButton, "selected");
        let b;
        if (t[2] !== h || t[3] !== m || t[4] !== msgKey || t[5] !== replyButton || t[6] !== C) {
            b = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                const t = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, m);
                if (!(e == null || t == null)) {
                    if (o("WAWebBizAiHubReplyButtonUtils").isPrimaryOnlyBizAiHubReplyButton(h) && o("WAWebContactGetters").getIsAiHub(t.contact)) {
                        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}));
                        return;
                    }
                    C(true);
                    r("WAWebSendButtonsMsgReplyChatAction")(e, replyButton, t).then((e)=>{
                        if (e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                            C(false);
                        }
                    }).catch(()=>{
                        C(false);
                    });
                }
            };
            t[2] = h;
            t[3] = m;
            t[4] = msgKey;
            t[5] = replyButton;
            t[6] = C;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        if (t[8] !== y) {
            S = {
                disabled: y
            };
            t[8] = y;
            t[9] = S;
        } else {
            S = t[9];
        }
        const R = r("useWAWebStaticButtonA11y")(v, S);
        const L = R[0];
        const E = R[1];
        let k;
        if (t[10] !== y || t[11] !== isStacked) {
            k = ({
                0: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk",
                2: "x4pfjvb x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1",
                1: "x1iyjqo2 xs83m0k xnalus7 x193iq5w x1ypdohk x1l7klhg",
                3: "x1iyjqo2 xs83m0k xnalus7 x193iq5w xt0e3qv x1gnnqk1 x1l7klhg"
            })[!!y << 1 | !!isStacked << 0];
            t[10] = y;
            t[11] = isStacked;
            t[12] = k;
        } else {
            k = t[12];
        }
        const I = k;
        let T;
        if (t[13] !== E || t[14] !== L || t[15] !== I || t[16] !== y || t[17] !== g || t[18] !== c) {
            T = g ? <div {...babelHelpers.extends({
                ref: L,
                className: I
            }, E, {
                children: <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur"
                    },
                    2: {
                        className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1ew7x2d x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4"
                    },
                    1: {
                        className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 xo1mcw5 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur x1g5lz36"
                    },
                    3: {
                        className: "x9f619 x78zum5 x1iyjqo2 xs83m0k xc26acl x6s0dn4 xl56j7k x193iq5w x90ne7k x1yrsyyn x1bjonze x12xbjc7 x7coems x7r5mf7 xbpr5gs xat24cr xvkbmy x1f6kntn x1fc57z9 x1liijdw xu342n7 xelbjmh x16pgt24 x1b9z3ur xhslqc4 x1g5lz36"
                    }
                }[!!y << 1 | !!c << 0], {
                    children: <span className="x6ikm8r x10wlt62 xlyipyv xuxw1ft">{g}</span>
                })}/>
            })}/> : null;
            t[13] = E;
            t[14] = L;
            t[15] = I;
            t[16] = y;
            t[17] = g;
            t[18] = c;
            t[19] = T;
        } else {
            T = t[19];
        }
        return T;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_msgKey = e.msgKey;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getReplyButtons
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msgKey, r);
        const i = a[0];
        if (i == null || i.length === 0) {
            return null;
        }
        let isStacked;
        let c;
        if (t[1] !== i) {
            const m = i.some(p);
            isStacked = i.length >= u || m;
            c = ({
                0: {
                    className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w"
                },
                1: {
                    className: "x9f619 x78zum5 x1a02dak x16xob1z xefnzgg xnelg8w x173radd"
                }
            })[!!m << 0];
            t[1] = i;
            t[2] = isStacked;
            t[3] = c;
        } else {
            isStacked = t[2];
            c = t[3];
        }
        let _;
        if (t[4] !== isStacked || t[5] !== e_msgKey || t[6] !== i) {
            let f;
            if (t[8] !== isStacked || t[9] !== e_msgKey) {
                f = function(replyButton, r) {
                    return <D8Component key={r} msgKey={e_msgKey} replyButton={replyButton} isStacked={isStacked}/>;
                };
                t[8] = isStacked;
                t[9] = e_msgKey;
                t[10] = f;
            } else {
                f = t[10];
            }
            _ = i.map(f);
            t[4] = isStacked;
            t[5] = e_msgKey;
            t[6] = i;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let g;
        if (t[11] !== c || t[12] !== _) {
            g = <div {...babelHelpers.extends({}, c, {
                children: _
            })}/>;
            t[11] = c;
            t[12] = _;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    function p(e) {
        return e.displayText.length > c;
    }
    l.default = m;
}, 98);
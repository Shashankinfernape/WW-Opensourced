__d("WAWebPollAddedByLabel", [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPollAddOptionContributor",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_addOptionMsg = e.addOptionMsg;
        let r;
        let a;
        let i;
        let l;
        if (t[0] !== e_addOptionMsg) {
            l = Symbol.for("react.early_return_sentinel");
            e: {
                const c = o("WAWebMsgGetters").getSender(e_addOptionMsg);
                if (c == null) {
                    l = null;
                    break e;
                }
                if (o("WAWebUserPrefsMeUser").isMeAccount(c)) {
                    let p;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        p = <M9Component label={s._("Added by you")}/>;
                        t[5] = p;
                    } else {
                        p = t[5];
                    }
                    l = p;
                    break e;
                }
                r = d;
                a = o("WAWebFrontendMsgGetters").getChat(e_addOptionMsg);
                i = o("WAWebContactCollection").ContactCollection.gadd(c);
            }
            t[0] = e_addOptionMsg;
            t[1] = r;
            t[2] = a;
            t[3] = i;
            t[4] = l;
        } else {
            r = t[1];
            a = t[2];
            i = t[3];
            l = t[4];
        }
        if (l !== Symbol.for("react.early_return_sentinel")) {
            return l;
        }
        let _;
        if (t[6] !== r || t[7] !== a || t[8] !== i) {
            _ = u.jsx(r, {
                chat: a,
                contact: i
            });
            t[6] = r;
            t[7] = a;
            t[8] = i;
            t[9] = _;
        } else {
            _ = t[9];
        }
        return _;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { chat, contact } = e;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebFrontendContactGetters").getFormattedName,
                o("WAWebFrontendContactGetters").getIsMyContact,
                o("WAWebContactGetters").getNotifyName
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebContactValues").useContactValues(contact.id, a);
        const formattedName = i[0];
        const isMyContact = i[1];
        const d = i[2];
        let p;
        if (t[1] !== chat || t[2] !== contact || t[3] !== formattedName || t[4] !== isMyContact || t[5] !== d) {
            p = <M9Component label={s._("Added by {contributor-name}", [
                s._param("contributor-name", o("WAWebPollAddOptionContributor").resolveContributorName({
                    chat,
                    contact,
                    formattedName,
                    isMyContact,
                    notifyName: d
                }))
            ])}/>;
            t[1] = chat;
            t[2] = contact;
            t[3] = formattedName;
            t[4] = isMyContact;
            t[5] = d;
            t[6] = p;
        } else {
            p = t[6];
        }
        return p;
    }
    function M9Component(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_label = e.label;
        let a;
        if (t[0] !== e_label) {
            const Component = r("WDSText.react");
            a = <Component type="Body2" colorName="contentDeemphasized">{e_label}</Component>;
            t[0] = e_label;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = c;
}, 226);
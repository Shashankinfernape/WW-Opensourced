__d("WAWebChatTextMentionMutatorComponent.react", [
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendContactGetters",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebLogUnknownUserDisplayed",
    "useWAWebOrgMemberDisplayName"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { contact, lastMessage, onClick, selectable, theme, unknownUserLogContext } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebContactGetters").getId,
                o("WAWebFrontendContactGetters").getDisplayName,
                o("WAWebFrontendContactGetters").getDisplayNameType,
                o("WAWebContactGetters").getNotifyName
            ];
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = o("useWAWebContactValues").useContactValues(e.contact.id, d);
        const p = m[0];
        const _ = m[1];
        const f = m[2];
        const g = m[3];
        let h;
        if (t[1] !== contact) {
            h = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(contact);
            t[1] = contact;
            t[2] = h;
        } else {
            h = t[2];
        }
        const y = h;
        const C = r("useWAWebOrgMemberDisplayName")(contact, p);
        let b;
        let ariaLabel;
        if (C != null) {
            b = C;
        } else if (y) {
            let S;
            if (t[3] !== g) {
                S = o("WAWebChatContactUtils").getFormattedNotifyName(g, false).toString();
                t[3] = g;
                t[4] = S;
            } else {
                S = t[4];
            }
            b = S;
            let R;
            if (t[5] !== g) {
                R = o("WAWebChatContactUtils").getAccessibleNotifyName(g).toString();
                t[5] = g;
                t[6] = R;
            } else {
                R = t[6];
            }
            ariaLabel = R;
        } else {
            b = _;
        }
        o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(unknownUserLogContext, contact, C == null && !y && f === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
        const L = b;
        let E;
        if (t[7] !== p) {
            E = p.toString();
            t[7] = p;
            t[8] = E;
        } else {
            E = t[8];
        }
        let k;
        if (t[9] !== ariaLabel || t[10] !== b || t[11] !== lastMessage || t[12] !== onClick || t[13] !== selectable || t[14] !== E || t[15] !== theme) {
            const Component = r("WAWebMentionMutatorComponentBase.react");
            k = <Component text={L} jid={E} onClick={onClick} theme={theme} selectable={selectable} ariaLabel={ariaLabel} lastMessage={lastMessage}/>;
            t[9] = ariaLabel;
            t[10] = b;
            t[11] = lastMessage;
            t[12] = onClick;
            t[13] = selectable;
            t[14] = E;
            t[15] = theme;
            t[16] = k;
        } else {
            k = t[16];
        }
        return k;
    }
    l.default = u;
}, 98);
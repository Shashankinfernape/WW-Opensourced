__d("WAWebOutContactCell.react", [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebDefaultUserIcon.react",
    "WAWebOutContactConsts",
    "WAWebOutContactGetters",
    "WAWebOutContactInviteButton.react",
    "WAWebPhoneUtils",
    "WAWebWamEnumCompanionInviteOriginType",
    "react",
    "react-compiler-runtime",
    "useWAWebOutContactInviteSend",
    "useWAWebOutContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function d(e) {
        const t = o("react-compiler-runtime").c(21);
        const { contact, entryPoint, inviteFlow, isSearchResult, onClick, searchMatch, testid, theme } = e;
        const _ = inviteFlow === o("WAWebOutContactConsts").WAWebOutContactInviteFlow.GroupInvite;
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebOutContactGetters").getName,
                o("WAWebOutContactGetters").getPhoneNumber
            ];
            t[0] = f;
        } else {
            f = t[0];
        }
        const g = o("useWAWebOutContactValues").useWAWebOutContactValues(contact.id, f);
        const h = g[0];
        const y = g[1];
        let C;
        if (t[1] !== y) {
            C = o("WAWebPhoneUtils").formatPhone(y);
            t[1] = y;
            t[2] = C;
        } else {
            C = t[2];
        }
        const b = C;
        const v = entryPoint ?? (isSearchResult === true ? o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_SEARCH : o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_LIST);
        let S;
        if (t[3] !== searchMatch) {
            S = searchMatch != null && searchMatch.results.length > 0 ? searchMatch.results.map((e)=>searchMatch.match.substring(e.startIndex, e.startIndex + e.length)).join(" ") : undefined;
            t[3] = searchMatch;
            t[4] = S;
        } else {
            S = t[4];
        }
        const R = S;
        const L = o("useWAWebOutContactInviteSend").useWAWebOutContactInviteSend(y, v, h);
        const { isSending, sendInviteOnce } = L;
        const I = onClick ?? (_ ? undefined : sendInviteOnce);
        const T = testid ?? "out-contact-cell";
        let D;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            D = <div className="x78zum5 x6s0dn4 xl56j7k">{u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
                height: 49,
                width: 49
            })}</div>;
            t[5] = D;
        } else {
            D = t[5];
        }
        let x;
        if (t[6] !== b || t[7] !== _) {
            x = _ ? s._("Not on WhatsApp") : b;
            t[6] = b;
            t[7] = _;
            t[8] = x;
        } else {
            x = t[8];
        }
        let $;
        if (t[9] !== _ || t[10] !== isSending || t[11] !== sendInviteOnce) {
            const Component = r("WAWebOutContactInviteButton.react");
            $ = _ ? null : <Component isSending={isSending} onInvitePress={sendInviteOnce}/>;
            t[9] = _;
            t[10] = isSending;
            t[11] = sendInviteOnce;
            t[12] = $;
        } else {
            $ = t[12];
        }
        let P;
        if (t[13] !== h || t[14] !== I || t[15] !== R || t[16] !== T || t[17] !== x || t[18] !== $ || t[19] !== theme) {
            const Component = r("WAWebChatCell.react");
            P = <div><Component testid={T} contextEnabled={o("WAWebBoolFunc").returnFalse} theme={theme} image={D} primary={h} secondary={x} searchText={R} detail={$} onClick={I} idle={false}/></div>;
            t[13] = h;
            t[14] = I;
            t[15] = R;
            t[16] = T;
            t[17] = x;
            t[18] = $;
            t[19] = theme;
            t[20] = P;
        } else {
            P = t[20];
        }
        return P;
    }
    l.default = d;
}, 226);
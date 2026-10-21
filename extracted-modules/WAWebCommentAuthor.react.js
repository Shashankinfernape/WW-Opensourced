__d("WAWebCommentAuthor.react", [
    "WAWebName.react",
    "WAWebUserPrefsMeUser",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebDefaultProfileColors",
    "useWAWebGroupColors"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        container: {
            alignItems: "x1pha0wt",
            columnGap: "xmixu3c",
            display: "x3nfvp2",
            minWidth: "xeuugli",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(15);
        const { chat, contact } = t;
        const l = o("useWAWebGroupColors").useGroupsColorStyle(1, "color");
        const s = o("useWAWebDefaultProfileColors").useDefaultProfileColors(contact.id);
        const s_foreground = s.foreground;
        const m = r("useWAWebContactFormattedUsernameOrPhoneByChat")(chat, contact);
        const m_formattedUsernameOrPhone = m.formattedUsernameOrPhone;
        let _;
        if (n[0] !== contact.id || n[1] !== m_formattedUsernameOrPhone) {
            _ = !r("isStringNullOrEmpty")(m_formattedUsernameOrPhone) && !o("WAWebUserPrefsMeUser").isMeAccount(contact.id);
            n[0] = contact.id;
            n[1] = m_formattedUsernameOrPhone;
            n[2] = _;
        } else {
            _ = n[2];
        }
        const f = _;
        let g;
        if (n[3] !== l || n[4] !== s_foreground) {
            g = (e || (e = r("stylex"))).props(c.container, s_foreground ?? l);
            n[3] = l;
            n[4] = s_foreground;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== contact) {
            h = u.jsx(o("WAWebName.react").Name, {
                contact,
                elevatedPushNamesEnabled: true,
                titlify: true,
                ellipsify: true,
                you: true,
                showNotifyName: true
            });
            n[6] = contact;
            n[7] = h;
        } else {
            h = n[7];
        }
        let y;
        if (n[8] !== m_formattedUsernameOrPhone || n[9] !== f) {
            y = f ? <span className="xhslqc4 x6ikm8r x10wlt62 xlyipyv xuxw1ft">{m_formattedUsernameOrPhone}</span> : null;
            n[8] = m_formattedUsernameOrPhone;
            n[9] = f;
            n[10] = y;
        } else {
            y = n[10];
        }
        let C;
        if (n[11] !== g || n[12] !== h || n[13] !== y) {
            C = <span {...babelHelpers.extends({}, g, {
                children: [
                    h,
                    y
                ]
            })}/>;
            n[11] = g;
            n[12] = h;
            n[13] = y;
            n[14] = C;
        } else {
            C = n[14];
        }
        return C;
    }
    l.default = d;
}, 98);
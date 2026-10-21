__d("WAWebMessageCommunityWelcomeAdmin.react", [
    "fbt",
    "WAWebFormatLinkNotification",
    "WAWebGroupMetadataCollection",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityWelcomeAdminTitle.react",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSPaddings.stylex",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingTop5: {
            paddingTop: "x123j3cw",
            $$css: true
        },
        paddingBottom6: {
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    function m(t) {
        const a = o("react-compiler-runtime").c(20);
        const { author, chat, templateParams } = t;
        const m = templateParams.length > 0 ? templateParams[0] : null;
        let p;
        if (m instanceof r("WAWebWid")) {
            p = m;
        } else if (!r("isStringNullOrEmpty")(m)) {
            let _;
            if (a[0] !== m) {
                _ = o("WAWebWidFactory").createWid(m);
                a[0] = m;
                a[1] = _;
            } else {
                _ = a[1];
            }
            p = _;
        }
        let f;
        if (a[2] !== p) {
            f = p != null ? r("WAWebGroupMetadataCollection").get(p) : null;
            a[2] = p;
            a[3] = f;
        } else {
            f = a[3];
        }
        const g = f;
        if (g != null && g.parentGroup) {
            p = g.parentGroup;
        }
        const h = o("WAWebUserPrefsMeUser").isMeAccount(chat.groupMetadata?.owner);
        if (!h) {
            let y;
            if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
                y = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor12, d.paddingTop5, d.paddingBottom6);
                a[4] = y;
            } else {
                y = a[4];
            }
            let C;
            if (a[5] !== author || a[6] !== templateParams) {
                C = o("WAWebFormatLinkNotification").formatLinkNotification({
                    author,
                    clickable: true,
                    subject: null,
                    subtype: "community_create",
                    templateParams
                });
                a[5] = author;
                a[6] = templateParams;
                a[7] = C;
            } else {
                C = a[7];
            }
            let b;
            if (a[8] !== C) {
                b = <div {...babelHelpers.extends({}, y, {
                    children: C
                })}/>;
                a[8] = C;
                a[9] = b;
            } else {
                b = a[9];
            }
            return b;
        }
        if (p == null) {
            return null;
        }
        let v;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            v = <div className="xe2zdcy x2vl965">{s._("Send important admin updates to all your members at once.")}</div>;
            a[10] = v;
        } else {
            v = a[10];
        }
        const subtitle = v;
        let R;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Manage community");
            a[11] = R;
        } else {
            R = a[11];
        }
        const L = R;
        const communityId = p;
        const chat_id = chat.id;
        let I;
        if (a[12] !== author || a[13] !== chat || a[14] !== templateParams) {
            I = o("WAWebMessageCommunityWelcomeAdminTitle.react").communityWelcomeAdminTitle({
                templateParams,
                chat,
                author
            });
            a[12] = author;
            a[13] = chat;
            a[14] = templateParams;
            a[15] = I;
        } else {
            I = a[15];
        }
        let T;
        if (a[16] !== chat.id || a[17] !== p || a[18] !== I) {
            T = c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
                communityId,
                subgroupId: chat_id,
                title: I,
                subtitle,
                footer: L
            });
            a[16] = chat.id;
            a[17] = p;
            a[18] = I;
            a[19] = T;
        } else {
            T = a[19];
        }
        return T;
    }
    l.MessageCommunityWelcomeAdmin = m;
}, 226);
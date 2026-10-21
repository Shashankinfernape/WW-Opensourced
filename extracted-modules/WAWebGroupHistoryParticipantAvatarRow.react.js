__d("WAWebGroupHistoryParticipantAvatarRow.react", [
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 56;
    const c = 72;
    const d = {
        cell: {
            alignItems: "x6s0dn4",
            rowGap: "x129bwdz",
            flexShrink: "x2lah0s",
            width: "xni59qk",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(8);
        const { onAvatarClick, participants } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x78zum5 x1q0g3np xl56j7k x1s70e7g xw2csxc x1nbhmlj"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== onAvatarClick || t[2] !== participants) {
            let c;
            if (t[4] !== onAvatarClick) {
                c = function(t, a) {
                    const Component = o("WAWebDetailImage.react").DetailImage;
                    const Component_1 = r("WDSText.react");
                    const Component_2 = o("WAWebFlex.react").FlexColumn;
                    return <Component_2 key={t.id.toString()} xstyle={d.cell}><Component id={t.contact.id} size={u} onClick={onAvatarClick} testId={`group-history-post-join-avatar-${a}`}/><div className="xmbed50 x6ikm8r x10wlt62 xlyipyv xuxw1ft x2b8uid"><Component_1 type="Body3" colorName="contentDeemphasized">{o("WAWebFrontendContactGetters").getFormattedShortName(t.contact)}</Component_1></div></Component_2>;
                };
                t[4] = onAvatarClick;
                t[5] = c;
            } else {
                c = t[5];
            }
            l = participants.map(c);
            t[1] = onAvatarClick;
            t[2] = participants;
            t[3] = l;
        } else {
            l = t[3];
        }
        let m;
        if (t[6] !== l) {
            m = <div {...babelHelpers.extends({}, i, {
                "data-testid": "group-history-post-join-avatar-row",
                children: l
            })}/>;
            t[6] = l;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    l.default = m;
}, 98);
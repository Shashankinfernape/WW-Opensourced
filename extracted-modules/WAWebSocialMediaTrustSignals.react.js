__d("WAWebSocialMediaTrustSignals.react", [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebWdsIcLogoFacebookIcon.react",
    "WAWebWdsIcLogoInstagramIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = {
        iconColor: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const d = n("$InternalEnum")({
        FACEBOOK: "facebook",
        INSTAGRAM: "instagram"
    });
    function m(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_socialMediaSignals = e.socialMediaSignals;
        let r;
        if (t[0] !== e_socialMediaSignals) {
            r = e_socialMediaSignals.get(d.FACEBOOK);
            t[0] = e_socialMediaSignals;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] !== e_socialMediaSignals) {
            i = e_socialMediaSignals.get(d.INSTAGRAM);
            t[2] = e_socialMediaSignals;
            t[3] = i;
        } else {
            i = t[3];
        }
        const l = i;
        const u = a != null && l != null;
        let c;
        if (t[4] !== a) {
            c = p(o("WAWebWdsIcLogoFacebookIcon.react").WdsIcLogoFacebookIcon, a);
            t[4] = a;
            t[5] = c;
        } else {
            c = t[5];
        }
        let m;
        if (t[6] !== u) {
            m = u && <> • </>;
            t[6] = u;
            t[7] = m;
        } else {
            m = t[7];
        }
        let _;
        if (t[8] !== l) {
            _ = p(o("WAWebWdsIcLogoInstagramIcon.react").WdsIcLogoInstagramIcon, l);
            t[8] = l;
            t[9] = _;
        } else {
            _ = t[9];
        }
        let f;
        if (t[10] !== c || t[11] !== m || t[12] !== _) {
            const Component = o("WAWebFlex.react").FlexRow;
            f = <Component gap={4}>{c}{m}{_}</Component>;
            t[10] = c;
            t[11] = m;
            t[12] = _;
            t[13] = f;
        } else {
            f = t[13];
        }
        return f;
    }
    function p(e, t) {
        if (t == null) {
            return null;
        }
        const Component = o("WAWebText.react").WAWebTextSmall;
        const Component_1 = o("WAWebFlex.react").FlexRow;
        return <Component_1 gap={2} align="center">{s.jsx(e, {
            iconXstyle: c.iconColor,
            viewBox: {
                width: 32,
                height: 32,
                x: -4,
                y: -4
            }
        })}<Component>{t}</Component></Component_1>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.SocialMediaTrustSignalSource = d;
    l.WAWebSocialMediaTrustSignals = m;
}, 98);
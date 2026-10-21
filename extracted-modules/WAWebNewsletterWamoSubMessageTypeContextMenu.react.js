__d("WAWebNewsletterWamoSubMessageTypeContextMenu.react", [
    "fbt",
    "WAWebNewsletterWamoSubMessageType",
    "WAWebNewsletterWamoSubMessageTypeContextMenuItem.react",
    "WDSIconIcPublic.react",
    "WDSIconWdsIcPremiumChannelIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_onSelect = e.onSelect;
        let r;
        if (t[0] !== e_onSelect) {
            r = <div><D42 onSelect={e_onSelect}/><M24 onSelect={e_onSelect}/></div>;
            t[0] = e_onSelect;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    function D42(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_onSelect = e.onSelect;
        let a;
        if (t[0] !== e_onSelect) {
            a = function(t) {
                t.preventDefault();
                e_onSelect(o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.Public);
            };
            t[0] = e_onSelect;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        let c;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WDSIconIcPublic.react"), {});
            c = s._("Public");
            d = s._("Anyone can view");
            t[2] = l;
            t[3] = c;
            t[4] = d;
        } else {
            l = t[2];
            c = t[3];
            d = t[4];
        }
        let m;
        if (t[5] !== i) {
            m = u.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"), {
                testid: "mi-public-message",
                action: i,
                icon: l,
                text: c,
                description: d
            });
            t[5] = i;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    function M24(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_onSelect = e.onSelect;
        let a;
        if (t[0] !== e_onSelect) {
            a = function(t) {
                t.preventDefault();
                e_onSelect(o("WAWebNewsletterWamoSubMessageType").NewsletterWamoSubMessageType.WamoSub);
            };
            t[0] = e_onSelect;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        let c;
        let d;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WDSIconWdsIcPremiumChannelIcon.react"), {
                height: 24,
                width: 24,
                testid: "premium-channel"
            });
            c = s._("Subscribers");
            d = s._("Only subscribers can view");
            t[2] = l;
            t[3] = c;
            t[4] = d;
        } else {
            l = t[2];
            c = t[3];
            d = t[4];
        }
        let m;
        if (t[5] !== i) {
            m = u.jsx(r("WAWebNewsletterWamoSubMessageTypeContextMenuItem.react"), {
                testid: "mi-wamo-message",
                action: i,
                icon: l,
                text: c,
                description: d
            });
            t[5] = i;
            t[6] = m;
        } else {
            m = t[6];
        }
        return m;
    }
    l.default = c;
}, 226);
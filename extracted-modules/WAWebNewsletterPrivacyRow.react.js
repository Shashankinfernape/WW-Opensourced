__d("WAWebNewsletterPrivacyRow.react", [
    "WAWebChatInfoDrawerRow.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { icon, onClick, text, title } = e;
        let l;
        if (t[0] !== title) {
            l = s.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
                title
            });
            t[0] = title;
            t[1] = l;
        } else {
            l = t[1];
        }
        const u = l;
        let c;
        if (t[2] !== text) {
            c = s.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed, {
                title: text
            });
            t[2] = text;
            t[3] = c;
        } else {
            c = t[3];
        }
        const secondaryTitle = c;
        let m;
        if (t[4] !== icon || t[5] !== onClick || t[6] !== secondaryTitle || t[7] !== u) {
            const Component = o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed;
            m = <Component onClick={onClick} icon={icon} title={u} secondaryTitle={secondaryTitle}/>;
            t[4] = icon;
            t[5] = onClick;
            t[6] = secondaryTitle;
            t[7] = u;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = u;
}, 98);
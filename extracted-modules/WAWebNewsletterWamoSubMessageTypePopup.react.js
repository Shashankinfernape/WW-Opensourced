__d("WAWebNewsletterWamoSubMessageTypePopup.react", [
    "WAWebDropdown.react",
    "WAWebL10N",
    "WAWebNewsletterWamoSubMessageTypeContextMenu.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(11);
        const { handleSelect, onDismiss, popupAnchorEl } = e;
        const l = r("useWAWebIsKeyboardUser")();
        const l_isKeyboardUser = l.isKeyboardUser;
        if (popupAnchorEl == null) {
            return null;
        }
        let c;
        if (t[0] !== handleSelect) {
            const Component = r("WAWebNewsletterWamoSubMessageTypeContextMenu.react");
            c = <Component onSelect={handleSelect}/>;
            t[0] = handleSelect;
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== l_isKeyboardUser || t[3] !== popupAnchorEl || t[4] !== c) {
            d = {
                menu: c,
                dirY: o("WAWebDropdown.react").DirY.TOP,
                dirX: r("WAWebL10N").isRTL() ? o("WAWebDropdown.react").DirX.RIGHT : o("WAWebDropdown.react").DirX.LEFT,
                type: o("WAWebDropdown.react").MenuType.NewsletterWamoSubMessageTypePopup,
                flipOnRTL: true,
                testid: "newsletter-wamo-message-type-popup",
                anchor: popupAnchorEl,
                autoFocus: l_isKeyboardUser
            };
            t[2] = l_isKeyboardUser;
            t[3] = popupAnchorEl;
            t[4] = c;
            t[5] = d;
        } else {
            d = t[5];
        }
        const m = d;
        let p;
        if (t[6] !== m) {
            p = s.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: m
            });
            t[6] = m;
            t[7] = p;
        } else {
            p = t[7];
        }
        let _;
        if (t[8] !== onDismiss || t[9] !== p) {
            const Component = o("WAWebUimUie.react").UIE;
            _ = <Component displayName="NewsletterWamoSubMessageTypePopup" escapable popable dismissOnWindowResize requestDismiss={onDismiss}>{p}</Component>;
            t[8] = onDismiss;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    l.default = u;
}, 98);
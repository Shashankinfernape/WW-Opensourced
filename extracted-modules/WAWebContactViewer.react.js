__d("WAWebContactViewer.react", [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebVcardModalDetails.react",
    "WAWebVcardParsingUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const { onSaveContact, username, vcard } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                surface: "contact-viewer",
                viewName: "contact-viewer"
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        let c;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebDrawerHeader.react").DrawerHeader;
            c = <Component title={s._("View contact")} type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP} onCancel={o("WAWebModalManager").closeModalManager}/>;
            t[1] = c;
        } else {
            c = t[1];
        }
        let d;
        if (t[2] !== vcard) {
            d = o("WAWebVcardParsingUtils").vcardThumbnail(vcard);
            t[2] = vcard;
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== onSaveContact || t[5] !== d || t[6] !== username || t[7] !== vcard) {
            const Component = r("WAWebVcardModalDetails.react");
            const Component_1 = o("WAWebKeyboardHotKeys.react").HotKeys;
            const Component_2 = r("WAWebDrawerBody.react");
            const Component_3 = r("WAWebDrawer.react");
            const Component_4 = o("WAWebModal.react").Modal;
            m = <Component_4 type={o("WAWebModal.react").ModalTheme.Box} tsNavigationData={l}><Component_3 key="vcard-modal" disableNavigationLogging>{c}<Component_2><Component_1><Component parsedVcard={vcard} thumbnail={d} onSaveContact={onSaveContact} username={username}/></Component_1></Component_2></Component_3></Component_4>;
            t[4] = onSaveContact;
            t[5] = d;
            t[6] = username;
            t[7] = vcard;
            t[8] = m;
        } else {
            m = t[8];
        }
        return m;
    }
    l.default = c;
}, 226);
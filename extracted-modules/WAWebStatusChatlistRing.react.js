__d("WAWebStatusChatlistRing.react", [
    "WAWebABProps",
    "WAWebStatusCollection",
    "WAWebStatusProfilePhotoRingWrapper.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { contact, profilePhotoSize, rowIndex, rowSection } = e;
        let c;
        if (t[0] !== contact.id) {
            c = function() {
                return o("WAWebStatusCollection").StatusCollection.get(contact.id);
            };
            t[0] = contact.id;
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = e_useState(c);
        const m = d[1];
        const p = e_useState(contact.id);
        const _ = p[0];
        const f = p[1];
        if (contact.id !== _) {
            m(o("WAWebStatusCollection").StatusCollection.get(contact.id));
            f(contact.id);
        }
        let g;
        if (t[2] !== contact.id) {
            g = contact.id.toString();
            t[2] = contact.id;
            t[3] = g;
        } else {
            g = t[3];
        }
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = o("WAWebABProps").getABPropConfigValue("wa_web_show_status_ring_for_no_unread");
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] !== contact || t[6] !== profilePhotoSize || t[7] !== rowIndex || t[8] !== rowSection || t[9] !== g) {
            y = s.jsx(r("WAWebStatusProfilePhotoRingWrapper.react"), {
                contact,
                hideWhenNoUnreadStatuses: !h,
                profilePhotoSize,
                rowSection,
                rowIndex,
                logPogImpression: true
            }, g);
            t[5] = contact;
            t[6] = profilePhotoSize;
            t[7] = rowIndex;
            t[8] = rowSection;
            t[9] = g;
            t[10] = y;
        } else {
            y = t[10];
        }
        return y;
    }
    l.default = c;
}, 98);
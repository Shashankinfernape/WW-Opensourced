__d("WAWebContact.MenuItem", [
    "WAWebContactCell",
    "WAWebMenuItems.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { contact, onSelect } = e;
        let a;
        if (t[0] !== contact.id) {
            a = contact.id.toString();
            t[0] = contact.id;
            t[1] = a;
        } else {
            a = t[1];
        }
        const optionId = `contact-${a}`;
        let l;
        if (t[2] !== contact) {
            l = o("WAWebContactCell").getContactCellContent(contact);
            t[2] = contact;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] !== onSelect || t[5] !== optionId || t[6] !== l) {
            u = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, babelHelpers.extends({
                optionId,
                onSelect
            }, l));
            t[4] = onSelect;
            t[5] = optionId;
            t[6] = l;
            t[7] = u;
        } else {
            u = t[7];
        }
        return u;
    }
    l.default = u;
}, 98);
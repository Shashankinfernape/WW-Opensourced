__d("WAWebPhoneNumberMutatorComponent.react", [
    "WAWebPhoneNumberWrapperMutatorComponent.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(5);
        const { canonicalPhone, fromMe, phoneNumber, selectable } = e;
        let u;
        if (t[0] !== canonicalPhone || t[1] !== fromMe || t[2] !== phoneNumber || t[3] !== selectable) {
            u = s.jsx(r("WAWebPhoneNumberWrapperMutatorComponent.react"), {
                selectable,
                phoneNumber,
                canonicalPhone,
                fromMe
            });
            t[0] = canonicalPhone;
            t[1] = fromMe;
            t[2] = phoneNumber;
            t[3] = selectable;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = u;
}, 98);
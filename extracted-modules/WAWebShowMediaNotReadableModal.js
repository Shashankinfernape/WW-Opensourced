__d("WAWebShowMediaNotReadableModal", [
    "WAWebMediaNotReadableModal.react",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        c(e);
        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaNotReadableModal.react"), {}));
    }
    function c(e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    l.default = u;
}, 98);
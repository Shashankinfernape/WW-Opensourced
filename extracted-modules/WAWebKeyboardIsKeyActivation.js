__d("WAWebKeyboardIsKeyActivation", [
    "WAWebKeyboardHotKeys.react"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        o("WAWebKeyboardHotKeys.react").SpecialKeyMap.enter,
        o("WAWebKeyboardHotKeys.react").SpecialKeyMap.space
    ]);
    function s(t) {
        let n = 0;
        const { charCode: r, keyCode: o } = t;
        if (r != null && r !== 0) {
            n = r;
        } else if (o != null && o !== 0) {
            n = o;
        }
        return e.has(n);
    }
    l.default = s;
}, 98);
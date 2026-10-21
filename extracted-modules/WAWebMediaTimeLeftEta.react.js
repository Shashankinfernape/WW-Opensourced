__d("WAWebMediaTimeLeftEta.react", [
    "fbt",
    "WAWebClock",
    "react",
    "stylex",
    "useWAWebTimeLeftMs"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    const m = 10 * 1000;
    function p({ children, loadedSize, sampling = 1, size, xstyle }) {
        const _ = u_useRef(false);
        const f = u_useRef(0);
        const g = o("useWAWebTimeLeftMs").useTimeLeftMs(loadedSize, size);
        if (!_.current && ++f.current >= sampling && g != null && g >= m) {
            _.current = true;
        }
        if (_.current === false || size == null || loadedSize == null || loadedSize >= size || g == null || g === 0) {
            return null;
        }
        return <><span {...babelHelpers.extends({
            "data-testid": "time-left-eta"
        }, (e || (e = r("stylex"))).props(xstyle), {
            children: s._("{progress}\u0025 ({eta})", [
                s._param("progress", <span className="x1rg5ohu">{Math.floor(loadedSize / size * 100)}</span>),
                s._param("eta", o("WAWebClock").Clock.timeLeftStr(Math.ceil(g / 1000)))
            ])
        })}/>{children}</>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 226);
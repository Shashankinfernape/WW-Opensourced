__d("WDSIconWdsIcLogoHatchFilled.react", [
    "WDSSvgComponentBase.react",
    "WDSSvgIconHelpers",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = "wds-ic-logo-hatch-filled";
    function d(t) {
        const n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
        return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, {
            children: <svg viewBox={n.viewBox} height={n.height} width={n.width} preserveAspectRatio="xMidYMid meet" className={(e || (e = r("stylex")))(n.iconXstyle)} fill="currentColor"><title>{c}</title><path fill="currentColor" d="M6.92 5.22c.73 0 1.24.57 1.24 1.45 0 .89-.14 1.69-.38 3.38-.17 1.19-.46 3-.58 3.75l.88-1.68a68.8 68.8 0 0 1 2.68-4.91c.45-.73.85-1.03 1.47-1.03.32 0 .7.17.9.38.25.3.3.77.3 1.29-.02.8-.12 2.06-.26 3.46l-.26 2.77a116.5 116.5 0 0 1 2.63-4.56c.47-.73.95-1.2 1.6-1.2.55 0 1.24.39 1.2 1.43-.06 1.54-.29 4.9-.39 6.4.68-1 1.58-2.46 1.91-3.01.34-.56.7-1.01 1.22-1.02.54-.02.9.35.92.92.02.57-.32 1.2-.77 1.93-.49.79-1.04 1.63-1.7 2.42-.67.79-1.28 1.38-2.2 1.38-.84 0-1.43-.55-1.47-1.57-.02-.53.08-1.67.15-2.57l.27-2.7c-.73 1.35-2.28 4.16-2.97 5.26-.68 1.08-1.01 1.45-1.73 1.45s-1.03-.51-1.04-1.3c-.02-.84.62-5.9.83-7.6-.35.75-1.2 2.58-1.74 3.67-.52 1.05-1.39 2.87-2.02 3.92-.46.75-.97 1.31-1.73 1.31-.75 0-1.18-.5-1.18-1.33 0-.82.23-2.18.49-3.88a151.93 151.93 0 0 1 .9-5.29l-1.96 3.04c-.35.55-.67.95-1.2.95-.58 0-.93-.46-.93-.99s.27-.93.7-1.65c.56-.92 1.57-2.18 2.12-2.83.65-.78 1.3-1.44 2.1-1.44z"/></svg>
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);
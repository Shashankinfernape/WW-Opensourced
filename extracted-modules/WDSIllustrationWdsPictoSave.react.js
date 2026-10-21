__d("WDSIllustrationWdsPictoSave.react", [
    "WDSIllustrationSvgComponentBase.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (e == null) {
            throw new TypeError(`Cannot destructure ${e}`);
        }
    }
    const u = e || (e = r("react"));
    const c = "wds-picto-save";
    function d(e) {
        const t = babelHelpers.extends({}, (s(e), e));
        return u.jsx(r("WDSIllustrationSvgComponentBase.react"), babelHelpers.extends({}, t, {
            children: <svg viewBox="0 0 88 88" height={88} width={88} preserveAspectRatio="xMidYMid meet" fill="none"><title>{c}</title><path fill="#25d366" stroke="#111b21" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M63.16 74.87 44 61.7 24.83 74.87c-.88.6-2.07-.03-2.07-1.09V19.71a6.8 6.8 0 0 1 6.8-6.82h28.88c3.75 0 6.8 3.06 6.8 6.82v54.06c0 1.07-1.2 1.7-2.07 1.1z"/></svg>
        }));
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);
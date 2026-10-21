__d("WDSIllustrationWdsPictoGenericWarning.react", [
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
    const c = "wds-picto-generic-warning";
    function DComponent(e) {
        const t = babelHelpers.extends({}, (s(e), e));
        return u.jsx(r("WDSIllustrationSvgComponentBase.react"), babelHelpers.extends({}, t, {
            children: <svg viewBox="0 0 88 88" height={88} width={88} preserveAspectRatio="xMidYMid meet" fill="none"><title>{c}</title><path d="M75 44C75 61.12 61.12 75 44 75 26.88 75 13 61.12 13 44 13 26.88 26.88 13 44 13c17.12 0 31 13.88 31 31z" fill="#FFB938" stroke="#111B21" strokeWidth={1.5}/><path d="M19.61 43.98c0-13.23 11.07-24.35 24.41-24.35 13.35 0 24.35 11.15 24.35 24.36 0 13.26-11.09 24.4-24.36 24.4-13.29 0-24.4-11.13-24.4-24.41z" fill="#FFB938" stroke="#111B21" strokeWidth={1.5}/><path d="M44.77 29.35h-1.4c-1.87 0-3.43 1.56-3.43 3.27v10.29c0 1.87 1.56 3.27 3.43 3.27h1.4c1.87 0 3.27-1.56 3.27-3.43V32.62c.16-1.71-1.4-3.27-3.27-3.27z" fill="white" stroke="#111B21" strokeWidth={1.5} strokeLinejoin="round"/><path d="M44.77 51.33h-1.4c-1.87 0-3.43 1.56-3.43 3.27v.78c0 1.87 1.56 3.27 3.43 3.27h1.4c1.87 0 3.27-1.56 3.27-3.43v-.62c.16-1.71-1.4-3.27-3.27-3.27z" fill="white" stroke="#111B21" strokeWidth={1.5} strokeLinejoin="round"/></svg>
        }));
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    l.default = DComponent;
}, 98);
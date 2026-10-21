__d("WAWebSelectModalSearchBox.react", [
    "WAWebChatListSearch.react",
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "ariaLabel",
        "enabled",
        "onDown",
        "onEnter",
        "onFocus",
        "onMouseDown",
        "searchType",
        "setSearchText",
        "xstyle"
    ];
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(28);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let ariaLabel;
        let u;
        let d;
        let m;
        let p;
        let _;
        let f;
        let g;
        let h;
        let y;
        if (n[3] !== a) {
            const C = a;
            ariaLabel = C.ariaLabel;
            h = C.enabled;
            d = C.onDown;
            m = C.onEnter;
            p = C.onFocus;
            _ = C.onMouseDown;
            f = C.searchType;
            g = C.setSearchText;
            y = C.xstyle;
            u = babelHelpers.objectWithoutPropertiesLoose(C, s);
            n[3] = a;
            n[4] = ariaLabel;
            n[5] = u;
            n[6] = d;
            n[7] = m;
            n[8] = p;
            n[9] = _;
            n[10] = f;
            n[11] = g;
            n[12] = h;
            n[13] = y;
        } else {
            ariaLabel = n[4];
            u = n[5];
            d = n[6];
            m = n[7];
            p = n[8];
            _ = n[9];
            f = n[10];
            g = n[11];
            h = n[12];
            y = n[13];
        }
        const b = h === undefined ? true : h;
        let v;
        if (n[14] !== g) {
            v = function(t) {
                g(t);
            };
            n[14] = g;
            n[15] = v;
        } else {
            v = n[15];
        }
        const onSearch = r("useWAWebDebouncedCallback")(v, 100);
        let R;
        if (n[16] !== ariaLabel || n[17] !== b || n[18] !== onSearch || n[19] !== u || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== _ || n[24] !== i || n[25] !== f || n[26] !== y) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            R = b ? <Component aria-label={ariaLabel} handlers={{
                down: d
            }} onFocus={p} onMouseDown={_} xstyle={y}>{c.jsx(o("WAWebChatListSearch.react").ListSearch, babelHelpers.extends({
                ref: i,
                onSearch,
                onEnter: m,
                type: f,
                ariaLabel
            }, u))}</Component> : null;
            n[16] = ariaLabel;
            n[17] = b;
            n[18] = onSearch;
            n[19] = u;
            n[20] = d;
            n[21] = m;
            n[22] = p;
            n[23] = _;
            n[24] = i;
            n[25] = f;
            n[26] = y;
            n[27] = R;
        } else {
            R = n[27];
        }
        return R;
    }
    l.default = d;
}, 98);
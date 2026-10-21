__d("BaseMenu.react", [
    "BaseContextualLayerAvailableHeightContext",
    "BaseContextualLayerOrientationContext",
    "BaseMenuFocusGroup",
    "BaseMenuItemRoleContext",
    "BasePopover.react",
    "BasePopoverSVGArrowContainer.react",
    "BaseScrollableArea.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "arrowAlignment",
        "arrowMargin",
        "children",
        "id",
        "minMaxHeight",
        "ref",
        "role",
        "testid",
        "useKeyCommands",
        "variant",
        "withArrow"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const u_useContext = u.useContext;
    const m = {
        end: {
            borderEndEndRadius: "x16uus16",
            $$css: true
        },
        start: {
            borderEndStartRadius: "xbiv7yw",
            $$css: true
        }
    };
    const p = {
        end: {
            borderStartEndRadius: "x1ga7v0g",
            $$css: true
        },
        start: {
            borderStartStartRadius: "x15mokao",
            $$css: true
        }
    };
    const _ = {
        end: {
            borderEndEndRadius: "x16uus16",
            $$css: true
        },
        start: {
            borderStartEndRadius: "x1ga7v0g",
            $$css: true
        }
    };
    const f = {
        end: {
            borderEndStartRadius: "xbiv7yw",
            $$css: true
        },
        start: {
            borderStartStartRadius: "x15mokao",
            $$css: true
        }
    };
    function g(position, align) {
        if (!(align !== "start" && align !== "end")) {
            switch(position){
                case "above":
                    return m[align];
                case "below":
                    return p[align];
                case "end":
                    return f[align];
                case "start":
                    return _[align];
            }
        }
    }
    const h = {
        root: {
            alignItems: "x1qjc9v5",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            $$css: true
        }
    };
    const y = {
        listbox: "option",
        menu: "menuitem"
    };
    function C(t) {
        const i = o("react-compiler-runtime").c(44);
        let l;
        let u;
        let m;
        let p;
        let _;
        let f;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        if (i[0] !== t) {
            l = t.arrowAlignment;
            f = t.arrowMargin;
            u = t.children;
            m = t.id;
            C = t.minMaxHeight;
            _ = t.ref;
            b = t.role;
            R = t.testid;
            v = t.useKeyCommands;
            L = t.variant;
            S = t.withArrow;
            p = babelHelpers.objectWithoutPropertiesLoose(t, e);
            i[0] = t;
            i[1] = l;
            i[2] = u;
            i[3] = m;
            i[4] = p;
            i[5] = _;
            i[6] = f;
            i[7] = C;
            i[8] = b;
            i[9] = v;
            i[10] = S;
            i[11] = R;
            i[12] = L;
        } else {
            l = i[1];
            u = i[2];
            m = i[3];
            p = i[4];
            _ = i[5];
            f = i[6];
            C = i[7];
            b = i[8];
            v = i[9];
            S = i[10];
            R = i[11];
            L = i[12];
        }
        const E = f === undefined ? 15 : f;
        const k = C === undefined ? 145 : C;
        const I = b === undefined ? "menu" : b;
        const useKeyCommands = v === undefined ? true : v;
        const D = S === undefined ? false : S;
        const x = u_useContext(r("BaseContextualLayerOrientationContext"));
        const { align, position } = x;
        let N = u_useContext(r("BaseContextualLayerAvailableHeightContext"));
        if (D && N != null) {
            N = N - E;
        }
        const M = y[I];
        const arrowImpl = D ? r("BasePopoverSVGArrowContainer.react") : undefined;
        let A;
        if (i[13] !== align || i[14] !== position || i[15] !== L?.xstyleConfig?.container || i[16] !== D) {
            A = (s || (s = r("stylex"))).props(h.root, D === true && g(position, align), L?.xstyleConfig?.container);
            i[13] = align;
            i[14] = position;
            i[15] = L?.xstyleConfig?.container;
            i[16] = D;
            i[17] = A;
        } else {
            A = i[17];
        }
        const maxHeight = Math.max(N ?? 0, k);
        let W;
        if (i[18] !== maxHeight) {
            W = {
                maxHeight
            };
            i[18] = maxHeight;
            i[19] = W;
        } else {
            W = i[19];
        }
        const q = L?.xstyleConfig?.scrollableArea;
        let U;
        if (i[20] !== q) {
            U = [
                h.root,
                q
            ];
            i[20] = q;
            i[21] = U;
        } else {
            U = i[21];
        }
        let V;
        if (i[22] !== u || i[23] !== M) {
            const Component = r("BaseMenuItemRoleContext").Provider;
            V = <Component value={M}>{u}</Component>;
            i[22] = u;
            i[23] = M;
            i[24] = V;
        } else {
            V = i[24];
        }
        let H;
        if (i[25] !== U || i[26] !== V || i[27] !== W) {
            const Component = r("BaseScrollableArea.react");
            H = <Component horizontal={false} style={W} vertical xstyle={U}>{V}</Component>;
            i[25] = U;
            i[26] = V;
            i[27] = W;
            i[28] = H;
        } else {
            H = i[28];
        }
        let G;
        if (i[29] !== H || i[30] !== useKeyCommands) {
            const Component = r("BaseMenuFocusGroup").FocusGroup;
            G = <Component orientation="vertical" preventScrollOnFocus={false} tabScopeQuery={o("focusScopeQueries").tabbableScopeQuery} useKeyCommands={useKeyCommands} wrap>{H}</Component>;
            i[29] = H;
            i[30] = useKeyCommands;
            i[31] = G;
        } else {
            G = i[31];
        }
        let z;
        if (i[32] !== G || i[33] !== A) {
            z = <div {...babelHelpers.extends({}, A, {
                children: G
            })}/>;
            i[32] = G;
            i[33] = A;
            i[34] = z;
        } else {
            z = i[34];
        }
        let j;
        if (i[35] !== l || i[36] !== m || i[37] !== p || i[38] !== _ || i[39] !== I || i[40] !== z || i[41] !== arrowImpl || i[42] !== R) {
            j = c.jsx(r("BasePopover.react"), babelHelpers.extends({}, p, {
                arrowAlignment: l,
                arrowImpl,
                id: m,
                ref: _,
                role: I,
                testid: undefined,
                children: z
            }));
            i[35] = l;
            i[36] = m;
            i[37] = p;
            i[38] = _;
            i[39] = I;
            i[40] = z;
            i[41] = arrowImpl;
            i[42] = R;
            i[43] = j;
        } else {
            j = i[43];
        }
        return j;
    }
    l.default = C;
}, 98);
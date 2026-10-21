__d("WAWebDrawer.react", [
    "WAWebCopyPasteCopyableArea.react",
    "WAWebDragAndDrop.react",
    "WAWebDrawerViewType",
    "WAWebTimeSpentLoggingNavigation",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s.useRef;
    const d = {
        belowHeader: {
            height: "x1l4dt39",
            marginTop: "x4jvfs4",
            position: "x10l6tqk",
            width: "xh8yej3",
            boxSizing: "x9f619",
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            $$css: true
        },
        drawer: {
            backgroundColor: "x1280gxy",
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            height: "x5yr21d",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            pointerEvents: "x67bb7w",
            position: "x10l6tqk",
            top: "x13vifvy",
            width: "xh8yej3",
            $$css: true
        },
        flyout: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            $$css: true
        },
        drawerCapture: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        drawerCatalog: {
            backgroundColor: "x6egj2d",
            $$css: true
        },
        drawerEdit: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        drawerGallery: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        drawerMedia: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        drawerStarred: {
            backgroundColor: "x1h3rtpe",
            $$css: true
        },
        striped: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        white: {
            backgroundColor: "x1280gxy",
            $$css: true
        },
        allowVerticalScroll: {
            overflowY: "x1odjw0f",
            $$css: true
        }
    };
    function m(t) {
        const a = o("react-compiler-runtime").c(32);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const s = i;
        const { children: m, onDragChange: p, onDrop: _, testid: f, theme: g } = s;
        const h = c(null);
        let y;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            y = function(t) {
                h.current?.onDragOver(t);
            };
            a[3] = y;
        } else {
            y = a[3];
        }
        const C = y;
        let b;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            b = function(t) {
                h.current?.onDragStart(t);
            };
            a[4] = b;
        } else {
            b = a[4];
        }
        const v = b;
        let S;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            S = function(t) {
                h.current?.onDragEnd(t);
            };
            a[5] = S;
        } else {
            S = a[5];
        }
        const R = S;
        let L;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            L = function(t) {
                h.current?.onDragLeave(t);
            };
            a[6] = L;
        } else {
            L = a[6];
        }
        const E = L;
        let k;
        if (a[7] !== i.tsNavigationData) {
            k = i.tsNavigationData ?? {
                surface: "unknown"
            };
            a[7] = i.tsNavigationData;
            a[8] = k;
        } else {
            k = a[8];
        }
        let T = k;
        if (i.disableNavigationLogging === true) {
            T = void 0;
        }
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(T);
        const D = i.viewType ?? r("WAWebDrawerViewType").DRAWER;
        const x = D === r("WAWebDrawerViewType").FLYOUT && d.flyout;
        const $ = (g === "white-bg" || g === "invite" || g === "products" || g === "labels" || g === "settings" || g === "archived" || g === "biz-tools-drawer" || g === "sticker-store") && d.white;
        const P = (g === "capture-contain" || g === "capture-cover") && d.drawerCapture;
        const N = g === "edit" && d.drawerEdit;
        const M = g === "media" && d.drawerMedia;
        const w = g === "gallery" && d.drawerGallery;
        const A = g === "catalog" && d.drawerCatalog;
        const F = g === "striped" && d.striped;
        const O = (g === "capture-contain" || g === "media") && d.belowHeader;
        const B = g === "biz-tools-drawer" && d.allowVerticalScroll;
        const W = g === "starred" && d.drawerStarred;
        let q;
        if (a[9] !== i.xstyle || a[10] !== M || a[11] !== w || a[12] !== A || a[13] !== F || a[14] !== O || a[15] !== B || a[16] !== W || a[17] !== x || a[18] !== $ || a[19] !== P || a[20] !== N) {
            q = [
                d.drawer,
                x,
                $,
                P,
                N,
                M,
                w,
                A,
                F,
                O,
                B,
                W,
                i.xstyle
            ];
            a[9] = i.xstyle;
            a[10] = M;
            a[11] = w;
            a[12] = A;
            a[13] = F;
            a[14] = O;
            a[15] = B;
            a[16] = W;
            a[17] = x;
            a[18] = $;
            a[19] = P;
            a[20] = N;
            a[21] = q;
        } else {
            q = a[21];
        }
        const U = q;
        let V;
        if (a[22] !== p || a[23] !== _) {
            const Component = r("WAWebDragAndDrop.react");
            V = _ && <Component ref={h} disableFromWithin onDragChange={p} onDrop={_}/>;
            a[22] = p;
            a[23] = _;
            a[24] = V;
        } else {
            V = a[24];
        }
        let H;
        if (a[25] !== m || a[26] !== i.style || a[27] !== l || a[28] !== V || a[29] !== f || a[30] !== U) {
            const Component = r("WAWebCopyPasteCopyableArea.react");
            H = <Component ref={l} xstyle={U} style={i.style} onDragOver={C} onDragStart={v} onDragEnd={R} onDragLeave={E} testid={f}>{V}{m}</Component>;
            a[25] = m;
            a[26] = i.style;
            a[27] = l;
            a[28] = V;
            a[29] = f;
            a[30] = U;
            a[31] = H;
        } else {
            H = a[31];
        }
        return H;
    }
    l.default = m;
}, 98);
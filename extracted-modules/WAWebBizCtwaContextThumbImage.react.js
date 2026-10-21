__d("WAWebBizCtwaContextThumbImage.react", [
    "WAWebCTWAGatingUtils",
    "WAWebClassnames",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = {
        noThumbIcon: {
            color: "xqa0p2g",
            $$css: true
        }
    };
    function d(e) {
        if (e?.thumbnail != null) {
            return `data:image/jpeg;base64,${e.thumbnail}`;
        }
        return "";
    }
    function m(e) {
        if (e) {
            if (e.thumbnailUrl != null) {
                return e.thumbnailUrl;
            }
        } else {
            return "";
        }
        return d(e);
    }
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(15);
        const { className, context } = e;
        const i = e_useState(false);
        const l = i[0];
        const p = i[1];
        const _ = context?.isSuspiciousLink === true || context?.thumbnailUrl == null && context?.thumbnail == null;
        let f;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                return p(true);
            };
            t[0] = f;
        } else {
            f = t[0];
        }
        const g = f;
        let h;
        if (t[1] !== className || t[2] !== context?.thumbnailUrl || t[3] !== l) {
            h = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
                0: "x1c4vz4f x2lah0s xdl72j9 x41jr8d x1266fpw xeghe2j x1td4c2q",
                1: "x1c4vz4f x2lah0s xdl72j9 x41jr8d x1266fpw xeghe2j x1td4c2q x1df5jli"
            }[!!(l || context?.thumbnailUrl == null) << 0], className);
            t[1] = className;
            t[2] = context?.thumbnailUrl;
            t[3] = l;
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = h;
        let C;
        if (t[5] !== context || t[6] !== l) {
            C = l ? d(context) : m(context);
            t[5] = context;
            t[6] = l;
            t[7] = C;
        } else {
            C = t[7];
        }
        const b = C;
        if (_ || !b) {
            let v;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                v = ({
                    0: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x41jr8d xeghe2j x1280gxy x1ypdohk",
                    1: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xeghe2j x1280gxy x1ypdohk xh8yej3"
                })[!!o("WAWebCTWAGatingUtils").isAdsAttributionEnabled() << 0];
                t[8] = v;
            } else {
                v = t[8];
            }
            const S = v;
            let R;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                R = s.jsx(r("WDSIconIcLink.react"), {
                    testid: "link-refreshed",
                    xstyle: c.noThumbIcon
                });
                t[9] = R;
            } else {
                R = t[9];
            }
            let L;
            if (t[10] !== S) {
                L = <div className={S}>{R}</div>;
                t[10] = S;
                t[11] = L;
            } else {
                L = t[11];
            }
            return L;
        }
        let E;
        if (t[12] !== y || t[13] !== b) {
            E = <img onError={g} alt="" className={y} src={b}/>;
            t[12] = y;
            t[13] = b;
            t[14] = E;
        } else {
            E = t[14];
        }
        return E;
    }
    l.generateThumbSrcFromData = d;
    l.getInitialThumbSource = m;
    l.CtwaContextThumbImage = PComponent;
}, 98);
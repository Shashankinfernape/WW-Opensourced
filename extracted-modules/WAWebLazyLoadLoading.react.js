__d("WAWebLazyLoadLoading.react", [
    "fbt",
    "WALogger",
    "WAWebSpinner.react",
    "WDSIconIcRefresh.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        text: {
            lineHeight: "xggjnk3",
            color: "x1v5yvga",
            $$css: true
        }
    };
    function P7(e) {
        const t = o("react-compiler-runtime").c(4);
        const n = e.text;
        let a;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = <div className="x1pju0fl x10wjd1d x1d12jij xwodta0 x1idq3uh x396r2g xdj266r x11t971q x98jqk3 xvc5jky xue55m6 x17t9dm2 x2b8uid x1c9tyrk xeusxvb x1pahc9y x1ertn4p xilfgz5">{d.jsx(r("WDSIconIcRefresh.react"), {
                testid: "refresh",
                width: 50,
                height: 50
            })}</div>;
            i = (u || (u = r("stylex"))).props(m.text, o("WDSMargins.stylex").wdsMargins.marginVer0, o("WDSMargins.stylex").wdsMargins.marginHor20);
            t[0] = a;
            t[1] = i;
        } else {
            a = t[0];
            i = t[1];
        }
        let l;
        if (t[2] !== n) {
            l = <div>{a}<div {...babelHelpers.extends({}, i, {
                children: n
            })}/></div>;
            t[2] = n;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function _({ error: n, text: a = s._("There was an unexpected error. Select to reload the application."), retry: l = function() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] LazyLoadLoading.retry"
        ])));
        window.location.reload();
    } }) {
        return <div className="x10l6tqk x16uhe5s x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x2b8uid x1ypdohk" onClick={n ? l : null}>{n ? <P7 text={a}/> : d.jsx(o("WAWebSpinner.react").Spinner, {
            size: 50,
            stroke: 4
        })}</div>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = _;
}, 226);
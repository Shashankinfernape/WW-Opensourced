__d("WAWebLocaleManualUpdateButterbar.react", [
    "fbt",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebL10N",
    "WDSBanner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebButterbarVisibilityReport"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useState = d.useState;
    const _ = ()=>({
            dir: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
            strings: {
                title: s._("Language out of sync").toString(),
                text: s._("The language on this device does not match the language on your phone").toString(),
                action_text: s._("Update now").toString()
            }
        });
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null || e === "") {
                return _();
            }
            try {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "locale_change: requesting translated strings in ",
                    ""
                ])), e);
                const t = yield self.fetch(`${o("WAWebBuildConstants").DYN_ORIGIN}locale_change/?locale=${e}`);
                const n = yield t.json();
                if (n && typeof n === "object") {
                    return n;
                }
            } catch (e) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "locale_change: Unable to get translated strings"
                ]))).tags("non-sad");
                return _();
            }
            return _();
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        const t = o("react-compiler-runtime").c(13);
        const { locale, onVisibilityChange, ref } = e;
        let l;
        let s;
        if (t[0] !== locale) {
            l = function() {
                return f(locale);
            };
            s = [
                locale
            ];
            t[0] = locale;
            t[1] = l;
            t[2] = s;
        } else {
            l = t[1];
            s = t[2];
        }
        const u = r("useWAWebAsync")(l, s);
        const c = d_useState(null);
        const d = c[0];
        const g = c[1];
        if (u.value != null && u.value !== d) {
            g(u.value);
        }
        let h = null;
        if (u.loading) {
            if (d != null) {
                h = d;
            }
        } else if (u.error) {
            let C;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                C = _();
                t[3] = C;
            } else {
                C = t[3];
            }
            h = C;
        } else {
            h = u.value;
        }
        r("useWAWebButterbarVisibilityReport")(h != null, onVisibilityChange);
        if (h == null) {
            return null;
        }
        const h_dir = h.dir;
        let v;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            v = {
                className: "x1380le5 x14mko6t xefnzgg x1uvdrpn"
            };
            t[4] = v;
        } else {
            v = t[4];
        }
        let S;
        if (t[5] !== h.strings.action_text || t[6] !== h.strings.text || t[7] !== h.strings.title) {
            const Component = r("WDSBanner.react");
            S = <Component type="warning" title={h.strings.title} body={h.strings.text} actionText={h.strings.action_text} onAction={y}/>;
            t[5] = h.strings.action_text;
            t[6] = h.strings.text;
            t[7] = h.strings.title;
            t[8] = S;
        } else {
            S = t[8];
        }
        let R;
        if (t[9] !== ref || t[10] !== S || t[11] !== h.dir) {
            R = <div {...babelHelpers.extends({
                ref,
                dir: h_dir
            }, v, {
                children: S
            })}/>;
            t[9] = ref;
            t[10] = S;
            t[11] = h.dir;
            t[12] = R;
        } else {
            R = t[12];
        }
        return R;
    }
    function y() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] LocaleManualUpdateButterbar.onAction"
        ])));
        self.location.reload();
    }
    l.default = h;
}, 226);
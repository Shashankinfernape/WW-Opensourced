__d("useWAWebSearchQuery", [
    "WALogger",
    "WAWebChatSearchQuery",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        const a = o("react-compiler-runtime").c(3);
        let i;
        if (a[0] !== n || a[1] !== t) {
            i = function() {
                if (!t) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "useSearchQuery: searchQuery is undefined"
                    ])));
                }
                return n(t);
            };
            a[0] = n;
            a[1] = t;
            a[2] = i;
        } else {
            i = a[2];
        }
        const l = r("useWAWebEventTargetValue")(t, o("WAWebChatSearchQuery").SEARCH_EVENT, i);
        return l;
    }
    function u(e) {
        const t = s(e, c);
        return t;
    }
    function c(e) {
        return e?.trimmed() ?? "";
    }
    function d(e) {
        const t = s(e, m);
        return t;
    }
    function m(e) {
        return e?.highlighted() ?? [];
    }
    l.useSearchText = u;
    l.useHighlightedText = d;
}, 98);
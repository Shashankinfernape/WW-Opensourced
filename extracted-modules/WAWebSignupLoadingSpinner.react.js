__d("WAWebSignupLoadingSpinner.react", [
    "WAWebSignupLoadingState",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebSignupLoadingState").getSignupLoadingEmitter();
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_chat.id) {
            i = function() {
                return o("WAWebSignupLoadingState").isSignupLoading(e_chat.id.toString());
            };
            t[1] = e_chat.id;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = r("useWAWebEventTargetValue")(a, o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT, i);
        if (!l) {
            return null;
        }
        let u;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                className: "x78zum5 xl56j7k x1p57kb1 xvg22vi"
            };
            t[3] = u;
        } else {
            u = t[3];
        }
        let c;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            c = <div {...babelHelpers.extends({}, u, {
                "data-testid": "signup-loading-spinner",
                children: s.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 28,
                    stroke: 3,
                    color: "default"
                })
            })}/>;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    l.default = UComponent;
}, 98);
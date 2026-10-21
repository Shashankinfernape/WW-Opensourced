__d("WAWebBotSuggestions.react", [
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileGetters",
    "WAWebUseBusinessProfile.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const n = o("react-compiler-runtime").c(9);
        const { id, onPromptSelect } = e;
        o("WAWebUseBusinessProfile.react").useBusinessProfile(id);
        const i = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(id, [
            o("WAWebBusinessProfileGetters").getPrompts
        ]) ?? [];
        const l = i[0];
        let u;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebBotProfileGetters").getPrompts
            ];
            n[0] = u;
        } else {
            u = n[0];
        }
        const d = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(id, u);
        const m = d[0];
        const p = m ?? l;
        if (p == null || p.length === 0) {
            return null;
        }
        let _;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "x78zum5 x10l6tqk xmgkm54 x1nu74zi x14aock7 xuxw1ft x19sv2k2 x16ovd2e x12xbjc7 x1phvje8 xcldk2z"
            };
            n[1] = _;
        } else {
            _ = n[1];
        }
        let f;
        if (n[2] !== onPromptSelect || n[3] !== p) {
            let g;
            if (n[5] !== onPromptSelect) {
                g = function(prompt) {
                    return <C3Component key={prompt.text} prompt={prompt} onClick={function() {
                        onPromptSelect(prompt.text);
                    }}/>;
                };
                n[5] = onPromptSelect;
                n[6] = g;
            } else {
                g = n[6];
            }
            f = p.map(g);
            n[2] = onPromptSelect;
            n[3] = p;
            n[4] = f;
        } else {
            f = n[4];
        }
        let h;
        if (n[7] !== f) {
            h = <div {...babelHelpers.extends({}, _, {
                children: f
            })}/>;
            n[7] = f;
            n[8] = h;
        } else {
            h = n[8];
        }
        return h;
    }
    function C3Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { onClick, prompt } = e;
        let a;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x1f6kntn xdod15v x12l2aii x1mbk4o x14vvt0a x1w3ol1v xk50ysn x1w7vc3g x1ypdohk x16ovd2e x12xbjc7 x1iw51ew xvtqlqk x1wbi8v6 x7g7pl8"
            };
            i = {
                className: "x1rg5ohu x7g7pl8"
            };
            t[0] = a;
            t[1] = i;
        } else {
            a = t[0];
            i = t[1];
        }
        let l;
        if (t[2] !== prompt.emoji) {
            l = <span {...babelHelpers.extends({}, i, {
                children: prompt.emoji
            })}/>;
            t[2] = prompt.emoji;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] !== prompt.text) {
            u = <span>{prompt.text}</span>;
            t[4] = prompt.text;
            t[5] = u;
        } else {
            u = t[5];
        }
        let c;
        if (t[6] !== onClick || t[7] !== l || t[8] !== u) {
            c = <div {...babelHelpers.extends({
                onClick
            }, a, {
                children: [
                    l,
                    u
                ]
            })}/>;
            t[6] = onClick;
            t[7] = l;
            t[8] = u;
            t[9] = c;
        } else {
            c = t[9];
        }
        return c;
    }
    l.default = u;
}, 98);
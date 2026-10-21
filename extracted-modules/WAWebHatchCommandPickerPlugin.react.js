__d("WAWebHatchCommandPickerPlugin.react", [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "WAWebHatchCommandCache",
    "WAWebLexicalTypeAheadList.react",
    "WAWebNoop",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalTypeAhead"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const d = "/";
    const m = 22;
    const p = 40;
    const _ = 400;
    const f = {
        commandName: {
            flexShrink: "x2lah0s",
            $$css: true
        },
        headerText: {
            paddingInlineStart: "x12w63v0",
            $$css: true
        }
    };
    function g(e) {
        const t = o("react-compiler-runtime").c(19);
        const e_chatId = e.chatId;
        const a = o("LexicalComposerContext").useLexicalComposerContext();
        const i = a[0];
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                enabled: true,
                maxQueryLength: 50
            };
            t[0] = l;
        } else {
            l = t[0];
        }
        const s = o("useWAWebLexicalTypeAhead").useTypeAhead(i, d, l);
        const { leadOffset, omitQuery, query, replaceQuery } = s;
        let b;
        e: {
            if (query == null) {
                b = null;
                break e;
            }
            if (leadOffset === 0) {
                b = query;
                break e;
            }
            let v;
            if (t[1] !== i || t[2] !== leadOffset || t[3] !== query) {
                let S = "";
                i.getEditorState().read(function() {
                    const e = o("Lexical").$getRoot();
                    S = e.getTextContent().slice(0, leadOffset);
                });
                v = S.trim() === "" ? query : null;
                t[1] = i;
                t[2] = leadOffset;
                t[3] = query;
                t[4] = v;
            } else {
                v = t[4];
            }
            b = v;
        }
        const R = b;
        let L;
        if (t[5] !== R || t[6] !== e_chatId) {
            e: {
                if (R == null) {
                    L = null;
                    break e;
                }
                const E = o("WAWebHatchCommandCache").getHatchCommands(e_chatId.toJid());
                if (E == null) {
                    L = null;
                    break e;
                }
                if (R === "") {
                    L = E;
                    break e;
                }
                const k = R.toLowerCase();
                L = E.filter((e)=>{
                    const t = e.name.startsWith("/") ? e.name.slice(1) : e.name;
                    return t.toLowerCase().startsWith(k);
                });
            }
            t[5] = R;
            t[6] = e_chatId;
            t[7] = L;
        } else {
            L = t[7];
        }
        const I = L;
        let T;
        e: {
            if (I == null || I.length === 0) {
                let D;
                if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                    D = [];
                    t[8] = D;
                } else {
                    D = t[8];
                }
                T = D;
                break e;
            }
            let x;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                x = {
                    renderFn,
                    onSelect: r("WAWebNoop"),
                    width: _,
                    height: m,
                    skipKeyboardNav: true
                };
                t[9] = x;
            } else {
                x = t[9];
            }
            const $ = x;
            let P;
            if (t[10] !== I || t[11] !== replaceQuery) {
                let N;
                if (t[13] !== replaceQuery) {
                    N = function(t) {
                        return {
                            renderFn: function(n) {
                                return <C command={t} selected={n}/>;
                            },
                            onSelect: function() {
                                replaceQuery(function() {
                                    return new (o("Lexical")).TextNode(`${t.name} `);
                                }, {});
                            },
                            width: _,
                            height: p,
                            skipKeyboardNav: false
                        };
                    };
                    t[13] = replaceQuery;
                    t[14] = N;
                } else {
                    N = t[14];
                }
                const M = I.map(N);
                P = [
                    $
                ].concat(M);
                t[10] = I;
                t[11] = replaceQuery;
                t[12] = P;
            } else {
                P = t[12];
            }
            T = P;
        }
        const w = T;
        let A;
        if (t[15] !== w || t[16] !== leadOffset || t[17] !== omitQuery) {
            const Component = r("WAWebLexicalTypeAheadList.react");
            A = <Component leadOffset={leadOffset} items={w} onCancel={omitQuery} startingIndex={1}/>;
            t[15] = w;
            t[16] = leadOffset;
            t[17] = omitQuery;
            t[18] = A;
        } else {
            A = t[18];
        }
        return A;
    }
    function renderFn() {
        return <Y11/>;
    }
    renderFn.displayName = `${renderFn.name} [from ${i.id}]`;
    function Y11() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                className: "x78zum5 x1q0g3np x1cy8zhl x17rw0jw"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            n = <div {...babelHelpers.extends({}, t, {
                children: <Component type="Body2Emphasized" colorName="contentDeemphasized" xstyle={f.headerText}>{s._("Commands")}</Component>
            })}/>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(11);
        const { command, selected } = e;
        let i;
        if (t[0] !== selected) {
            i = ({
                0: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk"
                },
                1: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1iw51ew x1vqgdyp x1ypdohk x4wrhlh"
                }
            })[!!selected << 0];
            t[0] = selected;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = command.name.startsWith("/") ? command.name : `/${command.name}`;
        let s;
        if (t[2] !== l) {
            const Component = r("WDSText.react");
            s = <Component type="Body1Emphasized" colorName="contentDefault" xstyle={f.commandName}>{l}</Component>;
            t[2] = l;
            t[3] = s;
        } else {
            s = t[3];
        }
        let c;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft xeuugli"
            };
            t[4] = c;
        } else {
            c = t[4];
        }
        let d;
        if (t[5] !== command.description) {
            const Component = r("WDSText.react");
            d = <div {...babelHelpers.extends({}, c, {
                children: <Component type="Body2" colorName="contentDeemphasized">{command.description}</Component>
            })}/>;
            t[5] = command.description;
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== i || t[8] !== s || t[9] !== d) {
            m = <div {...babelHelpers.extends({}, i, {
                children: [
                    s,
                    d
                ]
            })}/>;
            t[7] = i;
            t[8] = s;
            t[9] = d;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    l.default = g;
}, 226);
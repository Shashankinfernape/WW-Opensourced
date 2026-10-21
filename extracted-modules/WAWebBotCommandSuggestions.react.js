__d("WAWebBotCommandSuggestions.react", [
    "Lexical",
    "WAWebBotCommandSuggestionResult.react",
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileGetters",
    "WAWebLexicalUtils",
    "WAWebListSuggestionsPanel.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBusinessProfileValues",
    "useWAWebLexicalTypeAhead",
    "useWAWebOptionalBotProfileValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useMemo, useState } = u;
    const p = "/";
    const _ = 52;
    const f = 25;
    function g(e) {
        const a = o("react-compiler-runtime").c(27);
        const { editor, kind, metaBotId } = e;
        const d = e.businessProfile?.id;
        const g = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(d, [
            o("WAWebBusinessProfileGetters").getCommands
        ]) ?? [];
        const y = g[0];
        let C;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            C = [
                o("WAWebBotProfileGetters").getCommands
            ];
            a[0] = C;
        } else {
            C = a[0];
        }
        const b = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(metaBotId, C);
        const v = b[0];
        const S = y ?? v;
        const imageWid = metaBotId ?? d;
        let L;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                boundary: true,
                maxQueryLength: f
            };
            a[1] = L;
        } else {
            L = a[1];
        }
        const E = o("useWAWebLexicalTypeAhead").useTypeAhead(editor, p, L);
        const { omitQuery, query, replaceQuery } = E;
        let D;
        if (a[2] !== editor) {
            D = function() {
                return h(editor);
            };
            a[2] = editor;
            a[3] = D;
        } else {
            D = a[3];
        }
        const x = useState(D);
        const $ = x[0];
        const P = x[1];
        let N;
        let M;
        if (a[4] !== editor) {
            N = function() {
                return editor.registerUpdateListener(function() {
                    P(h(editor));
                });
            };
            M = [
                editor
            ];
            a[4] = editor;
            a[5] = N;
            a[6] = M;
        } else {
            N = a[5];
            M = a[6];
        }
        useEffect(N, M);
        let w;
        if (a[7] !== imageWid) {
            w = function(t, n) {
                return s.jsx(r("WAWebBotCommandSuggestionResult.react"), {
                    command: t.command,
                    query: t.query,
                    selected: n,
                    imageWid
                }, t.itemKey);
            };
            a[7] = imageWid;
            a[8] = w;
        } else {
            w = a[8];
        }
        const A = w;
        let F;
        if (a[9] !== replaceQuery) {
            F = function({ command }) {
                replaceQuery(`${p}${command.name} `);
            };
            a[9] = replaceQuery;
            a[10] = F;
        } else {
            F = a[10];
        }
        const O = F;
        let B;
        if (a[11] !== omitQuery) {
            B = function() {
                omitQuery();
            };
            a[11] = omitQuery;
            a[12] = B;
        } else {
            B = a[12];
        }
        const W = B;
        let q;
        e: {
            if (query == null || !S || $) {
                q = null;
                break e;
            }
            let U;
            if (a[13] !== S || a[14] !== query) {
                let V;
                if (a[16] !== query) {
                    V = function(t) {
                        return t.name.toLowerCase().startsWith(query.toLowerCase());
                    };
                    a[16] = query;
                    a[17] = V;
                } else {
                    V = a[17];
                }
                let H;
                if (a[18] !== query) {
                    H = function(t, index) {
                        return {
                            height: _,
                            itemKey: t.name,
                            contentKey: query,
                            index,
                            command: t,
                            query,
                            selectable: true
                        };
                    };
                    a[18] = query;
                    a[19] = H;
                } else {
                    H = a[19];
                }
                U = S.filter(V).map(H);
                a[13] = S;
                a[14] = query;
                a[15] = U;
            } else {
                U = a[15];
            }
            q = U;
        }
        const G = q;
        let z;
        if (a[20] !== editor || a[21] !== W || a[22] !== A || a[23] !== O || a[24] !== kind || a[25] !== G) {
            const Component = r("WAWebListSuggestionsPanel.react");
            z = <Component kind={kind} editor={editor} items={G} renderItem={A} onSelect={O} onDismiss={W}/>;
            a[20] = editor;
            a[21] = W;
            a[22] = A;
            a[23] = O;
            a[24] = kind;
            a[25] = G;
            a[26] = z;
        } else {
            z = a[26];
        }
        return z;
    }
    function h(editor) {
        return editor.getEditorState().read(function() {
            for (const e of o("WAWebLexicalUtils").textNodesIterator(o("Lexical").$getRoot())){
                let t;
                if ((t = e.getStyle()) != null && t.includes("bot-command-text")) {
                    return true;
                }
            }
            return false;
        });
    }
    l.QUERY_TRIGGER = p;
    l.BotCommandSuggestions = g;
}, 98);
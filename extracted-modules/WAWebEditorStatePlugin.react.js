__d("WAWebEditorStatePlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebLexicalUtils",
    "WAWebMentionNode",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function* d(e) {
        for (const t of e.getChildren()){
            yield t;
            if (o("Lexical").$isElementNode(t)) {
                yield* d(t);
            }
        }
    }
    function m(e) {
        const t = {
            text: "",
            parsableText: "",
            data: {}
        };
        if (!e) {
            return t;
        }
        const n = [];
        const r = [];
        e.read(function() {
            for (const e of o("Lexical").$getRoot().getChildren()){
                if (o("Lexical").$isElementNode(e)) {
                    let a = "";
                    let i = "";
                    for (const l of d(e)){
                        if (l instanceof o("WAWebMentionNode").MentionNode) {
                            const c = l.getNodeMetadata();
                            a += c.text;
                            i += c.parsableText;
                            t.data.mentionedJidList = t.data.mentionedJidList ?? [];
                            t.data.groupMentions = t.data.groupMentions ?? [];
                            const { name, type, wid } = c;
                            switch(type){
                                case o("WAWebMentionNode").MentionTypeEnum.CONTACT:
                                    {
                                        t.data.mentionedJidList.push(c.wid);
                                        break;
                                    }
                                case o("WAWebMentionNode").MentionTypeEnum.GROUP:
                                    {
                                        t.data.groupMentions.push({
                                            groupJid: wid,
                                            groupSubject: name
                                        });
                                        break;
                                    }
                            }
                        } else {
                            a += l.getTextContent();
                            i += l.getTextContent();
                        }
                    }
                    n.push(a);
                    r.push(i);
                }
            }
        });
        t.text = n.join("\n");
        t.parsableText = r.join("\n");
        return t;
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(14);
        const { onBlur, onChange, onFocus } = e;
        const l = o("LexicalComposerContext").useLexicalComposerContext();
        const s = l[0];
        const dRef = useRef();
        let p;
        if (t[0] !== onChange) {
            p = function(t, n, r) {
                if (onChange) {
                    onChange(m(t), t, n, r);
                }
            };
            t[0] = onChange;
            t[1] = p;
        } else {
            p = t[1];
        }
        const g = r("useWAWebStableCallback")(p);
        let h;
        let y;
        if (t[2] !== s || t[3] !== g) {
            h = function() {
                if (s) {
                    const e = s.getEditorState().read(f);
                    dRef.current = e;
                    g(s.getEditorState(), true, new Set);
                }
            };
            y = [
                s,
                g
            ];
            t[2] = s;
            t[3] = g;
            t[4] = h;
            t[5] = y;
        } else {
            h = t[4];
            y = t[5];
        }
        useEffect(h, y);
        let C;
        let b;
        if (t[6] !== s || t[7] !== g) {
            C = function() {
                if (s) {
                    return s.registerUpdateListener(function({ editorState, tags }) {
                        const r = tags.has(o("WAWebLexicalUtils").TEXT_SEND_CLEAR_UPDATE_TAG);
                        if (!(s.isComposing() && !r)) {
                            const a = editorState.read(_);
                            if (dRef.current !== a) {
                                dRef.current = a;
                                g(editorState, false, tags);
                            }
                        }
                    });
                }
            };
            b = [
                s,
                g
            ];
            t[6] = s;
            t[7] = g;
            t[8] = C;
            t[9] = b;
        } else {
            C = t[8];
            b = t[9];
        }
        useEffect(C, b);
        let v;
        if (t[10] !== onBlur) {
            v = function(t) {
                onBlur?.(t);
                return false;
            };
            t[10] = onBlur;
            t[11] = v;
        } else {
            v = t[11];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(s, o("Lexical").BLUR_COMMAND, v);
        let S;
        if (t[12] !== onFocus) {
            S = function(t) {
                onFocus?.(t);
                return false;
            };
            t[12] = onFocus;
            t[13] = S;
        } else {
            S = t[13];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(s, o("Lexical").FOCUS_COMMAND, S);
        return null;
    }
    function _() {
        return o("Lexical").$getRoot().getTextContent();
    }
    function f() {
        return o("Lexical").$getRoot().getTextContent();
    }
    l.default = p;
}, 98);
__d("MLCTypingPerformancePlugin__INTERNAL.react", [
    "LexicalComposerContext",
    "LexicalText",
    "MLCTextLengthBucket",
    "mlcInternBootstrapTypingPerformance__INTERNAL",
    "one-trace",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const e_useLayoutEffect = e.useLayoutEffect;
    const c = new RegExp("[^,;\\s]{200,}");
    const d = new RegExp("[^,;\\s]{100,199}");
    const m = new RegExp("[^,;\\s]{50,99}");
    function p(e) {
        if (e === "") {
            return 0;
        }
        if (c.test(e)) {
            return 200;
        }
        if (d.test(e)) {
            return 100;
        }
        if (m.test(e)) {
            return 50;
        }
        return 0;
    }
    function _(e) {
        r("mlcInternBootstrapTypingPerformance__INTERNAL")();
        return <F3 {...babelHelpers.extends({}, e)}/>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function F3({ format__DEPRECATED, surface, typingPerformanceID = "" }) {
        const l = o("LexicalComposerContext").useLexicalComposerContext();
        const s = l[0];
        e_useLayoutEffect(function() {
            const e = babelHelpers.extends({
                largeWord: p(s.getEditorState().read(o("LexicalText").$rootTextContent)),
                textLengthBucket: o("MLCTextLengthBucket").getTextLengthBucket(s.getEditorState().read(o("LexicalText").$rootTextContent).length)
            }, surface === "FeedComposerCometStatusArea" ? {
                autolinkFastPath: String(true)
            } : null);
            let a;
            l();
            function l() {
                a?.();
                let o = null;
                const l = s.registerRootListener(function(a) {
                    if (a !== o) {
                        if (o !== null) {
                            r("one-trace").unregisterTypingPerf(o);
                        }
                        if (a !== null) {
                            r("one-trace").trackTypingPerf(a, surface, o, babelHelpers.extends({}, e, {
                                editor: "LexicalEditor",
                                format: format__DEPRECATED ?? "",
                                typingPerformanceID
                            }));
                        }
                        o = a;
                    }
                });
                a = function() {
                    l();
                    if (o !== null) {
                        r("one-trace").unregisterTypingPerf(o);
                    }
                };
            }
            const u = s.registerTextContentListener(function(t) {
                const n = p(t);
                if (n !== e.largeWord) {
                    e.largeWord = n;
                    l();
                }
            });
            const c = s.registerTextContentListener(function(t) {
                const n = o("MLCTextLengthBucket").getTextLengthBucket(t.length);
                if (n !== e.textLengthBucket) {
                    e.textLengthBucket = n;
                    l();
                }
            });
            return function() {
                a?.();
                u?.();
                c?.();
            };
        }, [
            typingPerformanceID,
            s,
            format__DEPRECATED,
            surface
        ]);
        return null;
    }
    F3.displayName = `${F3.name} [from ${i.id}]`;
    l.default = _;
}, 98);
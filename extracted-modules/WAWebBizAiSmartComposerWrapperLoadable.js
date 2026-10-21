__d("WAWebBizAiSmartComposerWrapperLoadable", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebModalLoadable",
    "getErrorSafe",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useState } = c;
    const p = r("JSResourceForInteraction")("WAWebBizAiSmartComposerWrapper.react").__setRef("WAWebBizAiSmartComposerWrapperLoadable");
    const _ = r("WAWebModalLoadable")(p, "BizAiSmartComposerWrapper", function() {
        return <></>;
    });
    const f = r("WAWebLazyLoadedRetriable")(function() {
        return p.load();
    }, "BizAiSmartComposerWrapper");
    function g(t) {
        const n = o("react-compiler-runtime").c(4);
        const a = useState(h);
        const i = a[0];
        const l = a[1];
        let s;
        let u;
        if (n[0] !== t || n[1] !== i) {
            s = function() {
                if (!(!t || i)) {
                    let n = false;
                    const a = function() {
                        if (!n) {
                            l(true);
                        }
                    };
                    p.load().then(a, (t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Smart composer wrapper failed to load"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-smart-composer-wrapper-load-failed");
                        a();
                    });
                    return function() {
                        n = true;
                    };
                }
            };
            u = [
                t,
                i
            ];
            n[0] = t;
            n[1] = i;
            n[2] = s;
            n[3] = u;
        } else {
            s = n[2];
            u = n[3];
        }
        useEffect(s, u);
        return i;
    }
    function h() {
        return p.getModuleIfRequired() != null;
    }
    l.WAWebBizAiSmartComposerWrapperLoadable = _;
    l.requireBundle = f;
    l.useWAWebBizAiSmartComposerWrapperReady = g;
}, 98);
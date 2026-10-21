__d("InlineFbtResultImplComet", [
    "FBLogger",
    "FbtHooks",
    "FbtReactUtil",
    "FbtResultBase",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function CComponent({ content, hash, inlineMode, translation }) {
        if (hash == null) {
            r("FBLogger")("internationalization").mustfix('Fbt string hash should not be null for translated string "%s" [inlineMode=%s]', translation, inlineMode);
        }
        return <span data-intl-hash={hash} data-intl-translation={translation} data-intl-trid="">{content}</span>;
    }
    CComponent.displayName = `${CComponent.name} [from ${i.id}]`;
    const d = ((t)=>{
        function n(content, inlineMode, translation, hash) {
            let s;
            s = t.call(this, content, (e || (e = r("FbtHooks"))).getErrorListener({
                hash,
                translation
            })) || this;
            s.$$typeof = o("FbtReactUtil").REACT_ELEMENT_TYPE;
            s.key = null;
            s.ref = null;
            s.type = CComponent;
            s.props = {
                content,
                hash,
                inlineMode,
                translation
            };
            return s;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(r("FbtResultBase"));
    l.default = d;
}, 98);
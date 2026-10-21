__d("WAWebBizAiMetaOneDialogHost.react", [
    "JSResourceForInteraction",
    "WAWebBizAiMetaOneDialogRequestStore",
    "WAWebModalLoadable",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const U1 = r("WAWebModalLoadable")(r("JSResourceForInteraction")("WAWebBizAiMetaOneDialogLauncher.react").__setRef("WAWebBizAiMetaOneDialogHost.react"), "WAWebBizAiMetaOneDialogLauncher", function() {
        return <></>;
    });
    function c() {
        const e = o("react-compiler-runtime").c(2);
        const request = o("WAWebBizAiMetaOneDialogRequestStore").useMetaOneDialogRequest();
        if (request == null) {
            return null;
        }
        let n;
        if (e[0] !== request) {
            n = <U1 key={request.id} request={request}/>;
            e[0] = request;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = c;
}, 98);
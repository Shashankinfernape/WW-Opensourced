__d("useWAWebAssociatedMessages", [
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebViewMode.flow",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
    "useWAWebEqualModelMemo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const a = t === undefined ? o("WAWebViewMode.flow").ViewModeSurface.CHAT : t;
        const i = o("useWAWebAggregatedView").useAggregatedView(o("WAWebMsgCollection").MsgCollection.byParentMessage, e);
        let l;
        if (n[0] !== i || n[1] !== a) {
            l = o("WAWebMessageAssociationUIUtils").filterOutVisibleAssociatedMessages(i, a);
            n[0] = i;
            n[1] = a;
            n[2] = l;
        } else {
            l = n[2];
        }
        return r("useWAWebEqualModelMemo")(l);
    }
    l.useHiddenAssociatedMessages = e;
}, 98);
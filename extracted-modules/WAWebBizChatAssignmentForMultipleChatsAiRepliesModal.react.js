__d("WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = s._("Assign chats");
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = t;
        let r;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("Turn off AI replies for these chats before you assign them to another agent.");
            e[1] = r;
        } else {
            r = e[1];
        }
        const a = r;
        let i;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Dismiss");
            e[2] = i;
        } else {
            i = e[2];
        }
        const l = i;
        let c;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            c = <Component tsNavigationData={{
                surface: "unknown",
                viewName: "chat-assignment-multi-ai-replies"
            }} title={n} onCancel={o("WAWebModalManager").closeModalManager} cancelText={l}>{a}</Component>;
            e[3] = c;
        } else {
            c = e[3];
        }
        return c;
    }
    l.default = c;
}, 226);
__d("WAWebCommentSendFailIcon.react", [
    "fbt",
    "WAWebCommentGetters",
    "WAWebDisplayType",
    "WAWebFailIcon.react",
    "WAWebMsgSendFailIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_comment = e.comment;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Something went wrong. Click to learn more.");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_comment) {
            l = function() {
                o("WAWebMsgSendFailIcon.react").showResendDialog({
                    messagesToResend: [],
                    reactionsToResend: [],
                    votesToResend: [],
                    pinsToResend: [],
                    eventResponsesToResend: [],
                    commentsToResend: [
                        e_comment
                    ]
                });
            };
            t[1] = e_comment;
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = l;
        let d;
        if (t[3] !== e_comment || t[4] !== c) {
            const Component = r("WAWebFailIcon.react");
            d = o("WAWebCommentGetters").getIsFailed(e_comment) ? <Component displayType={o("WAWebDisplayType").DISPLAY_TYPE.COMMENT} tooltip={i} ariaLabel={i} fromMe={e_comment.id.fromMe} onClick={c} isGroupChatProfilePictureDisplayed/> : null;
            t[3] = e_comment;
            t[4] = c;
            t[5] = d;
        } else {
            d = t[5];
        }
        return d;
    }
    l.default = c;
}, 226);
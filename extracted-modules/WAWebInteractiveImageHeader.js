__d("WAWebInteractiveImageHeader", [
    "WAWebFrontendMsgGetters",
    "WAWebMessagePicture.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { displayType, isMsgVisible, msgKey, pictureRef } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const c = o("useWAWebMsgValues").useMsgValues(msgKey, u);
        const d = c[0];
        const m = r("useWAWebIsMsgTrusted")(msgKey);
        let contentContainerClassName;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            contentContainerClassName = "x1198e8h x18faa90 x1huwwth x4h0osi";
            t[1] = contentContainerClassName;
        } else {
            contentContainerClassName = t[1];
        }
        const _ = pictureRef ?? r("WAWebNoop");
        let f;
        if (t[2] !== displayType || t[3] !== isMsgVisible || t[4] !== d || t[5] !== msgKey || t[6] !== _ || t[7] !== m) {
            const Component = o("WAWebMessagePicture.react").ImageMessage;
            f = <Component contentContainerClassName={contentContainerClassName} displayAuthor={false} mediaData={d} displayType={displayType} msgKey={msgKey} hideMeta trusted={m} isMsgVisible={isMsgVisible} ref={_}/>;
            t[2] = displayType;
            t[3] = isMsgVisible;
            t[4] = d;
            t[5] = msgKey;
            t[6] = _;
            t[7] = m;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.default = u;
}, 98);
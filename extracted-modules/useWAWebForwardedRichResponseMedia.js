__d("useWAWebForwardedRichResponseMedia", [
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebFrontendMsgGetters",
    "WAWebMediaGetDownloadOriginFor",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebResolveRichResponseMedia",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "useWAWebAsync",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    function u(e, t) {
        let n;
        const a = o("useWAWebMsgValues").useMsgValues(e, [
            (n = o("WAWebMsgGetters")).getIsForwarded,
            n.getUnifiedResponseMutationMediaList,
            n.getType,
            n.getIsStatus,
            n.getIsGroupMsg,
            n.getIsNewsletterMsg
        ]);
        const i = a[0];
        const l = a[1];
        const u = a[2];
        const isStatus = a[3];
        const m = a[4];
        const isNewsletterMsg = a[5];
        const _ = i && l != null && l.length > 0 && o("WAWebBotBaseGating").isRichResponseForwardMediaReceivingEnabled();
        const f = r("WAWebMediaGetDownloadOriginFor")({
            chat: m ? o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(e, isNewsletterMsg) : null,
            isGroupMsg: m,
            isNewsletterMsg,
            isProduct: u === o("WAWebMsgType").MSG_TYPE.PRODUCT,
            isStatus
        });
        const g = r("useWAWebAsync")(function() {
            return c(t, l);
        }, [
            t,
            l
        ], _);
        const { loading, value } = g;
        return {
            descriptorByCdnUrl: value ?? s,
            downloadOrigin: f,
            isForwardedMessage: i,
            isResolvingDescriptors: _ && loading
        };
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                return yield o("WAWebResolveRichResponseMedia").resolveRichResponseMediaDescriptors(t, n);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "rich response: media descriptor resolution failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("rich-response-media-resolve-descriptors-failed");
                return s;
            }
        });
        return d.apply(this, arguments);
    }
    l.default = u;
}, 98);
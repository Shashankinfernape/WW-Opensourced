__d("WAWebBotForwardCapability", [
    "fbt",
    "WAWebBotGating",
    "WAWebBotMultiModalUtils",
    "WAWebFileUtils",
    "WAWebHatchGating",
    "WAWebL10nFilesize",
    "WAWebMsgGetters",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.length !== 1) {
            return {
                state: "hidden"
            };
        }
        const t = e[0];
        if (o("WAWebMsgGetters").getIsViewOnce(t) || o("WAWebMsgGetters").getIsViewOncePlaceholder(t)) {
            return {
                state: "hidden"
            };
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.CHAT) {
            return {
                state: "shown"
            };
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            if (o("WAWebBotGating").isMetaAiImageInputEnabled()) {
                return {
                    state: "shown"
                };
            }
            return {
                state: "hidden"
            };
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return c(t);
        }
        if (t.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return u(t);
        }
        return {
            state: "hidden"
        };
    }
    function u(e) {
        if (!o("WAWebBotGating").isMetaAiVideoInputEnabled()) {
            return {
                state: "hidden"
            };
        }
        const t = o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes();
        if (e.size != null && e.size > t) {
            return {
                state: "disabled",
                reason: s._("Can't forward videos over {size}", [
                    s._param("size", o("WAWebL10nFilesize").getL10nFilesize(t))
                ])
            };
        }
        return {
            state: "shown"
        };
    }
    function c(e) {
        if (!o("WAWebBotGating").isMetaAiDocUploadEnabled()) {
            return {
                state: "hidden"
            };
        }
        const t = o("WAWebBotGating").getMetaAiDocumentUploadSizeLimitBytes();
        if (e.size != null && e.size > t) {
            return {
                state: "disabled",
                reason: s._("Can't forward files over {size}", [
                    s._param("size", o("WAWebL10nFilesize").getL10nFilesize(t))
                ])
            };
        }
        const n = e.filename != null ? o("WAWebFileUtils").getFileExtension(e.filename) : null;
        if (n == null || !o("WAWebBotMultiModalUtils").getMetaAiSupportedFileTypesList().has(n)) {
            return {
                state: "disabled",
                reason: s._("Message type not supported")
            };
        }
        return {
            state: "shown"
        };
    }
    function d(t) {
        return e(t).state === "shown";
    }
    function m(t) {
        return e(t).state !== "hidden";
    }
    function p(e) {
        if (e.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.MUSIC) || !o("WAWebHatchGating").isHatchVideoUploadEnabled() && e.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.VIDEO)) {
            return false;
        }
        const t = o("WAWebHatchGating").getHatchDocumentUploadSizeLimitBytes();
        return !e.some((e)=>e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && e.size != null && e.size > t);
    }
    l.getForwardToMetaAiEligibility = e;
    l.canForwardMsgToMetaAi = d;
    l.isMetaAiForwardRowVisibleForMsgs = m;
    l.canForwardSelectionToHatch = p;
}, 226);
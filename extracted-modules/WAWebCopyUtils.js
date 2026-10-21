__d("WAWebCopyUtils", [
    "WAWebAllMsgTypeCollectionUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebCopyPasteClipboard",
    "WAWebCopyToClipboard",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMentionDisplayUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgMentionMap",
    "WAWebMsgType",
    "WAWebRichResponseCopyText",
    "WAWebRichTextInputConst",
    "WAWebUnifiedResponseUtils",
    "asyncToGeneratorRuntime",
    "getPlainTextFromUnifiedResponse"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(e, o("WAWebFrontendMsgGetters").getChat(e))) {
            return !!(e.type === o("WAWebMsgType").MSG_TYPE.CHAT || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
                isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
                msgSource: e.ctwaContext?.sourceApp,
                msgSubtype: e.subtype,
                msgType: e.type
            }) || e.type === o("WAWebMsgType").MSG_TYPE.IMAGE && !e.mediaData.isViewOnce && o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.filehash) != null && o("WAWebCopyToClipboard").supportsCopyImageToClipboard() || e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW || e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && o("WAWebRichResponseCopyText").canCopyRichResponseMessage(e));
        }
        return false;
    }
    function s() {
        const e = window.getSelection();
        return e?.toString() !== "";
    }
    function u(e) {
        if (e.body != null) {
            const t = c(e);
            const { appText, hasMentions, plainText } = t;
            if (!hasMentions) {
                o("WAWebCopyToClipboard").copyTextToClipboard(plainText);
                return;
            }
            if (!p(plainText, appText)) {
                o("WAWebCopyToClipboard").copyTextToClipboard(plainText);
            }
        }
    }
    function c(e) {
        const n = e.body ?? "";
        const r = d(e);
        return {
            appText: m(n, r, "app"),
            hasMentions: r.length > 0,
            plainText: m(n, r, "plain")
        };
    }
    function d(e) {
        const t = [];
        const n = o("WAWebMsgMentionMap").calculateMsgMentionMap(e);
        if (n != null) {
            Object.entries(n).forEach(([token, r])=>{
                t.push({
                    app: `${o("WAWebRichTextInputConst").ZWS}${r.id.toString()}${o("WAWebRichTextInputConst").ZWS}`,
                    plain: o("WAWebMentionDisplayUtils").addAtPrefixForMention(o("WAWebFrontendContactGetters").getDisplayName(r)),
                    token
                });
            });
        }
        const r = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
        if (r != null) {
            Object.entries(r).forEach(([n, r])=>{
                const a = n.startsWith("@") ? n.slice(1) : n;
                t.push({
                    app: `${o("WAWebRichTextInputConst").ZWS}${a}${o("WAWebRichTextInputConst").ZWS}`,
                    plain: r != null && r !== "" ? o("WAWebMentionDisplayUtils").addAtPrefixForMention(r) : n,
                    token: n
                });
            });
        }
        return t;
    }
    function m(e, t, n) {
        const r = [].concat(t).sort((e, t)=>t.token.length - e.token.length);
        let o = e;
        for (const a of r){
            const i = n === "app" ? a.app : a.plain;
            o = o.split(a.token).join(i);
        }
        return o;
    }
    function p(e, t) {
        const document_body = document.body;
        if (document_body == null) {
            return false;
        }
        const r = function(r) {
            const r_clipboardData = r.clipboardData;
            if (r_clipboardData != null) {
                r_clipboardData.setData("text/plain", e);
                try {
                    r_clipboardData.setData(o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE, t);
                } catch (e) {}
                r.preventDefault();
            }
        };
        const a = document.createElement("textarea");
        a.value = e;
        document_body.appendChild(a);
        a.focus();
        a.select();
        document.addEventListener("copy", r);
        let i = false;
        try {
            i = document.execCommand("copy");
        } catch (e) {
            i = false;
        } finally{
            document.removeEventListener("copy", r);
            document_body.removeChild(a);
        }
        return i;
    }
    function _(e) {
        const t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.filehash);
        if (t != null) {
            o("WAWebCopyToClipboard").copyImageToClipboard(t);
        }
    }
    function f(e) {
        const n = [];
        if (e.interactiveHeader?.title != null) {
            n.push(e.interactiveHeader.title);
        }
        if (e.caption != null) {
            n.push(e.caption);
        }
        if (e.footer != null) {
            n.push(e.footer);
        }
        const r = n.join("\n");
        o("WAWebCopyToClipboard").copyTextToClipboard(r);
    }
    function g(e) {
        const e_unifiedResponse = e.unifiedResponse;
        if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) {
            const n = r("getPlainTextFromUnifiedResponse")(e_unifiedResponse);
            if (n !== "") {
                o("WAWebCopyToClipboard").copyTextToClipboard(n);
                return;
            }
        }
        const e_richResponse = e.richResponse;
        if (e_richResponse != null) {
            const i = o("WAWebRichResponseCopyText").getRichResponseCopyText(e_richResponse);
            if (i != null) {
                o("WAWebCopyToClipboard").copyTextToClipboard(i);
            }
        }
    }
    function h(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.CHAT || o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
            isAGMShown: e.ctwaContext?.automatedGreetingMessageShown,
            msgSource: e.ctwaContext?.sourceApp,
            msgSubtype: e.subtype,
            msgType: e.type
        })) {
            u(e);
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && e?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
            f(e);
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            _(e);
        }
        if (e.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && o("WAWebRichResponseCopyText").canCopyRichResponseMessage(e)) {
            g(e);
        }
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length === 0) {
                return null;
            }
            const t = e.filter((e)=>e.body != null).sort(o("WAWebAllMsgTypeCollectionUtils").sortMsgsByInputComparator("asc"));
            if (t.length === 0) {
                return null;
            }
            const n = t.map(c);
            const r = n.map((e)=>e.plainText).join("\n");
            const a = n.some((e)=>e.hasMentions);
            if (!a || !p(r, n.map((e)=>e.appText).join("\n"))) {
                yield o("WAWebCopyToClipboard").copyTextToClipboard(r);
            }
            return t.length;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        const t = window.getSelection();
        if (t != null) {
            const n = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(e, t);
            o("WAWebCopyToClipboard").copyTextToClipboard(n.toPlainString());
        }
    }
    l.canCopyMessage = e;
    l.canCopySelection = s;
    l.getMentionAwareClipboardContent = c;
    l.copyMessageToClipboard = h;
    l.copyMessagesToClipboard = y;
    l.copySelection = b;
}, 98);
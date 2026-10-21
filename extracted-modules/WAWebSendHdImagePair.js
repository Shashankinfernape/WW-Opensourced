__d("WAWebSendHdImagePair", [
    "WALogger",
    "WAWebABProps",
    "WAWebAttachMediaModel",
    "WAWebDualUploadsSendPolicy",
    "WAWebMedia",
    "WAWebMediaOpaqueData",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t, n) {
        if (t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE || n.associationType != null || n.isViewOnce === true || t.quality !== o("WAWebAttachMediaModel").MediaQuality.HD || !t.hdEligible || t.originalAttachment == null) {
            return false;
        }
        const l = t.metadataByQuality?.get(o("WAWebAttachMediaModel").MediaQuality.Standard);
        const s = t.metadataByQuality?.get(o("WAWebAttachMediaModel").MediaQuality.HD);
        if (l == null || s == null || !o("WAWebDualUploadsSendPolicy").isHdChildBetterThanParent(l, s)) {
            return false;
        }
        return o("WAWebDualUploadsSendPolicy").isChatEligibleForHdImagePair(e.id, e.contact?.businessProfile);
    }
    function m(e) {
        const n = e.metadataByQuality?.get(o("WAWebAttachMediaModel").MediaQuality.Standard);
        if (n == null) {
            return null;
        }
        return {
            body: e.previewBase64,
            height: n.height,
            mimetype: e.mimetype,
            width: n.width
        };
    }
    function p({ chat, childPrep, fileOrigin, options, parentPlaceholderProps, source }) {
        const u = o("WAWebMedia").prepRawMedia(source.then(({ file })=>r("WAWebMediaOpaqueData").createFromData(file, file.type)), {
            fileOrigin,
            maxDimension: o("WAWebABProps").getABPropConfigValue("web_image_max_edge")
        });
        const parentSend = u.sendToChat({
            chat,
            options: babelHelpers.extends({}, options, {
                addEvenWhilePreparing: true,
                fileOrigin,
                pairedMediaType: "SD_IMAGE_PARENT",
                placeholderProps: parentPlaceholderProps ?? undefined
            })
        });
        _({
            chat,
            childPrep,
            fileOrigin,
            options,
            parentSend
        });
        return parentSend;
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, childPrep, fileOrigin, options, parentSend }) {
            let g;
            try {
                g = yield parentSend;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] parent send failed, dropping the HD child"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("dual-uploads-send-parent-failed");
                return;
            }
            const parentMsgKey = g?.msg?.id;
            if (parentMsgKey == null || g?.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] parent send did not land, dropping the HD child"
                ]))).sendLogs("dual-uploads-send-parent-not-acked");
                return;
            }
            let y;
            try {
                y = yield childPrep.sendToChat({
                    chat,
                    options: {
                        addEvenWhilePreparing: options.addEvenWhilePreparing,
                        associationType: o("WAWebMessageAssociation.flow").MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
                        botPersonaId: options.botPersonaId,
                        fileOrigin,
                        isScheduledMsg: options.isScheduledMsg,
                        pairedMediaType: "HD_IMAGE_CHILD",
                        parentMsgKey,
                        scheduledTimestampS: options.scheduledTimestampS,
                        threadId: options.threadId,
                        type: o("WAWebMsgType").MSG_TYPE.IMAGE,
                        viewMode: options.isScheduledMsg === true ? o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE : o("WAWebViewMode.flow").ViewModeType.HIDDEN
                    }
                });
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] HD child send failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("dual-uploads-send-child-failed");
                return;
            }
            if (y?.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] HD child send did not land: ",
                    ""
                ])), String(y?.messageSendResult)).sendLogs("dual-uploads-send-child-not-acked", {
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.COUNTING_STAT
                });
            }
        });
        return f.apply(this, arguments);
    }
    l.shouldSendAsHdImagePair = d;
    l.getParentPlaceholderProps = m;
    l.sendHdImagePair = p;
}, 98);
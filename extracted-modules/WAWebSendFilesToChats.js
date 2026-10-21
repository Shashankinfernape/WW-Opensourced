__d("WAWebSendFilesToChats", [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebFileUtils",
    "WAWebMimeTypes",
    "WAWebModalManager",
    "WAWebResolveSupportedMediaTypes",
    "WAWebSendMsgResultAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
    "countWhere",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            o("WAWebModalManager").ModalManager.close();
            if (!(t.length === 0 || a.length === 0)) {
                const c = i?.batchNotifications ?? false;
                const m = a.map((e)=>{
                    const n = o("WAWebFileUtils").getMimeTypeForFilepath(e.name) ?? o("WAWebMimeTypes").DOC_MIMES;
                    return {
                        file: e,
                        type: o("WAWebFileUtils").FILETYPE.DOCUMENT,
                        filename: e.name,
                        mimetype: n
                    };
                });
                const p = t.map((()=>{
                    const i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(i) {
                        const l = new (r("WAWebAttachMediaCollection"))({
                            chatParticipantCount: i.getParticipantCount()
                        });
                        yield l.processAttachmentsForChat(m, o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE.DOCUMENT_PICKER, i);
                        const p = o("WAWebResolveSupportedMediaTypes").resolveMaxNumberSelectableMedia(l.getPreviewableMedias().length, i.id);
                        const _ = l.uiProcessMsgs(p, null);
                        const __errorMsgs = _.errorMsgs;
                        if (__errorMsgs) {
                            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                msg: __errorMsgs
                            }));
                            return;
                        }
                        const g = l.getValidMedias();
                        const h = g.map((e)=>e.sendToChat({
                                chat: i,
                                options: {
                                    type: e.type,
                                    multicast: t.length > 1
                                }
                            }));
                        try {
                            const y = yield (u || (u = n("Promise"))).all(h);
                            const C = r("countWhere")(y, function(e) {
                                return e.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK;
                            });
                            if (C > 0) {
                                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                    msg: s._("_j{\"*\":{\"*\":\"Couldn't send {error-count} documents to {chat-name}\",\"_1\":\"Couldn't send {error-count} document to {chat-name}\"}}", [
                                        s._param("error-count", C, [
                                            0
                                        ]),
                                        s._plural(C),
                                        s._param("chat-name", i.formattedTitle)
                                    ])
                                }));
                                return false;
                            }
                            if (!c) {
                                o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                    msg: s._("_j{\"*\":\"Documents sent successfully to {chat-name}\",\"_1\":\"Document sent successfully to {chat-name}\"}", [
                                        s._plural(y.length),
                                        s._param("chat-name", i.formattedTitle)
                                    ])
                                }));
                            }
                            return true;
                        } catch (error) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Error sending documents to chats from IntroPanel ",
                                ""
                            ])), error);
                            o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                                msg: s._("_j{\"*\":\"Couldn't send documents to {chat-name}\",\"_1\":\"Couldn't send document to {chat-name}\"}", [
                                    s._plural(a.length),
                                    s._param("chat-name", i.formattedTitle)
                                ])
                            }));
                            return false;
                        }
                    });
                    return function(e) {
                        return i.apply(this, arguments);
                    };
                })());
                if (c) {
                    const h = yield (u || (u = n("Promise"))).all(p);
                    const y = h.filter((e)=>!e).length;
                    const C = (i?.totalChats ?? t.length) - y;
                    const b = a[0]?.name ?? s._("document");
                    o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
                        msg: s._("_j{\"*\":{\"*\":\"Sent {file-name} to {chat-count} chats\",\"_1\":\"Sent {file-name} to {chat-count} chat\"}}", [
                            s._param("chat-count", C, [
                                0
                            ]),
                            s._plural(C),
                            s._param("file-name", `'${b}'`)
                        ])
                    }));
                }
                if (t.length === 1) {
                    const v = t[0];
                    o("WAWebCmd").Cmd.openChatFromUnread({
                        chat: v,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.IntroPanel
                    });
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.default = m;
}, 226);
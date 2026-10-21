__d("WAWebAttachMenuPopupItemPhotos.react", [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WAWebAttachMenuFilePicker",
    "WAWebAttachmentMenuLogger",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebFileUtils",
    "WAWebLogImagineAction",
    "WAWebPrepareMessageSendingAction",
    "WAWebStateUtils",
    "WAWebThreadJourneyLogger",
    "WAWebUnifiedSession",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
    "WDSIconIcFilterFilled.react",
    "WDSMenuItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        refreshedIcon: {
            color: "xsadat2",
            $$css: true
        }
    };
    const m = n("$InternalEnum").Mirrored([
        "PHOTOS",
        "VIDEOS",
        "PHOTOS_AND_VIDEOS"
    ]);
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = e.aiThreads?.getFirstActivated()?.id;
            const i = a != null ? yield o("WAWebChatThreadLogging").getThreadIDHMAC(a) : null;
            return {
                aiSessionId: o("WAWebThreadJourneyLogger").ThreadJourneyLogger.getAiSessionId() ?? undefined,
                metaAiConversationThreadId: i ?? undefined,
                unifiedSessionId: o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? undefined
            };
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        if (e === m.PHOTOS) {
            return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
        }
        if (e === m.VIDEOS) {
            return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO;
        }
        if (e === m.PHOTOS_AND_VIDEOS) {
            return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebLogImagineAction").logImagineAction({
                action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_CLICK,
                mediaType: f(t),
                eventContext: yield p(e)
            });
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebLogImagineAction").logImagineAction({
                action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_CLICK,
                mediaType: f(t),
                eventContext: yield p(e)
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield (e || (e = n("Promise"))).all(t);
            let a = false;
            let i = false;
            for (const l of r){
                const s = o("WAWebFileUtils").typeFromMimetype(l.file.type);
                if (s === o("WAWebFileUtils").FILETYPE.IMAGE) {
                    a = true;
                } else if (s === o("WAWebFileUtils").FILETYPE.VIDEO) {
                    i = true;
                }
            }
            if (a && i) {
                return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.MIXED;
            }
            if (i) {
                return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.VIDEO;
            }
            return o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE.IMAGE;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WAWebLogImagineAction").logImagineAction({
                action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION.MEDIA_INPUT_GALLERY_SELECTION_CONFIRMED,
                mediaType: yield b(t),
                eventContext: yield p(e)
            });
        });
        return R.apply(this, arguments);
    }
    function L({ chat, dismissMenu, mediaSelectionType, multiple, onAlternateSendFlowStart, onMediaPick }) {
        onAlternateSendFlowStart();
        o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
        o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.PHOTO_AND_VIDEO_LIBRARY);
        if (o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(chat))) {
            g(chat, mediaSelectionType);
        }
        const accept = mediaSelectionType === m.PHOTOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.IMAGE : mediaSelectionType === m.VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.VIDEO : mediaSelectionType === m.PHOTOS_AND_VIDEOS ? o("WAWebAttachMenuFilePicker").FilePickerMimeType.MEDIA : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${mediaSelectionType}`);
        })();
        const u = o("WAWebChatGetters").getIsMetaAiBot(o("WAWebStateUtils").unproxy(chat));
        if (u) {
            y(chat, mediaSelectionType);
        }
        o("WAWebAttachMenuFilePicker").createFilePicker({
            accept,
            multiple,
            transformAttachment: function(t) {
                return {
                    file: t
                };
            }
        }, function(e) {
            if (u) {
                S(chat, e);
            }
            onMediaPick(e);
        }, dismissMenu);
    }
    function E(e) {
        const t = o("react-compiler-runtime").c(12);
        const { chat, dismissMenu, mediaSelectionType, multiple, onAlternateSendFlowStart, onMediaPick } = e;
        let _;
        if (t[0] !== mediaSelectionType) {
            _ = mediaSelectionType === m.PHOTOS ? s._("Photos") : mediaSelectionType === m.VIDEOS ? s._("Videos") : s._("Photos & videos");
            t[0] = mediaSelectionType;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = _;
        let g;
        if (t[2] !== chat || t[3] !== dismissMenu || t[4] !== mediaSelectionType || t[5] !== multiple || t[6] !== onAlternateSendFlowStart || t[7] !== onMediaPick) {
            g = function() {
                L({
                    chat,
                    dismissMenu,
                    mediaSelectionType,
                    multiple,
                    onAlternateSendFlowStart,
                    onMediaPick
                });
            };
            t[2] = chat;
            t[3] = dismissMenu;
            t[4] = mediaSelectionType;
            t[5] = multiple;
            t[6] = onAlternateSendFlowStart;
            t[7] = onMediaPick;
            t[8] = g;
        } else {
            g = t[8];
        }
        const h = g;
        let y;
        if (t[9] !== h || t[10] !== f) {
            const Component = r("WDSMenuItem.react");
            y = <Component testid="mi-attach-media" onPress={h} Icon={r("WDSIconIcFilterFilled.react")} iconXstyle={d.refreshedIcon} title={f}/>;
            t[9] = h;
            t[10] = f;
            t[11] = y;
        } else {
            y = t[11];
        }
        return y;
    }
    l.MediaSelectionType = m;
    l.AttachMenuPopupItemPhotos = E;
}, 226);
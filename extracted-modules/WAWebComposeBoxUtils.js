__d("WAWebComposeBoxUtils", [
    "fbt",
    "WALogger",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMessageEditFlow.react",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebPonyfillsFetch",
    "WAWebQuestions.flow",
    "WAWebStopEvent",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const t = {
            mediaKey: e.data.mediaKey,
            mediaKeyTimestamp: e.data.mediaKeyTimestamp,
            thumbnailDirectPath: e.data.thumbnailDirectPath,
            thumbnailSha256: e.data.thumbnailSha256,
            thumbnailEncSha256: e.data.thumbnailEncSha256
        };
        return babelHelpers.extends({}, e, {
            data: babelHelpers.extends({}, e.data, t)
        });
    }
    function m({ accessibilityLabel, attribution, filename, gifUrl }) {
        return r("WAWebPonyfillsFetch")(gifUrl, {
            headers: {
                Accept: "video/mp4"
            }
        }).then((t)=>{
            if (!t.ok) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed loading gif (status: ",
                    ")"
                ])), t.status);
                throw new (o("WAWebMediaFileErrors")).MediaFileFailedLoad;
            }
            return t.blob();
        }).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(file) {
                const t = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
                    file,
                    maxDimensions: [
                        o("WAWebMediaConstants").IMG_THUMB_MAX_EDGE
                    ],
                    debugHint: "handleGif",
                    logContext: {
                        callsite: "HANDLE_GIF",
                        mediaType: "GIF"
                    }
                });
                const t_thumbs = t.thumbs;
                const s = t_thumbs[0];
                const t_duration = t.duration;
                return {
                    file,
                    filename,
                    mimetype: file.type,
                    isGif: true,
                    gifAttribution: attribution,
                    fullPreview: window.URL.createObjectURL(file),
                    fullPreviewSize: {
                        width: s.fullWidth,
                        height: s.fullHeight
                    },
                    preview: r("WAWebURLUtils").parseDataURL(s.url).data,
                    duration: t_duration,
                    accessibilityLabel
                };
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function p() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "compose-box"
        }} title={s._("Message too long")} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("OK")}>{s._("The message you're pasting is too long. Try shortening it or sending it in multiple parts.")}</Component>);
    }
    function _(e, t) {
        const n = o("WAWebChatGetMessage").getLastSentMsg(e);
        if (n && o("WAWebMsgActionCapability").canEnterEditingFlow(n)) {
            o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebMessageEditFlow.react"), {
                msg: n
            }));
            o("WAWebStopEvent").stopEvent(t);
        } else {
            o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Message can't be edited")
            }));
        }
    }
    function f({ chat, isEditingCaption, questionType }) {
        if (isEditingCaption === true) {
            return s._("Type a caption");
        }
        if (o("WAWebChatGetters").getIsNewsletter(chat)) {
            if (questionType === o("WAWebQuestions.flow").QuestionType.Question) {
                return s._("Ask followers something");
            }
            if (questionType === o("WAWebQuestions.flow").QuestionType.Response) {
                return s._("Respond to {channel-name}", [
                    s._param("channel-name", chat.name)
                ]);
            }
            if (questionType === o("WAWebQuestions.flow").QuestionType.Reply) {
                return s._("Reply in {channel-name}", [
                    s._param("channel-name", chat.name)
                ]);
            }
            return s._("Type an update");
        }
        return s._("Type a message");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e) {
        const t = o("WAWebChatGetters").getIsGroup(e);
        if (t) {
            return s._("Type a message to group {chatName}", [
                s._param("chatName", e.formattedTitle)
            ]);
        }
        return s._("Type a message to {chatName}", [
            s._param("chatName", e.formattedTitle)
        ]);
    }
    l.getCachedPreview = d;
    l.fetchGif = m;
    l.handleMaxPasteExceeded = p;
    l.editLastMessage = _;
    l.getComposeBoxPlaceholderText = f;
    l.getComposeBoxAriaLabelText = g;
}, 226);
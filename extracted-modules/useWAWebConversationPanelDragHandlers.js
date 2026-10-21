__d("useWAWebConversationPanelDragHandlers", [
    "WAWebCmd",
    "WAWebDataTransfer",
    "WAWebMediaEditorOpenTrigger",
    "WAWebResolveSupportedMediaTypes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u(e, t) {
        const n = o("react-compiler-runtime").c(13);
        const { canCompose, onDragEnter, threadId } = t;
        const uRef = useRef(false);
        const cRef = useRef(null);
        let d;
        if (n[0] !== canCompose) {
            d = function(t) {
                if (canCompose) {
                    uRef.current = true;
                }
            };
            n[0] = canCompose;
            n[1] = d;
        } else {
            d = n[1];
        }
        const onDragStart = d;
        let p;
        if (n[2] !== canCompose) {
            p = function(t) {
                if (canCompose) {
                    uRef.current = false;
                }
            };
            n[2] = canCompose;
            n[3] = p;
        } else {
            p = n[3];
        }
        const onDragEnd = p;
        let f;
        if (n[4] !== canCompose || n[5] !== e || n[6] !== onDragEnter || n[7] !== threadId) {
            f = function(n) {
                if (canCompose) {
                    const t = cRef.current;
                    if (t != null) {
                        const initCaption = t.getCurrentComposeContent();
                        onDragEnter();
                        const d = new (r("WAWebDataTransfer"))(n.dataTransfer);
                        if (!uRef.current && d.hasType("Files")) {
                            t.flushSaveComposeContentDebounced();
                            t.discardPendingCoachingForAlternateSendFlow();
                            o("WAWebCmd").Cmd.attachMediaDrawer({
                                chat: e,
                                threadId,
                                bot3pMediaInputAuthorized: o("WAWebResolveSupportedMediaTypes").isBot3pMediaInputEnabled(e),
                                initCaption,
                                onComplete: t.updateTextAfterMediaDrawerClose,
                                openTrigger: o("WAWebMediaEditorOpenTrigger").MediaEditorOpenTrigger.ConversationPanelDragAndDrop
                            });
                            n.stopPropagation();
                            n.preventDefault();
                        }
                    }
                }
            };
            n[4] = canCompose;
            n[5] = e;
            n[6] = onDragEnter;
            n[7] = threadId;
            n[8] = f;
        } else {
            f = n[8];
        }
        const onDragEnter_1 = f;
        let h;
        if (n[9] !== onDragEnd || n[10] !== onDragEnter_1 || n[11] !== onDragStart) {
            const y = {
                onDragStart,
                onDragEnd,
                onDragEnter: onDragEnter_1
            };
            h = [
                cRef,
                y
            ];
            n[9] = onDragEnd;
            n[10] = onDragEnter_1;
            n[11] = onDragStart;
            n[12] = h;
        } else {
            h = n[12];
        }
        return h;
    }
    l.default = u;
}, 98);
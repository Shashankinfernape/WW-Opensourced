__d("WAWebMessageListRowRenderers", [
    "WAWebBotPluginCarouselWrapper.react",
    "WAWebErrorBoundary.react",
    "WAWebMessageAlbumRow.react",
    "WAWebMessageDateMarker.react",
    "WAWebMessageHistoryBundleInfoNotification.react",
    "WAWebMessagePosition",
    "WAWebMessageRow.react",
    "WAWebMessageUnread.react",
    "WAWebMsgGetters",
    "WAWebWrapperGroupProfilePicture.react",
    "err",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function U2Component(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_children = e.children;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x1n2onr6"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_children) {
            a = <div {...babelHelpers.extends({}, r, {
                children: e_children
            })}/>;
            t[1] = e_children;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function c(e) {
        var t = {
            msgGroup: function(a) {
                const n = a[0].type === "msg" ? a[0].msg : a[0].msgs[0];
                const i = a[a.length - 1];
                const lastMsgs = i.type === "msg" ? [
                    i.msg
                ] : i.msgs;
                const Component = o("WAWebErrorBoundary.react").ErrorBoundary;
                return <U2Component key={`msg-row-${n.id.toString()}`}><Component name="msg-list-group-profile-picture-wrapper">{s.jsx(r("WAWebWrapperGroupProfilePicture.react"), {
                    msg: n.unsafe(),
                    selectable: e.selectable,
                    position: o("WAWebMessagePosition").MsgPosition.FRONT,
                    sticky: true,
                    lastMsgs
                })}</Component>{a.map((e)=>{
                    switch(e.type){
                        case "msg":
                            return t.msg(e.msg, e.isFocused, e.groupedWithPrev, e.groupedWithNext, false, e.isFollowUpReply);
                        case "album":
                            return t.album(e.msgs, e.albumId, e.groupedWithPrev, e.groupedWithNext, e.isFocusedAlbum, e.focusedMsgIndex, false, e.isFollowUpReply);
                        default:
                            const n = e.type;
                            throw r("err")(`Invalid message list row type ${e.type}`);
                    }
                })}</U2Component>;
            },
            msg: ((e)=>{
                function t(t, n, r, o, a, i) {
                    return e.apply(this, arguments);
                }
                t.toString = function() {
                    return e.toString();
                };
                return t;
            })(function(t, isFocusedMsg, r, a, i, l) {
                const Component = o("WAWebMessageRow.react").WAWebMessageRow;
                return <Component key={`msg-${t.id.toString()}`} msg={t} isFocusedMsg={isFocusedMsg} groupedWithPrev={r} groupedWithNext={a} showProfilePicture={i} handleMsgRendered={e.handleMsgRendered} isMsgVisible={e.isMsgVisible} selectable={e.selectable} selectedMessages={e.selectedMessages} onMessageSelect={e.onMessageSelect} setFocusedMessage={e.setFocusedMessage} isFollowUpReply={l}/>;
            }),
            album: function(msgs, o, a, i, isFocusedAlbum, focusedMsgIndex, c) {
                const Component = r("WAWebMessageAlbumRow.react");
                return <Component key={`album-${o}`} albumId={o} focusedMsgIndex={focusedMsgIndex} isFocusedAlbum={isFocusedAlbum} msgs={msgs} selectable={e.selectable} selectedMessages={e.selectedMessages} onMessageSelect={e.onMessageSelect} groupedWithNext={i} groupedWithPrev={a} showProfilePicture={c} isMsgVisible={e.isMsgVisible} handleAlbumRendered={e.handleAlbumRendered}/>;
            },
            date: function(n, o, isGroupHistoryMessage) {
                const Component = r("WAWebMessageDateMarker.react");
                return <Component key={`msg-${n.id.toString()}-date`} ref={((e)=>{
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    t.toString = function() {
                        return e.toString();
                    };
                    return t;
                })(function(t) {
                    e.handleDateMarkerRendered(o, t);
                })} timestamp={n.t} isFocusable={false} isGroupHistoryMessage={isGroupHistoryMessage} chat={e.chat}/>;
            },
            unread: function() {
                return s.jsx(r("WAWebMessageUnread.react"), {
                    count: e.unreadCount,
                    textContainerRef: e.refUnread
                }, "msg-unread");
            },
            botPluginCarousel: function({ botPluginCarouselId, isFocused, msgs }) {
                const Component = r("WAWebBotPluginCarouselWrapper.react");
                return <Component key={`botCarousel-${botPluginCarouselId}`} msgs={msgs} ref={((e)=>{
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    t.toString = function() {
                        return e.toString();
                    };
                    return t;
                })(function(t) {
                    return e.handleBotPluginCarouselRendered(t, msgs);
                })} botPluginCarouselId={botPluginCarouselId} isFocused={isFocused}/>;
            },
            historyBundleInfo: function(authorName, a) {
                const i = e.msgs.find((e)=>{
                    const t = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e.unsafe());
                    return a != null && t?.id === a?.id;
                });
                const l = i?.id;
                const firstBundleMsgElement = l ? e.getMsgWrapperRef(l?.toString())?.getContainerElement() : null;
                return s.jsx(r("WAWebMessageHistoryBundleInfoNotification.react"), {
                    authorName,
                    firstBundleMsgElement,
                    groupId: a.remote.toJid()
                }, `history-bundle-info-${a.toString()}`);
            }
        };
        return t;
    }
    l.default = c;
}, 98);
__d("useWAWebConversationPanelMetrics", [
    "WAWebAppTracker",
    "WAWebChatGetters",
    "WAWebChatOpenMetricsStore",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebQplFlowWrapper",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumUiActionChatType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamMsgUtils",
    "WAWebWamPrivateStatsUtils",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useWAWebRenderCallbacks"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    const u = r("qpl")._(891425633, "3259");
    function c(e, t) {
        const n = o("react-compiler-runtime").c(3);
        const aRef = useRef(null);
        let i;
        if (n[0] !== e || n[1] !== t) {
            i = {
                onMount: function() {
                    const r = o("WAWebChatOpenMetricsStore").consumeChatOpenMetrics(e);
                    if (r != null) {
                        aRef.current = r;
                        const { instanceKey, openEvent, uiActionEvent } = r;
                        const c = t();
                        if (c != null) {
                            openEvent.webcRenderedMessageCount = c;
                        }
                        o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.SelectChat);
                        openEvent.markWebcChatOpenT();
                        o("WAWebQplFlowWrapper").QPL.markerPoint(u, "chat_open", {
                            instanceKey
                        });
                        const m = e.groupMetadata;
                        if (o("WAWebChatGetters").getIsGroup(e) && m != null) {
                            uiActionEvent.isLid = m.isLidAddressingMode === true;
                            if (m.cachedDeviceSizeBucket != null) {
                                uiActionEvent.sizeBucket = m.cachedDeviceSizeBucket;
                                const p = o("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(m);
                                uiActionEvent.set(p);
                            }
                            const _ = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(m);
                            if (_ != null) {
                                uiActionEvent.localAddressingMode = _;
                            }
                        } else {
                            uiActionEvent.isLid = e.id.isLid();
                        }
                        if (e.id.isBot()) {
                            uiActionEvent.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
                        }
                        uiActionEvent.botType = o("WAWebWamMsgUtils").getWamBotType({
                            chatId: e.id,
                            automatedType: e.contact.businessProfile?.automatedType
                        });
                        uiActionEvent.uiActionChatType = d(e);
                        o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
                    }
                },
                onBeforePaint: function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        const { instanceKey, openEvent, uiActionEvent } = aRef_current;
                        openEvent.markWebcChatOpenBeforePaintT();
                        uiActionEvent.markUiActionT();
                        o("WAWebQplFlowWrapper").QPL.markerPoint(u, "painted_start", {
                            instanceKey
                        });
                        o("WAWebAppTracker").attachWAMAppContext(uiActionEvent, uiActionEvent.uiActionT);
                        uiActionEvent.commit();
                    }
                },
                onAfterPaint: function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        const { instanceKey, openEvent } = aRef_current;
                        const finalRenderedMessageCount = t();
                        if (finalRenderedMessageCount != null) {
                            openEvent.webcFinalRenderedMessageCount = finalRenderedMessageCount;
                            o("WAWebQplFlowWrapper").QPL.markerAnnotate(u, {
                                int: {
                                    finalRenderedMessageCount
                                }
                            }, {
                                instanceKey
                            });
                        }
                        o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.SelectChat);
                        openEvent.markWebcChatOpenPaintedT();
                        o("WAWebQplFlowWrapper").QPL.markerPoint(u, "painted_end", {
                            instanceKey
                        });
                        openEvent.commit();
                        o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2, {
                            instanceKey
                        });
                        aRef.current = null;
                    }
                },
                onUnmount: function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        const t = aRef_current.instanceKey;
                        o("WAWebQplFlowWrapper").QPL.markerEnd(u, 4, {
                            instanceKey: t
                        });
                        aRef.current = null;
                    }
                },
                onError: function() {
                    const aRef_current = aRef.current;
                    if (aRef_current != null) {
                        const t = aRef_current.instanceKey;
                        o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3, {
                            instanceKey: t
                        });
                        aRef.current = null;
                    }
                }
            };
            n[0] = e;
            n[1] = t;
            n[2] = i;
        } else {
            i = n[2];
        }
        r("useWAWebRenderCallbacks")(i);
    }
    function d(e) {
        if (o("WAWebChatGetters").getIsGroup(e)) {
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
                return o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.DEFAULT_SUBGROUP;
            }
            if (o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) {
                return o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.SUBGROUP;
            }
            return o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.GROUP;
        }
        if (o("WAWebChatGetters").getIsNewsletter(e)) {
            return o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.INDIVIDUAL;
    }
    l.default = c;
}, 98);
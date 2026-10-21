__d("WAWebMessageEditFlow.react", [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiCoachAgentEditAction",
    "WAWebBizAiMessageEditEducationPolicy",
    "WAWebBizAiMessageEditEducationState",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMessageEditModal.react",
    "WAWebMessageEditUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgType",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsSendPollEditMsgAction",
    "WAWebSendMessageEditAction",
    "WAWebWamEnumPollActionType",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useEffect, useLayoutEffect } = p;
    const g = n("$InternalEnum").Mirrored([
        "Edit"
    ]);
    function h(t) {
        const n = o("react-compiler-runtime").c(28);
        const t_msg = t.msg;
        let i;
        if (n[0] !== t_msg) {
            i = o("WAWebFrontendMsgGetters").getChat(t_msg.unsafe());
            n[0] = t_msg;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let u;
        if (n[2] !== t_msg) {
            u = o("WAWebFrontendMsgGetters").getAsPollCreation(t_msg);
            n[2] = t_msg;
            n[3] = u;
        } else {
            u = n[3];
        }
        const c = u;
        const d = o("useWAWebFlow").useFlow(g.Edit);
        const P1 = d[0];
        const h = d[1];
        let v;
        let S;
        if (n[4] !== t_msg) {
            v = function() {
                if (o("WAWebMsgActionCapability").shouldCoachAgentEdit(t_msg.unsafe())) {
                    o("WAWebBizAiMessageEditEducationState").BizAiMessageEditEducationEventBus.trigger(o("WAWebBizAiMessageEditEducationState").BIZ_AI_MESSAGE_EDIT_STARTED_EVENT);
                }
            };
            S = [
                t_msg
            ];
            n[4] = t_msg;
            n[5] = v;
            n[6] = S;
        } else {
            v = n[5];
            S = n[6];
        }
        useLayoutEffect(v, S);
        let R;
        let L;
        if (n[7] !== c) {
            R = function() {
                if (c != null) {
                    o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
                        action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_INITIATED,
                        chat: o("WAWebFrontendMsgGetters").getChat(c.unsafe())
                    }, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(c)));
                }
            };
            L = [
                c
            ];
            n[7] = c;
            n[8] = R;
            n[9] = L;
        } else {
            R = n[8];
            L = n[9];
        }
        useEffect(R, L);
        if (h.step == null) {
            return null;
        }
        let E;
        if (n[10] !== l || n[11] !== h || n[12] !== t_msg) {
            E = function() {
                o("WAWebCmd").Cmd.openChatAt({
                    chat: l,
                    msgContext: o("WAWebChatMessageSearch").getSearchContext({
                        chat: l,
                        msgKey: t_msg.unsafe().id
                    }),
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.InChatMessageEditComplete
                });
                h.end();
            };
            n[10] = l;
            n[11] = h;
            n[12] = t_msg;
            n[13] = E;
        } else {
            E = n[13];
        }
        const k = E;
        let I;
        switch(h.step){
            case g.Edit:
                {
                    let T;
                    if (n[14] !== k || n[15] !== t_msg || n[16] !== c) {
                        T = function(newTitle, i) {
                            if (t_msg.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                                if (c != null) {
                                    o("WAWebPollsSendPollEditMsgAction").sendPollEdit({
                                        newTitle,
                                        parentMsg: c
                                    }).then(()=>{
                                        o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
                                            action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.EDIT_POLL_COMPLETED,
                                            chat: o("WAWebFrontendMsgGetters").getChat(c.unsafe())
                                        }, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(c)));
                                    }).catch(y);
                                } else {
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[Polls] Failed to send poll edit: pollMsg is null"
                                    ]))).sendLogs("polls-edit-null-parent");
                                }
                            } else {
                                const t = t_msg.unsafe();
                                const l = o("WAWebMsgActionCapability").canDeliverEditProtocolMessage(t);
                                const u = o("WAWebMessageEditUtils").isParentWithinEditUIWindow({
                                    msgKey: t.id,
                                    parentTsInSeconds: t.t
                                });
                                if (o("WAWebMsgActionCapability").shouldCoachAgentEdit(t)) {
                                    C(u);
                                    try {
                                        b(t, l, u);
                                    } catch (error) {
                                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                            "BizAI message edit education failed"
                                        ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-education-fail");
                                    }
                                    o("WAWebNuxAction").dismissNux(o("WAWebNux").NUX.BUSINESS_AI_MESSAGE_EDITING_DISCOVERY_TOOLTIP);
                                    o("WAWebBizAiCoachAgentEditAction").startAgentEditCoaching(t.id.remote, t.id.id, newTitle.trim(), u);
                                }
                                if (l) {
                                    o("WAWebSendMessageEditAction").sendMessageEdit(t, newTitle, i);
                                }
                            }
                            k();
                        };
                        n[14] = k;
                        n[15] = t_msg;
                        n[16] = c;
                        n[17] = T;
                    } else {
                        T = n[17];
                    }
                    const D = T;
                    let x;
                    if (n[18] !== h) {
                        x = function() {
                            return h.end();
                        };
                        n[18] = h;
                        n[19] = x;
                    } else {
                        x = n[19];
                    }
                    let $;
                    if (n[20] !== D || n[21] !== t_msg || n[22] !== x) {
                        const Component = r("WAWebMessageEditModal.react");
                        $ = <Component msg={t_msg} onConfirm={D} onCancel={x}/>;
                        n[20] = D;
                        n[21] = t_msg;
                        n[22] = x;
                        n[23] = $;
                    } else {
                        $ = n[23];
                    }
                    I = $;
                }
        }
        let P;
        if (n[24] !== P1 || n[25] !== I || n[26] !== h) {
            P = <P1 flow={h}>{I}</P1>;
            n[24] = P1;
            n[25] = I;
            n[26] = h;
            n[27] = P;
        } else {
            P = n[27];
        }
        return P;
    }
    function y(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "[Polls] Failed to send poll edit"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("polls-edit-send-fail");
    }
    function C(e) {
        try {
            o("WAWebBizAILargeScreensLogEvents").logClickBizAiMessageEditSend(e);
        } catch (error) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit telemetry failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-message-edit-telemetry-fail");
        }
    }
    function b(e, t, n) {
        const r = o("WATimeUtils").unixTime();
        const a = o("WAWebBizAiMessageEditEducationState").loadMessageEditEducationState();
        if (o("WAWebBizAiMessageEditEducationPolicy").isPostEditHintEligible(o("WAWebBizAiMessageEditEducationState").getActivePostEditHint(r), a, r)) {
            o("WAWebBizAiMessageEditEducationState").recordPostEditHintShownForMessage(e, t, n, r);
        }
    }
    l.default = h;
}, 98);
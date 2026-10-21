__d("WAWebSendMsgBotStanza", [
    "WALogger",
    "WAWap",
    "WAWebBotBaseGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotTypes",
    "WAWebMsgGetters"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ agentEngagementType, botSuccessNodes, isBotFeedbackMessage, isBotFeedbackMessageInAgentChat, personaType }) {
        if (botSuccessNodes.length === 0 && !isBotFeedbackMessageInAgentChat) {
            return null;
        }
        return o("WAWap").wap("bot", {
            type: isBotFeedbackMessage ? "feedback" : o("WAWap").DROP_ATTR,
            persona_type: personaType != null ? o("WAWap").CUSTOM_STRING(personaType) : o("WAWap").DROP_ATTR,
            agent_engagement_type: agentEngagementType != null ? o("WAWap").CUSTOM_STRING(agentEngagementType) : o("WAWap").DROP_ATTR
        }, botSuccessNodes);
    }
    function u(e, t, n, r = false) {
        if (e.type == null && e.localAutomatedType == null && e.clientThreadId == null && e.modeSelection == null && e.modeSelected == null && t == null && n == null && !r) {
            return null;
        }
        return o("WAWap").wap("bot", {
            type: o("WAWap").MAYBE_CUSTOM_STRING(e.type),
            persona_type: t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
            agent_engagement_type: n != null ? o("WAWap").CUSTOM_STRING(n) : o("WAWap").DROP_ATTR,
            local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(e.localAutomatedType),
            client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(e.clientThreadId),
            mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(e.modeSelection),
            mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(e.modeSelected)
        });
    }
    function c(e, t, clientThreadId) {
        const r = p(e);
        const localAutomatedType = t ? null : o("WAWebBotTypes").getBotLocalAutomatedType(e.bizBotType);
        let i;
        let l;
        const e_botModeOverride = e.botModeOverride;
        if (e_botModeOverride != null && e_botModeOverride.length > 0 && o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) {
            l = String(e_botModeOverride[0]);
        } else {
            const u = e.botModeSelection;
            if (u != null && u.length > 0) {
                const c = u[0];
                if (c === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default) {
                    i = "default";
                } else if (c === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard) {
                    i = "think_hard";
                }
            }
        }
        return {
            clientThreadId,
            localAutomatedType,
            modeSelected: l ?? null,
            modeSelection: i ?? null,
            type: r ?? null
        };
    }
    function d(e, t, n) {
        if (e) {
            return "member";
        }
        if (t != null && t.isBot()) {
            return "direct_chat";
        }
        if (n && o("WAWebMsgGetters").getIsBotQuery(n)) {
            return "invoked";
        }
        return null;
    }
    function m(e, t) {
        let n;
        return o("WAWebMsgGetters").getIsBotFeedbackMessage(e) && !!(e.bizBotType && (n = e.protocolMessageKey) != null && n.remote.equals(t));
    }
    function p(t) {
        let n;
        if (t.subtype === "bot_request_welcome") {
            n = "request_welcome";
        } else if (t.botMsgBodyType != null) {
            e: {
                if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT) {
                    n = "prompt";
                    break e;
                }
                if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND) {
                    n = "command";
                    break e;
                }
                if (t.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot] outgoing voice message is not supported"
                    ])));
                    break e;
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t.botMsgBodyType}`);
            }
        }
        return n;
    }
    l.genBotFanoutNode = s;
    l.genBotStanzaNode = u;
    l.getBotStanzaAttrs = c;
    l.getBotAgentEngagementType = d;
    l.getIsBizBotFeedback = m;
    l.getBotStanzaType = p;
}, 98);
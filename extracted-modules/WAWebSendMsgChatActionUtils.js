__d("WAWebSendMsgChatActionUtils", [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebEphemeralitySystemMsg",
    "WAWebEphemeralityTypes",
    "WAWebEphemeralityUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebProtobufsProtocol.pb",
    "asyncToGeneratorRuntime",
    "cr:37261"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    const d = n("cr:37261") ?? {};
    const d_opusProcessChat = d.opusProcessChat;
    function p(e) {
        if (e.isCAG() || e.groupMetadata?.announce === true) {
            return false;
        }
        const r = e.groupMetadata?.participants;
        if (r == null) {
            return false;
        }
        const a = r.some(({ id })=>id != null && id.isBot() && !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(id) && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(id));
        return a && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t.ephemeralDuration != null && t.ephemeralDuration > 0 && o("WAWebEphemeralityUtils").isEphemeralityDisabledForMessagingWithContact(e.contact)) {
                const ephemeralDuration = 0;
                const r = e.contact.id;
                if (r.isRegularUser()) {
                    const msgData = babelHelpers.extends({}, t, {
                        ephemeralDuration
                    });
                    const systemMsgs = [
                        o("WAWebEphemeralitySystemMsg").getEphemeralitySystemMessageForDisabledEphemerality(r)
                    ];
                    const l = {
                        ephemeralDuration,
                        ephemeralSettingTimestamp: o("WATimeUtils").unixTime(),
                        disappearingModeInitiator: o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat,
                        disappearingModeTrigger: o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown,
                        disappearingModeInitiatedByMe: false
                    };
                    yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, l);
                    e.set(l);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[maybeDisableEphemeralityForMsg] duration=",
                        " contact=",
                        ""
                    ])), ephemeralDuration, r.toLogString());
                    return {
                        msgData,
                        systemMsgs
                    };
                }
            }
            return {
                msgData: t,
                systemMsgs: null
            };
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (o("WAWebLimitSharingGatingUtils").isOpusEnabled() && d_opusProcessChat != null && e.limitSharing?.sharingLimited === true) {
            const r = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(e.id, {
                sharingLimited: false,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN
            });
            d_opusProcessChat(e.id.toString(), {
                skipSystemMessage: true
            }).catch((e)=>{
                if (e instanceof Error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[opus] send fallback failed"
                    ]))).catching(e).sendLogs(t);
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[opus] send fallback failed"
                    ]))).sendLogs(t);
                }
            });
            return r;
        }
        return null;
    }
    l.hasGroupAgentParticipant = p;
    l.maybeDisableEphemeralityForMsg = _;
    l.maybeGetOpusSystemMsg = g;
}, 98);
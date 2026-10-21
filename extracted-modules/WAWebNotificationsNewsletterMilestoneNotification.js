__d("WAWebNotificationsNewsletterMilestoneNotification", [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebFrontendMsgGetters",
    "WAWebGetNotificationStrings",
    "WAWebL10N",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterModelUtils",
    "WAWebNoop",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebPollCreationUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = ((t)=>{
        function a({ chat, milestoneType, msg, reactionCode, value }) {
            let n;
            n = t.call(this) || this;
            n.msg = msg;
            n.milestoneType = milestoneType;
            n.value = value;
            n.reactionCode = reactionCode;
            n.chat = chat;
            return n;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.buildKey = function() {
            return `newsletter-milestone:${this.msg?.serverId ?? 0}:${this.chat.id.toString()}:${this.milestoneType}:${this.value}:${this.reactionCode ?? ""}`;
        };
        a_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebNotificationIconUtils").getChatNotificationIcon(this.chat, this.abortController.signal);
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.shouldMute = function(n) {
            const e = t.prototype.shouldMute.call(this, n);
            if (e != null) {
                return e;
            }
            const newsletterMetadata = this.chat.newsletterMetadata;
            if (o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(newsletterMetadata)) {
                if (o("WAWebNewsletterModelUtils").isMuted(newsletterMetadata.followerActivityMuteExpiration)) {
                    return r("WAWebNotificationMuteReason").NewsletterFollowerActivityMuted;
                }
                return null;
            }
            return r("WAWebNotificationMuteReason").NewsletterFollowerActivityDisabled;
        };
        a_prototype.shouldPlaySound = function() {
            if (t.prototype.shouldPlaySound.call(this)) {
                return o("WAWebNotificationHelpers").shouldPlaySoundGranular(this.chat);
            }
            return false;
        };
        a_prototype.getBody = function() {
            if (this.msg) {
                if (this.milestoneType === "FOLLOWS") {
                    return "";
                }
                return o("WAWebGetNotificationStrings").getNotificationMessageBody(this.msg);
            }
            return this.getBodyForNullMsg();
        };
        a_prototype.getAction = function() {
            const t = this.msg ? ":" : "";
            e: {
                const n = this.milestoneType;
                if (n === "FOLLOWS") {
                    return s._("_j{\"*\":\"\\ud83c\\udf89 Your channel has {channel_followers_count} followers!\",\"_1\":\"\\ud83c\\udf89 Your channel has {channel_followers_count} new follower!\"}", [
                        s._plural(this.value),
                        s._param("channel_followers_count", r("WAWebL10N").d(this.value))
                    ]).toString();
                }
                if (n === "MESSAGE_REACTIONS") {
                    if (this.value <= 1) {
                        return s._("{channel_reaction} reaction to{colon}", [
                            s._param("channel_reaction", this.reactionCode),
                            s._param("colon", t)
                        ]).toString();
                    }
                    return s._("{channel_reaction_count} reactions to{colon}", [
                        s._param("channel_reaction_count", r("WAWebL10N").d(this.value)),
                        s._param("colon", t)
                    ]).toString();
                }
                if (n === "MESSAGE_RESPONSES") {
                    return s._("_j{\"*\":\"{channel_question_response_count} responses to{colon}\",\"_1\":\"{channel_question_response_count} response to{colon}\"}", [
                        s._plural(this.value),
                        s._param("channel_question_response_count", r("WAWebL10N").d(this.value)),
                        s._param("colon", t)
                    ]).toString();
                }
                if (n === "MESSAGE_VOTES") {
                    if (this.msg?.pollType === o("WAWebPollCreationUtils").PollType.QUIZ) {
                        return s._("_j{\"*\":\"{channel_quiz_responses_count} responses to{colon}\",\"_1\":\"{channel_quiz_responses_count} response to{colon}\"}", [
                            s._plural(this.value),
                            s._param("channel_quiz_responses_count", r("WAWebL10N").d(this.value)),
                            s._param("colon", t)
                        ]).toString();
                    }
                    return s._("_j{\"*\":\"{channel_poll_votes_count} votes in{colon}\",\"_1\":\"{channel_poll_votes_count} vote in{colon}\"}", [
                        s._plural(this.value),
                        s._param("channel_poll_votes_count", r("WAWebL10N").d(this.value)),
                        s._param("colon", t)
                    ]).toString();
                }
                if (n === "MESSAGE_FORWARDS") {
                    return s._("_j{\"*\":\"{channel_forwards_count} forwards{colon}\",\"_1\":\"{channel_forwards_count} forward{colon}\"}", [
                        s._plural(this.value),
                        s._param("channel_forwards_count", r("WAWebL10N").d(this.value)),
                        s._param("colon", t)
                    ]).toString();
                }
                {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] unsupported milestone type: ",
                        ""
                    ])), this.milestoneType);
                    return "";
                    break e;
                }
            }
        };
        a_prototype.getBodyForNullMsg = function() {
            e: {
                const e = this.milestoneType;
                if (e === "FOLLOWS") {
                    return "";
                }
                if (e === "MESSAGE_REACTIONS") {
                    return s._("your update").toString();
                }
                if (e === "MESSAGE_RESPONSES") {
                    if (o("WAWebUA").UA.hasEmoji) {
                        return "❓";
                    }
                    return "";
                }
                if (e === "MESSAGE_VOTES") {
                    if (o("WAWebUA").UA.hasEmoji) {
                        return "📊";
                    }
                    return "";
                }
                if (e === "MESSAGE_FORWARDS") {
                    return s._("of your update").toString();
                }
                {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][newsletter] unsupported milestone type: ",
                        ""
                    ])), this.milestoneType);
                    return "";
                    break e;
                }
            }
        };
        a_prototype.getBannerOptions = function() {
            const t = o("WAWebGetNotificationStrings").getNotificationBody({
                action: this.getAction(),
                body: this.getBody(),
                msgDir: this.msg ? o("WAWebFrontendMsgGetters").getDir(this.msg) : undefined
            });
            return {
                wid: this.chat.id,
                msgId: this.msg?.id.toString(),
                alwaysHighlightMsg: this.msg != null,
                onClick: r("WAWebNoop"),
                tag: this.buildKey(),
                doNotOpenChat: false,
                title: o("WAWebNotificationHelpers").getNotificationTitle(this.chat),
                body: t
            };
        };
        a_prototype.matchesChat = function(t) {
            return t.equals(this.chat);
        };
        a_prototype.getChatKind = function() {
            return o("WAWebChatFlowTypes").ChatKindType.Newsletter;
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WANewsletterMilestoneNotification = c;
}, 226);
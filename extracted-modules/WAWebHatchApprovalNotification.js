__d("WAWebHatchApprovalNotification", [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return `hatchApproval:${e}`;
    }
    const _ = ((t)=>{
        function a(e, n) {
            let r;
            r = t.call(this) || this;
            r.notification = e;
            r.$WAWebHatchApprovalNotification$p_1 = n;
            return r;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.buildKey = function() {
            return p(this.notification.subjectId);
        };
        a_prototype.shouldMute = function(n) {
            const t = this.$WAWebHatchApprovalNotification$p_2(n);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: shouldMute ",
                " -> ",
                ""
            ])), this.$WAWebHatchApprovalNotification$p_3(), t ?? "null");
            return t;
        };
        a_prototype.$WAWebHatchApprovalNotification$p_2 = function(t) {
            if (h(t)) {
                return r("WAWebNotificationMuteReason").HatchApprovalChatOnScreen;
            }
            const e = y();
            if (e != null && o("WAWebMuteGetters").getIsMuted(e.mute)) {
                return r("WAWebNotificationMuteReason").MutedChat;
            }
            if (e?.archive === true) {
                return r("WAWebNotificationMuteReason").ArchivedChat;
            }
            return null;
        };
        a_prototype.shouldShowBanner = function() {
            if (this.$WAWebHatchApprovalNotification$p_1(this.notification.subjectId)) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval-notif: shouldShowBanner ",
                    " -> false, withdrawn"
                ])), this.$WAWebHatchApprovalNotification$p_3());
                return false;
            }
            const e = y();
            const t = e != null && o("WAWebNotificationHelpers").shouldEnableNotificationGranular(e);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: shouldShowBanner ",
                " -> ",
                ""
            ])), this.$WAWebHatchApprovalNotification$p_3(), String(t));
            return t;
        };
        a_prototype.shouldPlaySound = function() {
            const e = y();
            return this.shouldShowBanner() && e != null && o("WAWebNotificationHelpers").shouldPlaySoundGranular(e) && t.prototype.shouldPlaySound.call(this);
        };
        a_prototype.getBannerOptions = function() {
            const e = y();
            const t = !o("WAWebMuteCollection").MuteCollection.getGlobalPreviews() || e == null || e.isLocked;
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval-notif: banner ",
                " redacted=",
                ""
            ])), this.$WAWebHatchApprovalNotification$p_3(), String(t));
            return {
                wid: o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                tag: this.buildKey(),
                title: t ? f() : this.notification.title,
                body: t ? g() : this.notification.body
            };
        };
        a_prototype.getIcon = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = y();
                if (e == null) {
                    return "";
                }
                const t = yield o("WAWebNotificationIconUtils").getChatNotificationIcon(e, this.abortController.signal, o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(e));
                if (this.$WAWebHatchApprovalNotification$p_1(this.notification.subjectId)) {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-approval-notif: aborting ",
                        ", withdrawn while building"
                    ])), this.$WAWebHatchApprovalNotification$p_3());
                    this.abortController.abort();
                }
                return t;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getChatKind = function() {
            const e = y();
            if (e == null) {
                return null;
            }
            return o("WAWebFrontendChatGetters").getKind(e);
        };
        a_prototype.matchesChat = function(t) {
            return o("WAWebBotUtils").isHatchBot(t.id);
        };
        a_prototype.$WAWebHatchApprovalNotification$p_3 = function() {
            return this.notification.subjectId;
        };
        return a;
    })(o("WAWebBaseNotification").WABaseNotification);
    function f() {
        return s._("Approval needed").toString();
    }
    function g() {
        return s._("A task needs your approval").toString();
    }
    function h(e) {
        const n = o("WAWebChatCollection").ChatCollection.getActive()?.id;
        return n != null && o("WAWebBotUtils").isHatchBot(n) && o("WAWebNotificationHelpers").appIsActive() && e?.isChatsSurfaceActive === true;
    }
    function y() {
        return o("WAWebChatCollection").ChatCollection.get(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
    }
    l.hatchApprovalNotificationKey = p;
    l.WAWebHatchApprovalNotification = _;
}, 226);
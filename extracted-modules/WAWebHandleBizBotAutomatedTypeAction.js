__d("WAWebHandleBizBotAutomatedTypeAction", [
    "WAWebApiBusinessProfile",
    "WAWebBotBaseGating",
    "WAWebBotSystemMsg",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebMsgModelFromData",
    "WAWebPrivacyModeSystemMsg",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebChatCollection").ChatCollection.get(e);
            if (r && !o("WAWebBotUtils").isMetaAiBot(e)) {
                let a = t;
                if (!a) {
                    const l = yield o("WAWebApiBusinessProfile").getBusinessProfileRow(e.toString());
                    a = o("WAWebBotTypes").BizBotAutomatedType.cast(l?.automatedType) ?? o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
                }
                const s = n ?? o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN;
                if (a !== s) {
                    if (a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN && s === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P) {
                        yield u(r);
                    } else if (a === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN && s === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P) {
                        yield d(r);
                    } else if (a === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P && s === o("WAWebBotTypes").BizBotAutomatedType.UNKNOWN) {
                        yield p(r);
                    }
                }
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!o("WAWebBotTos").hasAcceptedBizBotTos() || e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_1P)) {
                const t = o("WAWebBotSystemMsg").genBizBot1pDisclosureMessage(e.id);
                yield o("WAWebDBProcessMessage").storeMessages([
                    t
                ], t.id.remote);
                if (o("WAWebBotBaseGating").isBizBot1pEnabled()) {
                    const n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
                    e.msgs.add(n);
                }
                yield e.updateBizBotSysMsgCreated(o("WAWebBotTypes").BizBotType.BIZ_1P);
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!(!o("WAWebBotTos").hasAcceptedBizBotTos() || e.bizBotSystemMsgType === o("WAWebBotTypes").BizBotType.BIZ_3P)) {
                const t = o("WAWebBotSystemMsg").genBizBot3pDisclosureMessage(e.id);
                yield o("WAWebDBProcessMessage").storeMessages([
                    t
                ], t.id.remote);
                const n = o("WAWebMsgModelFromData").msgModelFromMsgData(t);
                e.msgs.add(n);
                yield e.updateBizBotSysMsgCreated(o("WAWebBotTypes").BizBotType.BIZ_3P);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.bizBotSystemMsgType != null) {
                const t = e.id;
                let n;
                const a = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(e.contact.privacyMode);
                switch(a){
                    case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
                        n = o("WAWebContactSystemMsg").genEncryptNotificationMsg(t, "encrypt_now");
                        break;
                    case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
                        n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(t, "biz_privacy_mode_to_bsp");
                        break;
                    case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
                        n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(t, "biz_privacy_mode_to_fb");
                        break;
                    case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
                        n = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(t, "is_capi_hosted_group");
                        break;
                }
                if (!n) {
                    throw r("err")("Unhandled privacy mode");
                }
                yield o("WAWebDBProcessMessage").storeMessages([
                    n
                ], n.id.remote);
                const i = o("WAWebMsgModelFromData").msgModelFromMsgData(n);
                e.msgs.add(i);
                yield e.updateBizBotSysMsgCreated(null);
            }
        });
        return _.apply(this, arguments);
    }
    l.handleBizBotAutomatedTypeTransition = e;
}, 98);
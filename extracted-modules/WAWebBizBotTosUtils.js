__d("WAWebBizBotTosUtils", [
    "Promise",
    "WAWebBizBotTos.react",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileGetters",
    "WAWebContactGetters",
    "WAWebCreateBizBotSysMsgAction",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const businessProfile = t.contact.businessProfile;
            if (!(!o("WAWebBotBaseGating").isBizBot1pEnabled() || businessProfile == null || !o("WAWebBusinessProfileGetters").getIsBizBot1p(businessProfile) || o("WAWebBotTos").hasSeenBizBotTos(o("WAWebBotTypes").BizBotType.BIZ_1P) || o("WAWebContactGetters").getIsMe(t.contact))) {
                return new (e || (e = n("Promise")))(function(e) {
                    const Component = r("WAWebBizBotTos.react");
                    o("WAWebModalManager").ModalManager.open(<Component onAccept={n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        yield o("WAWebCreateBizBotSysMsgAction").maybeCreateBizBot1pDisclosureSysMsg(t);
                        e();
                    })} onCancel={e} chatEntryPoint={t.chatEntryPoint}/>, {
                        blockClose: true
                    });
                });
            }
        });
        return d.apply(this, arguments);
    }
    l.maybeShowBizBot1pTos = c;
}, 98);
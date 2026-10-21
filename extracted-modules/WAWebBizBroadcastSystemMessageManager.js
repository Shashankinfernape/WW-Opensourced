__d("WAWebBizBroadcastSystemMessageManager", [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebDBMessageDelete",
    "WAWebDBProcessMessage",
    "WAWebMsgModel",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "biz_broadcast_status";
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebWidFactory").createWid(t);
            const r = o("WAWebChatCollection").ChatCollection.get(n);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:system-msg] update for ",
                ""
            ])), t);
            if (r != null) {
                const a = r.msgs.getModelsArray();
                const i = [];
                for(let l = a.length - 1; l >= 0; l--){
                    const p = a[l];
                    if (p.subtype === m) {
                        i.push(p);
                    }
                }
                if (i.length > 0) {
                    const _ = i.map((e)=>e.id.toString());
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:system-msg] Removing ",
                        " existing system message(s)"
                    ])), i.length);
                    yield o("WAWebDBMessageDelete").removeMessagesFromHistory(_);
                    for (const f of i){
                        r.msgs.remove(f);
                    }
                }
            }
            const g = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignsByBroadcastJid(t);
            const h = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
            let y = 0;
            let C = 0;
            for (const b of g){
                const v = b.status;
                if (v === o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.FAILED) {
                    C++;
                } else if (v === o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.PROCESSING && b.deviceId === h) {
                    y++;
                }
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:system-msg] Counts: processing=",
                ", failed=",
                ""
            ])), y, C);
            if (y > 0 || C > 0) {
                const S = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(n, m, [
                    y.toString(),
                    C.toString()
                ]);
                yield o("WAWebDBProcessMessage").storeMessages([
                    S
                ], n);
                if (r != null) {
                    const R = new (o("WAWebMsgModel")).Msg(S);
                    r.msgs.add(R);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:system-msg] inserted: processing=",
                        ", failed=",
                        ""
                    ])), y, C);
                }
            } else {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:system-msg] No system message needed (all done)"
                ])));
            }
        });
        return _.apply(this, arguments);
    }
    l.updateBizBroadcastSystemMessage = p;
}, 98);
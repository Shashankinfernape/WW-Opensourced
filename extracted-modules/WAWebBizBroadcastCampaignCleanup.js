__d("WAWebBizBroadcastCampaignCleanup", [
    "Promise",
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignStorageUtils",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
            const r = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignsByStatuses([
                o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.PROCESSING
            ]);
            const a = r.filter((e)=>e.deviceId === t && e.pendingBroadcastMessageId == null && e.msgId == null);
            const i = [];
            let l = 0;
            yield (s || (s = n("Promise"))).all(a.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    yield o("WAWebBizBroadcastCampaignStorageUtils").updateCampaignStatusWithSync(e.campaignId, {
                        status: o("WAWebSchemaBusinessBroadcastCampaign").BusinessBroadcastCampaignStatus.FAILED
                    });
                    yield o("WAWebBizBroadcastCampaignStorageUtils").cleanupPendingCampaignData(e.campaignId);
                    l++;
                    if (i.length < 3) {
                        i.push(e.campaignId);
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            if (l > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cleanupStaleCampaigns] ",
                    " stuck->FAILED ids=",
                    ""
                ])), l, i);
            }
        });
        return c.apply(this, arguments);
    }
    l.cleanupStaleCampaigns = u;
}, 98);
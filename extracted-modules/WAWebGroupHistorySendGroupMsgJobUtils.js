__d("WAWebGroupHistorySendGroupMsgJobUtils", [
    "WAWebApiContact",
    "WAWebDBDeviceListFanout",
    "WAWebMaybe",
    "WAWebSendGroupMsgJob",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { skDistribList, skList }, n) {
            const i = new Set(skDistribList.concat(skList).map((e)=>String(o("WAWebWidFactory").asUserWidOrThrow(e))));
            const l = (t)=>o("WAWebMaybe").ifSome(o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t)), function(e) {
                    return i.has(String(e));
                });
            const s = e.filter((e)=>i.has(String(e)) || l(e));
            const u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const wids = n.normalizeAddressingModeFn([].concat(s, [
                u
            ])).filter(Boolean);
            const d = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids
            });
            return {
                type: o("WAWebSendGroupMsgJob").GROUP_MSG_TYPE.DIRECT,
                deviceList: [].concat(d)
            };
        });
        return s.apply(this, arguments);
    }
    l.getGroupSendListForGroupHistoryBundle = e;
}, 98);
__d("WAWebMmSignalSharingTos", [
    "WATimeUtils",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebTos",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "20231028";
    function s() {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return e;
        }
        return "";
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled() && (o("WAWebTos").TosManager.setState(s(), "ACCEPTED", o("WATimeUtils").unixTime()), o("WAWebMmSignalSharingGatingUtils").isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens())) {
                const newMsg = o("WAWebContactSystemMsg").genMmSignalSharingSystemMsg(e);
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: e,
                    newMsg,
                    handleSingleMsgOrigin: "mmSignalSharing"
                });
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return o("WAWebTos").TosManager.getState(s()) === "ACCEPTED";
        }
        return false;
    }
    function m() {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return o("WAWebTos").TosManager.getState(o("WAWebTos").TOS_3_ID) === "ACCEPTED";
        }
        return false;
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
                yield o("WAWebTos").TosManager.run({
                    singleRun: true
                });
            }
        });
        return _.apply(this, arguments);
    }
    l.getMmSignalSharingDisclosureTosId = s;
    l.acceptMmSignalSharingDisclosureTos = u;
    l.isMmSignalSharingDisclosureTosAccepted = d;
    l.is2021TosAccepted = m;
    l.refreshTos = p;
}, 98);
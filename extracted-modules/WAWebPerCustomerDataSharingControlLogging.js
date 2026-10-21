__d("WAWebPerCustomerDataSharingControlLogging", [
    "WAWebSmbPerCustomerDataSharingControlWamEvent"
], function(t, n, r, o, a, i, l) {
    const e = 1;
    function s(t) {
        const n = new (o("WAWebSmbPerCustomerDataSharingControlWamEvent")).SmbPerCustomerDataSharingControlWamEvent;
        n.smbPerCustomerDataSharingControlAction = t.action;
        if (t.actionOptInStatus != null) {
            n.smbPerCustomerDataSharingControlActionOptInStatus = t.actionOptInStatus;
        }
        if (t.currentOptInStatus != null) {
            n.smbPerCustomerDataSharingControlCurrentOptInStatus = t.currentOptInStatus;
        }
        if (t.entryPoint != null) {
            n.smbPerCustomerDataSharingControlEntryPoint = t.entryPoint;
        }
        if (t.globalDataSharingEntryPoint != null) {
            n.smbPerCustomerDataSharingControlGlobalDataSharingEntryPoint = t.globalDataSharingEntryPoint;
        }
        n.smbPerCustomerDataSharingControlVersion = e;
        n.commit();
    }
    l.logPerCustomerDataSharingControlEvent = s;
}, 98);
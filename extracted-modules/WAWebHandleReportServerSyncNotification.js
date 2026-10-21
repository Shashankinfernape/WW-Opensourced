__d("WAWebHandleReportServerSyncNotification", [
    "WAWebMdAppStateOfflineNotificationsWamEvent"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s() {
        if (!(e.size < 1)) {
            let redundantCount = 0;
            Array.from(e.entries()).forEach(([, n])=>{
                redundantCount += n - 1;
            });
            new (o("WAWebMdAppStateOfflineNotificationsWamEvent")).MdAppStateOfflineNotificationsWamEvent({
                redundantCount
            }).commit();
            e.clear();
        }
    }
    l.offlineNotificationsCount = e;
    l.reportOfflineNotifications = s;
}, 98);
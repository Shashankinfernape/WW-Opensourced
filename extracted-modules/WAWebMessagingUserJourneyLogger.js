__d("WAWebMessagingUserJourneyLogger", [
    "WARandomHex",
    "WAWebGetThreadType",
    "WAWebGetUserRole",
    "WAWebMessagingUserJourneyWamEvent"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            this.$1 = o("WARandomHex").randomHex(16);
            this.$2 = e;
        }
        commitEvent(n) {
            new (o("WAWebMessagingUserJourneyWamEvent")).MessagingUserJourneyWamEvent(babelHelpers.extends({
                appSessionId: e.appSessionId,
                userJourneyFunnelId: this.$1,
                threadType: o("WAWebGetThreadType").getThreadType(this.$2),
                userRole: o("WAWebGetUserRole").getUserRole(this.$2) ?? undefined
            }, n)).commit();
        }
    }
    e.appSessionId = o("WARandomHex").randomHex(16);
    l.MessagingUserJourneyLogger = e;
}, 98);
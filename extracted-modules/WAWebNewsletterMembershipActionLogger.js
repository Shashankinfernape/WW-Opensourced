__d("WAWebNewsletterMembershipActionLogger", [
    "WAWebChannelMembershipActionEventWamEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ actionResult, cid }) {
        new (o("WAWebChannelMembershipActionEventWamEvent")).ChannelMembershipActionEventWamEvent({
            cid: cid.user,
            actionResult
        }).commit();
    }
    l.logNewsletterMembershipActionEvent = e;
}, 98);
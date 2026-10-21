__d("WAWebSendForNeededAddRequest", [
    "WAWebCmd",
    "WAWebContactCollection"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ groupAddResponse, groupDesc, onFinish, subject }) {
        if (groupAddResponse.participants) {
            const i = groupAddResponse.gid;
            const l = [];
            groupAddResponse.participants.forEach((e)=>{
                if (e.code === "403") {
                    const t = o("WAWebContactCollection").ContactCollection.gadd(e.userWid, {
                        silent: true
                    });
                    l.push(babelHelpers.extends({}, e, {
                        contact: t
                    }));
                }
            });
            if (l.length > 0 && i) {
                o("WAWebCmd").Cmd.openGroupsV4InviteRequestFlow(l, i, subject, groupDesc, onFinish);
            }
        }
    }
    l.sendForNeededAddRequest = e;
}, 98);
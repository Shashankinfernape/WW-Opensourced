__d("WAWebParseGroupInviteMessageProto", [
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: t, messageProtobuf: n }) {
        const r = n.groupInviteMessage;
        if (r != null) {
            const { caption: a, contextInfo: i, groupJid: l, groupName: s, inviteCode: u, inviteExpiration: c } = r;
            const d = babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE,
                kind: o("WAWebMsgType").MsgKind.GroupsV4Invite,
                comment: a,
                inviteCode: u,
                inviteCodeExp: c?.toString(),
                inviteGrp: l,
                inviteGrpName: s
            });
            return {
                msgData: d,
                contextInfo: i
            };
        }
    }
    l.default = e;
}, 98);
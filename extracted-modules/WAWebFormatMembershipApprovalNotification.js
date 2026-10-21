__d("WAWebFormatMembershipApprovalNotification", [
    "fbt",
    "WALogger",
    "WAWebFbtIntlList",
    "WAWebFormatParticipantNames",
    "WAWebGroupType",
    "WAWebSystemMessageGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumSystemMessageTypeType",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(t, n, a) {
        const i = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled();
        let l;
        if (n) {
            l = o("WAWebFormatParticipantNames").getFormattedName({
                clickable: false,
                jid: n
            });
        }
        switch(t){
            case "membership_approval_mode":
                return c(n, a);
            case "membership_approval_request":
                return {
                    text: i ? s._("{author} requested to join", [
                        s._param("author", l)
                    ]) : s._("{author} requested to join. Click to review.", [
                        s._param("author", l)
                    ]),
                    enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_JOIN_REQUEST
                };
            case "created_membership_requests":
                {
                    const u = a.map((e)=>o("WAWebFormatParticipantNames").getFormattedName({
                            clickable: false,
                            jid: o("WAWebWidFactory").createWid(e.toString())
                        }));
                    const d = u[0];
                    const m = babelHelpers.arrayLikeToArray(u).slice(1);
                    const p = r("WAWebFbtIntlList")(m, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
                    return {
                        text: i ? s._("{author} requested to add {authors}", [
                            s._param("author", d),
                            s._param("authors", p)
                        ]) : s._("{author} requested to add {authors}. Click to review.", [
                            s._param("author", d),
                            s._param("authors", p)
                        ]),
                        enumType: o("WAWebWamEnumSystemMessageTypeType").SYSTEM_MESSAGE_TYPE_TYPE.GROUP_JOIN_REQUEST
                    };
                }
            default:
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[formatMembershipApprovalNotification] unknown subtype: ",
                    ""
                ])), t);
                break;
        }
        return {
            text: ""
        };
    }
    function c(e, t) {
        const n = t[0] && o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(t[0].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On;
        const r = t[1] && o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.cast(t[1].toString()) === o("WAWebGroupType").GroupSettingChangeSystemMessageIsAdmin.Admin;
        const a = o("WAWebSystemMessageGatingUtils").systemMessageActionTextStylingEnabled() && r;
        const i = e ? o("WAWebFormatParticipantNames").getFormattedName({
            clickable: false,
            jid: e
        }) : null;
        if (n) {
            if (i == null) {
                if (r) {
                    return {
                        text: a ? s._("New members need admin approval to join this group") : s._("New members need admin approval to join this group. Click to change.")
                    };
                }
                return {
                    text: s._("New members need admin approval to join this group.")
                };
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
                return {
                    text: a ? s._("You turned on admin approval to join this group") : s._("You turned on admin approval to join this group. Click to change.")
                };
            }
            if (r) {
                return {
                    text: a ? s._("{author} turned on admin approval to join this group", [
                        s._param("author", i)
                    ]) : s._("{author} turned on admin approval to join this group. Click to change.", [
                        s._param("author", i)
                    ])
                };
            }
            return {
                text: s._("{author} turned on admin approval to join this group", [
                    s._param("author", i)
                ])
            };
        }
        if (i == null) {
            return {
                text: s._("Admin approval to join this group was turned off.")
            };
        }
        if (o("WAWebUserPrefsMeUser").isMeAccount(e)) {
            return {
                text: a ? s._("You turned off admin approval to join this group") : s._("You turned off admin approval to join this group. Click to change.")
            };
        }
        if (r) {
            return {
                text: a ? s._("{author} turned off admin approval to join this group", [
                    s._param("author", i)
                ]) : s._("{author} turned off admin approval to join this group. Click to change.", [
                    s._param("author", i)
                ])
            };
        }
        return {
            text: s._("{author} turned off admin approval to join this group", [
                s._param("author", i)
            ])
        };
    }
    function d(e, t, n) {
        return u(e, t, n).text;
    }
    l.formatMembershipApprovalNotification = d;
}, 226);
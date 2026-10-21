__d("WAWebMexCommunityOwnerUpdateNotificationHandler", [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupType",
    "WAWebHandleParsedGroupNotification",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[mex][community][owner-update] null ",
            ""
        ])), t).tags("mex").sendLogs("mex-communitynotification-owner-update-fail");
    }
    function d(updated_by) {
        if (updated_by != null && updated_by.id != null) {
            const { id, notify_name, pn } = updated_by;
            return {
                authorWid: o("WAWebWidFactory").createWid(id),
                notifyName: notify_name,
                authorPhoneNumber: pn != null ? o("WAWebWidFactory").createWid(pn) : null
            };
        }
        return {
            authorWid: null,
            notifyName: null,
            authorPhoneNumber: null
        };
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { xwa2_notify_group_on_participants_roles_change }) {
            const { id, role_updates, update_time, updated_by } = xwa2_notify_group_on_participants_roles_change;
            if (id == null) {
                c("id");
                return;
            }
            if (update_time == null) {
                c("update_time");
                return;
            }
            const p = d(updated_by);
            const { authorPhoneNumber, authorWid, notifyName } = p;
            const h = role_updates[0];
            const { new_role, user, user_jid } = h;
            const v = user?.jid;
            const S = o("WAWebWidFactory").createWid(id);
            const R = r("isStringNullOrEmpty")(v) ? user_jid : v;
            const newOwner = o("WAWebWidFactory").createUserWidOrThrow(R);
            if (new_role !== "SUPERADMIN_MEMBER") {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][community][owner-update] invalid role ",
                    ""
                ])), new_role).tags("mex").sendLogs("mex-communitynotification-owner-update-fail");
                return;
            }
            const E = {
                actionType: o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE,
                oldOwner: authorWid,
                newOwner
            };
            const k = {
                chatId: S,
                ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(update_time)),
                actions: [
                    E
                ],
                author: authorWid,
                authorPhoneNumber,
                isLidAddressingMode: null,
                pushname: notifyName,
                externalId: e.stanzaId,
                offline: e.offline,
                hasIncompleteParticipantInformation: false
            };
            try {
                yield o("WAWebHandleParsedGroupNotification").handleParsedGroupNotification(k);
            } catch (e) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][community][owner-update] update failed"
                ]))).tags("mex").sendLogs("mex-communitynotification-owner-update-fail");
            }
        });
        return p.apply(this, arguments);
    }
    l.mexHandleCommunityOwnerUpdate = m;
}, 98);
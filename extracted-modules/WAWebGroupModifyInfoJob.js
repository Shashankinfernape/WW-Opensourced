__d("WAWebGroupModifyInfoJob", [
    "Promise",
    "WASmaxGroupsSetDescriptionRPC",
    "WASmaxGroupsSetPropertyRPC",
    "WASmaxGroupsSetSubjectRPC",
    "WAWebBackendErrors",
    "WAWebEphemeralityUtils",
    "WAWebGroupConstants",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, subjectElementValue) {
            const a = yield o("WASmaxGroupsSetSubjectRPC").sendSetSubjectRPC({
                iqTo: o("WAWebWidToJid").widToGroupJid(t),
                subjectElementValue
            });
            e: {
                const i = a;
                if ((typeof i === "object" && i !== null || typeof i === "function") && i.name === "SetSubjectResponseSuccess") {
                    return;
                }
                if ((typeof i === "object" && i !== null || typeof i === "function") && i.name === "SetSubjectResponseClientError" && (typeof i.value === "object" && i.value !== null || typeof i.value === "function") && (typeof i.value.errorSetSubjectClientErrors === "object" && i.value.errorSetSubjectClientErrors !== null || typeof i.value.errorSetSubjectClientErrors === "function") && (typeof i.value.errorSetSubjectClientErrors.value === "object" && i.value.errorSetSubjectClientErrors.value !== null || typeof i.value.errorSetSubjectClientErrors.value === "function") && "code" in i.value.errorSetSubjectClientErrors.value && "text" in i.value.errorSetSubjectClientErrors.value) {
                    const l = i.value.errorSetSubjectClientErrors.value.code;
                    const s = i.value.errorSetSubjectClientErrors.value.text;
                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(l), s));
                }
                if ((typeof i === "object" && i !== null || typeof i === "function") && i.name === "SetSubjectResponseServerError" && (typeof i.value === "object" && i.value !== null || typeof i.value === "function") && (typeof i.value.errorServerErrors === "object" && i.value.errorServerErrors !== null || typeof i.value.errorServerErrors === "function") && (typeof i.value.errorServerErrors.value === "object" && i.value.errorServerErrors.value !== null || typeof i.value.errorServerErrors.value === "function") && "code" in i.value.errorServerErrors.value && "text" in i.value.errorServerErrors.value) {
                    const u = i.value.errorServerErrors.value.code;
                    const c = i.value.errorServerErrors.value.text;
                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(u), c));
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${i}`);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ desc, groupWid, newDescId, prevDescId }) {
            const s = desc != null ? yield o("WASmaxGroupsSetDescriptionRPC").sendSetDescriptionRPC({
                bodyArgs: {
                    bodyElementValue: desc
                },
                iqTo: o("WAWebWidToJid").widToGroupJid(groupWid),
                descriptionId: newDescId,
                descriptionPrev: prevDescId,
                hasDescriptionDeleteTrue: false
            }) : yield o("WASmaxGroupsSetDescriptionRPC").sendSetDescriptionRPC({
                bodyArgs: undefined,
                iqTo: o("WAWebWidToJid").widToGroupJid(groupWid),
                descriptionId: newDescId,
                descriptionPrev: prevDescId,
                hasDescriptionDeleteTrue: true
            });
            switch(s.name){
                case "SetDescriptionResponseSuccess":
                    return;
                case "SetDescriptionResponseClientError":
                    {
                        const u = s.value.errorSetDescriptionClientErrors.value;
                        const { code, text } = u;
                        return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    }
                case "SetDescriptionResponseServerError":
                    {
                        const m = s.value.errorServerErrors.value;
                        const { code, text } = m;
                        return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    }
            }
        });
        return d.apply(this, arguments);
    }
    function m(t, a, ephemeralExpiration) {
        let l = {
            hasLocked: false,
            hasAnnouncement: false,
            hasNoFrequentlyForwarded: false,
            ephemeralArgs: null,
            hasUnlocked: false,
            hasNotAnnouncement: false,
            hasFrequentlyForwardedOk: false,
            hasNotEphemeral: false,
            membershipApprovalModeArgs: null,
            hasAllowAdminReports: false,
            hasNotAllowAdminReports: false,
            hasAllowNonAdminSubGroupCreation: false,
            hasNotAllowNonAdminSubGroupCreation: false,
            hasGroupHistory: false,
            hasNoGroupHistory: false,
            iqTo: o("WAWebWidToJid").widToGroupJid(t)
        };
        switch(a){
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT:
                l = babelHelpers.extends({}, l, {
                    hasAnnouncement: ephemeralExpiration === 1,
                    hasNotAnnouncement: ephemeralExpiration !== 1
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT:
                l = babelHelpers.extends({}, l, {
                    hasLocked: ephemeralExpiration === 1,
                    hasUnlocked: ephemeralExpiration !== 1
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
                l = babelHelpers.extends({}, l, {
                    hasNoFrequentlyForwarded: ephemeralExpiration === 1,
                    hasFrequentlyForwardedOk: ephemeralExpiration !== 1
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.EPHEMERAL:
                l = babelHelpers.extends({}, l, {
                    ephemeralArgs: ephemeralExpiration > 0 ? {
                        ephemeralExpiration
                    } : null,
                    hasNotEphemeral: ephemeralExpiration <= 0
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
                l = babelHelpers.extends({}, l, {
                    membershipApprovalModeArgs: {
                        membershipApprovalModesArgs: ephemeralExpiration === 1 ? {
                            isGroupJoinMembershipApprovalModeEnabled: true
                        } : {
                            isGroupJoinMembershipApprovalModeDisabled: true
                        }
                    }
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
                l = babelHelpers.extends({}, l, {
                    hasAllowAdminReports: ephemeralExpiration === 1,
                    hasNotAllowAdminReports: ephemeralExpiration !== 1
                });
                break;
            case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
                l = babelHelpers.extends({}, l, {
                    hasAllowNonAdminSubGroupCreation: ephemeralExpiration === 1,
                    hasNotAllowNonAdminSubGroupCreation: ephemeralExpiration !== 1
                });
                break;
            default:
                return (e || (e = n("Promise"))).reject(r("err")(`invalid group property ${a}`));
        }
        return o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(l);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ephemeralExpiration, groupWid, trigger }) {
            let a = {
                hasLocked: false,
                hasAnnouncement: false,
                hasNoFrequentlyForwarded: false,
                ephemeralArgs: null,
                hasUnlocked: false,
                hasNotAnnouncement: false,
                hasFrequentlyForwardedOk: false,
                hasNotEphemeral: true,
                membershipApprovalModeArgs: null,
                hasAllowAdminReports: false,
                hasNotAllowAdminReports: false,
                hasAllowNonAdminSubGroupCreation: false,
                hasNotAllowNonAdminSubGroupCreation: false,
                hasGroupHistory: false,
                hasNoGroupHistory: false,
                iqTo: o("WAWebWidToJid").widToGroupJid(groupWid)
            };
            const ephemeralTrigger = o("WAWebEphemeralityUtils").getGroupEphemeralTrigger(trigger);
            if (trigger != null) {
                a = babelHelpers.extends({}, a, {
                    ephemeralArgs: ephemeralExpiration > 0 ? {
                        ephemeralExpiration,
                        ephemeralTrigger
                    } : null,
                    hasNotEphemeral: ephemeralExpiration <= 0
                });
            } else {
                a = babelHelpers.extends({}, a, {
                    ephemeralArgs: ephemeralExpiration > 0 ? {
                        ephemeralExpiration
                    } : null,
                    hasNotEphemeral: ephemeralExpiration <= 0
                });
            }
            return o("WASmaxGroupsSetPropertyRPC").sendSetPropertyRPC(a);
        });
        return _.apply(this, arguments);
    }
    l.setGroupSubject = s;
    l.setGroupDescription = c;
    l.setGroupProperty = m;
    l.setEphemeralGroupProperty = p;
}, 98);
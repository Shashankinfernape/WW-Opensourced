__d("WAWebOutContactLoggingUtils", [
    "WAWebCompanionInviteContactWamEvent",
    "WAWebContactCollection",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebWamEnumCompanionInviteActionType",
    "WAWebWamEnumCompanionInviteMethodType",
    "WAWebWamEnumCompanionInviteOriginType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        if (e != null) {
            return o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.GROUPS_CREATE_PARTICIPANT_SELECTOR;
        }
        if (t) {
            return o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_SEARCH;
        }
        return o("WAWebWamEnumCompanionInviteOriginType").COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_LIST;
    }
    function s({ entryPoint, inviteCodeError, isServerSentInvite = false, validInviteCode }) {
        new (o("WAWebCompanionInviteContactWamEvent")).CompanionInviteContactWamEvent(babelHelpers.extends({}, p(), {
            companionInviteMethod: isServerSentInvite ? o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.SERVER_SMS : o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: entryPoint,
            companionInviteSessionId: o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ?? o("WAWebOutContactInviteJourney").createCompanionInviteSessionId(),
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType").COMPANION_INVITE_ACTION_TYPE.INVITE_SEND,
            companionValidInviteCode: validInviteCode
        }, inviteCodeError != null ? {
            companionInviteCodeError: inviteCodeError
        } : {})).commit();
    }
    function u({ entryPoint, isServerSentInvite = false }) {
        const companionInviteSessionId = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
        new (o("WAWebCompanionInviteContactWamEvent")).CompanionInviteContactWamEvent(babelHelpers.extends({}, p(), {
            companionInviteMethod: isServerSentInvite ? o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.SERVER_SMS : o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: entryPoint,
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType").COMPANION_INVITE_ACTION_TYPE.INVITE_INTENT
        }, companionInviteSessionId != null ? {
            companionInviteSessionId
        } : {})).commit();
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ entryPoint, groupJid, serverSendFailureReason, sessionId, validNumbers }) {
            const l = yield o("WAWebOutContactInviteUtils").storeMultiGroupInviteSms(groupJid, validNumbers, entryPoint);
            validNumbers.forEach((e, n)=>{
                const o = l[n];
                m({
                    entryPoint,
                    inviteCodeError: o != null ? o.toString() : serverSendFailureReason,
                    sessionId
                });
            });
        });
        return d.apply(this, arguments);
    }
    function m({ entryPoint, inviteCodeError, isServerSentInvite = false, sessionId }) {
        new (o("WAWebCompanionInviteContactWamEvent")).CompanionInviteContactWamEvent(babelHelpers.extends({}, p(), {
            companionInviteMethod: isServerSentInvite ? o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.SERVER_SMS : o("WAWebWamEnumCompanionInviteMethodType").COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: entryPoint,
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType").COMPANION_INVITE_ACTION_TYPE.INVITE_SEND,
            companionInviteSessionId: sessionId ?? o("WAWebOutContactInviteJourney").getOutContactInviteSessionId() ?? o("WAWebOutContactInviteJourney").createCompanionInviteSessionId()
        }, inviteCodeError != null ? {
            companionInviteCodeError: inviteCodeError
        } : {})).commit();
    }
    function p() {
        const length = o("WAWebContactCollection").ContactCollection.length;
        const companionInviteNumContactsAddressBook = length + o("WAWebOutContactCollection").OutContactCollection.length;
        return {
            companionInviteNumContactsAddressBook,
            companionInviteNumContactsWa: length
        };
    }
    l.getOutContactEntryPoint = e;
    l.logOneToOneInviteContact = s;
    l.logOutContactInviteIntent = u;
    l.logMultiGroupInviteContacts = c;
    l.logGroupInviteContact = m;
}, 98);
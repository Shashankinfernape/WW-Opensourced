__d("WAWebContactMutator", [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactBlocklistUtils",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebProtobufsAdv.pb",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if (e.isLid()) {
            const t = o("WAWebApiContact").getPnIfLidIsLatestMapping(e);
            const pnContact = t != null ? o("WAWebContactCollection").ContactCollection.gadd(t) : null;
            return {
                lidContact: o("WAWebContactCollection").ContactCollection.gadd(e),
                pnContact
            };
        }
        const r = o("WAWebApiContact").getCurrentLid(e);
        const lidContact = r != null ? o("WAWebContactCollection").ContactCollection.gadd(r) : null;
        return {
            pnContact: o("WAWebContactCollection").ContactCollection.gadd(e),
            lidContact
        };
    }
    function m({ lidContact, pnContact }, t) {
        if (pnContact != null) {
            pnContact.set(t);
        }
        if (lidContact != null) {
            lidContact.set(t);
        }
    }
    function p({ contactId, pushname }) {
        const r = d(o("WAWebWidFactory").asUserWidOrThrow(contactId));
        const { lidContact, pnContact } = r;
        if ((pnContact == null || pnContact.pushname === pushname) && (lidContact == null || lidContact.pushname === pushname)) {
            return false;
        }
        const l = {
            pushname
        };
        m(r, l);
        return true;
    }
    function _({ contactId, externalUserState }) {
        const r = d(o("WAWebWidFactory").asUserWidOrThrow(contactId));
        const { lidContact, pnContact } = r;
        if ((pnContact == null || pnContact.externalUserState === externalUserState) && (lidContact == null || lidContact.externalUserState === externalUserState)) {
            return false;
        }
        const l = {
            externalUserState
        };
        m(r, l);
        return true;
    }
    function f({ pushnameUpdates }) {
        pushnameUpdates.forEach(({ contactId, pushname })=>{
            p({
                contactId,
                pushname
            });
        });
    }
    function g({ lidPhoneNumberMappings }) {
        lidPhoneNumberMappings.forEach(({ lid, phoneNumber })=>{
            const r = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createUserWidOrThrow(lid, "lid"));
            const a = o("WAWebContactCollection").ContactCollection.get(o("WAWebWidFactory").createUserWidOrThrow(phoneNumber));
            if (r != null) {
                const i = r.phoneNumber = o("WAWebWidFactory").createUserWidOrThrow(phoneNumber);
                r.copyFieldsFromPnContact(i);
            }
            if (r != null) {
                o("WAWebContactBlocklistUtils").updateContactBlocked(r);
            }
            if (a != null) {
                o("WAWebContactBlocklistUtils").updateContactBlocked(a);
            }
            r?.updateContactOptedOutOfMarketingMessages();
            a?.updateContactOptedOutOfMarketingMessages();
        });
        o("WAWebContactCollection").ContactCollection.trigger("lid-pn-mapping-updated");
    }
    function h({ lidContactDataMappings }) {
        lidContactDataMappings.forEach(({ displayNameLID, lid, requestedPnTimestamp, shareOwnPn })=>{
            const i = o("WAWebContactCollection").ContactCollection.gadd(lid);
            if (i != null) {
                if (shareOwnPn != null) {
                    i.shareOwnPn = shareOwnPn;
                }
                if (displayNameLID != null) {
                    i.displayNameLID = displayNameLID;
                }
                if (requestedPnTimestamp != null) {
                    i.requestedPnTimestamp = requestedPnTimestamp;
                }
            }
        });
    }
    function y({ contactId, disappearingModeDuration, disappearingModeSettingTimestamp, isEphemeralityDisabled }) {
        const l = d(o("WAWebWidFactory").asUserWidOrThrow(contactId));
        const s = {
            disappearingModeDuration,
            disappearingModeSettingTimestamp,
            isEphemeralityDisabled
        };
        m(l, s);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "updated contact disappearing mode"
        ]))).tags("contact");
    }
    function C({ contactId, textStatusEmoji, textStatusEphemeralDuration, textStatusExpiryTs, textStatusLastUpdateTime, textStatusString }) {
        const u = d(o("WAWebWidFactory").asUserWidOrThrow(contactId));
        const c = {
            textStatusString,
            textStatusEmoji,
            textStatusEphemeralDuration,
            textStatusLastUpdateTime,
            textStatusExpiryTs
        };
        m(u, c);
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "updated contact text status"
        ]))).tags("contact");
    }
    function b({ businessInfo, contactId }) {
        if (businessInfo != null) {
            const r = d(o("WAWebWidFactory").asUserWidOrThrow(contactId));
            m(r, babelHelpers.extends({}, businessInfo));
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "updated contact business info"
            ]))).tags("contact");
        }
    }
    function v({ usernameUpdates }) {
        usernameUpdates.forEach(({ displayNameLID, id, username, usernameCountryCode, usernameSoftDeleted })=>{
            const l = d(o("WAWebWidFactory").createUserWidOrThrow(id));
            const { lidContact, pnContact } = l;
            const c = pnContact != null && (pnContact.username !== username || pnContact.usernameCountryCode !== usernameCountryCode);
            const p = lidContact != null && (lidContact.username !== username || lidContact.usernameCountryCode !== usernameCountryCode);
            if (!(!c && !p)) {
                const _ = {};
                if (usernameCountryCode != null) {
                    _.usernameCountryCode = usernameCountryCode;
                }
                if (displayNameLID != null) {
                    _.displayNameLID = displayNameLID;
                }
                if (usernameSoftDeleted !== true) {
                    _.username = username;
                }
                m(l, _);
            }
        });
    }
    function S({ advAccountType, contactId }) {
        const r = advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED;
        o("WAWebContactCollection").ContactCollection.gadd(contactId).set(r ? {
            isHosted: true,
            isOrHasBeenHosted: true
        } : {
            isHosted: false
        });
    }
    function R({ showMe, showWithoutName }) {
        return o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
            showMe,
            showWithoutName
        });
    }
    function L({ id, usernameKey }) {
        const r = d(o("WAWebWidFactory").createUserWidOrThrow(id));
        const a = {
            usernameKey
        };
        m(r, a);
        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "updated contact username key"
        ]))).tags("contact");
    }
    function E({ displayNameLID, isEphemeralityDisabled, isUsernameContact, lid, pushname, username, usernameKey }) {
        const s = d(lid);
        const u = {};
        if (username != null) {
            u.username = username;
        }
        if (usernameKey != null) {
            u.usernameKey = usernameKey;
        }
        if (isUsernameContact != null) {
            u.isUsernameContact = isUsernameContact;
        }
        if (pushname != null) {
            u.pushname = pushname;
        }
        if (isEphemeralityDisabled != null) {
            u.isEphemeralityDisabled = isEphemeralityDisabled;
        }
        m(s, u);
        if (displayNameLID != null && s.lidContact != null) {
            s.lidContact.set({
                displayNameLID
            });
        }
    }
    l.updatePushname = p;
    l.updateContactExternalUserState = _;
    l.bulkUpdateContactPushnames = f;
    l.bulkUpdatePhoneNumberJids = g;
    l.bulkUpdateLidContactState = h;
    l.updateDisappearingMode = y;
    l.updateTextStatus = C;
    l.updateBusinessInfo = b;
    l.bulkUpdateUsernames = v;
    l.updateContactAdvAccountType = S;
    l.getFilteredContacts = R;
    l.updateUsernameKey = L;
    l.propagateIdentityFieldsToLidContact = E;
}, 98);
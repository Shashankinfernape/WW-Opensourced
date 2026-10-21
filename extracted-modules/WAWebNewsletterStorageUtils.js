__d("WAWebNewsletterStorageUtils", [
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterDBConstants",
    "WAWebNewsletterGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = e?.statusMetadata?.lastStatusSentTime;
        return n != null && o("WATimeUtils").unixTime() - n <= o("WATimeUtils").DAY_SECONDS && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled();
    }
    function s(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber:
                return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Subscriber;
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
                return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Admin;
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest:
                return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Guest;
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
                return o("WAWebNewsletterDBConstants").NewsletterDBMembership.Owner;
        }
    }
    function u(privacy) {
        switch(privacy){
            case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public:
                return 0;
            case o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private:
                return 1;
        }
    }
    function c(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE:
                return 0;
            case o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE:
                return 1;
        }
    }
    function d(e) {
        const t = {
            id: e.id.toString()
        };
        if (e.creationTime != null) {
            t.creationTime = e.creationTime;
        }
        if (e.name != null) {
            t.name = e.name;
        }
        if (e.nameUpdateTime != null) {
            t.nameUpdateTime = e.nameUpdateTime;
        }
        if (e.description != null) {
            t.description = e.description;
        }
        if (e.descriptionUpdateTime != null) {
            t.descriptionUpdateTime = e.descriptionUpdateTime;
        }
        if (e.handle != null) {
            t.handle = e.handle;
        }
        if (e.inviteCode != null) {
            t.inviteCode = e.inviteCode;
        }
        if (e.size != null) {
            t.size = e.size;
        }
        if (e.verified != null) {
            t.verified = e.verified;
        }
        if (e.membershipType != null) {
            t.membershipType = s(e.membershipType);
        }
        if (e.privacy != null) {
            t.privacy = u(e.privacy);
        }
        if (e.website != null) {
            t.website = e.website?.href;
        }
        if (e.reactionCodesSetting != null) {
            t.reactionCodesSetting = e.reactionCodesSetting;
        }
        if (e.adminCount != null) {
            t.adminCount = e.adminCount;
        }
        if (Object.hasOwn(e, "adminProfile")) {
            t.adminProfile = e.adminProfile;
        }
        if (e.adminProfilesSettingEnabled != null) {
            t.adminProfilesSettingEnabled = e.adminProfilesSettingEnabled;
        }
        if (e.capabilities != null) {
            t.capabilities = new Set(Array.from(e.capabilities, function(e) {
                return e;
            }));
        }
        if (e.suspended != null) {
            t.suspended = e.suspended;
        }
        if (e.geosuspended != null) {
            t.geosuspended = e.geosuspended;
        }
        if (e.terminated != null) {
            t.terminated = e.terminated;
        }
        if (e.wamoSubPlanId != null) {
            t.wamoSubPlanId = e.wamoSubPlanId;
        }
        if (e.wamoSubStatus != null) {
            t.wamoSubStatus = c(e.wamoSubStatus);
        }
        if (e.followerActivityMuteExpiration != null) {
            t.followerActivityMuteExpiration = e.followerActivityMuteExpiration;
        }
        if (e.statusMetadata != null) {
            t.statusMetadata = e.statusMetadata;
        }
        return t;
    }
    l.maybeHasValidStatus = e;
    l.mapNewsletterMembershipTypeForStorage = s;
    l.mapNewsletterWamoSubStatusForStorage = c;
    l.createNewsletterMetadataObjectForStorage = d;
}, 98);
__d("WAWebNewsletterMetadataInitFromStorage", [
    "WAJids",
    "WALinkify",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMessageDeliveryUpdateToModelUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterModelUtils",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        switch(e){
            case 0:
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
            case 1:
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin;
            case 3:
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner;
            case 2:
            default:
                return o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
        }
    }
    function u(e) {
        switch(e){
            case 0:
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All;
            case 3:
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None;
            case 2:
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Blocklist;
            case 1:
            default:
                return o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
        }
    }
    function c(e) {
        switch(e){
            case 0:
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights;
            case 1:
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls;
            default:
                return null;
        }
    }
    function d(e) {
        switch(e){
            case 1:
                return o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private;
            case 0:
            default:
                return o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Public;
        }
    }
    function m(e) {
        switch(e){
            case 0:
                return o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE;
            case 1:
            default:
                return o("WAWebCommonNewsletterEnums").WamoSubStatus.INACTIVE;
        }
    }
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().all();
                const a = new Set;
                const i = [];
                t.forEach((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const n = o("WAWebWidFactory").createWid(e.id);
                        const l = {
                            id: n,
                            creationTime: e.creationTime,
                            name: e.name,
                            nameUpdateTime: e.nameUpdateTime,
                            description: e.description,
                            descriptionUpdateTime: e.descriptionUpdateTime,
                            handle: e.handle,
                            inviteCode: e.inviteCode,
                            size: e.size,
                            verified: e.verified,
                            membershipType: s(e.membershipType),
                            reactionCodesSetting: u(e.reactionCodesSetting),
                            privacy: d(e.privacy),
                            website: e.website != null ? o("WALinkify").findLink(e.website) : null,
                            adminCount: e.adminCount,
                            capabilities: e.capabilities != null ? new Set(r("compactMap")(Array.from(e.capabilities), function(e) {
                                const t = c(e);
                                if (t == null) {
                                    a.add(e);
                                }
                                return t;
                            })) : new Set,
                            suspended: e.suspended,
                            geosuspended: e.geosuspended,
                            terminated: e.terminated,
                            wamoSubPlanId: e.wamoSubPlanId,
                            wamoSubStatus: m(e.wamoSubStatus),
                            statusMetadata: e.statusMetadata,
                            lastFilledStatusServerId: e.lastFilledStatusServerId,
                            statusMute: e.statusMute === true,
                            followerActivityMuteExpiration: e.followerActivityMuteExpiration ?? o("WAWebNewsletterModelUtils").UNMUTED_STATE
                        };
                        if (r("WAWebNewsletterMetadataCollection") != null) {
                            r("WAWebNewsletterMetadataCollection").add(l, {
                                merge: true
                            });
                        }
                        if (e.statusMute === true && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                            i.push({
                                id: e.id,
                                statusMute: true
                            });
                        }
                        if (e.messageDeliveryUpdates != null) {
                            const p = [];
                            e.messageDeliveryUpdates.forEach((e, t)=>p.push({
                                    id: t,
                                    code: e.code
                                }));
                            const _ = yield o("WAWebNewsletterMessageDeliveryUpdateToModelUtils").getMessageDeliveryUpdatesModelToUpdate(o("WAJids").toNewsletterJid(e.id), p, []);
                            const f = _.modelUpdatesToAdd;
                            yield o("WAWebBackendApi").frontendFireAndForget("updateNewsletterMessageDeliveryUpdate", {
                                id: n,
                                modelUpdatesToAdd: f,
                                modelUpdatesToRemove: []
                            });
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
                if (i.length > 0) {
                    yield o("WAWebBackendApi").frontendFireAndForget("updateContactsStatusMute", {
                        userStatusMuteUpdates: [],
                        groupStatusMuteUpdates: [],
                        newsletterStatusMuteUpdates: i
                    });
                }
                if (a.size > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Encountered ",
                        " unexpected newsletter capabilities in DB: ",
                        ""
                    ])), a.size, Array.from(a).join(", ")).tags("newsletter-capabilities").sendLogs("Unexpected newsletter capability in DB");
                }
            } finally{}
        });
        return _.apply(this, arguments);
    }
    l.restoreNewsletterMetadata = p;
}, 98);
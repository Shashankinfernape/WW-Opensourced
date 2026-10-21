__d("WAWebSchemaNewsletterMetadata", [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("newsletter-metadata").version(o("WAWebModelStorageVersions").newsletterMetadataCreateTable(), [
            r("id"),
            n("creationTime"),
            n("name"),
            n("nameUpdateTime"),
            n("description"),
            n("descriptionUpdateTime"),
            n("handle"),
            n("inviteCode"),
            n("size"),
            n("verified"),
            n("membershipType"),
            n("privacy"),
            n("website"),
            n("reactionCodesSetting"),
            n("suspended"),
            n("geosuspended"),
            n("terminated"),
            n("followerActivityMuteExpiration"),
            n("adminCount"),
            n("adminProfile"),
            n("adminProfilesSettingEnabled"),
            n("capabilities"),
            n("messageDeliveryUpdates"),
            n("geosuspendedCountries"),
            n("hasProfilePictureDeletionAlerts"),
            n("wamoSubPlanId"),
            n("wamoSubStatus"),
            n("statusMetadata"),
            n("lastFilledStatusServerId"),
            n("statusMute")
        ]).view(function(e) {
            return e;
        });
    }
    function s() {
        return o("WAWebModelStorageUtils").getStorage().table("newsletter-metadata");
    }
    l.addTable = e;
    l.getNewsletterMetadataTable = s;
}, 98);
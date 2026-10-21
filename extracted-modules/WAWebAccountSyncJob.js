__d("WAWebAccountSyncJob", [
    "$InternalEnum",
    "WALogger",
    "WAPromiseCache",
    "WAResolvable",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebDefenseModeTransitionListener",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryDisappearingModeJob",
    "WAWebQueryPrivacySettingsJob",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebSyncPrivacyDisallowedLists",
    "WAWebTos",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        BLOCKLIST: "blocklist",
        OPTOUTLIST: "biz_opt_out_list",
        DEVICES: "devices",
        DISAPPEARING_MODE: "disappearing_mode",
        PICTURE: "picture",
        PRIVACY: "privacy",
        STATUS: "status",
        TOS: "tos",
        NOTICE: "notice",
        USER: "user",
        TEXT_STATUS: "text_status"
    });
    function u(e) {
        return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(o("WAWebUserPrefsMeUser").getMeDeviceWids(), e, null);
    }
    function c() {
        const e = o("WAWebApiContact").getMeUserWids();
        for (const t of e){
            const n = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(t);
            if (n != null) {
                return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.resyncPictures([
                    n
                ]);
            }
        }
        return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.resyncPicturesByWid(e);
    }
    const maxAge = 3000;
    const m = 1000;
    let p = null;
    let _ = null;
    const f = new (r("WAPromiseCache"))(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        try {
            let t;
            const privacySettings = yield o("WAWebQueryPrivacySettingsJob").getPrivacy();
            o("WAWebUserPrefsGeneral").setUserPrivacySettings(privacySettings);
            const privacyDisallowedRows = yield o("WAWebSyncPrivacyDisallowedLists").syncPrivacyDisallowedLists([
                (t = o("WAWebSchemaPrivacyDisallowedList")).PrivacyDisallowedListType.About,
                t.PrivacyDisallowedListType.GroupAdd,
                t.PrivacyDisallowedListType.LastSeen,
                t.PrivacyDisallowedListType.ProfilePicture
            ]);
            return {
                privacySettings,
                privacyDisallowedRows
            };
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updatePrivacySettings: failed to sync privacy settings"
            ]))).sendLogs("privacy_settings_sync_failed");
            throw error;
        }
    }), {
        maxCached: 1,
        maxAge,
        shouldCache: function(t) {
            return t.privacySettings != null;
        }
    });
    function g() {
        o("WAWebDefenseModeTransitionListener").initDefenseModeTransitionListener();
        return f.getOrRun("privacy");
    }
    function h() {
        o("WAWebDefenseModeTransitionListener").initDefenseModeTransitionListener();
        if (r("justknobx")._("3378")) {
            f.delete("privacy");
            return f.getOrRun("privacy");
        }
        if (p != null) {
            self.clearTimeout(p);
        }
        if (_ == null) {
            _ = new (o("WAResolvable")).Resolvable;
        }
        const e = _;
        p = self.setTimeout(function() {
            p = null;
            _ = null;
            f.delete("privacy");
            e.resolve(f.getOrRun("privacy"));
        }, m);
        return e.promise;
    }
    function y(e) {
        const t = o("WATimeUtils").unixTime();
        e.forEach((e)=>{
            o("WAWebTos").TosManager.setState(e.id, e.state ? "ACCEPTED" : "NOT_ACCEPTED", e.timestamp ?? t);
        });
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebQueryDisappearingModeJob").queryDisappearingMode();
            yield o("WAWebUpdateDisappearingModeForContact").updateDisappearingModeForContact({
                contactId: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                newDuration: e.duration,
                newSettingTimestamp: e.t
            });
        });
        return b.apply(this, arguments);
    }
    l.AccountSyncType = s;
    l.getDevices = u;
    l.getAndUpdateProfilePicture = c;
    l.updatePrivacySettings = g;
    l.forceUpdatePrivacySettings = h;
    l.updateTosStateFromAccountSync = y;
    l.updateDefaultDisappearingMode = C;
}, 98);
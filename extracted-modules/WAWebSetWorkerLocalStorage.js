__d("WAWebSetWorkerLocalStorage", [
    "WALogger",
    "WAWebApiLocalStorage",
    "WAWebEnvironment",
    "WAWebGuestCoreLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "push-offline-resume-treatment";
    const u = "treatment-v1";
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = g(o("WAWebUserPrefsMeUser").getMeDisplayNameOrThrow);
            const t = e.itemsToWrite;
            yield o("WAWebApiLocalStorage").updateLocalStorage(t, [
                s
            ]);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e = false) {
            const t = g(o("WAWebUserPrefsMeUser").getMaybeMeDisplayName);
            const { itemsToWrite: n, keysToRemove: r } = t;
            if (e) {
                n.push({
                    key: s,
                    value: u
                });
            }
            yield o("WAWebApiLocalStorage").applyLocalStorageChanges(n, r);
        });
        return p.apply(this, arguments);
    }
    function _() {
        return o("WAWebApiLocalStorage").clearLocalStorage();
    }
    function f() {
        return o("WAWebApiLocalStorage").applyLocalStorageChanges([], [
            s
        ]);
    }
    function g(t) {
        const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
        const a = [
            {
                key: "lidDeviceJid",
                value: n.toString()
            }
        ];
        const i = [];
        const l = t();
        if (l != null) {
            a.push({
                key: o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME,
                value: l
            });
        } else {
            i.push(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME);
        }
        const s = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        if (s != null) {
            a.push({
                key: "deviceJid",
                value: o("WAWebWidToJid").widToDeviceJid(s)
            });
        } else {
            i.push("deviceJid");
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[worker-local-storage] deviceJid unavailable: no phone-number wid"
            ]))).sendLogs("worker-local-storage-skip-device-jid");
        }
        if (r("WAWebEnvironment").isGuest) {
            a.push({
                key: o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE,
                value: o("WAWebGuestCoreLocalStorage").getActiveGuestInviteCode()
            });
        } else {
            i.push(o("WAWebUserPrefsKeys").KEYS.GUEST_ACTIVE_INVITE_CODE);
        }
        return {
            itemsToWrite: a,
            keysToRemove: i
        };
    }
    l.setWorkerLocalStorage = c;
    l.setWorkerLocalStorageForOfflineResume = m;
    l.clearWorkerLocalStorage = _;
    l.clearWorkerPushOfflineResumeTreatment = f;
}, 98);
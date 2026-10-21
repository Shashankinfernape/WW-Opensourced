__d("WAWebChatLockSettings", [
    "WAWebBaseModel",
    "WAWebChatLockUpdateDailyStats",
    "WAWebModelUtils",
    "WAWebUserPrefsChatLock"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.hideLockedChats = o("WAWebModelUtils").prop();
            t.secretCode = o("WAWebModelUtils").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.initialize = function() {
            const t = this;
            e.prototype.initialize.call(this);
            this.updateDailyStats();
            this.on("change", function() {
                t.updateDailyStats();
            });
        };
        n.updateDailyStats = function() {
            o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                secretCodeActive: this.secretCode != null,
                lockFolderHidden: this.hideLockedChats
            });
        };
        n.updateAndSave = function(t) {
            this.set(t);
            o("WAWebUserPrefsChatLock").saveChatLockSettingsToStorage({
                hideLockedChats: this.hideLockedChats,
                secretCode: this.secretCode
            });
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "chat_lock_settings";
    const s = o("WAWebBaseModel").defineModel(e);
    function u() {
        const e = o("WAWebUserPrefsChatLock").getChatLockSettingsFromStorage();
        const t = new s(e);
        o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
            secretCodeActive: t.secretCode != null,
            lockFolderHidden: t.hideLockedChats === true
        });
        return t;
    }
    let c;
    function d() {
        if (c == null) {
            c = u();
        }
        return c;
    }
    l.getChatLockSettings = d;
}, 98);
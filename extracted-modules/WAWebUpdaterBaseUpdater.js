__d("WAWebUpdaterBaseUpdater", [
    "WACustomError",
    "WAWebAlarm",
    "WAWebBuildConstants",
    "WAWebEventEmitter",
    "WAWebStreamModel",
    "WAWebUpdaterVersion",
    "WAWebWAWCStorage"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.$UpdaterBase$p_1 = false;
            t.latestUpdateIteration = 0;
            t.activeVersion = new (o("WAWebUpdaterVersion")).Version(o("WAWebBuildConstants").VERSION_BASE);
            r("WAWebWAWCStorage").onVersionChange(function() {
                return t.setForceUpdateOnTakeOver();
            });
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setForceUpdateOnTakeOver = function() {
            this.$UpdaterBase$p_1 = true;
        };
        t_prototype.shouldForceUpdateOnTakeOver = function() {
            const $UpdaterBase$p_1 = this.$UpdaterBase$p_1;
            this.$UpdaterBase$p_1 = false;
            return !!$UpdaterBase$p_1;
        };
        t_prototype.clearHardExpiration = function() {
            if (this.hardExpirationTimer) {
                r("WAWebAlarm").clearTimeout(this.hardExpirationTimer);
                this.hardExpirationTimer = undefined;
            }
            this.stopListening(o("WAWebStreamModel").Stream, "change:couldForce");
        };
        t_prototype.update = function(t = {}) {
            const e = t;
            const { belowHard, belowSoft, beta, serverVersion } = e;
            throw new (o("WACustomError")).UnimplementedMethod("Updater::update");
        };
        t_prototype.showSoftUpdateBanner = function() {
            throw new (o("WACustomError")).UnimplementedMethod("Updater::showSoftUpdateBanner");
        };
        t_prototype.restart = function(t) {
            throw new (o("WACustomError")).UnimplementedMethod("Updater::restart");
        };
        t_prototype.manualDownload = function() {
            throw new (o("WACustomError")).UnimplementedMethod("Updater::manualDownload");
        };
        t_prototype.killServiceWorker = function() {
            throw new (o("WACustomError")).UnimplementedMethod("Updater::killServiceWorker");
        };
        return t;
    })(r("WAWebEventEmitter"));
    l.UpdaterBase = e;
}, 98);
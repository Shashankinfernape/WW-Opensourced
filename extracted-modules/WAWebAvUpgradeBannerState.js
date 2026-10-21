__d("WAWebAvUpgradeBannerState", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.bannerQueue = [];
            t.currentBannerIndex = 0;
            t.rotationInterval = null;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getCurrentBanner = function() {
            if (this.bannerQueue.length === 0) {
                return null;
            }
            return this.bannerQueue[this.currentBannerIndex];
        };
        t_prototype.showBanner = function(t) {
            if (t.isBannerVisible) {
                const e = this.bannerQueue.findIndex((e)=>e.jid.equals(t.jid));
                if (e === -1) {
                    this.bannerQueue.push(t);
                    if (this.bannerQueue.length > 1 && this.rotationInterval == null) {
                        this.startRotation();
                    }
                    this.trigger("change");
                }
            }
        };
        t_prototype.startRotation = function() {
            const e = this;
            this.rotationInterval = window.setInterval(function() {
                e.currentBannerIndex = (e.currentBannerIndex + 1) % e.bannerQueue.length;
                e.trigger("change");
            }, 5000);
        };
        t_prototype.removeBannerForJid = function(t) {
            const e = this.bannerQueue.findIndex((e)=>e.jid.equals(t));
            if (e !== -1) {
                this.bannerQueue.splice(e, 1);
                if (this.currentBannerIndex >= this.bannerQueue.length) {
                    this.currentBannerIndex = 0;
                }
                if (this.bannerQueue.length <= 1 && this.rotationInterval != null) {
                    window.clearInterval(this.rotationInterval);
                    this.rotationInterval = null;
                }
                this.trigger("change");
            }
        };
        t_prototype.clearAllBanners = function() {
            this.bannerQueue = [];
            this.currentBannerIndex = 0;
            if (this.rotationInterval != null) {
                window.clearInterval(this.rotationInterval);
                this.rotationInterval = null;
            }
            this.trigger("change");
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.default = s;
}, 98);
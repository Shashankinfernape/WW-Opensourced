__d("WAWebNewsletterTabPulseState", [
    "WAWebEventEmitter",
    "WAWebNavBarTypes",
    "WAWebNotificationHelpers",
    "WAWebSideNavButtonsActivityModel"
], function(t, n, r, o, a, i, l) {
    const e = 8000;
    const s = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.$NewsletterTabPulseStateImpl$p_1 = false;
            e.$NewsletterTabPulseStateImpl$p_2 = false;
            e.$NewsletterTabPulseStateImpl$p_3 = null;
            document.addEventListener("visibilitychange", function() {
                if (!document.hidden && e.$NewsletterTabPulseStateImpl$p_2) {
                    e.$NewsletterTabPulseStateImpl$p_2 = false;
                    e.$NewsletterTabPulseStateImpl$p_4();
                }
            });
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.getIsPulsing = function() {
            return this.$NewsletterTabPulseStateImpl$p_1;
        };
        n_prototype.triggerPulse = function() {
            const e = o("WAWebSideNavButtonsActivityModel").getLastActiveButton();
            if (e !== o("WAWebNavBarTypes").NavBarItems.Newsletters) {
                if (!o("WAWebNotificationHelpers").appIsActive()) {
                    this.$NewsletterTabPulseStateImpl$p_2 = true;
                }
            }
        };
        n_prototype.$NewsletterTabPulseStateImpl$p_4 = function() {
            const t = this;
            if (this.$NewsletterTabPulseStateImpl$p_3 != null) {
                window.clearTimeout(this.$NewsletterTabPulseStateImpl$p_3);
            }
            this.$NewsletterTabPulseStateImpl$p_1 = true;
            this.trigger("pulseChange");
            this.$NewsletterTabPulseStateImpl$p_3 = window.setTimeout(function() {
                t.$NewsletterTabPulseStateImpl$p_1 = false;
                t.$NewsletterTabPulseStateImpl$p_3 = null;
                t.trigger("pulseChange");
            }, e);
        };
        n_prototype.cancelPulse = function() {
            this.$NewsletterTabPulseStateImpl$p_2 = false;
            if (this.$NewsletterTabPulseStateImpl$p_3 != null) {
                window.clearTimeout(this.$NewsletterTabPulseStateImpl$p_3);
                this.$NewsletterTabPulseStateImpl$p_3 = null;
            }
            if (this.$NewsletterTabPulseStateImpl$p_1) {
                this.$NewsletterTabPulseStateImpl$p_1 = false;
                this.trigger("pulseChange");
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.default = u;
}, 98);
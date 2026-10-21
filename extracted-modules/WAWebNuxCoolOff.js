__d("WAWebNuxCoolOff", [
    "WAWeb-moment",
    "WAWebBannerEventWamEvent",
    "WAWebCurrentMoment",
    "WAWebNux",
    "WAWebUserPrefsStore",
    "WAWebWamEnumBannerOperations"
], function(t, n, r, o, a, i, l) {
    const e = {
        COOL_OFF_DURATION_IN_DAYS: 4,
        VIEWS_BEFORE_COOL_OFF_IN_DAYS: 2,
        CLICKS_BEFORE_COOL_OFF: 1,
        MAX_DISMISSES: 1,
        MAX_CLICKS: 2,
        MAX_VIEWS_IN_DAYS: 4,
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.DEFAULT,
        storageAccessors: c()
    };
    function s(e) {
        if (typeof e === "object" && e != null) {
            const startDate = typeof e.startDate === "string" ? r("WAWeb-moment")(e.startDate) : null;
            const duration = typeof e.duration === "number" ? e.duration : null;
            if (startDate != null && duration != null) {
                return {
                    startDate,
                    duration
                };
            }
        }
    }
    class u {
        constructor(t, n){
            this.key = o("WAWebNux").asCoolOffNuxType(t);
            this.config = babelHelpers.extends({}, e, n);
            this.nux = this.$1();
            this.coolOffData = this.$2();
        }
        $3() {
            return {
                viewDaysBeforeCoolOff: 0,
                totalViewDays: 0,
                clicks: 0,
                dismisses: 0,
                lastViewedDay: r("WAWeb-moment")(0)
            };
        }
        $1() {
            const e = this.config.storageAccessors.getNuxOptions(this.key);
            if (e != null) {
                const t = typeof e.clicks === "number" ? e.clicks : null;
                const dismisses = typeof e.dismisses === "number" ? e.dismisses : null;
                const totalViewDays = typeof e.totalViewDays === "number" ? e.totalViewDays : null;
                const viewDaysBeforeCoolOff = typeof e.viewDaysBeforeCoolOff === "number" ? e.viewDaysBeforeCoolOff : null;
                const i = typeof e.lastViewedDay === "string" ? r("WAWeb-moment")(e.lastViewedDay) : null;
                if (t != null && dismisses != null && viewDaysBeforeCoolOff != null && totalViewDays != null && i != null) {
                    return {
                        clicks: t,
                        dismisses,
                        viewDaysBeforeCoolOff,
                        totalViewDays,
                        lastViewedDay: i
                    };
                }
            }
            const l = this.$3();
            this.$4(l);
            return l;
        }
        $2() {
            const e = this.config.storageAccessors.getCoolOffData(this.config.COOL_OFF_START_STORAGE_KEY);
            const t = s(e);
            return t ?? this.$5(r("WAWeb-moment")(0));
        }
        $5(startDate) {
            const e = {
                startDate,
                duration: this.config.COOL_OFF_DURATION_IN_DAYS
            };
            this.config.storageAccessors.setCoolOffData(this.config.COOL_OFF_START_STORAGE_KEY, babelHelpers.extends({}, e, {
                startDate: e.startDate
            }));
            return e;
        }
        $6(t) {
            const e = this.$5(t);
            this.coolOffData = e;
        }
        $4(t) {
            this.config.storageAccessors.setNuxOptions(this.key, babelHelpers.extends({}, t, {
                lastViewedDay: t.lastViewedDay
            }));
        }
        $7(t) {
            this.nux = babelHelpers.extends({}, this.nux, t);
            this.$4(this.nux);
        }
        $8() {
            const e = o("WAWebCurrentMoment").getCurrentMoment();
            const t = e.diff(this.coolOffData.startDate, "days", true);
            return t >= 0 && t < this.coolOffData.duration;
        }
        $9(bannerOperation) {
            if (this.config.metricField) {
                const e = {
                    bannerType: this.config.metricField,
                    bannerOperation
                };
                if (this.config.bannerId != null) {
                    e.bannerId = this.config.bannerId;
                }
                new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent(e).commit();
            }
        }
        shouldShow() {
            const nux = this.nux;
            const { clicks, dismisses, totalViewDays } = nux;
            const config = this.config;
            const { MAX_CLICKS, MAX_DISMISSES, MAX_VIEWS_IN_DAYS } = config;
            return totalViewDays < MAX_VIEWS_IN_DAYS && dismisses < MAX_DISMISSES && clicks < MAX_CLICKS && !this.$8();
        }
        show() {
            const nux = this.nux;
            const e_lastViewedDay = nux.lastViewedDay;
            let e_totalViewDays = nux.totalViewDays;
            let e_viewDaysBeforeCoolOff = nux.viewDaysBeforeCoolOff;
            const i = o("WAWebCurrentMoment").getCurrentMoment();
            if (!e_lastViewedDay.isSame(i, "day")) {
                e_viewDaysBeforeCoolOff++;
                e_totalViewDays++;
                if (e_viewDaysBeforeCoolOff === this.config.VIEWS_BEFORE_COOL_OFF_IN_DAYS) {
                    e_viewDaysBeforeCoolOff = 0;
                    this.$6(r("WAWeb-moment")(i).add(1, "days"));
                }
                this.$7({
                    viewDaysBeforeCoolOff: e_viewDaysBeforeCoolOff,
                    totalViewDays: e_totalViewDays,
                    lastViewedDay: i
                });
                this.$9(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN);
                if (this.config.logImpression) {
                    this.config.logImpression();
                }
            }
        }
        click() {
            const e = this.nux.clicks + 1;
            if (e === this.config.CLICKS_BEFORE_COOL_OFF) {
                this.startCoolOffToday();
            }
            this.$7({
                clicks: e
            });
            this.$9(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK);
        }
        dismiss() {
            this.$7({
                dismisses: this.nux.dismisses + 1
            });
            this.$6(o("WAWebCurrentMoment").getCurrentMoment());
            this.$9(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
        }
        startCoolOffToday() {
            this.$6(o("WAWebCurrentMoment").getCurrentMoment());
        }
    }
    function c() {
        return {
            getNuxOptions: function(t) {
                return r("WAWebUserPrefsStore").getUser(t);
            },
            setNuxOptions: function(t, n) {
                r("WAWebUserPrefsStore").setUser(t, babelHelpers.extends({}, n, {
                    lastViewedDay: n.lastViewedDay.toISOString()
                }));
            },
            getCoolOffData: function(t) {
                return r("WAWebUserPrefsStore").getUser(t);
            },
            setCoolOffData: function(t, n) {
                r("WAWebUserPrefsStore").setUser(t, babelHelpers.extends({}, n, {
                    startDate: n.startDate.toISOString()
                }));
            }
        };
    }
    function d() {
        const e = Object.keys(o("WAWebNux").CoolOffPeriodKeys);
        e.forEach((e)=>{
            r("WAWebUserPrefsStore").setUser(o("WAWebNux").CoolOffPeriodKeys[e]);
        });
    }
    function m(e, t) {
        const n = new u(e, t);
        return n.shouldShow();
    }
    function p(e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebNux").asCoolOffNuxType(e));
    }
    l.CoolOffNux = u;
    l.resetCoolOffNuxDate = d;
    l.shouldShowNUX = m;
    l.resetNuxCoolOff = p;
}, 98);
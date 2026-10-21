__d("WAWebClock", [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWeb-moment",
    "WAWebClockDurationFormatters",
    "WAWebClockPaymentStrings",
    "WAWebEventEmitter",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebL10nGetRenderedLocale",
    "WAWebUserPrefsLocales"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = 60000;
    const m = 1000;
    const p = [
        "fi",
        "id",
        "ms",
        "ms-my"
    ];
    const _ = "America/Belem";
    const f = "America/Porto_Velho";
    const g = "skew_change";
    const h = "hour24_format_change";
    const y = -1;
    const C = n("$InternalEnum")({
        DeviceTimeFormat: 2,
        PhoneTimeFormat: 1,
        LocaleTimeFormat: 0
    });
    const b = ((t)=>{
        function n() {
            let n;
            n = t.call(this) || this;
            n.$ClockImpl$p_1 = false;
            n.skewMS = 0;
            n.skew = 0;
            if (Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions) {
                const r = Intl.DateTimeFormat().resolvedOptions().timeZone;
                if (r) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Intl.DateTimeFormat().resolvedOptions().timeZone is ",
                        ""
                    ])), r);
                } else {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Intl.DateTimeFormat().resolvedOptions().timeZone missing"
                    ])));
                }
                switch(r){
                    case "America/Sao_Paulo":
                        n.timeZoneHardCode = _;
                        break;
                    case "America/Campo_Grande":
                    case "America/Cuiaba":
                        n.timeZoneHardCode = f;
                        break;
                }
            }
            n.initIs24HourBasedOnLocale();
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.getIs24Hour = function() {
            return this.$ClockImpl$p_1;
        };
        a.setIs24Hour = function(t, n) {
            if (n !== C.LocaleTimeFormat && t != null) {
                const e = this.getIs24Hour();
                if (n === C.DeviceTimeFormat) {
                    o("WAWebUserPrefsLocales").setDeviceHour24(t);
                } else if (n === C.PhoneTimeFormat) {
                    o("WAWebUserPrefsLocales").setPhoneHour24(t);
                }
                if (!(n === C.PhoneTimeFormat && o("WAWebUserPrefsLocales").getDeviceHour24() != null)) {
                    this.$ClockImpl$p_1 = t;
                    if (e !== t) {
                        this.trigger(h);
                    }
                }
            }
        };
        a.initIs24HourBasedOnLocale = function() {
            const e = o("WAWebUserPrefsLocales").getDeviceHour24();
            const t = o("WAWebUserPrefsLocales").getPhoneHour24();
            if (e != null) {
                this.setIs24Hour(e, C.DeviceTimeFormat);
            } else if (t != null) {
                this.setIs24Hour(t, C.PhoneTimeFormat);
            } else {
                this.$ClockImpl$p_1 = o("WAWebL10NConstants").LOCALES_THAT_PREFER_24HOUR_TIME.has(r("WAWebL10N").getNormalizedLocale());
            }
        };
        a.setSkew = function(t) {
            if (Math.abs(t) > d) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Setting large clockskew: ",
                    "ms"
                ])), t);
            }
            const e = this.skewMS;
            this.skewMS = t;
            this.skew = Math.round(t / 1000);
            if (Math.abs(e - this.skewMS) > m) {
                this.trigger(g);
            }
        };
        a.getSkew = function() {
            return this.skew;
        };
        a.getServerTimeMs = function() {
            return Date.now() + this.skewMS;
        };
        a.getServerTime = function() {
            return new Date(this.getServerTimeMs());
        };
        a.convertGlobalToLocalUnixTime = function(t) {
            return t + this.skew;
        };
        a.timePassedFromNowMoment = function(t, { omitSuffix: e }) {
            return r("WAWeb-moment").unix(t).fromNow(e);
        };
        a.timePassedFromNowIntl = function(t, { style: e }) {
            const o = r("WAWeb-moment")();
            const a = r("WAWeb-moment").unix(t);
            const i = a.diff(o, "days");
            const l = a.diff(o, "hours");
            const s = a.diff(o, "minutes");
            const u = a.diff(o, "seconds");
            const c = r("WAWebL10N").getNormalizedLocale();
            const d = new Intl.RelativeTimeFormat(c, {
                style: e
            });
            if (i !== 0) {
                return d.format(i, "day");
            }
            if (l !== 0) {
                return d.format(l, "hour");
            }
            if (s !== 0) {
                return d.format(s, "minute");
            }
            return d.format(u, "second");
        };
        a.relativeStr = function(t) {
            const e = t + this.skew;
            if (e >= r("WAWeb-moment")().startOf("day").unix()) {
                return this.$ClockImpl$p_2(e);
            }
            return this.$ClockImpl$p_3(e, false);
        };
        a.relativeDateStr = function(t) {
            return this.$ClockImpl$p_3(t + this.skew, false);
        };
        a.relativeDateAndTimeStr = function(t) {
            return this.$ClockImpl$p_3(t + this.skew, true);
        };
        a.dateStr = function(t) {
            return this.$ClockImpl$p_4(t + this.skew);
        };
        a.monthStr = function(t) {
            const e = t + this.skew;
            const n = e * 1000;
            if (e >= r("WAWeb-moment")().startOf("month").unix() && e <= r("WAWeb-moment")().endOf("month").unix()) {
                return s._("This month");
            }
            if (e >= r("WAWeb-moment")().startOf("year").unix() && e <= r("WAWeb-moment")().endOf("year").unix()) {
                return Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
                    month: "long"
                }).format(n);
            }
            return Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
                month: "long",
                year: "numeric"
            }).format(n);
        };
        a.monthYearStr = function(t) {
            const e = t + this.skew;
            const n = e * 1000;
            return Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
                month: "short",
                year: "numeric"
            }).format(n);
        };
        a.timeStr = function(t) {
            const e = this.getIs24Hour();
            if (this.shouldUseIntlDateTimeFormat()) {
                const n = (t + this.skew) * 1000;
                let o = {
                    hour12: !e,
                    hour: "numeric",
                    minute: "numeric"
                };
                let a = {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                };
                if (this.timeZoneHardCode != null) {
                    o = babelHelpers.extends({}, o, {
                        timeZone: this.timeZoneHardCode
                    });
                    a = babelHelpers.extends({}, a, {
                        timeZone: this.timeZoneHardCode
                    });
                }
                const i = Intl.DateTimeFormat(r("WAWeb-moment").locale(), o).format(n);
                const l = Intl.DateTimeFormat(r("WAWeb-moment").locale(), a).format(n);
                return `${i}, ${l}`;
            }
            return r("WAWeb-moment").unix(t + this.skew).format(e ? `HH${this.$ClockImpl$p_5()}mm, l` : "LT, l");
        };
        a.timestampStr = function(t) {
            return this.$ClockImpl$p_2(t + this.skew);
        };
        a.monthDayStr = function(t) {
            return this.$ClockImpl$p_6(t + this.skew);
        };
        a.timestampStrFormat = function() {
            if (this.getIs24Hour()) {
                return `HH${this.$ClockImpl$p_5()}mm`;
            }
            return "LT";
        };
        a.timestampHour = function(t) {
            const e = t + this.skew;
            const n = r("WAWeb-moment").unix(e).hour();
            if (this.getIs24Hour()) {
                return n;
            }
            return n % 12;
        };
        a.textStatusExpiryStr = function(t) {
            const e = t + this.skew;
            const n = this.$ClockImpl$p_2(e);
            const r = this.$ClockImpl$p_3(e, false);
            return s._("Until {date} at {time}", [
                s._param("date", r),
                s._param("time", n)
            ]);
        };
        a.newsletterDescriptionCreatedStr = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            const r = this.$ClockImpl$p_2(n);
            if (e === 0) {
                return s._("Created today at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e === 1) {
                return s._("Created yesterday at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e < 7) {
                const o = this.$ClockImpl$p_3(n, false);
                return s._("Created {day} at {time}", [
                    s._param("day", o),
                    s._param("time", r)
                ]);
            }
            const a = this.$ClockImpl$p_3(n, false);
            return s._("Created {date} at {time}", [
                s._param("date", a),
                s._param("time", r)
            ]);
        };
        a.broadcastCreatedStr = function(t) {
            const e = this.$ClockImpl$p_7(t + this.skew);
            return s._("Created {dateTime}", [
                s._param("dateTime", e)
            ]);
        };
        a.broadcastCampaignCreatedStr = function(t) {
            const e = this.$ClockImpl$p_7(t + this.skew);
            return s._("Created on {dateTime}", [
                s._param("dateTime", e)
            ]);
        };
        a.audienceCreatedStr = function(t) {
            const e = t + this.skew;
            const n = this.$ClockImpl$p_2(e);
            const r = this.$ClockImpl$p_6(e, true);
            return s._("Created on {date}, {time}", [
                s._param("date", r),
                s._param("time", n)
            ]);
        };
        a.createdStr = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            const r = this.$ClockImpl$p_2(n);
            if (e === 0) {
                return s._("Created today at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e === 1) {
                return s._("Created yesterday at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e < 7) {
                const o = this.$ClockImpl$p_3(n, false);
                return s._("Created {day} at {time}", [
                    s._param("day", o),
                    s._param("time", r)
                ]);
            }
            const a = this.$ClockImpl$p_3(n, false);
            return s._("Created {date} at {time}", [
                s._param("date", a),
                s._param("time", r)
            ]);
        };
        a.addedStr = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            const r = this.$ClockImpl$p_2(n);
            if (e === 0) {
                return s._("Added today at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e === 1) {
                return s._("Added yesterday at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e < 7) {
                const o = this.$ClockImpl$p_3(n, false);
                return s._("Added {day} at {time}", [
                    s._param("day", o),
                    s._param("time", r)
                ]);
            }
            const a = this.$ClockImpl$p_3(n, false);
            return s._("Added {date} at {time}", [
                s._param("date", a),
                s._param("time", r)
            ]);
        };
        a.updatedStr = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            const r = this.$ClockImpl$p_2(n);
            if (e === 0) {
                return s._("Updated today at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e === 1) {
                return s._("Updated yesterday at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e < 7) {
                const o = this.$ClockImpl$p_3(n, false);
                return s._("Updated {day} at {time}", [
                    s._param("day", o),
                    s._param("time", r)
                ]);
            }
            const a = this.$ClockImpl$p_3(n, false);
            return s._("Updated {date} at {time}", [
                s._param("date", a),
                s._param("time", r)
            ]);
        };
        a.groupCreatedByStr = function(t, n, r) {
            const e = this.daysDeltaAbs(t);
            const o = t + this.skew;
            const a = this.$ClockImpl$p_2(o);
            if (e === 0) {
                if (r) {
                    return s._("Group created by you, today at {time}", [
                        s._param("time", a)
                    ]);
                }
                return s._("Group created by {name}, today at {time}", [
                    s._param("name", n),
                    s._param("time", a)
                ]);
            }
            if (e === 1) {
                if (r) {
                    return s._("Group created by you, yesterday at {time}", [
                        s._param("time", a)
                    ]);
                }
                return s._("Group created by {name}, yesterday at {time}", [
                    s._param("name", n),
                    s._param("time", a)
                ]);
            }
            if (e < 7) {
                const i = this.$ClockImpl$p_8(t);
                if (r) {
                    return s._("Group created by you, {on_day} at {time}", [
                        s._param("on_day", i),
                        s._param("time", a)
                    ]);
                }
                return s._("Group created by {name}, {on_day} at {time}", [
                    s._param("name", n),
                    s._param("on_day", i),
                    s._param("time", a)
                ]);
            }
            const l = this.$ClockImpl$p_3(o, false);
            if (r) {
                return s._("Group created by you, on {date} at {time}", [
                    s._param("date", l),
                    s._param("time", a)
                ]);
            }
            return s._("Group created by {name}, on {date} at {time}", [
                s._param("name", n),
                s._param("date", l),
                s._param("time", a)
            ]);
        };
        a.createdByOnDateStr = function({ isMeOwner: e, ownerName: n, showOwnerName: r, unixTime: o }) {
            const a = this.$ClockImpl$p_4(o);
            if (e) {
                return s._("Created by you on {date}", [
                    s._param("date", a)
                ]);
            }
            if (r) {
                return s._("Created by {name} on {date}", [
                    s._param("name", n),
                    s._param("date", a)
                ]);
            }
            return s._("Created on {date}", [
                s._param("date", a)
            ]);
        };
        a.groupCreatedStr = function(t, n, r) {
            if (t == null || isNaN(t)) {
                if (r || n == null || n === "") {
                    return null;
                }
                return s._("Created by {name}", [
                    s._param("name", n)
                ]);
            }
            const e = this.daysDeltaAbs(t);
            const o = t + this.skew;
            if (e === 0) {
                if (r || n == null || n === "") {
                    return s._("Created today");
                }
                return s._("Created today by {name}", [
                    s._param("name", n)
                ]);
            }
            if (e === 1) {
                if (r || n == null || n === "") {
                    return s._("Created yesterday");
                }
                return s._("Created yesterday by {name}", [
                    s._param("name", n)
                ]);
            }
            if (e < 7) {
                const a = this.$ClockImpl$p_8(t);
                if (r || n == null || n === "") {
                    return s._("Created {on_day}", [
                        s._param("on_day", a)
                    ]);
                }
                return s._("Created {on_day} by {name}", [
                    s._param("on_day", a),
                    s._param("name", n)
                ]);
            }
            const i = this.$ClockImpl$p_3(o, false);
            if (r || n == null || n === "") {
                return s._("Created {date}", [
                    s._param("date", i)
                ]);
            }
            return s._("Created {date} by {name}", [
                s._param("date", i),
                s._param("name", n)
            ]);
        };
        a.suggestedOnDateStr = function(t) {
            const e = r("WAWeb-moment").unix(t).format("l");
            return s._("Suggested on {date}", [
                s._param("date", e)
            ]);
        };
        a.communityCreatedByStr = function({ isMe: e, name, unixTime: r }) {
            const o = this.daysDeltaAbs(r);
            const a = r + this.skew;
            const i = this.$ClockImpl$p_2(a);
            if (o === 0) {
                if (e) {
                    return s._("Created by you, today at {time}", [
                        s._param("time", i)
                    ]);
                }
                return s._("Created by {name}, today at {time}", [
                    s._param("name", name),
                    s._param("time", i)
                ]);
            }
            if (o === 1) {
                if (e) {
                    return s._("Created by you, yesterday at {time}", [
                        s._param("time", i)
                    ]);
                }
                return s._("Created by {name}, yesterday at {time}", [
                    s._param("name", name),
                    s._param("time", i)
                ]);
            }
            if (o < 7) {
                const l = this.$ClockImpl$p_8(r);
                if (e) {
                    return s._("Created by you, {on-day} at {time}", [
                        s._param("on-day", l),
                        s._param("time", i)
                    ]);
                }
                return s._("Created by {name}, {on-day} at {time}", [
                    s._param("name", name),
                    s._param("on-day", l),
                    s._param("time", i)
                ]);
            }
            const u = this.$ClockImpl$p_3(a, false);
            if (e) {
                return s._("Created by you, on {date} at {time}", [
                    s._param("date", u),
                    s._param("time", i)
                ]);
            }
            return s._("Created by {name}, on {date} at {time}", [
                s._param("name", name),
                s._param("date", u),
                s._param("time", i)
            ]);
        };
        a.statusTimePassedString = function(t) {
            try {
                return this.timePassedFromNowIntl(t, {
                    style: "long"
                });
            } catch (e) {
                return this.timePassedFromNowMoment(t, {
                    omitSuffix: false
                });
            }
        };
        a.$ClockImpl$p_8 = function(t) {
            const e = t + this.skew;
            return o("WAWebClockPaymentStrings").dayNameStr(e);
        };
        a.untilStr = function(t) {
            return this.$ClockImpl$p_9(t, s._("Always"), function(e) {
                return s._("Until today at {time}", [
                    s._param("time", e)
                ]);
            }, function(e) {
                return s._("Until tomorrow at {time}", [
                    s._param("time", e)
                ]);
            }, function(e, t) {
                return s._("Until {day} at {time}", [
                    s._param("day", e),
                    s._param("time", t)
                ]);
            }, function(e, t) {
                return s._("Until {date} at {time}", [
                    s._param("date", e),
                    s._param("time", t)
                ]);
            });
        };
        a.$ClockImpl$p_9 = function(t, n, r, o, a, i) {
            if (t === y) {
                return n;
            }
            const e = this.daysDeltaAbs(t);
            const l = t + this.skew;
            const s = this.$ClockImpl$p_2(l);
            if (e === 0) {
                return r(s);
            }
            if (e === 1) {
                return o(s);
            }
            if (e < 7) {
                const u = this.$ClockImpl$p_3(l, false);
                return a(u, s);
            }
            const c = this.$ClockImpl$p_3(l, false);
            return i(c, s);
        };
        a.mutedUntilStr = function(t) {
            return this.$ClockImpl$p_9(t, s._("Muted always"), function(e) {
                return s._("Muted until today at {time}", [
                    s._param("time", e)
                ]);
            }, function(e) {
                return s._("Muted until tomorrow at {time}", [
                    s._param("time", e)
                ]);
            }, function(e, t) {
                return s._("Muted until {day} at {time}", [
                    s._param("day", e),
                    s._param("time", t)
                ]);
            }, function(e, t) {
                return s._("Muted until {date} at {time}", [
                    s._param("date", e),
                    s._param("time", t)
                ]);
            });
        };
        a.lastSeenStr = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            const r = this.$ClockImpl$p_2(n);
            if (e === 0) {
                return s._("last seen today at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e === 1) {
                return s._("last seen yesterday at {time}", [
                    s._param("time", r)
                ]);
            }
            if (e < 7) {
                const o = this.$ClockImpl$p_3(n, false);
                return s._("last seen {date} at {time}", [
                    s._param("date", o),
                    s._param("time", r)
                ]);
            }
            const a = this.$ClockImpl$p_3(n, false);
            return s._("last seen {date} at {time}", [
                s._param("date", a),
                s._param("time", r)
            ]);
        };
        a.daysDeltaAbs = function(t, n) {
            return o("WAWebClockDurationFormatters").daysDeltaAbs(t, n);
        };
        a.durationStr = function(t) {
            return o("WAWebClockDurationFormatters").durationStr(t);
        };
        a.callDurationStr = function(t) {
            return o("WAWebClockDurationFormatters").callDurationStr(t);
        };
        a.callDurationStrSimple = function(t) {
            return o("WAWebClockDurationFormatters").callDurationStrSimple(t);
        };
        a.relativeShortStr = function(t) {
            return o("WAWebClockDurationFormatters").relativeShortStr(t);
        };
        a.timeLeftStr = function(t) {
            return o("WAWebClockDurationFormatters").timeLeftStr(t);
        };
        a.shortDurationString = function(t) {
            return o("WAWebClockDurationFormatters").shortDurationString(t);
        };
        a.enforcementTimeLeftStr = function(t) {
            return o("WAWebClockDurationFormatters").enforcementTimeLeftStr(t);
        };
        a.paymentTimestampStr = function(t) {
            const e = t + this.skew;
            return o("WAWebClockPaymentStrings").paymentTimestampStr(e);
        };
        a.pastParticipantOnDateAtTime = function(t, n) {
            const e = this.daysDeltaAbs(t);
            const r = t + this.skew;
            const o = this.$ClockImpl$p_2(r);
            if (e === 0) {
                return s._("{action} today at {time}", [
                    s._param("action", n),
                    s._param("time", o)
                ]);
            }
            if (e === 1) {
                return s._("{action} yesterday at {time}", [
                    s._param("action", n),
                    s._param("time", o)
                ]);
            }
            const a = this.$ClockImpl$p_3(r, false);
            return s._("{action} {date} at {time}", [
                s._param("action", n),
                s._param("date", a),
                s._param("time", o)
            ]);
        };
        a.membershipApprovalRequestSectionDate = function(t) {
            const e = this.daysDeltaAbs(t);
            const n = t + this.skew;
            if (e === 0) {
                return {
                    key: "today",
                    date: s._("Today")
                };
            }
            if (e === 1) {
                return {
                    date: s._("Yesterday"),
                    key: "yesterday"
                };
            }
            const o = r("WAWeb-moment").unix(n).format("LL");
            return {
                date: o,
                key: o
            };
        };
        a.dsaDisplayDate = function(t) {
            if (this.shouldUseIntlDateTimeFormat()) {
                const e = (t + this.skew) * 1000;
                const n = {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                };
                return Intl.DateTimeFormat(r("WAWeb-moment").locale(), n).format(e);
            }
            return r("WAWeb-moment").unix(t + this.skew).format("ll");
        };
        a.periodCoveredDateStr = function(t, n) {
            const e = r("WAWeb-moment").unix(n);
            const o = r("WAWeb-moment").unix(t);
            const a = this.$ClockImpl$p_10();
            return `${o.format(a)} - ${e.format(a)}`;
        };
        a.lastUpdatedDateStr = function(t) {
            const e = r("WAWeb-moment").unix(t);
            const n = this.$ClockImpl$p_10();
            const o = this.timestampStrFormat();
            return e.format(`${n}, ${o}`);
        };
        a.$ClockImpl$p_10 = function() {
            switch(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()){
                case "de_DE":
                case "sk_SK":
                    return "Do MMM";
                default:
                    return "DD MMM";
            }
        };
        a.$ClockImpl$p_2 = function(t) {
            const e = this.getIs24Hour();
            if (this.shouldUseIntlDateTimeFormat()) {
                let n = {
                    hour12: !e,
                    hour: "numeric",
                    minute: "numeric"
                };
                if (this.timeZoneHardCode != null) {
                    n = babelHelpers.extends({}, n, {
                        timeZone: this.timeZoneHardCode
                    });
                }
                const o = Intl.DateTimeFormat(r("WAWeb-moment").locale(), n).format(t * 1000);
                if (e) {
                    return o.replace(/^24/, "00");
                }
                return o.replace(/^0/, "12");
            }
            return r("WAWeb-moment").unix(t).format(this.timestampStrFormat());
        };
        a.$ClockImpl$p_4 = function(t) {
            if (this.shouldUseIntlDateTimeFormat()) {
                let e = {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                };
                if (this.timeZoneHardCode != null) {
                    e = babelHelpers.extends({}, e, {
                        timeZone: this.timeZoneHardCode
                    });
                }
                const n = Intl.DateTimeFormat(r("WAWeb-moment").locale(), e).format(t * 1000);
                return n;
            }
            return r("WAWeb-moment").unix(t).format("l");
        };
        a.$ClockImpl$p_6 = function(t, n = false) {
            if (Intl.DateTimeFormat) {
                let e = {
                    month: "short",
                    day: "numeric"
                };
                if (n) {
                    e = babelHelpers.extends({}, e, {
                        year: "numeric"
                    });
                }
                if (this.timeZoneHardCode != null) {
                    e = babelHelpers.extends({}, e, {
                        timeZone: this.timeZoneHardCode
                    });
                }
                return Intl.DateTimeFormat(r("WAWeb-moment").locale(), e).format(t * 1000);
            }
            return r("WAWeb-moment").unix(t).format(n ? "ll" : "MMM D");
        };
        a.$ClockImpl$p_7 = function(t) {
            const e = this.getIs24Hour();
            if (Intl.DateTimeFormat) {
                let n = {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hourCycle: e ? "h23" : "h12"
                };
                if (this.timeZoneHardCode != null) {
                    n = babelHelpers.extends({}, n, {
                        timeZone: this.timeZoneHardCode
                    });
                }
                return Intl.DateTimeFormat(r("WAWeb-moment").locale(), n).format(t * 1000);
            }
            return r("WAWeb-moment").unix(t).format(`MMM D, ${this.timestampStrFormat()}`);
        };
        a.$ClockImpl$p_3 = function(t, n) {
            const e = r("WAWeb-moment")().startOf("day");
            const o = r("WAWeb-moment").unix(t).startOf("day");
            const a = e.diff(o, "days");
            const i = this.$ClockImpl$p_2(t);
            if (a === 0) {
                if (n) {
                    return s._("Today at {time}", [
                        s._param("time", i)
                    ]);
                }
                return s._("Today");
            }
            if (a === 1) {
                if (n) {
                    return s._("Yesterday at {time}", [
                        s._param("time", i)
                    ]);
                }
                return s._("Yesterday");
            }
            if (!n && Math.abs(a) < 7) {
                return r("WAWeb-moment").unix(t).format("dddd");
            }
            const l = this.$ClockImpl$p_4(t);
            if (n) {
                return s._("{date} at {time}", [
                    s._param("date", l),
                    s._param("time", i)
                ]);
            }
            return l;
        };
        a.$ClockImpl$p_5 = function() {
            const e = r("WAWeb-moment").locale();
            if (p.includes(e)) {
                return ".";
            }
            return ":";
        };
        a.shouldUseIntlDateTimeFormat = function() {
            return Intl.DateTimeFormat && !o("WAWebL10NConstants").LOCALE_DATE_TIME_CUSTOMIZATIONS[r("WAWeb-moment").locale()] && !o("WAWebL10NConstants").SHOULD_USE_MOMENT_LOCALE_FORMAT.has(r("WAWeb-moment").locale());
        };
        a.tryAgainInStr = function(t) {
            return o("WAWebClockDurationFormatters").tryAgainInStr(t);
        };
        return n;
    })(r("WAWebEventEmitter"));
    const v = new b;
    l.SKEW_CHANGE_EVENT = g;
    l.HOUR24_FORMAT_CHANGE_EVENT = h;
    l.MUTE_ALWAYS_EXPIRATION_SENTINEL = y;
    l.TimeFormatSource = C;
    l.Clock = v;
}, 226);
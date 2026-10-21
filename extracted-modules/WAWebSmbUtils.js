__d("WAWebSmbUtils", [
    "fbt",
    "WAWeb-moment",
    "WAWebBusinessProfileTypes",
    "WAWebSmbUtilsTimeUtils",
    "compactMap"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        return r("WAWeb-moment")().day(e).format("dddd");
    }
    function u(e, t) {
        switch(e?.mode){
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS:
                if (t) {
                    return d(e?.hours);
                }
                return c(e?.hours);
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY:
                return s._("By appointment only");
            case o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H:
                return s._("Open 24 hours");
            default:
                return s._("Closed");
        }
    }
    function c(e) {
        if (e) {
            return e.map((e)=>e.map(o("WAWebSmbUtilsTimeUtils").minutesToTime).join(" - ")).join("\n");
        }
        return "";
    }
    function d(e) {
        if (e?.length === 1) {
            return e[0].map(o("WAWebSmbUtilsTimeUtils").minutesToTime).join(" - ");
        }
        if (e?.length === 2) {
            let t;
            const n = (t = o("WAWebSmbUtilsTimeUtils")).minutesToTime(e[0][0]);
            const r = t.minutesToTime(e[0][1]);
            const a = t.minutesToTime(e[1][0]);
            const i = t.minutesToTime(e[1][1]);
            return s._("{openTime} - {closeTime} and {additionalOpenTime} - {additionalCloseTime}", [
                s._param("openTime", n),
                s._param("closeTime", r),
                s._param("additionalOpenTime", a),
                s._param("additionalCloseTime", i)
            ]);
        }
        return "";
    }
    function m({ config }, n) {
        const a = new Date().getDay();
        const i = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.map((t, i)=>{
            const l = (a + i) % o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.length;
            const s = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK[l];
            const day = e(l);
            const hours = u(config[s], n).toString();
            return {
                day,
                first: i === 0,
                hours
            };
        });
        return i;
    }
    function p(t) {
        const n = t == null ? {} : t.config;
        const a = t || {};
        const { note, timezone } = a;
        let s;
        const u = o("WAWebBusinessProfileTypes").DAYS_OF_WEEK.map((t, r)=>{
            const a = n[t];
            const closed = !a;
            const dayName = e(r);
            let hours;
            if (a) {
                s = a.mode;
                if (a.hours) {
                    hours = a.hours.map(([t, n])=>[
                            o("WAWebSmbUtilsTimeUtils").minutesToTime(t),
                            o("WAWebSmbUtilsTimeUtils").minutesToTime(n)
                        ]);
                }
            }
            return {
                closed,
                dayKey: t,
                dayName,
                hours
            };
        });
        const c = r("WAWeb-moment").localeData().firstDayOfWeek();
        const d = u.splice(c);
        const days = [].concat(d, u);
        return {
            days,
            mode: s,
            note,
            timezone
        };
    }
    const _ = {
        1: "mon",
        2: "tue",
        3: "wed",
        4: "thu",
        5: "fri",
        6: "sat",
        7: "sun"
    };
    const f = {
        1: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.OPEN_24H,
        2: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS,
        3: o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.APPOINTMENT_ONLY
    };
    function g(e) {
        if (e == null || e.operating_ranges.length === 0) {
            return null;
        }
        const a = r("compactMap")(e.operating_ranges, function(e) {
            const t = e.day_of_week != null ? _[e.day_of_week] : null;
            const n = e.mode != null ? f[e.mode] : null;
            if (t == null || n == null || !o("WAWebBusinessProfileTypes").isBusinessHoursDayName(t)) {
                return null;
            }
            const window = e.open_time != null && e.close_time != null ? [
                e.open_time,
                e.close_time
            ] : null;
            return {
                dayKey: t,
                mode: n,
                window
            };
        });
        const i = a.reduce((acc, { dayKey, mode, window })=>{
            const i = acc[dayKey];
            if (i == null) {
                acc[dayKey] = {
                    hours: mode === o("WAWebBusinessProfileTypes").BUSINESS_HOUR_MODES.SPECIFIC_HOURS && window != null ? [
                        window
                    ] : undefined,
                    mode
                };
            } else if (i.hours != null && window != null) {
                i.hours.push(window);
            }
            return acc;
        }, {});
        return p({
            config: i,
            note: e.note ?? undefined,
            timezone: e.timezone_id ?? undefined
        });
    }
    l.getBusinessHours = m;
    l.getBusinessHoursForEdit = p;
    l.getBusinessHoursForEditFromGraphQL = g;
}, 226);
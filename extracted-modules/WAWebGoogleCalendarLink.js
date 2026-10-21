__d("WAWebGoogleCalendarLink", [], function(t, n, r, o, a, i) {
    function e({ description, endTimeUnixSeconds, location, startTimeUnixSeconds, title }) {
        const i = l(startTimeUnixSeconds * 1000);
        const s = l((endTimeUnixSeconds ?? startTimeUnixSeconds + 3600) * 1000);
        const u = new URLSearchParams({
            action: "TEMPLATE",
            text: title,
            details: description ?? "",
            location: location ?? "",
            dates: `${i}/${s}`
        });
        return `https://calendar.google.com/calendar/render?${u.toString()}`;
    }
    function l(e) {
        return new Date(e).toISOString().replace(/-|:|\.\d+/g, "");
    }
    i.default = e;
}, 66);
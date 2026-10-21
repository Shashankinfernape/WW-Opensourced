__d("WAWebPollsFormatPollAddOptionNotification", [
    "fbt",
    "WAWebPollAddOptionContributor"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = o("WAWebPollAddOptionContributor").getPollAddOptionContributor(e);
        if (t == null) {
            return s._("An option was added to the poll");
        }
        if (t.kind === "me") {
            return s._("You added an option to the poll");
        }
        return s._("{sender-name} added an option to the poll", [
            s._param("sender-name", t.name)
        ]);
    }
    l.formatPollAddOptionNotification = e;
}, 226);
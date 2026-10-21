__d("WAWebPollOptionsRenderUtils", [
    "fbt",
    "WALogger",
    "WAWebClock",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPollCreationUtils",
    "WAWebPollsSendVoteMsgAction",
    "WAXplatTrim",
    "countWhere"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = 2;
    let c = 0;
    function d() {
        const e = c.toString();
        c++;
        return e;
    }
    function m(e, { focusedKey, maxOptionsCount }) {
        const o = [].concat(e);
        let a;
        for (const i of o){
            if (!(i.name !== "" || i.image != null)) {
                if (i.key === focusedKey) {
                    a = i.key;
                    break;
                }
                a = a ?? i.key;
            }
        }
        for(let l = o.length - 1; o.length > u && l >= 0;){
            const s = o[l];
            if (s.key !== a && s.name === "" && s.image == null) {
                o.splice(l, 1);
            }
            l--;
        }
        for(let c = Math.max(a == null ? 1 : 0, u - o.length); c > 0 && o.length < maxOptionsCount;){
            o.push({
                name: "",
                key: d()
            });
            c--;
        }
        return o;
    }
    function p(e) {
        return o("WAXplatTrim").trim(e.name) === "" && !e.image;
    }
    function _(e) {
        const t = new Set;
        const n = new Map;
        for (const r of e){
            const a = o("WAXplatTrim").trim(r.name);
            if (a !== "") {
                if (t.has(a)) {
                    n.set(r.key, s._("This is already an option"));
                    continue;
                }
                t.add(a);
            }
        }
        return n;
    }
    function f({ activeOptionIndex, medias, originalOptions }) {
        if (activeOptionIndex != null) {
            originalOptions[activeOptionIndex].name = medias[0].media.caption ?? "";
            originalOptions[activeOptionIndex].image = medias[0].media;
            return originalOptions;
        }
        const a = medias.map((e, t)=>({
                name: e.media.caption ?? "",
                key: t < originalOptions.length ? originalOptions[t].key : d(),
                image: e.media
            }));
        if (originalOptions.length > medias.length) {
            a.push(...originalOptions.slice(medias.length));
        }
        return a;
    }
    function g({ msgKey, optionLocalId, selectableOptionsCount, votedForOptions }) {
        const s = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
        if (s == null || s.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[polls] vote skipped, poll left the collection"
            ])));
            return;
        }
        const u = new Set(votedForOptions);
        const c = u.has(optionLocalId);
        if (c) {
            u.delete(optionLocalId);
        } else {
            if (selectableOptionsCount === 1) {
                u.clear();
            }
            u.add(optionLocalId);
        }
        o("WAWebPollsSendVoteMsgAction").sendVote(s, u);
    }
    function h(e) {
        const t = [];
        for (const [r, o] of e){
            if (o.isVotedForByMe) {
                t.push(r.localId);
            }
        }
        return new Set(t);
    }
    function y({ correctOptionKey, isPhotoPoll, options, pollEndTime, pollEndTimeEnabled, pollType, question }) {
        const m = options.filter((e)=>o("WAXplatTrim").trim(e.name) !== "");
        const p = o("WAXplatTrim").trim(question);
        if (p.length === 0) {
            if (m.length < u) {
                return s._("_j{\"*\":\"Add a question and at least {number} options.\",\"_1\":\"Add a question and at least 1 option.\"}", [
                    s._plural(u, "number")
                ]);
            }
            return s._("Add a question.");
        }
        if (isPhotoPoll) {
            const _ = r("countWhere")(options, function(e) {
                return o("WAXplatTrim").trim(e.name) === "" && !e.image;
            });
            if (r("countWhere")(options, function(e) {
                return !e.image || o("WAXplatTrim").trim(e.name) === "";
            }) > _) {
                if (pollType === o("WAWebPollCreationUtils").PollType.QUIZ) {
                    return s._("For quizzes with photos, add a photo and text to each option.");
                }
                return s._("For polls with photos, add a photo and text to each option.");
            }
        }
        if (m.length < u) {
            return s._("_j{\"*\":\"Add at least {number} options.\",\"_1\":\"Add at least 1 option.\"}", [
                s._plural(u, "number")
            ]);
        }
        if (pollType === o("WAWebPollCreationUtils").PollType.QUIZ && correctOptionKey == null) {
            return s._("Select the right answer.");
        }
        if (pollType === o("WAWebPollCreationUtils").PollType.QUIZ && options.some((e)=>e.key === correctOptionKey && o("WAXplatTrim").trim(e.name) === "")) {
            return s._("Select the right answer.");
        }
        if (pollEndTimeEnabled === true && pollEndTime == null) {
            return s._("Add an end time.");
        }
        if (pollEndTimeEnabled === true && pollEndTime != null && pollEndTime <= o("WAWebClock").Clock.getServerTimeMs()) {
            return s._("Choose a future end time.");
        }
        return null;
    }
    function C(e, t) {
        if (e == null) {
            return null;
        }
        return t.localId === e;
    }
    l.formatOptions = m;
    l.isEmptyAfterTrimming = p;
    l.validateOptions = _;
    l.getNewOptions = f;
    l.toggleOption = g;
    l.getVotedForOptions = h;
    l.validatePoll = y;
    l.getIsCorrectOption = C;
}, 226);
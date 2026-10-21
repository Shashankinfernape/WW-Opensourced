__d("WAWebEmojiPickerConstants", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = 1000;
    const l = 100;
    const s = 63;
    const u = 5;
    const c = 15;
    const d = s * 0.7;
    const m = s * 1.5;
    const p = n("$InternalEnum").Mirrored([
        "LOVE",
        "GREETINGS",
        "HAPPY",
        "SAD",
        "ANGRY",
        "CELEBRATE"
    ]);
    const _ = n("$InternalEnum").Mirrored([
        "RECENTS",
        "FAVORITES",
        "LOVE",
        "GREETINGS",
        "HAPPY",
        "SAD",
        "ANGRY",
        "CELEBRATE",
        "STORE"
    ]);
    function f(e) {
        const t = e;
        if (p.isValid(t)) {
            return p.cast(t);
        }
        return null;
    }
    i.SCROLL_CLICK_TIME_GAP = e;
    i.SCROLL_THROTTLE_TIME = l;
    i.INPUT_BAR_TOTAL_HEIGHT = s;
    i.INPUT_BAR_SCROLL_SENSITIVITY = u;
    i.INPUT_BAR_SCROLL_FAST = c;
    i.INPUT_HIDE_POINT = d;
    i.INPUT_SHOW_POINT = m;
    i.ValidMoods = p;
    i.StickerTabs = _;
    i.convertTabToMood = f;
}, 66);
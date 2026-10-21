__d("WAWebEmojiPanelEmojiSections", [
    "WAWebEmojiConst"
], function(t, n, r, o, a, i, l) {
    const s = babelHelpers.extends({
        RECENT: "RECENT",
        RECENT_REACTIONS: "RECENT_REACTIONS"
    }, o("WAWebEmojiConst").CATEGORIES, {
        SEARCH_RESULT: "SEARCH_RESULT"
    });
    const u = {
        [s.RECENT]: s.RECENT,
        [s.RECENT_REACTIONS]: s.RECENT_REACTIONS,
        [s.SMILEYS_PEOPLE]: s.SMILEYS_PEOPLE,
        [s.ANIMALS_NATURE]: s.ANIMALS_NATURE,
        [s.FOOD_DRINK]: s.FOOD_DRINK,
        [s.ACTIVITY]: s.ACTIVITY,
        [s.TRAVEL_PLACES]: s.TRAVEL_PLACES,
        [s.OBJECTS]: s.OBJECTS,
        [s.SYMBOLS]: s.SYMBOLS,
        [s.FLAGS]: s.FLAGS
    };
    const c = [].concat(o("WAWebEmojiConst").ORDERED_CATEGORY_IDS);
    l.SECTIONS = s;
    l.ORDERED_TAB_SECTION_IDS = c;
}, 98);
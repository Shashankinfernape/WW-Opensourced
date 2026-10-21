__d("WAWebEmojiPanelMenuSectionIcon.react", [
    "WAWebEmojiPanelEmojiSections",
    "WDSIconIcDirectionsCar.react",
    "WDSIconIcEmojiFoodBeverage.react",
    "WDSIconIcEmojiNature.react",
    "WDSIconIcEmojiObjects.react",
    "WDSIconIcEmojiSymbols.react",
    "WDSIconIcFlag.react",
    "WDSIconIcMood.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSportsBasketball.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = s || (s = o("react"));
    const c = {
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT]: r("WDSIconIcSchedule.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.RECENT_REACTIONS]: r("WDSIconIcSchedule.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.SMILEYS_PEOPLE]: r("WDSIconIcMood.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.ANIMALS_NATURE]: r("WDSIconIcEmojiNature.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.FOOD_DRINK]: r("WDSIconIcEmojiFoodBeverage.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.ACTIVITY]: r("WDSIconIcSportsBasketball.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.TRAVEL_PLACES]: r("WDSIconIcDirectionsCar.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.OBJECTS]: r("WDSIconIcEmojiObjects.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.SYMBOLS]: r("WDSIconIcEmojiSymbols.react"),
        [o("WAWebEmojiPanelEmojiSections").SECTIONS.FLAGS]: r("WDSIconIcFlag.react")
    };
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(2);
        const e_sectionId = e.sectionId;
        const R = c[e_sectionId];
        let a;
        if (t[0] !== R) {
            a = <R/>;
            t[0] = R;
            t[1] = a;
        } else {
            a = t[1];
        }
        return a;
    }
    l.default = DComponent;
}, 98);
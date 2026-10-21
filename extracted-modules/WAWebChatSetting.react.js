__d("WAWebChatSetting.react", [
    "WAWebCommandGetters",
    "WAWebDrawerButton.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebSettingsConst",
    "WAWebSettingsStepIcon.react",
    "nullthrows",
    "react",
    "useWAWebCommandValues",
    "useWAWebSearchQuery"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        text: {
            fontSize: "x1f6kntn",
            $$css: true
        }
    };
    function c(e) {
        const { onClick, searchQuery } = e;
        const a = o("useWAWebCommandValues").useCommandValues(e.setting.id, [
            o("WAWebCommandGetters").getId,
            o("WAWebCommandGetters").getLabel
        ]);
        const i = a[0];
        const l = a[1];
        const c = function(r) {
            onClick(r, e.setting);
        };
        const d = o("useWAWebSearchQuery").useSearchText(searchQuery);
        const m = o("WAWebFormatConfiguration").Search({
            terms: [
                d
            ]
        });
        const Component = o("WAWebDrawerButton.react").DrawerButton;
        return <Component icon={s.jsx(r("WAWebSettingsStepIcon.react"), {
            setting: r("nullthrows")(o("WAWebSettingsConst").SettingsSteps.cast(i))
        })} id={i} active={e.active} onClick={c} theme="chatlist">{s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l,
            formatters: m,
            xstyle: u.text
        })}</Component>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);
__d("WAWebEmojiGridPicker.react", [
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent({ action, base, children, unicode }) {
        const Component = o("WAWebDropdownItem.react").DropdownItem;
        return <div className="x78zum5 xdt5ytf x6s0dn4 xl56j7k"><span className="x1pju0fl xscbp6u xcytdqz x2b8uid xso031l x1q0q8m5 x1joekfr"><Component key="base" type="emoji-grid" testid="mi-emoji-variant" action={function(r) {
            return action(r, unicode, base);
        }}>{s.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: base,
            formatters: o("WAWebFormatConfiguration").LargeEmojiOnly(),
            tabIndex: "-1"
        })}</Component></span><div className="x78zum5 x1a02dak xl56j7k x1e03a83">{children}</div></div>;
    }
    UComponent.displayName = `${UComponent.name} [from ${i.id}]`;
    l.default = UComponent;
}, 98);
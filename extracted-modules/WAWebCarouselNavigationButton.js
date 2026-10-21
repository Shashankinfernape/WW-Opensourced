__d("WAWebCarouselNavigationButton", [
    "WAWebBotPluginCarouselChevronBtn.react",
    "WAWebChevronButton.react",
    "WAWebRound.react",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function UComponent({ buttonType, displayType, onButtonClick }) {
        const Component = r("WAWebBotPluginCarouselChevronBtn.react");
        return <Component type={buttonType} onClick={function() {
            return onButtonClick(buttonType === o("WAWebChevronButton.react").ButtonType.Next);
        }} theme={o("WAWebRound.react").RoundTheme.XSmall} displayType={displayType}/>;
    }
    UComponent.displayName = `${UComponent.name} [from ${i.id}]`;
    l.CarouselNavigationButton = UComponent;
}, 98);
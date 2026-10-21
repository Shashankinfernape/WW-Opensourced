__d("WAWebStickerAnimationCanvas.react", [
    "WALogger",
    "WAWebFileUtils",
    "WAWebStickerControlledAnimationCanvas.react",
    "WAWebWebpToAnimationFrames",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useEffect, useState } = c;
    function p({ blob, className, loopAnimation, maxLoops, onClick, renderPreview, startAnimation }) {
        const _ = useState(null);
        const f = _[0];
        const g = _[1];
        useEffect(function() {
            o("WAWebFileUtils").blobToArrayBuffer(blob).then(r("WAWebWebpToAnimationFrames")).then((e)=>{
                g(e);
            }).catch((t)=>{
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AnimationCanvas error: ",
                    ""
                ])), t);
            });
        }, []);
        if (!f) {
            return renderPreview();
        }
        const { frames, height, width } = f;
        const Component = r("WAWebStickerControlledAnimationCanvas.react");
        return <Component className={className} width={width} height={height} animationFrames={frames} startAnimation={!!(loopAnimation || startAnimation)} maxLoops={maxLoops} onClick={onClick}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);
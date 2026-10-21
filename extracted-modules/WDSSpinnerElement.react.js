__d("WDSSpinnerElement.react", [
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const r_1 = 20;
    const d = 8;
    const m = "x17qceat-B";
    const p = "xnrop4s-B";
    const _ = "xoslcoy-B";
    const f = {
        animationIterationCount: "xa4qsjk",
        animationName: "xvma63k",
        animationTimingFunction: "x1esw782",
        transform: "xsqj5wx",
        animationDelay: "xvo38ju",
        animationDuration: "x1q3qbx4",
        transformOrigin: "xf6vlc6",
        $$css: true
    };
    const g = {
        svgWrapper: {
            animationName: "x1e112to",
            animationDuration: "x1c74tu6",
            animationTimingFunction: "x1esw782",
            animationIterationCount: "xa4qsjk",
            zIndex: "xhtitgo",
            stroke: "x73je2i",
            $$css: true
        },
        svgWrapperStatic: {
            zIndex: "xhtitgo",
            stroke: "x73je2i",
            $$css: true
        },
        rounded: {
            strokeLinecap: "x1owpc8m",
            $$css: true
        },
        square: {
            strokeLinecap: "x37uqsb",
            $$css: true
        },
        path: {
            animationName: "xu41xpa",
            animationDuration: "xmg6eyc",
            animationTimingFunction: "x4hg4is",
            animationIterationCount: "xa4qsjk",
            strokeDasharray: "xbla1kb",
            strokeDashoffset: "x1b0o3cz",
            $$css: true
        },
        pathStatic: {
            strokeDasharray: "x9p2g63",
            strokeDashoffset: "x1b0o3cz",
            $$css: true
        },
        rotate: {
            transform: "x9tu13d",
            transformOrigin: "x1bndym7",
            $$css: true
        },
        stripStyle: function(t, n) {
            return [
                f,
                {
                    "--x-transform": `rotate(${360 / d * t}deg)` != null ? `rotate(${360 / d * t}deg)` : undefined,
                    "--x-animationDelay": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}ms`;
                        }
                        return e ?? undefined;
                    })(`-${1 / d * (d - t - 1)}s`),
                    "--x-transformOrigin": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(`${n / 2}px ${n / 2}px`)
                }
            ];
        }
    };
    function h(progress) {
        if (progress == null) {
            return null;
        }
        const t = Math.ceil(2 * r_1 * Math.PI);
        return {
            strokeDasharray: `${t} ${t}`,
            strokeDashoffset: t - progress / 100 * t
        };
    }
    function Y1Component({ size }) {
        return <div className="x1rg5ohu x1n2onr6" style={{
            width: size,
            height: size
        }}>{Array.from(new Array(d)).map((t, o)=><div key={o} {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.stripStyle(o, size)), {
                children: <div className="x1lliihq x10l6tqk xed5h26 x1502et5 xggx2qq x1bklw8v xtwfq29" style={{
                    top: size / 12,
                    left: size / 2 - size / 20,
                    width: size / 10,
                    height: size / 3.6
                }}/>
            })}/>)}</div>;
    }
    Y1Component.displayName = `${Y1Component.name} [from ${i.id}]`;
    function C({ gpuAnimationEnabled, progress, stroke, strokeLinecap = "round", viewBoxSide }) {
        return <circle {...babelHelpers.extends({
            style: h(progress)
        }, (e || (e = r("stylex"))).props([
            strokeLinecap === "round" && g.rounded,
            strokeLinecap === "square" && g.square,
            progress == null && (gpuAnimationEnabled ? g.pathStatic : g.path)
        ]), {
            cx: viewBoxSide / 2,
            cy: viewBoxSide / 2,
            r: r_1,
            fill: "none",
            strokeWidth: stroke
        })}/>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function BComponent({ gpuAnimationEnabled = false, platform, progress, size, stroke, strokeLinecap, xstyle }) {
        if (platform === "iOS") {
            return <Y1Component size={size}/>;
        }
        const viewBoxSide = 2 * r_1 + stroke;
        const viewBox = `0 0 ${viewBoxSide} ${viewBoxSide}`;
        const f = gpuAnimationEnabled ? g.svgWrapperStatic : g.svgWrapper;
        return <svg {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(progress == null && f || g.rotate, xstyle), {
            width: size - 4,
            height: size - 4,
            viewBox,
            "aria-hidden": true,
            role: "status",
            children: [
                progress != null ? <C gpuAnimationEnabled={gpuAnimationEnabled} stroke={stroke} strokeLinecap={strokeLinecap} progress={100} viewBoxSide={viewBoxSide}/> : null,
                <C gpuAnimationEnabled={gpuAnimationEnabled} progress={progress} stroke={stroke} strokeLinecap={strokeLinecap} viewBoxSide={viewBoxSide}/>
            ]
        })}/>;
    }
    BComponent.displayName = `${BComponent.name} [from ${i.id}]`;
    l.default = BComponent;
}, 98);
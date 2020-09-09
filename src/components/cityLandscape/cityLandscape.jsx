import React, { Component } from 'react';
import "./cityLandscape.css";

class CityLandscape extends Component {
    componentDidMount() {
        var
            w = window.innerWidth,
            h = window.innerHeight,
            canvas = document.querySelector('canvas'),
            ctx = canvas.getContext('2d'),
            rate = 50,
            arc = 500,
            time = 0,
            count = 0,
            size = 2,
            speed = 10,
            lights = [],
            colors = ['hsl(210 15% 10%)'],

            init = () => {
                for (var i = 0; i < arc; i++) {
                    lights[i] = {
                        x: Math.ceil(Math.random() * w),
                        y: Math.ceil(Math.random() * h),
                        toX: Math.random() * 5 + 1,
                        toY: Math.random() * 5 + 1,
                        c: colors[Math.floor(Math.random() * colors.length)],
                        size: Math.random() * size
                    }
                }
            },

            bubble = () => {
                ctx.clearRect(0, 0, w, h);

                for (var i = 0; i < arc; i++) {
                    var li = lights[i];

                    ctx.beginPath();
                    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = li.c;
                    ctx.fill();

                    li.x = li.x + li.toX * (time * 0.05);
                    li.y = li.y + li.toY * (time * 0.05);

                    if (li.x > w) li.x = 0;
                    if (li.y > h) li.y = 0;
                    if (li.x < 0) li.x = w;
                    if (li.y < 0) li.y = h;
                }

                if (time < speed) {
                    time++;
                }

                var timerID = setTimeout(bubble, 1000 / rate);
            };

        canvas.setAttribute('width', w);
        canvas.setAttribute('height', h);

        init();

        bubble();
    }

    render() {
        return (
            <>
                <div class="back">
                    <div class="inner">
                        <div class="moon"></div>
                        <div>
                            <div class="tower"><div class="win"></div><div class="radio"></div></div>
                            <div class="tower"><div class="win"></div><div class="radio"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                            <div class="tower"><div class="win"></div></div>
                        </div>
                    </div>
                </div>

                <div class="front">
                    <div class="inner">
                        <div class="welcome">
                            <h1>Welcome to</h1>
                            <h2><span>S</span>haswat City</h2>
                        </div>
                        <div class="trees">
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                            <div class="tree"></div>
                        </div>
                    </div>
                </div>

                <canvas></canvas>
            </>
        );
    }
}

export default CityLandscape;
import React, { Component } from 'react';
import "./niceUI.css"
import $ from "jquery";

class NiceUI extends Component {
    constructor(props) {
        super(props);
        $(window).on("load resize", function (e) {
            if ($(window).width() > 700) {
                $(".box").each(function (index) {
                    $(this).outerHeight($(this).outerWidth());
                });
            } else {
                $(".box").each(function (index) {
                    $(this).outerHeight('auto')
                });
            }
        });
    }

    render() {
        return (
            <>
                <div class="container">
                    <h1>Netflix Binge:<br /><span>Top Stats</span><small>When your friend recommended you that series, you<span>should've said no.</span></small></h1>
                    <div class="legend">
                        <div class="legend__item"><span class="legend__box kdrama"></span><span>Korean Drama</span></div>
                        <div class="legend__item"><span class="legend__box anime"></span><span>Anime</span></div>
                        <div class="legend__item"><span class="legend__box western"></span><span>Western Series</span></div>
                    </div>
                    <div class="box kdrama cloy">
                        <h4>Crash Landing on You</h4>
                        <p>16 episodes // 960 minutes in 1 day. One sitting.</p>
                    </div>
                    <div class="box kdrama inheritors">
                        <h4 class="break">Inheritors</h4>
                        <p>16 episodes // 960 minutes in 1 day. One sitting.</p>
                    </div>
                    <div class="box anime foodwars">
                        <h4>Food Wars</h4>
                        <p>85 episodes // 1700 minutes in 3 days.</p>
                    </div>
                    <div class="box kdrama theking">
                        <h4>The King</h4>
                        <p>16 episodes // 960 minutes in 2 days.</p>
                    </div>
                    <div class="box western mindhunter shadow">
                        <h4 class="break">Mindhunter</h4>
                        <p>19 episodes // 942 minutes in 3 days.</p>
                    </div>
                    <div class="box anime kakegurui shadow">
                        <h4 class="break">Kakegurui</h4>
                        <p>24 episodes // 480 minutes in 2 days.</p>
                    </div>
                    {/* <!--.box.anime.haikyuu
              h4.break Haikyuu!
              p 72 episodes // 1440 minutes in 7 days.


              --> */}
                </div>
                <div class="more-info">
                    <div class="image"><img src="https://assets.codepen.io/567707/palette-ts.png" alt="Taylor Swift album" /></div>
                    <p>Part of the<a href="https://codepen.io/collection/XPxJmz">UI Designs inspired by Taylor Swift Album Covers</a>
                collection. This is<em>Taylor Swift (2006)</em>.
              </p>
                </div>
            </>
        );
    }
}

export default NiceUI;
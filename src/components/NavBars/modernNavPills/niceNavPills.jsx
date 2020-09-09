import React, { Component } from 'react';
import $ from "jquery";
import "./niceNavPills.css";

class NiceNavPills extends Component {
    componentDidMount() {
        $(".nav a").on("click", function () {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
            $(".nav .slide1").css({ opacity: 1, left: +position.left, width: width });
        });

        $(".nav a").on("mouseover", function () {
            var position = $(this).parent().position();
            var width = $(this).parent().width();
            $(".nav .slide2").css({
                opacity: 1,
                left: +position.left,
                width: width
            });
        });

        $(".nav a").on("mouseout", function () {
            $(".nav .slide2").css({ opacity: 0 });
        });

        var currentWidth = $(".nav").find("li:nth-of-type(1) a").parent("li").width();
        var current = $("li:nth-of-type(1) a").position();
        $(".nav .slide1").css({ left: +current.left, width: currentWidth });
    }

    render() {
        return (
            <ul class="nav">
                <li><a href="#/">Alpha</a></li>
                <li><a href="#/">Beta</a></li>
                <li><a href="#/">Gamma</a></li>
                <li><a href="#/">Delta</a></li>
                <li><a href="#/">Epsilon</a></li>
                <li class="slide1"></li>
                <li class="slide2"></li>
            </ul>
        );
    }
}

export default NiceNavPills;
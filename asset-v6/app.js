/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Little Miss Christmas", this.version = "2", this.date = "2012", this.folder = "asset-v6/", this.looptime = 4800, this.bpm = 100, this.totalframe = 232, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#1c0d0d", this.col0 = "#EB4B4B", this.col1 = "#C32D2D", this.col2 = "#9B2323", this.col3 = "#691E1E", this.col4 = "#371919", this.animearray = [{
        name: "1_kick",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "2_snare",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "3_kanye",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "4_tuctuc",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "5_break",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "6_cribasse",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "7_distotut",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "8_screw",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "9_shaolin",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "10_shower",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "11_basse",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "12_hou",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "13_clav",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "14_synth",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "15_yah",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "16_hurry",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "17_good",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "18_mind",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "19_haha",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "20_wow",
        color: "828282",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Satisfied",
        src: "v6-b1-alive-hb.mp4",
        code: "4,6,9,14,18",
        sound: "bonus-alive",
        aspire: "aspire-alive"
    }, {
        name: "Little Miss",
        src: "v6-b2-busta-hb.mp4",
        code: "1,2,8,11,16",
        sound: "bonus-busta",
        aspire: "aspire-busta"
    }, {
        name: "Why this world",
        src: "v6-b3-vr-hb.mp4",
        code: "3,8,12,11,20",
        sound: "bonus-vr",
        aspire: "aspire-vr"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var s = this.animearray[n].name;
        this.animearray[n].soundA = s + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? s + "_a" : s + "_b", this.animearray[n].anime = s + "-sprite.png", this.animearray[n].animeData = s + ".json"
    }
};
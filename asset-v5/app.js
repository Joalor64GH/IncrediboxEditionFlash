/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Everything", this.version = "1", this.date = "2009", this.folder = "asset-v5/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !2, this.bonusendloopA = !2, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#121212", this.col0 = "#919191", this.col1 = "#5f5f5f", this.col2 = "#4b4b4b", this.col3 = "#373737", this.col4 = "#232323", this.animearray = [{
        name: "1_poum",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "2_creuki",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "3_shaka",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "4_tek",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "5_tuk",
        color: "FAB405",
        uniqsnd: !0
    }, {
        name: "6_teung",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "7_ting",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "8_parimba",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "9_coloko",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "10_clav",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "11_bass",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "12_wa",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "13_ya",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "14_palapa",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "The Choir",
        src: "v5-b1-felicidade-hb.mp4",
        code: "4,6,7,8,12",
        sound: "bonus-felicidade",
        aspire: "aspire"
    }, {
        name: "Sailor",
        src: "v5-b2-chegou-hb.mp4",
        code: "1,8,10,11,14",
        sound: "bonus-chegou",
        aspire: "aspire"
    }, {
        name: "Santa",
        src: "v5-b3-musica-hb.mp4",
        code: "1,9,12,13,14",
        sound: "bonus-musica",
        aspire: "aspire"
    }], this.unlockerarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
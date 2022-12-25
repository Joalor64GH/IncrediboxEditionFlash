/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "The Love", this.version = "4", this.date = "2014", this.folder = "asset-v7/", this.looptime = 8e3, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 1, this.bonusloopA = !0, this.bonusendloopA = !1, this.recmaxloop = 23, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#211101", this.col0 = "#D8A365", this.col1 = "#BA7B3D", this.col2 = "#A16224", this.col3 = "#6A3501", this.col4 = "#422101", this.animearray = [{
        name: "1_lead",
        color: "E5A90E",
        uniqsnd: !1
    }, {
        name: "2_pouin",
        color: "E5A90E",
        uniqsnd: !0
    }, {
        name: "3_tung",
        color: "E5A90E",
        uniqsnd: !0
    }, {
        name: "4_tabla",
        color: "E5A90E",
        uniqsnd: !0
    }, {
        name: "5_tuduki",
        color: "E5A90E",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "0CB6CB",
        uniqsnd: !1
    }, {
        name: "7_bourdon",
        color: "0CB6CB",
        uniqsnd: !0
    }, {
        name: "8_campan",
        color: "0CB6CB",
        uniqsnd: !0
    }, {
        name: "9_kum",
        color: "0CB6CB",
        uniqsnd: !1
    }, {
        name: "10_string",
        color: "0CB6CB",
        uniqsnd: !1
    }, {
        name: "11_citar",
        color: "F42828",
        uniqsnd: !1
    }, {
        name: "12_guit",
        color: "F42828",
        uniqsnd: !1
    }, {
        name: "13_tromp",
        color: "F42828",
        uniqsnd: !1
    }, {
        name: "14_taoung",
        color: "F42828",
        uniqsnd: !0
    }, {
        name: "15_sifle",
        color: "F42828",
        uniqsnd: !1
    }, {
        name: "16_djindr",
        color: "787DFF",
        uniqsnd: !1
    }, {
        name: "17_djinga",
        color: "787DFF",
        uniqsnd: !0
    }, {
        name: "18_djinta",
        color: "787DFF",
        uniqsnd: !0
    }, {
        name: "19_jeevan",
        color: "787DFF",
        uniqsnd: !1
    }, {
        name: "20_yaha",
        color: "787DFF",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Baby",
        src: "v7-b1-kofitez-hb.mp4",
        code: "1,2,6,11,17",
        sound: "bonus_kofitez",
        aspire: "aspire_kofitez"
    }, {
        name: "Follow",
        src: "v7-b2-sapna-hb.mp4",
        code: "1,6,8,12,18",
        sound: "bonus_sapna",
        aspire: "aspire_sapna"
    }, {
        name: "Eagle",
        src: "v7-b3-kabikabi-hb.mp4",
        code: "1,3,6,13,16",
        sound: "bonus_kabikabi",
        aspire: "aspire_kabikabi"
    }], this.unlockerarray = [];
    for (var n = 0, a = this.animearray.length; n < a; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
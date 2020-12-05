// const superagent = require('superagent');
// const fs = require('fs');
// const cheerio = require('cheerio');
// let getData = [];
// for(var i = 2; i < 30 ;i++){
//     var url = `https://top.chinaz.com/hangye/index_zonghe_daohang_${i}.html`
//     superagent.get(url).end((err, res) => {
//         getData = getD(res);
//         console.log(getData);
//         // fs.appendFile('zh.txt',getData+'\n', err => {
//         // })
//     })
// }
// let getD = (res) => {
//     let getData = [];
//     var $ = cheerio.load(res.text)
//     $('ul > li >div:nth-child(2)> h3 > span').each((idx, ele) => {
//         let data = {
//             url: $(ele).text()+'\n'
//         }
//         getData.push(data)
//     }
//     )
//     return getData;
// }   
let arr = [
    "http://www.qhxhtb.com/html/index.html",
    "http://www.bodyig.cn/",
    "http://www.jzxewx.com/",
    "http://www.zw.haixi.gov.cn/",
    "http://www.jetsongkhapa.org/",
    "http://www.zangbooo.com/mall/",
    "http://www.tibetcnr.com/",
    "http://www.tibetgov.cn/",
    "https://zw.ptz.cc/",
    "http://www.lumicosm.com/",
    "http://www.teducn.com/",
    "http://www.rebgongcul.com/bo/",
    "http://www.gnzwzzb.gov.cn/defaultz.htm",
    "https://www.yongzin.com/",
    "http://www.tibetebook.com/",
    "http://www.buddhilight.com/",
    "http://blog.himalayabon.com/index.html",
    "http://www.filmtbt.com/",
    "http://www.gamalgonchen.com/",
    "http://www.yangkug.com/",
    "http://www.tbmgar.com/",
    "http://www.tb1025.cn/",
    "http://tb.chinatibetnews.com/",
    "http://www.tibetan.io/",
    "http://www.shangri-latibet.cn/",
    "https://tibetan.zhibeifw.com/",
    "http://tibet.cpc.people.com.cn/",
    "http://www.tanadug.com/",
    "http://ti.kbcmw.com/",
    "http://www.tbnewyouth.com/",
    "https://www.tibetitw.com/",
    "http://www.qiongbuwang.com/",
    "https://music.yongzin.com/",
    "http://bo.jetsongkhapa.org/",
    "http://www.tibetgz.com/",
    "http://www.gsorig.com/",
    "http://www.mzywfy.org.cn/translate.jsp",
    "http://www.25xz.com/",
    "http://www.cttsqh.com/",
    "http://mt.utibet.edu.cn/shouji.html",
    "http://zwpaper.kbcmw.com/",
    "http://www.tibetanmd.com/tibetanweb/index.asp",
    "http://www.rgbm123.com/",
    "http://www.zhiduomiddleschool.com/",
    "http://www.xzitv.com/tibetan/",
    "http://music.tibet3.com/",
    "http://www.himalayane.com/",
    "http://www.qhtb.cn/",
    "http://tb.kangbatv.com/",
    "http://www.tibetanqa.com/",
    "http://www.zgzzsfw.com/",
    "http://www.dzogchendrapa.com/",
    "http://xizang.news.cn/",
    "http://www.tibetcul.com/",
    "http://am954.sctv.com/tb/",
    "http://www.rkzw.cn/zw/",
    "http://www.bodrigs.com/",
    "http://www.alwhyp.cc/",
    "http://blog.amdotibet.cn/",
    "http://tibet.aba-news.com.cn/",
    "http://tb.tibet.cn/",
    "http://luobulin.com/",
    "http://www.tsanpo.com/",
    "http://www.qhsmzw.gov.cn/zw/index.asp",
    "http://www.trikaculture.com/",
    "http://tibetan.qh.gov.cn/",
    "http://www.xn--snyy9s74b.top/index.html",
    "http://www.qhmzcbs.com:808/index.htm",
    "http://tb.gnxblzx.com/",
    "http://tibet.people.com.cn/",
    "http://www.tibetan.ioindex.php/",
    "http://www.yalasoo.com/",
    "http://www.mjtc.org.cn/tibet/",
    "http://www.tongdetv.com/",
    "http://www.ngakmang.net/",
    "http://www.amdotibet.cn/",
    "http://v.amdotibet.com/",
    "http://jzschool.com/",
    "http://www.beita.org/tibet/",
    "http://www.jmjzjy.com/Gsbw.asp",
    "http://www.tibet3.cn/",
    "https://www.tbsing.com/index.php?a=welcome",
    "http://www.himalayabon.com/",
    "http://www.tibetmath.org/",
    "http://www.tibetcm.com/",
    "http://www.tibetanfont.org/",
    "https://www.yongzin.com/page/search.do",
    "http://www.0976ly.com/zangwen/",
    "http://www.bodyig.net/",
    "http://ti.zangdiyg.com/",
    "http://www.vtibet.com/tb/",
    "http://www.tsaluma.com/",
    "http://ti.tibet3.com/",
    "http://www.tcansee.com/",
    "http://www.tibetedu.net/"
]
const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
for (var i = 0; i < arr.length; i++) {
    let url = arr[i]
    superagent.get(url).end((err, res) => {
        if (err) {
            return;
        } else if (res.status == 400 && res.status == 401 && res.status == 402 && res.status == 403 && res.status == 404) {
            return;
        }
        else
            var getData = []
        var $ = cheerio.load(res.text);
        let data = {                                  
            url: url,                                 
            title: $('title').text()                
        }                                         
        getData.push(data)
        console.log(getData);

    })
}


// const request = require('request');
// const cheerio = require('cheerio');
// for (var i = 0; i < arr.length; i++) {
//     let url = arr[i];
//     // console.log(url);
//     request.get(url, (err, res) => {
//         // console.log(res);
//         if (err) {
//             return;
//         } else if (res.status == 400 && res.status == 401 && res.status == 402 && res.status == 403 && res.status == 404) {
//             return;
//         } else {
//             var getData = []
//             var $ = cheerio.load(res.text);
//             console.log(url);
//             let data = {
//                 url: url,
//                 title: $('title').text()
//             }
//             getData.push(data)
//             getData = JSON.stringify(getData);
//             console.log(getData);
//         }
//     })
// }

// var cheerio = require('cheerio');
// var superagent = require('superagent');
// var url = require('url');
// var async = require('async');
// var fs = require('fs');
// var path = require('path');
// var express = require('express');


// var app = express();

// var cnodeUrl = 'https://cnodejs.org/';

// //并发数
// var count = 0;

// app.get('/', function(req, res, next) {

//     superagent.get(cnodeUrl).end(function(err, sres) {
//         if (err) {
//             next(err);
//         }
//         var $ = cheerio.load(sres.text);
//         var topicUrls = [];
//         $('#topic_list .topic_title').each(function(idx, element) {
//             var $element = $(element);
//             var href = url.resolve(cnodeUrl, $element.attr('href'));
//             topicUrls.push(href);
//         });

//         //此时已经得到了所有文章的url
//         //console.log(topicUrls);

//         //设置最大并发数为5 
//         async.mapLimit(topicUrls, 5, function(url, resolve) {
//             count++;
//             //获取每一个对应的网址的html字符串
//             superagent.get(url).end(function(err, content) {
//                 count--;
//                 console.log('现在的并发数是：' + count);
//                 resolve(null, [url, content.text]);
//             });

//         }, function(err, result) {
//             result = result.map(function(topic) {
//                 var url = topic[0];
//                 var html = topic[1];
//                 var $ = cheerio.load(html);
//                 return {
//                     title: $('.topic_full_title').text().trim(),
//                     href: url,
//                     comment: $('.reply_content').eq(0).text().trim()
//                 };
//             });

//             //到这里已经得到了所有想要的json信息
//             //console.log(result);

//             //开始写入文件
//             fs.writeFile(path.join('./', 'data.js'), JSON.stringify(result), function(err) {
//                 if (err) throw err;
//                 console.log("Export Account Success!");
//             });
//             //读文件并输出内容
//             fs.readFile(path.join('./', 'data.js'), 'utf-8', function(err, content) {
//                 // 触发结果事件 
//                 console.log(content);
//             });
//         });


//     });

// });


// app.listen(3000, function() {
//     console.log('listen to port 3000');
// });
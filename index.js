import express from "express";
import process from "process";

const app = express();
const emojis = [
    "😀",
    "😆",
    "🤣",
    "😉",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😚",
    "😋",
    "😝",
    "🤑",
    "🫣",
    "🤫",
    "🤔",
    "🫡",
    "😏",
    "🥳",
    "😎",
    "😲",
    "😮",
    "😳",
    "🥺",
    "🥹",
    "😻",
    "🙊",
    "💖",
    "❤️‍🔥",
    "💯",
    "🐶",
    "🐺",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🐸",
    "🐯",
    "🐨",
    "🐻",
    "🐷",
    "🐽",
    "🐮",
    "🐗",
    "🐵",
    "🐒",
    "🐴",
    "🐑",
    "🐘",
    "🐼",
    "🐧",
    "🐦",
    "🐤",
    "🐥",
    "🐣",
    "🐔",
]

const moppy = async () => {
    var text = "【モッピー】1,000万人以上が利用する国内最大級ポイ活応援サービス！今なら入会ボーナスもらえるチャンス★ "
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    var hashTag = "#モッピー #moppy #ポイ活 #お小遣い稼ぎ #節約 #副業"
    console.log(random)
    var tweet = text + random + " " + process.env.MOPPY_URI + " " + hashTag;
    console.log(tweet)
    return tweet;
}

app.get("/moppy", (req, res) => {
    try {
        moppy().then(
            function(data){
                var response = {
                    tweetText:data
                }
                res.send(JSON.stringify(response))
            }
        );
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const mercari = async () => {
    var text = "メルカリを使ってみてね！\n500円分お得にお買い物できる招待コード【" + process.env.MERCARI_CODE + "】を贈りました🎁\nアプリをインストールして登録してね"
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    var hashTag = "#メルカリ #Mercari #お小遣い稼ぎ #節約 #副業"
    console.log(random)
    var tweet = text + random + " " + process.env.MERCARI_URI + " " + hashTag;
    console.log(tweet)
    return tweet;
};


app.get("/mercari", (req, res) => {
    try {
        mercari().then(
            function(data){
                var response = {
                    tweetText:data
                }
                res.send(JSON.stringify(response))
            }
        );
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const daiwa = async () => {
    var text = "スマホではじめるワンコイン投資🎉ポイント投資もできる #大和コネクト証券 で #NISA をはじめませんか？\n口座開設で4100円が貰える「招待コード」を贈ります🎁\n申込時に招待コード【" 
        + process.env.DAIWA_CODE + "】を入力して受け取ろう"
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    console.log(random)
    var tweet = text + random + " " + process.env.DAIWA_URI;
    console.log(tweet)
    return tweet;
};


app.get("/daiwa", (req, res) => {
    try {
        daiwa().then(
            function(data){
                var response = {
                    tweetText:data
                }
                res.send(JSON.stringify(response))
            }
        );
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const olive = async () => {
    var text = "紹介してもされても1,000ポイント！\nOliveアカウント紹介プログラム！！\n紹介コード【" 
        + process.env.OLIVE_CODE + "】\nエントリー＆申込はこちら"
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    console.log(random)
    var hashTag = "#Oliveアカウント紹介プログラム #三井住友銀行"
    var tweet = text + random + " " + process.env.OLIVE_URI + "\n" + hashTag;
    console.log(tweet)
    return tweet;
};

app.get("/olive", (req, res) => {
    try {
        olive().then(
            function(data){
                var response = {
                    tweetText:data
                }
                res.send(JSON.stringify(response))
            }
        );
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

app.get("/", (req, res) => {
    try {
        console.log("ログ定期実行")
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
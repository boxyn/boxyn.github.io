///// 隨機函數
var rand = function(start, end) {
    var n = end - start + 1;
    var r = Math.random() * n;
    var f = Math.floor(r);
    return f + start;
}

///// 擲骰子
var rowdice = function() {

    // 按了幾次按鈕
    arguments.callee.num = arguments.callee.num ? arguments.callee.num : 0
    var xxx = ++arguments.callee.num
    $('h1>span').text(xxx)

    // 從1到6亂數中分別取兩數值
    var r = rand(1, 6)
    var s = rand(1, 6)
    var move = Number(r - s)

    // 取得骰子
    var dice0 = $('.col>img')[0]
    var dice1 = $('.col>img')[1]

    // 因為 dice0, dice1 是 html 元件，故轉成 jQuery 元件
    var $dice0 = $(dice0)
    var $dice1 = $(dice1)

    // 起始圖
    $dice0.attr('src', './pic/dice.png')
    $dice1.attr('src', './pic/dice.png')

    // 使骰子旋轉
    $('.col>img').rotate({
        duration: 6000,
        angle: 0,
        animateTo: 3600
    })

    // 顯示骰子結果
    setTimeout(function() {
        $dice0.attr('src', './pic/dice' + r + '.png')
        $dice1.attr('src', './pic/dice-' + s + '.png')
    }, 3000)

    // 顯示可移動步數
    setTimeout(function() {
        $('h2>span').text(move)
    }, 4000)

    // 移動
    var temp = 50 * move

    setTimeout(function() {
        $('.ghost img').animate({ left: '+=' + temp + '%' })
    }, 3900)

    // 判斷輸贏
    setTimeout(function() {
        if ($('.ghost img').position().left >= $('.win img').position().left - 90) {
            window.alert("恭喜過關！")
        } else if ($('.ghost img').position().left <= $('.loss img').position().left + 90) {
            window.alert("失敗了QQ，請重新開始！")
            window.location.reload()
        }
    }, 4000)
}

///// section1 滑動到 section2
$('.button1').on('click', function() {
    $('html,body').animate({ scrollTop: $('#section2').offset().top }, 800)
})

///// 擲骰子按鈕
$('.jumbotron button').on('click', rowdice)

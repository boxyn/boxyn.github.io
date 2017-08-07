$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

$('#query').on('click', function() {
            $.get("http://js2017-hw2.kchen.club/query", function(response) {
                if (response) {
                    if (response.result) {

                        // TODO HW2 作業寫在這裡

                        $.get("http://js2017-hw2.kchen.club/query", function(response) {
                            console.log(rep.data[0].name)
                        })

                        $.get("http://js2017-hw2.kchen.club/query", function(response) {
                                console.log(rep.data[0].price)

                            } else {
                                $('#message').text('查詢失敗 (' + response.data + ')');
                                $('#dialog').modal('show');
                            }
                        }
                        else {
                            $('#message').text('查詢失敗');
                            $('#dialog').modal('show');
                        }
                        console.log(response);
                    }, "json");
            })
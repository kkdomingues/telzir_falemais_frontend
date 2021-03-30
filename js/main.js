$(".simulate").click(function () {
    $.ajax({
        url: 'http://127.0.0.1:8087/price/validation',
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify({
            origin: $(".ddd-origin").val(),
            destiny: $(".ddd-destiny").val(),
            minutes: $(".minutes").val(),
            plan: $(".plan").val()
        }),
        success: function(data) {
            $('.no-data').hide();
            $('.result-table tbody')
                .append(
                    '<tr>' +
                        '<td>' + $(".ddd-origin").val() + '</td>' +
                        '<td>' + $(".ddd-destiny").val() + '</td>' +
                        '<td>' + $(".minutes").val() + '</td>' +
                        '<td>' + $(".plan option:selected").text() + '</td>' +
                        '<td> R$' + data.withPlan + '</td>' +
                        '<td> R$' + data.withoutPlan + '</td>' +
                    '</tr>');
            console.log(data);
        }
    });
});
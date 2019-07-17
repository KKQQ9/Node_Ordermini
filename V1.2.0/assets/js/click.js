btn.onclick = function() {
    ajax({
        url: '/order',
        type: 'get',
        data: {
            phone: phone.value,
            food: food.value,
        },
        success(msg) {
            alert(msg);
        }
    })
}
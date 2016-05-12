$('.btn-reser-modal').click(function(e) {
    e.preventDefault();

    $('.modal-room')
        .modal('hide')
        .on('hidden.bs.modal', function(e) {
            var $roomModal = $('#reser-room').children();
            var id = $(this).attr('id');
            $('#reservate').modal('show');

            switch (id) {
                case 'opposite':
                    $('#reser-room option[value="opposite-room"]').prop('selected', 'true');
                    break;
                case 'strange-case':
                    $('#reser-room option[value="strange-room"]').prop('selected', 'true');
                    break;
                case 'chain':
                    $('#reser-room option[value="chain-room"]').prop('selected', 'true');
                    break;
                case 'cage':
                    $('#reser-room option[value="cage-room"]').prop('selected', 'true');
                    break;
                case 'village':
                    $('#reser-room option[value="village-room"]').prop('selected', 'true');
                    break;
                case 'reset':
                    $('#reser-room option[value="reset-room"]').prop('selected', 'true');
                    break;
            }

            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
        });

});


$('#btn-jumbotron').click(function() {
    $('#reser-room option[value="opposite-room"]').prop('selected', 'true');
});

$('.btn-reser-modal').click(function(e) {
    e.preventDefault();

    $('.modal-room')
        .modal('hide')
        .on('hidden.bs.modal', function(e) {
            $('#reservate').modal('show');

            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
        });

});

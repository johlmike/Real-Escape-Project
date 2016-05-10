/**
 * Created by Johlmike on 2016/5/4.
 */
// document.getElementById('up-img').addEventListener("click", upBG, false);
// document.getElementById('down-img').addEventListener("click", downBG, false);
//
// var headImgNum = 1;
// var imgName = '';
// var headImgElement = document.getElementById('head-img-div');
//
//
// function upBG () {
//     headImgNum -= 1;
//     if( headImgNum ===  0){
//         headImgNum = 8;
//     }
//     imgName = 'opposite_room_' + headImgNum + '.jpg';
//     headImgElement.style.backgroundImage = 'url("img/' + imgName + '")';
// }
//
// function downBG () {
//     headImgNum += 1;
//     if( headImgNum ===  9){
//         headImgNum = 1;
//     }
//     imgName = 'opposite_room_' + headImgNum + '.jpg';
//     headImgElement.style.backgroundImage = 'url("img/' + imgName + '")';
// }

$('.btn-reser-modal').click(function(e) {
    e.preventDefault();

    $('.modal-room')
        .modal('hide')
        .on('hidden.bs.modal', function(e) {
            $('#reservate').modal('show');

            $(this).off('hidden.bs.modal'); // Remove the 'on' event binding
        });

});

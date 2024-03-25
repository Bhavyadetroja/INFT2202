(function () {
    $('#collapseExample').on('show.bs.collapse', e => {
        console.log('about to open collapse box ');
    });
    $('#collapseExample').on('shown.bs.collapse', e => {
        console.log(' collapse  should be open now ');
    });
    $('#collapseExample').on('hide.bs.collapse', e => {
        console.log('about to hide collapse box ');
    });
    $('#collapseExample').on('hidden.bs.collapse', e => {
        console.log('collapse  should be closed now  ');
    });
    $('modal-button').on('click',e=>{
        console.log('Clicked')
        const carousel =  $('#carouseExampleControls').carousel('next');
       
    })
    $('modal-save').on('click',e=>{
        alert(saved);
        $('#exampleModel').modal('hide');
       
    })

})();
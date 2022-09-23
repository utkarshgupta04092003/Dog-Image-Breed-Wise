function fetchRandomDogImageBreedwise(){

    let breed = $('#breed').val();


    let apiURL = `https://dog.ceo/api/breed/${breed}/images/random`;
    // alert(apiURL);
    $.get(apiURL,function(data){
        let imageURL = data.message;
        $('#img').attr('src',imageURL);
    }).fail(function(){
        alert('Oops ! \n Breed Not fount.');
    })
}

$('#button').on('click',fetchRandomDogImageBreedwise);
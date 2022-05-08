
set_compteur()


$(".saisie-button").click(function(){

    var saisie_content=$("recherche-input").val()
    ajout_message(saisie_content)
    set_compteur()
})

$("#btn-search").click(function(){

    var search_content=$(".recherche-input").val()
    $('h6').each(function(){

        if(search_content==$(this).text()){
            
            // $(this).parent().parent().show();
            $(this).parent().parent().removeClass("hide")        
            $(this).parent().parent().addClass("message")  
        }else{
            // $(this).parent().parent().hide();        
             $(this).parent().parent().removeClass("message")        
             $(this).parent().parent().addClass("hide")        
      }


      $(".recherche-input").val("")


    })
    //ajout_message(saisie_content)
    set_compteur()
})

// suppression des messages
$("body").on("click", ".img-trash", function () {

        $(this).parent().remove()
        set_compteur()
        
    });

// Fonction de calcul du compteur
function set_compteur(){
    
    var compteur=0
    var message_class=$(".message")
    compteur=message_class.length-3
    $("#compteur").text(compteur)

}

function ajout_message(text){
     //AJOUT DE LA DIV DU MESSAGE


    $("body").append(`
     <div class="message">
        <img class="img-avatar" src="./img/Noel.jpg" alt="">
        <div class="message-content">
            
            <p>${text}</p>
        </div>
        <img class="img-trash" src="./img/trash.png" alt="">        
    </div>
    `)

}


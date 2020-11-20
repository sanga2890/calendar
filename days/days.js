$(document).ready(function(){

    $('.current-day').hide();
    $('.current-message').hide();

    let time = setInterval(babbo_penne, 6000);
    function babbo_penne(){
        $('.fondo').addClass('hide')
        $('.babbo').addClass('hide')
        $('.testo').addClass('hide')
        $('.current-day').show()
        clearInterval(time)
    }
   

    let images = [];
    images[1] =  
    {
        "day" : "1-01.png",
        "link" : "20.gif" 
    }
    images[2] = 
    {
        "day" : "2-01.png",
        "link": "2"
    }
    images[3] = 
    {
        "day" : "3-01.png",
        "link" :"3"
    }
    images[4] = 
    {
        "day" : "4-01.png",
        "link" : "4"
    }
    images[5] = 
    {
        "day" : "5-01.png",
        "link" : "5"
    }
    images[6] = 
    {
        "day" : "6-01.png",
        "link" : "6"
    }  
    images[7] = 
    {
        "day" : "7-01.png",
        "link" : "7"
    }
    images[8] = 
    {
        "day" : "8-01.png",
        "link" : "8"
    }
    images[9] = 
    {
        "day" : "9-01.png",
        "link" : "9"
    } 
    images[10] = 
    {
        "day" : "10-01.png",
        "link" : "10"
    }  
    images[11] = 
    {
        "day" : "11-01.png",
        "link" : "11"
    }
    images[12] = 
    {
        "day" : "12-01.png",
        "link" : "12"
    }  
    images[13] = 
    {
        "day" : "13-01.png",
        "link" : "13"
    }
    images[14] = 
    {
        "day" : "14-01.png",
        "link" : "14"
    }
    images[15] = 
    {
        "day" : "15-01.png",
        "link" : "15"
    }
    images[16] = 
    {
        "day" : "16-01.png",
        "link" : "16"
    }  
    images[17] = 
    {
        "day" : "17-01.png",
        "link" : "17"
    } 
    images[18] = 
    {
        "day" : "18-01.png",
        "link" : "18"
    }  
    images[19] = 
    {
        "day" : "19-01.png",
        "link" : "19.gif"
    } 
    images[20] = 
    {
        "day" : "20-01.png",
        "link" : "20.gif"
    }   
    images[21] = 
    {
        "day" : "21-01.png",
        "link" : "22"
    }
    images[22] = 
    {
        "day" : "22-01.png",
        "link" : "22"
    }  
    images[23] = 
    {
        "day" : "23-01.png",
        "link" : "23"
    }   
    images[24] = 
    {
        "day" : "24-01.png",
        "link" : "24"
    }
    images[25] = 
    {
        "day" : "25-01.png",
        "link" : "25"
    }
    
    let date =  new Date();
    // let today = date.getDate();
    let today = 1
    // let month = date.getMonth();
    console.log(today);

    // if (month == 12) {
        $.each(images, function( key, image ) {
            if (today == key) {
                let current_day = image.day;
                let day_message = image.link;
                $('.current-day').attr('src' , "img/day/" + current_day);
                $('.current-message').attr('src' , "img/message/" + day_message);
                // $('head').prepend('<meta property="og:image" content="https://calendarioavventofamigliabrambilla.netlify.app/img/day/' + current_day + '"' + '>')
                return false
            } 
            
            });

            $('.current-day').click(function() {
                $('.current-day').hide();
                $('.current-message').show();
            })
            $('.current-message').click(function() {
                $('.current-message').hide();
                $('.current-day').show();
            })

            
    // } else {
    //     $('.container').append('<h1> Keep Calm! Is not yet December!')
    // }

})
    


$(document).ready(function(){
   
    let images = [];
    images[1] =  
    {
        "day" : "1.png",
        "link" : "1-01.png" 
    }
    images[2] = 
    {
        "day" : "2.png",
        "link": "2-01.png"
    }
    images[3] = 
    {
        "day" : "3.png",
        "link" :"3-01.png"
    }
    images[4] = 
    {
        "day" : "4.png",
        "link" : "4-01.png"
    }
    images[5] = 
    {
        "day" : "5.png",
        "link" : "5-01.png"
    }
    images[6] = 
    {
        "day" : "6.png",
        "link" : "6-01.png"
    }  
    images[7] = 
    {
        "day" : "7.png",
        "link" : "7-01.png"
    }
    images[8] = 
    {
        "day" : "8.png",
        "link" : "8-01.png"
    }
    images[9] = 
    {
        "day" : "9.png",
        "link" : "9-01.png"
    } 
    images[10] = 
    {
        "day" : "10.png",
        "link" : "10-01.png"
    }  
    images[11] = 
    {
        "day" : "11.png",
        "link" : "11-01.png"
    }
    images[12] = 
    {
        "day" : "12.png",
        "link" : "12-01.png"
    }  
    images[13] = 
    {
        "day" : "13.png",
        "link" : "13-01.png"
    }
    images[14] = 
    {
        "day" : "14.png",
        "link" : "14-01.png"
    }
    images[15] = 
    {
        "day" : "15.png",
        "link" : "15-01.png"
    }
    images[16] = 
    {
        "day" : "16.png",
        "link" : "16-01.png"
    }  
    images[17] = 
    {
        "day" : "17.png",
        "link" : "17-01.png"
    } 
    images[18] = 
    {
        "day" : "18.png",
        "link" : "18-01.png"
    }  
    images[19] = 
    {
        "day" : "19.png",
        "link" : "19-01.png"
    } 
    images[20] = 
    {
        "day" : "20.png",
        "link" : "20-01.png"
    }   
    images[21] = 
    {
        "day" : "21.png",
        "link" : "22-01.png"
    }
    images[22] = 
    {
        "day" : "22.png",
        "link" : "22-01.png"
    }  
    images[23] = 
    {
        "day" : "23.png",
        "link" : "23-01.png"
    }   
    images[24] = 
    {
        "day" : "24.png",
        "link" : "24-01.png"
    }
    images[25] = 
    {
        "day" : "25.png",
        "link" : "25-01.png"
    }
    
    let date =  new Date();
    let today = date.getDate();
    let month = date.getMonth() + 1;

    if (month == 12) {

        $('.current-day').hide();
        $('.current-message').hide();

        let time = setInterval(babbo_penne, 6000);
        function babbo_penne(){
            $('.fondo').slideUp("slow")
            $('.babbo').slideUp("slow")
            $('.testo').slideUp("slow")
            $('.current-day').fadeIn(2000)
            clearInterval(time)
        }

        $.each(images, function( key, image ) {
            if (today == key) {
                let current_day = image.day;
                let day_message = image.link;
                $('.current-day').attr('src' , "img/day/" + current_day);
                $('.current-message').attr('src' , "img/message/" + day_message);
                return false
            } 
            
            });

            $('.current-day').click(function() {
                $('.current-day').fadeOut(2000);
                $('.current-message').fadeIn(4000);
            })
            $('.current-message').click(function() {
                $('.current-message').fadeOut()
                $('.current-day').fadeIn();
            })

            
    } else {
        $('.container').empty();
        $('.container').css('background-color', 'lightgreen')
        $('.container').append('<h1> Keep Calm!' + '<br>' + 'Is just November <span>' + today + '</span> </h1>');
    }

    
})
    


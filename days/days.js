$(document).ready(function(){

    $('.current-message').hide();


    let images = [];
    images[1] =  
    {
        "day" : "1",
        "link" : "1" 
    }
    images[2] = 
    {
        "day" : "2",
        "link": "2"
    }
    images[3] = 
    {
        "day" : "3",
        "link" :"3"
    }
    images[4] = 
    {
        "day" : "4",
        "link" : "4"
    }
    images[5] = 
    {
        "day" : "5",
        "link" : "5"
    }
    images[6] = 
    {
        "day" : "6",
        "link" : "6"
    }  
    images[7] = 
    {
        "day" : "7",
        "link" : "7"
    }
    images[8] = 
    {
        "day" : "8",
        "link" : "8"
    }
    images[9] = 
    {
        "day" : "9",
        "link" : "9"
    } 
    images[10] = 
    {
        "day" : "10",
        "link" : "10"
    }  
    images[11] = 
    {
        "day" : "11",
        "link" : "11"
    }
    images[12] = 
    {
        "day" : "12",
        "link" : "12"
    }  
    images[13] = 
    {
        "day" : "13",
        "link" : "13"
    }
    images[14] = 
    {
        "day" : "14",
        "link" : "14"
    }
    images[15] = 
    {
        "day" : "15",
        "link" : "15"
    }
    images[16] = 
    {
        "day" : "16",
        "link" : "16"
    }  
    images[17] = 
    {
        "day" : "17",
        "link" : "17"
    } 
    images[18] = 
    {
        "day" : "18",
        "link" : "18"
    }  
    images[19] = 
    {
        "day" : "19.gif",
        "link" : "19.gif"
    } 
    images[20] = 
    {
        "day" : "20.gif",
        "link" : "20.gif"
    }   
    images[21] = 
    {
        "day" : "21",
        "link" : "22"
    }
    images[22] = 
    {
        "day" : "22",
        "link" : "22"
    }  
    images[23] = 
    {
        "day" : "23",
        "link" : "23"
    }   
    images[24] = 
    {
        "day" : "24",
        "link" : "24"
    }
    images[25] = 
    {
        "day" : "25",
        "link" : "25"
    }
    
    let date =  new Date();
    let today = date.getDate();
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
    


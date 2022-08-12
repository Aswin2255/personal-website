



$(document).ready(function(){
    $('#gForm').validate({
        rules:{
            name1:{
            required:true,
            minlength:4,
            },
            email1:{
                required:true,
                email:true,
            },
            subject:{
                required:true,
                minlength:4,
            },
            message:{
                required:true,
                minlength:4,
            }
        }
    })
})
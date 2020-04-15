    function validateName(){
        var name = document.getElementById("name_input");
        //verifica daca stringul e gol
        //si
        //verifica daca stringul contine doar numere
        //isNaN returneaza true daca nu e numar
        
        if(name.value == "" || !isNaN(name.value))
        {
            return false;//daca numele e invalid
        }

        return true;//daca numele e valid
    }

    function validateBirthday(){
        var birthday_string = document.getElementById("date_input").value;
        console.log(birthday_string);
        var b_date = new Date(birthday_string);
        var c_date = new Date();
        var result = b_date.getTime() <= c_date.getTime();
        return result;
    }

    //return true daca age >0 si varsta corespunde datei nasterii introduse
    function validateAge(){

        //age introdus in formular
        var age = document.getElementById("age_input").value;

        //return false daca varsta e un numar negativ
        if (age<0){
            return false;
        }

        //verifica daca age corespunde to birthday
        var birthday_string = document.getElementById("date_input").value;
        var b_date = new Date(birthday_string);
        var c_date = new Date();

        c_date.setFullYear(c_date.getFullYear()-age);
        var b_date_aux = new Date(b_date);
        b_date_aux.setFullYear(b_date.getUTCFullYear()+1);

        var result = (b_date.getTime()<=c_date.getTime() && 
                      c_date.getTime()<=b_date_aux.getTime());
        return result;
    }

    //return true daca email e valid
    function validateEmail(){
        //am validat doar pentru @gmail.com si @yahoo.com
        var string_email = document.getElementById("email_input").value;
        var end_email_1 = "@gmail.com";
        var end_email_2 = "@yahoo.com";
        var sub_email = string_email.substring(string_email.length - end_email_1.length);

        //presupunem ca un e-mail trebuie sa aiba cel putin 15 caractere
        if(string_email.length>=15){
            if(sub_email==end_email_1 || sub_email==end_email_2){
                return true;
            }
        }
        return false;
    }

    //validare form->va scrie un text
    function validateForm(){
        var output = "";
        //datele pentru:
        if(!validateName()){
            output = "Nume";
            document.getElementById("name_input").style.border = "1px red solid";
        }
        else
        {
            document.getElementById("name_input").style.border = "1px grey solid";
        }

        if(!validateBirthday()){
            if(output!=""){
                output+=",";
            }
            output+=" Data de nastere";
            document.getElementById("date_input").style.border = "1px red solid";
        }
        else
        {
            document.getElementById("date_input").style.border = "1px grey solid";
        }

        if(!validateAge()){
            if(output!=""){
                output+=",";
            }
            output+=" Varsta ";
            document.getElementById("age_input").style.border = "1px red solid";
        }
        else
        {
            document.getElementById("age_input").style.border = "1px grey solid";
        }

        if(!validateEmail()){
            if(output!=""){
                output+=",";
            }
            output+=" E-mail ";
            document.getElementById("email_input").style.border = "1px red solid";
        }
        else
        {
            document.getElementById("email_input").style.border = "1px grey solid";
        }

        if(output==""){
            output="Datele au fost introduse corect";
            window.alert(output);
            return true;
        }
        else{
            output+="sunt introduse gresit";
            var temp = "Datele pentru: " + output;
            window.alert(temp);
            return false;
        }
    }
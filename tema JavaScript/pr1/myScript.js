    //add selections and their options
    function create_selections(){
        
        var container = document.getElementById("container");
        
        var select1 = '<select id="select'+1+'" ondblclick="change_option_from_1_to_2()" size="14">';
        var select2 = '<select id="select'+2+'" ondblclick="change_option_from_2_to_1()" size="14">';
        
        for (var i = 1; i <=7; i++){
            select1 += '<option id="opt' + i + '">Obiectul ' + i + '</option>';
            select2 += '<option id="opt' + (i+7) + '">Obiectul ' + (i+7) + '</option>';
        }
        select1 += '</select>';
        select2 += '</select>';
        container.innerHTML = select1+select2;
    }

    function change_option_from_1_to_2(){

        var select1=document.getElementById("select1");
        var select2=document.getElementById("select2");

        var temp = document.createElement("option");
        
        temp.text = select1.options[select1.selectedIndex].value;
        
        select1.remove(select1.selectedIndex);
        select2.add(temp);
    }

    function change_option_from_2_to_1(){

        var select2=document.getElementById("select2");
        var select1=document.getElementById("select1");

        var temp = document.createElement("option");
    
        temp.text = select2.options[select2.selectedIndex].value;

        select2.remove(select2.selectedIndex);
        select1.add(temp);
    }
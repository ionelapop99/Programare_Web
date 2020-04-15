var numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var lastKnownButtonId = undefined;
var lasKnownButtonNumber = undefined;
var wait = false;
var matches = 0;

//elements
var buttons = document.querySelectorAll("button");

//code
shuffle(numbers);
distributeNumbers();

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){
        var turnable = e.target.dataset.turnable;

        //first click
        if(!wait &&lastKnownButtonId==undefined &&
            lasKnownButtonNumber == undefined && turnable=='true'){
                e.target.dataset.turnable = 'false';

                e.target.textContent = e.target.dataset.number;
                e.target.style.backgroundColor = '#ff339c';

                lastKnownButtonId = e.target.id;
                lasKnownButtonNumber = e.target.dataset.number;
        }

        //second click
        else if (!wait && lastKnownButtonId != undefined &&
             lasKnownButtonNumber !=undefined && turnable == 'true'&&
             e.target.id != lastKnownButtonId){
                
                e.target.dataset.turnable = 'false';
                e.target.textContent = e.target.dataset.number;
                
                //match
                if(e.target.dataset.number == lasKnownButtonNumber){

                    e.target.style.backgroundColor = '#ffebcc';
                    document.getElementById(lastKnownButtonId).style.backgroundColor='#ffebcc';
                    lastKnownButtonId = undefined;
                    lasKnownButtonNumber = undefined;
                    matches++;
                    if(matches==8){
                        showWinScreen();
                    }
                }

                //no match
                else{
                    document.getElementById(lastKnownButtonId).style.backgroundColor= '#990033';
                    e.target.style.backgroundColor = '#990033';
                    wait = true;

                    setTimeout(()=>{
                        e.target.dataset.turnable = 'true';
                        e.target.style.backgroundColor = '#ff99ce';
                        e.target.textContent = "";

                        var tempLastClickedButton = document.getElementById(lastKnownButtonId);

                        tempLastClickedButton.dataset.turnable = 'true';
                        tempLastClickedButton.style.backgroundColor = '#ff99ce';
                        tempLastClickedButton.textContent = "";

                        lastKnownButtonId = undefined;
                        lasKnownButtonNumber = undefined;
                        wait = false;
                    },1000);
                }
            
            }
    })
}

function distributeNumbers() {
    for(var i=0;i<buttons.length;i++){
        buttons[i].dataset.number = numbers[i];
    }
}

function shuffle(array){
    var j,i,x;
    for(i = array.length-1;i>0;i--){
        j=Math.floor(Math.random()*(i+1));
        x=array[i];
        array[i] = array[j];
        array[j]=x;
    }
    return array;
}

function showWinScreen()
{
    output="Felicitari,ati ghicit toate numerele! Aveti o memorie admirabila!";
    window.alert(output);
}
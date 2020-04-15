function bubbleSortTable(id, column, dir) 
{
    var tbody = document.getElementById(id).children[0];
    var rows = tbody.children.length;
    var cols = tbody.children[0].children.length;
    //console.log(rows," ",cols); 5 si 4
    var swapped = true;
    do {
        swapped = false;
        
        for (var r = 1; r <rows-1; r++) //de la randul 1 pana la randul 4
        {
            var cellCurr, cellNext;
            
            if (columnIsNumeric(id, column))
            {
                cellCurr = parseInt(tbody.children[r].children[column].innerHTML);
                cellNext = parseInt(tbody.children[r+1].children[column].innerHTML);
            } 
            else 
            {
                cellCurr = tbody.children[r].children[column].innerHTML;
                cellNext = tbody.children[r+1].children[column].innerHTML;
            }
            
            if (dir == 'asc' && cellCurr > cellNext) 
            {
                for (var c = 0; c < cols; c++)
                {
                    var temp = tbody.children[r].children[c].innerHTML;
                    tbody.children[r].children[c].innerHTML = tbody.children[r+1].children[c].innerHTML;
                    tbody.children[r+1].children[c].innerHTML = temp;
                }
                
                swapped = true;
            }
            else if (dir == 'desc' && cellCurr < cellNext) 
            {
                for (var c = 0; c < cols; c++) 
                {
                    var temp = tbody.children[r+1].children[c].innerHTML;
                    tbody.children[r+1].children[c].innerHTML = tbody.children[r].children[c].innerHTML;
                    tbody.children[r].children[c].innerHTML = temp;
                }
                
                swapped = true;
            }
        }
    } while (swapped);
    
    if (dir == 'asc')
        tbody.children[0].children[column].setAttribute("onclick", "bubbleSortTable('" + id + "', " + column + ", 'desc');");
    else
        tbody.children[0].children[column].setAttribute("onclick", "bubbleSortTable('" + id + "', " + column + ", 'asc');");
}

function columnIsNumeric(id, column) 
{
    var tbody = document.getElementById(id).children[0];
    var rows = tbody.children.length;

    for (var r = 1; r <rows; r++)
        if (! isNumeric(tbody.children[r].children[column].innerHTML))
            return false;
            
    return true;
}

function isNumeric(n) {
  return ! isNaN (parseFloat(n)) && isFinite (n);
}
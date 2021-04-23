
function ChangeStyle() {
    var lab = document.getElementById("SelectReserve").options.selectedIndex;

    switch (lab) {
        case 1:
            document.getElementById("SelectReserve").style.backgroundColor = "#8b0000";;
            break;
        case 2:
            document.getElementById("SelectReserve").style.backgroundColor = "#ff0000";
            break;
        case 3:
            document.getElementById("SelectReserve").style.backgroundColor = "#ffa500";
            break;
        case 4:
            document.getElementById("SelectReserve").style.backgroundColor = "#ffff00";
            break;
        case 5:
            document.getElementById("SelectReserve").style.backgroundColor = "#00ff00";
            break;
        case 6:
            document.getElementById("SelectReserve").style.backgroundColor = "#006400";
            break;
        default:
            {
               document.getElementById("SelectReserve").style.backgroundColor = "#ffffff";
            }
            break;
    }
    
}

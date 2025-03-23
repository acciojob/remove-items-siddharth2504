//your JS code here. If required.
let select = document.getElementById("colorSelect");

        let remove = document.getElementById("button");

        remove.addEventListener("click", removeValue);

        function removeValue(e){
            let index = select.selectedIndex;
            if(index !== -1){
                select.remove(index);
            }
        }
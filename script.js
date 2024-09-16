leftBox = document.getElementById("left");
rightBox = document.getElementById("right");
lists = document.getElementsByClassName("list");

for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = this;
            rightBox.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            rightBox.addEventListener("drop", function(){
                rightBox.appendChild(selected);
                selected = null;
            });
            leftBox.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            leftBox.addEventListener("drop", function(){
                leftBox.appendChild(selected);
                selected = null;
            });
    });
}
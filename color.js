function nightDayHandler(self){
        if(self.value==="night"){
            self.value="day";
            Body.setcolor('white');
            Body.setBackcolor('black');
            Link.setcolor('powderblue');
        }else{
            self.value="night";
            Body.setcolor('black');
            Body.setBackcolor('white');
            Link.setcolor();
        };
    };

var Body = {
    setcolor : function(color){
        document.querySelector('body').style.color = color;         
    },
    setBackcolor : function(color){
        document.querySelector('body').style.backgroundColor = color;         
    }
};

var Link = {
    setcolor : function(color){
        alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            alist[i].style.color = color;
            i++;
        };
    };
};

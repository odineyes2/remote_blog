var Body = {
            setColor : function(color){
                document.querySelector('body').style.color = color; 
            },
            setBackColor : function(color){
                document.querySelector('body').style.backgroundColor = color; 
            }
        };        
        
var Link = {
    setColor : function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            alist[i].style.color=color;
            i++;
        };
    }
};

function nightDayHandler(self){
    if(self.value==="night"){
        self.value = 'day';
        Body.setColor('white');
        Body.setBackColor('black');
        Link.setColor('powderblue');
    } else {
        self.value = 'night';
        Body.setColor('black');
        Body.setBackColor('white');
        Link.setColor('blue');
    }
};

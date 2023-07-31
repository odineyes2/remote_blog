 function nightDayHandler(self){
            if(self.value === "night"){                
                self.value = "day"
                Body.setColor('white');
                Body.setBackgroundColor('black');
            } else {
                self.value = "night"
                Body.setColor('black');
                Body.setBackgroundColor('white');
            };
        };

        var Body = {
            setColor : function(color){
                document.querySelector('body').style.color = color;
            },
            setBackgroundColor : function(color){
                document.querySelector('body').style.backgroundColor = color;
            }
        };   
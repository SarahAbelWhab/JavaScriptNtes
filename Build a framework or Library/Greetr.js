// IIFE to execute this when starting tha application 

(function(global,$) {
    
    var Greetr = function(firstName,lastName,language) {
        // to return new object without write (new) => function constructor
        return new Greetr.init(firstName,lastName,language)
    }

    var SupportedLanguage = ['en', 'es'];

    var Greeting = {
        en:'Hello',
        es:'Hola'
    };

    var FormalGreeting = {
        en :'Greetings',
        es:'Ciao Ciao'
    };

    var logMessages = {
        en:'Logged in',
        es:'log log log'
    };

    // to save memory and attach methods to all objects put them in prototype
    Greetr.prototype = {
        fullName:function() {
            // this point to the object that calling this function
            return this.firstName + ' ' + this.lastName;
        },
        validate:function() {
            if( SupportedLanguage.indexOf(this.language) === -1 ){
                throw 'Invalid language';
            }
        },
        greeting:function(){
            return Greeting[this.language] + ' ' + this.firstName +' !';
        },
        formalGreeting:function() {
            return FormalGreeting[this.language] + ' ' + this.fullName()+'.';
        },
        greet:function(formal){
            var msg;
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log:function() {
            // manually make sure if console exist 
            // internet explorer don't have 
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this;
        },
        setLang:function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },
        HtmlGreeting:function(selector,formal) {
            if (!$) {
                throw 'JQuery not loaded!';
            }

            if (!selector) {
                throw 'Missing JQuery Selector!';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }
         
    };

    Greetr.init = function(firstName,lastName,language){
        // setup some default values
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';


    }



    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})(window,jQuery);


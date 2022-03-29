Vue.component('codenames',{
    data:function(){
        return{
            flipped: false
        }
    },
    props: ['name','codename'],
    template: '<div v-on:click="flip"><h1 v-bind:class="{clear:flipped}">{{name}}</h1> <h1 v-bind:class="{clear:!flipped}">{{codename}}</h1></div>',
    methods:{
        flip:function(){
            this.flipped=!this.flipped;
        }
    }
})

var app = new Vue({
    el: "#app",
    data: {
        nameError: "",
        emailError: "",
        name: "",
        email: "",
        submit: ""
    },

    methods: {
        validate: function () {
            if (this.nameError == null && this.emailError == null) {
                this.submit = "Submitted";
            } else {
                this.submit = "Please fill out name and email information above. ";
            }
        }
    },

    watch: {
        name: function (name) {
            if (this.name.length < 2) {
                this.nameError = "The input needs to have at least 2 characters.";
            } else {
                this.nameError = null;
            }
        },


        //email crap
        email: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(email)) {
                this.emailError = null;
            } else{
                this.emailError="The input needs to be a valid email address (example@domain.xxx) "
            }
        }
    }
})
var number="";

function eleMaker(name,val){
    var ele = document.createElement (  "div");
    ele.innerHTML=name;
    ele.addEventListener("click",function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase(val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}
document.body.querySelector( ".clicker").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "Protagonist","Joker");
    eleMaker( "Anne","Panther");
    eleMaker("Rhuji","Skull");

});


var vm = new  Vue({
    el:"#vue_det",
    data: {
        fname:"Rabby",
        lname:"Islam",
    },
    methods:{
        myDetails:function () {
            return `I am ${this.fname} ${this.lname}`
        }
    }
})
let app = new Vue({  
    el: '#app',  
    data: {  
      seen: false,
      sayHi:false, 
      todos: [  
        { text: 'HTML Tutorial' },  
        { text: 'CSS Tutorial' },  
        { text: 'JavaScript Tutorial' },            
        { text: 'Vue.js Tutorial' }  ,
        { text: 'Laravel Tutorial' },
      ]  
    }  
  })


  
let app2 = new Vue({  
    el: '#app2',  
    data: {  
      message:'This is Vue.js message',
      message2:'Two way data binding'
    },
    methods:{
        reverseMessage:function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
  })

  

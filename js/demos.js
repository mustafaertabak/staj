/* 1-DEMO UYGULAMASI app */
var app = new Vue({
    el: '#app',
    data: {
    message: 'Merhaba Vue!'
    }
})

/* 2-DEMO UYGULAMASI app-2 */
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Bu sayfayı  ' + new Date().toLocaleString() + '  yüklediniz!'
    }
})

/* 3-DEMO UYGULAMASI app-3 */
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

/* 4-DEMO UYGULAMASI app-4 */
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Javascript öğren' },
        { text: 'Vue öğren' },
        { text: 'Harika bir şey inşa et' }
      ]
    }
  })

/* 5-DEMO UYGULAMASI app-5 */
var app5 = new Vue({ 
    el: '#app-5', 
    data: { 
    message: 'Merhaba Vue.js' 
    }, 
        methods: { 
            reverseMessage: function () { 
                this.message = this.message.split('').reverse().join('') 
        } 
    } 
})

/* 6-DEMO UYGULAMASI app-6 */
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Merhaba Vue!'
    }
})

/* 7-DEMO UYGULAMASI app-7 */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Sebzeler' },
        { id: 1, text: 'Peynir' },
        { id: 2, text: 'İnsanlar başka ne yemeli?' }
      ]
    }
  })

/* 8-DEMO UYGULAMASI app-8 */
var app8 = new Vue({
    el: '#app-8',
    data: function () {
        return {
            hamHTML: '<span style="color: red">Bu kırmızı olmalı.</span>'
        }
    }
})
  
/* 9-DEMO UYGULAMASI app-9 */

var vm = new Vue({
    el: '#app-9',
    data: {
      message: 'Merhaba'
    },
    computed: {
      reversedMessage: function () {
        return this.message.split('').reverse().join('')
      }
    }
  })

/* 10-DEMO UYGULAMASI app-10 */

var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })

/* 11-DEMO UYGULAMASI app-11 */

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

/* 12-DEMO UYGULAMASI app-12 */
new Vue({
    el: '#v-for-object',
    data: {
      object: {
        isim: 'John',
        soyisim: 'Doe',
        yas: 30
      }
    }
  })

/* 13-DEMO UYGULAMASI app-13 */

  new Vue({
    el: '#v-for-object-value-key',
    data: {
        object: {
            isim: 'John',
            soyisim: 'Doe',
            yas: 30
        }
    }
})
  
/* 14-DEMO UYGULAMASI app-14 */

new Vue({
    el: '#v-for-object-value-key-index',
    data: {
        object: {
            isim: 'John',
            soyisim: 'Doe',
            yas: 30
        }
    }
})
  
/* 15-DEMO UYGULAMASI app-15 */

new Vue({ 
    el: '#range' 
})

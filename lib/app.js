export default class QSapp {
  static showAddForm(event) {
    let type = event.data.type
    let clone = $(`#additions>#add${type}Form`)
    if(clone.length == 1){
      QSapp.elmToggleVisibility.call(clone[0], true)
      clone[0][0].focus()
    } else {
      let template = $(`#add${type}FormTemplate`)[0].content
      clone = document.importNode(template, true)
      $(clone).appendTo('#additions')
      let inserted = $(`#additions>#add${type}Form`)
        .submit({type: type}, QSapp.postResource)
        .click(QSapp.elmToggleVisibility)
      inserted[0][0].focus()
    }
  }

  static getAllFood(){
    fetch('http://localhost:3000/api/v1/foods')
      .then(response=>response.json())
      .then(foods=>{
        return foods
        // foods.forEach(food => {
        //   diary.foodList[food.id] = food
        // })
      })
      .catch(e=>console.dir(e))
  }

  static getAllMeals(){
    return fetch('http://localhost:3000/api/v1/meals')
      .then(response=>response.json())
      .then(meals=>{
        return meals
      })
      .catch(e=>console.dir(e))
  }

  static postNewFood(form){
    // post to api
    // delegate results to handler
    // handler adds Food to local food object
    $(form).remove()
  }

  static postNewMeal(form){
    // post to api
    // delegate results to handler
    // handler inserts Meal template into diary section
    $(form).remove()
  }

  static postResource(event){
    event.preventDefault()
    switch(event.data.type){
      case 'Food':
        this.postNewFood(this)
        break
      case 'Meal':
        this.postNewMeal(this)
        break
    }
  }

  static elmToggleVisibility(e){
    if(e === true || e.target == this){
      $(this).toggleClass('hidden')
    }
  }
}

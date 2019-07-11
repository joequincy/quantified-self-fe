export default class QSapp {
  constructor(diary){
    this.diary = diary
    this.self = this
  }

  getAllFood(){
    return fetch('http://localhost:3000/api/v1/foods')
    .then(response=>response.json())
    .then(foods=>{
      return foods.sort((a,b) => {
        return a.id - b.id
      })
    })
    .catch(e=>console.dir(e))
  }

  getAllMeals(){
    return fetch('http://localhost:3000/api/v1/meals')
    .then(response=>response.json())
    .then(meals=>{
      return meals.sort((a,b) => {
        return a.id - b.id
      })
    })
    .catch(e=>console.dir(e))
  }

  showAddForm(event) {
    let type = event.data.type
    let clone = $(`#additions>#add${type}Form`)
    if(clone.length == 1){
      this.elmToggleVisibility.call(clone[0], true)
      clone[0][0].focus()
    } else {
      let template = $(`#add${type}FormTemplate`)[0].content
      clone = document.importNode(template, true).firstElementChild
      var appendedElm = $(clone).appendTo('#additions').get(0)
      let inserted = $(`#additions>#add${type}Form`)
        .submit({type: type}, e => this.sendRequest(e))
        .click(this.elmToggleVisibility)
      inserted[0][0].focus()
    }
    switch(type){
      case 'FoodToMeal':
        let meal = $(event.target).closest('.meal')[0]
        $('h3', appendedElm).append(meal.children[0].textContent)
        let mealId = parseInt(meal.attributes['data-meal-id'].textContent)
        this.populateFoods(mealId, appendedElm)
        break
    }
  }

  showFoodDeleteForm(event){
    let clone = $(`#additions>#deleteFoodForm`)
    if(clone.length == 1){
      this.elmToggleVisibility.call(clone[0], true)
      clone[0][0].focus()
    } else {
      let template = $(`#deleteFoodFormTemplate`)[0].content
      clone = document.importNode(template, true).firstElementChild
      var appendedElm = $(clone).appendTo('#additions').get(0)
      this.populateFoods(0, appendedElm)
      let inserted = $(`#additions>#deleteFoodForm`)
        .submit({type: 'DeleteFood'}, e => this.sendRequest(e))
        .click(this.elmToggleVisibility)
      inserted[0][0].focus()
    }
  }

  populateFoods(mealId, form){
    if(mealId != 0){
      form.elements['mealId'].value = mealId
    }
    let select = $('select', form)
    this.diary.foodList.forEach(food => {
      select.append(`<option value="${food.id}">${food.name} - ${food.calories}cal</option>`)
    })
  }

  postNewFood(form){
    fetch('http://localhost:3000/api/v1/foods', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({food: {
        name: form[0].value,
        calories: form[1].value
      }})
    }).then(r => r.json())
      .then(food => {
        this.diary.foodList.push(food)
    })
    $(form).remove()
  }

  postNewMeal(form){
    fetch('http://localhost:3000/api/v1/meals', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({meal: {
        name: form[0].value
      }})
    }).then(r => r.json())
      .then(meal => {
        this.diary.appendMeal(meal)
    })
    $(form).remove()
  }

  postFoodToMeal(form){
    fetch(`http://localhost:3000/api/v1/meals/${form[1].value}/foods/${form[0].value}`, {
      method: 'POST'
    }).then(r => r.json())
      .then(response => {
        fetch(`http://localhost:3000/api/v1/meals/${form[1].value}`)
          .then(r => r.json())
          .then(meal => {
            let replacedMeal = $(`.meal[data-meal-id=${form[1].value}]`)[0]
            this.diary.appendMeal(meal, replacedMeal)
          })
        // alert(response.message)
    })
    $(form).remove()
  }

  removeFoodFromMeal(link){
    let foodId = $(link).closest('.food')[0].attributes['data-food-id'].textContent
    let mealId = $(link).closest('.meal')[0].attributes['data-meal-id'].textContent
    fetch(`http://localhost:3000/api/v1/meals/${mealId}/foods/${foodId}`, {
      method: 'DELETE'
    }).then(r => {
      if(!r.ok){
        throw Error(r.json())
      }
    }).then(response => {
        fetch(`http://localhost:3000/api/v1/meals/${mealId}`)
          .then(r => r.json())
          .then(meal => {
            let affectedMeal = $(`.meal[data-meal-id=${mealId}]`)[0]
            this.diary.appendMeal(meal, affectedMeal)
          })
        // alert(response.message)
    }).catch(e => {
      console.error(e.error)
    })
  }

  deleteMeal(link){
    let mealId = $(link).closest('.meal')[0].attributes['data-meal-id'].textContent
    fetch(`http://localhost:3000/api/v1/meals/${mealId}`, {
      method: 'DELETE'
    }).then(r => {
      if(!r.ok){
        throw Error(r.json())
      }
    }).then(response => {
        $(`.meal[data-meal-id=${mealId}]`).remove()
    }).catch(e => {
      console.error(e)
    })
  }

  deleteFood(form){
    fetch(`http://localhost:3000/api/v1/foods/${form[0].value}`, {
      method: 'DELETE'
    }).then(r => {
      if(!r.ok){
        throw Error(r.json())
      }
    }).catch(e => {
      console.error(e)
    }).then(() => {
      this.diary.reset()
    })
    $(form).remove()
  }

  sendRequest(e){
    e.preventDefault()
    switch (e.data.type) {
      case 'Food':
        this.postNewFood(e.target)
        break
      case 'Meal':
        this.postNewMeal(e.target)
        break
      case 'FoodToMeal':
        this.postFoodToMeal(e.target)
        break
      case 'RemoveFoodFromMeal':
        this.removeFoodFromMeal(e.target)
        break
      case 'DeleteMeal':
        this.deleteMeal(e.target)
        break
      case 'DeleteFood':
        this.deleteFood(e.target)
        break
    }
  }

  elmToggleVisibility(e){
    if(e === true || e.target == this){
      $(this).toggleClass('hidden')
    }
  }

  setupBindings(){
    $('#showAddFoodButton')
      .on('click', null, {type: 'Food'}, e => this.showAddForm(e))
    $('#showAddMealButton')
      .on('click', null, {type: 'Meal'}, e => this.showAddForm(e))
    $('#deleteFoodButton')
      .on('click', null, {type: 'DeleteFood'}, e => this.showFoodDeleteForm(e))
  }
}

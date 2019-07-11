export default class Diary {
  constructor(elm){
    this.container = elm
    this.foodList = []
  }

  set useApp(app){
    this.app = app
  }

  reset(){
    $(this.container).empty()
    this.foodList = []
    this.initializeFood()
    this.initializeMeals()
  }

  initializeMeals(mealPromise){
    this.app.getAllMeals().then(meals => {
      meals.forEach(meal => {
        this.appendMeal(meal)
      })
    }).catch(e => {
      console.error(e.error)
    })
  }

  initializeFood(foodPromise){
    this.app.getAllFood().then(foods => {
      this.foodList = foods
    }).catch(e => {
      console.error(e.error)
    })
  }

  appendMeal(meal, target){
    let clone = importTemplate('#mealTemplate')
    $(clone).attr('data-meal-id', meal.id)
    $('.name', clone).html(meal.name)
    let appendedElm = null
    if(target){
      $(target).replaceWith(clone)
      appendedElm = clone
    } else {
      appendedElm = $(clone).appendTo(this.container).get(0)
    }
    if(meal.hasOwnProperty('Food')){
      meal.Food.sort((a,b) => {
        return a.id - b.id
      }).forEach(food => {
        this.appendFood(food, $('ul', appendedElm))
      })
    }
    $('.showAddFoodToMealButton', appendedElm)
      .on('click', null, {type: 'FoodToMeal'}, e => this.app.showAddForm(e))
    $('.deleteMealButton', appendedElm)
      .on('click', null, {type: 'DeleteMeal'}, e => this.app.sendRequest(e))
  }

  appendFood(food, target){
    let clone = importTemplate('#foodTemplate')
    $(clone).attr('data-food-id', food.id)
    $('.name', clone).text(food.name)
    $('.calories', clone).text(food.calories + " cal")
    target.append(clone)
    $('.removeFoodFromMealButton', clone)
      .on('click', null, {type: 'RemoveFoodFromMeal'}, e => this.app.sendRequest(e))
  }
}

function importTemplate(selector){
  let template = $(selector)[0].content
  return document.importNode(template, true).firstElementChild
}

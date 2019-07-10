export default class Diary {
  constructor(elm){
    this.container = elm
    this.foodList = []
  }

  set useApp(app){
    this.app = app
  }

  initializeMeals(mealPromise){
    mealPromise().then(meals => {
      meals.forEach(meal => {
        this.appendMeal(meal)
      })
    })
  }

  initializeFood(foodPromise){
    foodPromise().then(foods => {
      this.foodList = foods
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
    meal.Food.forEach(food => {
      this.appendFood(food, $('ul', appendedElm))
    })
    $('.showAddFoodToMealButton', appendedElm)
      .on('click', null, {type: 'FoodToMeal'}, e => this.app.showAddForm(e))
  }

  appendFood(food, target){
    let clone = importTemplate('#foodTemplate')
    $(clone).attr('data-food-id', food.id)
    $('.name', clone).text(food.name)
    $('.calories', clone).text(food.calories + "cal")
    target.append(clone)
    $('.removeFoodFromMealButton', clone)
      .on('click', null, {type: 'RemoveFoodFromMeal'}, e => this.app.sendRequest(e))
  }
}

function importTemplate(selector){
  let template = $(selector)[0].content
  return document.importNode(template, true).firstElementChild
}

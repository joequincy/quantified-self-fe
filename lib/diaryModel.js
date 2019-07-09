export default class Diary {
  constructor(elm){
    this.container = elm
    this.foodList = []
  }

  initializeMeals(mealPromise){
    mealPromise().then(meals => {
      meals.forEach(meal => {
        this.appendMeal(meal)
      })
    })
  }

  appendMeal(meal){
    let clone = importTemplate('#mealTemplate')
    $(clone.firstElementChild).attr('data-meal-id', meal.id)
    $('.name', clone).html(meal.name)
    $(this.container).append(clone)
    meal.Food.forEach(food => {
      this.appendFood(food, $('ul', this.container.lastElementChild))
    })
  }

  appendFood(food, target){
    let clone = importTemplate('#foodTemplate')
    $(clone.firstElementChild).attr('data-food-id', food.id)
    $('.name', clone).text(food.name)
    $('.calories', clone).text(food.calories + "cal")
    target.append(clone)
  }
}

function importTemplate(selector){
  let template = $(selector)[0].content
  return document.importNode(template, true)
}

import styles from './diary'

function showAddForm(event) {
  let type = event.data.type
  let clone = $(`#additions>#add${type}Form`)
  if(clone.length == 1){
    elmToggleVisibility.call(clone[0], true)
    clone[0][0].focus()
  } else {
    let template = $(`#add${type}FormTemplate`)[0].content
    clone = document.importNode(template, true)
    $(clone).appendTo('#additions')
    let inserted = $(`#additions>#add${type}Form`)
      .submit({type: type}, postResource)
      .click(elmToggleVisibility)
    inserted[0][0].focus()
  }
}

function postNewFood(form){
  // post to api
  // delegate results to handler
  // handler adds Food to local food object
  $(form).remove()
}

function postNewMeal(form){
  // post to api
  // delegate results to handler
  // handler inserts Meal template into diary section
  $(form).remove()
}

function postResource(event){
  event.preventDefault()
  switch(event.data.type){
    case 'Food':
      postNewFood(this)
      break
    case 'Meal':
      postNewMeal(this)
      break
  }
}

function elmToggleVisibility(e){
  if(e === true || e.target == this){
    $(this).toggleClass('hidden')
  }
}

['Food', 'Meal'].forEach(type => {
  $(`#showAdd${type}Button`).on('click', null, {type: type}, showAddForm)
})

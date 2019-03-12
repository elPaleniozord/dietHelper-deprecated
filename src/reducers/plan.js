const mealPlanTemplate = {
  monday: {},
  tuesday: {},
  wednesday: {},
  thursday: {},
  friday: {},
  saturday: {},
  sunday: {}
}

export default (state = mealPlanTemplate, action) => {
  switch (action.type) {
    case 'UPDATE_MEAL_PLAN':
      return action.plan;
    default:
      return state;
  }
}
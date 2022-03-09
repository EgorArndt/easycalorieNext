export enum MealKeys {
  ingredients = 'ingredients',
  labels = 'labels',
  comment = 'comment',
}

const macrosConfig = {
  required: "If the ingredient doesn't have this macronutrient, set it to 0",
  maxLength: {
    value: 3,
    message: 'Up to 3 digits are allowed for macronutrients',
  },
  pattern: {
    value: /^\d+$/,
    message: 'Only digits are allowed',
  },
}

export const ingredientFields = [
  {
    label: 'Ingredient name',
    id: 'ingredientName',
    config: {
      required: 'Ingredient name is required',
      maxLength: {
        value: 10,
        message: 'Up to 10 symbols are allowed for the name',
      },
    },
  },
  { label: 'Carbs', id: 'carbs', config: macrosConfig },
  { label: 'Protein', id: 'protein', config: macrosConfig },
  { label: 'Fat', id: 'fat', config: macrosConfig },
  {
    label: 'Calories',
    id: 'calories',
    config: {
      ...macrosConfig,
      maxLength: {
        value: 4,
        message: 'Up to 4 symbols are allowed for calories',
      },
    },
  },
]

export const labelFields = [{ label: 'Custom identifiers', id: 'labels' }]

import type { Meal } from '@lib/models'

export type Ingredient = {
  ingredientName: string
  carbs: string
  protein: string
  fat: string
  calories: string
  quantity: string
}
export type Labels = { labels: string }
export type Comment = { comment: string }

export type UnformattedMealDataSlice = Ingredient | Labels | Comment
export type FormattedFullMealData = Pick<
  Meal,
  'ingredients' | 'labels' | 'comment'
>

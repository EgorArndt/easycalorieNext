const homePage = '/'
export const dashboard = '/dashboard'

export const routes = {
  homePage,
  dashboard: {
    myMeals: `${dashboard}/my_meals`,
    myPlans: `${dashboard}/my_plans`,
    recentlyModified: `${dashboard}/recently_modified`,
    recentlyDeleted: `${dashboard}/recently_deleted`,
  },
}

import { RecipeShoppingListAppPage } from './app.po';

describe('recipe-shopping-list-app App', () => {
  let page: RecipeShoppingListAppPage;

  beforeEach(() => {
    page = new RecipeShoppingListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

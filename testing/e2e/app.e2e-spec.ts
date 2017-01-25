import { TestingPage } from './app.po';

describe('testing App', function() {
  let page: TestingPage;

  beforeEach(() => {
    page = new TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

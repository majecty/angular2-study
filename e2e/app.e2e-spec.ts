import { AngularhelloPage } from './app.po';

describe('angularhello App', function() {
  let page: AngularhelloPage;

  beforeEach(() => {
    page = new AngularhelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { BhargavDirectoryPage } from './app.po';

describe('bhargav-directory App', function() {
  let page: BhargavDirectoryPage;

  beforeEach(() => {
    page = new BhargavDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

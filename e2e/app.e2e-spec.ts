import { WebServiceTestPage } from './app.po';

describe('web-service-test App', () => {
  let page: WebServiceTestPage;

  beforeEach(() => {
    page = new WebServiceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

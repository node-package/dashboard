import { NgTestProjectBeta10Page } from './app.po';

describe('ng-test-project-beta-10 App', function() {
  let page: NgTestProjectBeta10Page;

  beforeEach(() => {
    page = new NgTestProjectBeta10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import main from 'main';

describe('main unit tests', () => {
  it('should say hello', () => {
    expect(main.sayHello()).toReturn('Hello world !');
  });
});

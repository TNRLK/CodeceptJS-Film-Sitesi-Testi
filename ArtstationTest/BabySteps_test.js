Feature('BabySteps');

Scenario('test something', ({ I }) => {
I.amOnPage('http://google.com');
I.fillField('//input[@name="q"]','Fullhdfilmizlesene');
I.wait(1);
I.click('//input[@name="btnK"]');
I.wait(2);
I.click('//a[@href="https://www.fullhdfilmizlesene.pw/"]');
I.wait(1);
I.click('//a[@href="https://www.fullhdfilmizlesene.pw/film-serileri"]');
I.wait(1);
I.click('//a[@href="https://www.fullhdfilmizlesene.pw/film-serileri/2"]');
I.wait(3);
I.click('/html/body/div/div/main//ul/li[4]');
I.wait(3);
I.click('//a[@href="https://www.fullhdfilmizlesene.pw/film/yuzuklerin-efendisi-yuzuk-kardesligi-izle/"]');
I.wait(5);
I.switchTo('iframe');
I.click('//div[@class="jw-icon jw-icon-display jw-button-color jw-reset"]');
I.wait(1);
I.click('//div[@class="jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-fullscreen"]');
I.wait(1);
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.pressKey('ArrowRight');
I.wait(1);
I.click('//div[@class="jw-icon jw-icon-inline jw-button-color jw-reset jw-icon-playback"]');
pause();


});

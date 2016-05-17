import test from 'ava';
import fs from 'fs';
import {jsdom} from 'jsdom';

test.before(t => {
  const indexHtml = fs.readFileSync('./index.html');
  const document = jsdom(indexHtml).defaultView.document;
  const indexBody = document.getElementsByTagName('body')[0].innerHTML;
  // set body html
  global.window.document.getElementsByTagName('body')[0].innerHTML = indexBody;
});
test.after(t => {
  global.document = jsdom('<body></body');
});

test('page should render widgets', t => {
  require('./index.js');
  const bodyContent = global.window.document.getElementsByTagName('body')[0].innerHTML;
  t.true(bodyContent.includes('id="hello-world-widget"'));
});


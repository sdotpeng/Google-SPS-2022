// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
    ['I can cook fried rice in more than 50 ways', 'I love reading cookbook, history, and detective fictions', 'My favorite programming language is Python', 'I won national prize for youth swimming.'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}


function requestTranslation() {
  const languageCode = document.getElementById('language').value;

  const waitMessage = document.getElementById('waitMessage');
  waitMessage.innerText = 'Loading...';

  // build a loop for all element with classname "translation"
  const translationContainer = document.getElementsByClassName('requireTranslation');
  for (let i = 0; i < translationContainer.length; i++) {
    originalText = translationContainer[i].innerText;

    const params = new URLSearchParams();
    params.append('originalText', originalText);
    params.append('languageCode', languageCode);

    fetch('/translate', {
      method: 'POST',
      body: params
    }).then(response => response.text())
      .then((translatedMessage) => {;
        translationContainer[i].innerText = translatedMessage;
      });
  }

  waitMessage.innerText = 'aa';
}
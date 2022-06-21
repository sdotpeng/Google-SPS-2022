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
  const aboutme = "My name is Siyuan, and I also go by Ricky or Rickesh (got it from my south asian friends). I am a rising junior double majoring in Computer Science and Mathematics at Colby College, Maine. Since I started programming in Pascal during middle school, I have found my passion in building and tinkering things with various technologies. I have been doing Eye Tracking in Programming and Biometrics research for the past two years, and I have some professional experience in Product Management and User Experience design. Recently in Google SPS, I started to learn web programming in Java. It is something that I always wanted to learn, and I want to master it in this summer.";
  const languageCode = document.getElementById('language').value;

  const resultContainer = document.getElementById('translation');
  resultContainer.innerText = 'Loading...';


  const params = new URLSearchParams();
  params.append('text', aboutme);
  params.append('languageCode', languageCode);

  fetch('/translate', {
    method: 'POST',
    body: params
  }).then(response => response.text())
    .then((translatedMessage) => {
      resultContainer.innerText = translatedMessage;
    });
}
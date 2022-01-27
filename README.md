# Javascript Code Quiz

## Description:

The Code Quiz is an application which tests the user's Javascript knowledge. It displays a series of questions and has a set time limit. Based on the answers the user chooses the score is calculated and displayed at the end of the quiz. The application also showcases a Highscores page that displays all the scores of previous rounds of play.

## Application screenshots:

Main Page
|--------|
![image](https://user-images.githubusercontent.com/65467469/151289177-24a7f70b-8690-4ac2-aeea-7cdf7ff0cafa.png)

Quiz question page | Quiz score page
----|----
![image](https://user-images.githubusercontent.com/65467469/151289458-119df32a-636a-4af3-b149-e5738e38320b.png) | ![image](https://user-images.githubusercontent.com/65467469/151289747-0b1588a0-5cfd-4605-b05d-7bbf1cba5547.png)

Highscores page
|--------|
![image](https://user-images.githubusercontent.com/65467469/151290057-50cd6029-fa60-4b03-8952-a6950b34fac8.png)

## Built using:
This application is built using :
* HTML
* CSS
* Javascript
* Web API's

## How it works:
* Open the Javascript Code Quiz application.
* Click on the button 'Start Quiz'.
  * The page with one quiz question and 4 answer choices is launched.
  * The timer is set at 75 secs.
* Click on one out of the 4 answers displayed.
  * The result based on the answer selected is displayed - "correct" or "wrong"
  * If the answer selected is wrong then 10 secs are deducted from the timer.
  * Next question is displayed.
* If user answers all questions within the time limit or if the timer ends before all questions are answered.
   * The score is displayed.
   * User is asked to input initials.
   * The score and user initials are stored.
* All previous scores are displayed on the high scores page.
* Click on the button "Go Back" 
  * The main page is launched again.
* Click on the button "Clear Highscores"
  * The previous records of players are cleared.

Deployed application URL : https://pdhende.github.io/code-quiz/

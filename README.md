# Challenge problem

In this challenge you’ll help Wise to build a new feature to support our customers living
international lives. We’d like you to focus on one of our key audiences:
1. people travelling to a new country
2. people relocating and living in a new country

You can pick 1 (or more) of the problems this audience faces, and build a prototype for a
solution. The only requisite is that it MUST make international lives easier.

# Our solution
All of you who have ever made a money exchange felt the struggle when you saw the conversion rate between the currencies gone a few points lower. Ithink you know the feeling when you realize that if you could just wait a few hours you could have more monely in your pocket right now.

__What if say there is a solution for this problem?__

Let's imagine yourself in a foreign country ( if you aren't already in one : ). You have some money in your bank account at home with the only currency what you have ever spent and you still receive your salary there. But you have to pay your rent every month in this country in local currency or you came here just for a week for a nice holiday and you had to exchange a lot of money before departure to cover Pinatas at the beach.
__When will you start the exchange process? Today? On Sunday after lunch?__

We have a *Plan for you*! This is what we call __Smart Exchange__ on Wise.
Yes, I know now days event the toilet seat can be smart. Trust us this is supported by the same technology with what people earn dollar millions every day.

__Is this some kind of dark magic?__
These are called __Broker Algorithms__. So the only thing what you need to know for it is _math_. (Ok it is maybe dark magic, but we have learned these tricks form the best ones). These algorithms as the name tells us can help or even make decisions instead of human brokers.

Now you can ask: Why? I don't want to risk my money on the stock market.
We nether. We just stole some ideas from there. Try to imagine your exchange target as a stock. When do you want to buy stocks? When it is the cheapest. Just like currencies. So we told this story to our algorithms that there is a new type of stock what we want to buy and we need help. As our research and test told us this is working and let us find the best time to buy.

At this point I hope you are curious enough about our concrete solution. You are really close, keep reading. It's worth your time.

### How does it work?
We assume if you are abroad without a local bank account and you make money exchange frequently you already have a Wise account with the right currency balance accounts. We also think you have already used the _borderless transfer_ option. Otherwise go to wise.com, register and start using it _inmediately_! _(They are the good guys when it's about money exchange)_  
The borderless transfer lets you exchange your own money between your currencies almost instantly with the actual rate. This is a working solution and we don't want to touch it. Our team tries to offer you an alternative way to do it. 
If you know you will pay the rent on the 10th day of the month every month or you know you will go abroad in three months and you need a bigger amount of money in exchange we offer something even better. Do not wait until the last day to convert your money because the rate could be way higher on that day than today. There are some people who check on their phone if it is the right time to do it and at the end they are stressed about it to have the right decision. 
Don't do it please. Go to the new Wise website, set up a smart exchange and have some reat in your favourite chair. We can cover you.

With the Broker algorithms we can monitor and with a good accuracy we can predict the rate trends. This way we can tell when it is the best time to take action. The system also triggers the transaction automatically based on your settings so the money will be there at the requested time.
On the configuration site you can select if it's a recurring or a one time conversion. 

#### One time  exchange
This is the perfect fit for you if you are doing higher volume conversions and you do not necessarily need it immediately. This can be a good fit for a holiday preparation, buy something what you have saved for months (Like a Lego Millenium Falcon 75257) or you just send money this time in another currency. 
In this option you can select the Due Date when you need the money and the amount in the target currency. The money will be there at that time, but the algorithm will decide when the transaction triggers. 
You have 2 options here:
- You are confident that the rate will be under a fix threshold or you are a strict person who will not convert over a given price. In this case you can set a limit manually and if any time the actual exchange rate goes under that limit your order will be executed immediately.
- The second option is the smart part. In this option you trust us that we will find the local optimum of the exchange. But you have some advanced options if you want to fine tune it a bit. We offer 3 combined algorithms to select from. 

### Recurring exchange
This is the best fit for you if you already have recurring transactions set up in the Wise system, but you want to make the exchange even more affordable. The only difference between this and the one time smart exchange is the long term periodical running. So there is a possibility to have multiple cheaper transactions.
If you want you can set up a fix period end date or leave it to run until you have money on your account.

## Customer benefits
__Why do a customer want to use it?__
It's an easy question: Wise give them what they need. They are getting one more way to avoid fees to pay to use their money as they want. Wise is a fun company. They are doig it because they have clear goals and the customers can feel this mentality.

__Why do Wise want to implement is?__
The industry competitors do not offer this solution to anyone. They are doing it in-house, because this is the only way to avoid unnecessary fees insider transactions. Why don't Wise offer it first? There is risk in it. What if customers don't understand it or get confused by the setup? Honestly we don't know, but as we tried to validate the idea with other possible users we got mostly positive feedback to it. 

... and honestly who doesn't want to have some free chocolate money because of the better exchange rates? 🍫

# Technical information
Used technologies:
- Java Spring Boot - Backend
- React.js - Frontend
- Google Cloud - Server
- MongoDB - Database
- Docker
- Docker compose
Other
- Chart.js
- Wise sandbox api
- jsregression

## How to install
We can't guarantee that everything will work at the first try, but we have created a docker image that we have tested on our computers and on the server. (Win 10, PopOs 21.04, MacOS 12, Ubuntu 20.04) 
__Warning: We do not take responsibility to hurt your feelings with the coding style or with the code quality!__ 

Requested apps: Docker, Docker-Compose: https://docs.docker.com/engine/install/ubuntu/
```bash
docker-compose up
```

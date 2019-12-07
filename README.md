# Team firefighter

Kin - Maria - Nikke - Pat

![](https://media.giphy.com/media/VZ5gRT17YNkn6/giphy.gif)

---

## The fastest brain-storming ever! 

![](https://i.imgur.com/svorqsn.jpg)

We just decided to run with our 2nd idea. 

And were really happy with it! 

* life span based on your life choices
* you'd either increase or decrease your lifespan


---


## User story sketches

![](https://i.imgur.com/0BgrsYG.jpg)

---

## Architecture sketch

![](https://i.imgur.com/2BhgfsG.jpg)

We made a quick sketch to make sure that every member of our team understood how information would flow through our project as well as being a brief overview of how our rough file architecture might be laid out. 

---

## Project architecture

![](https://i.imgur.com/LW7XZrV.png)

---

### Examples of what our database would have captured

##### GOOD vs BAD life choices 


![](https://i.imgur.com/5OznWjm.jpg)

---

## Our database schemas:

![](https://i.imgur.com/HLx5W1p.png)

---

### Then at noon on Thurs 5th Dec...

... we changed our minds...

![](https://media.giphy.com/media/48M4FVK5UeRNglWAyk/giphy.gif)

### WHY?

The database schemas ended up being more difficult than we initially thought and wasn't ideal for fulfilling the project criteria. So we had to rethink our great idea.

And decided to go with our initial FAC Fruit Basket idea which would better fill the project requirements of retrieving data from a database.  Still a good idea!

---

## User stories

- As a user, I want to buy virtual fruit with virtual money
- As a user, I want to see the fruit basket items and stock
- As a user, I want to see the shop's items and stock
- As a user, I want to be able to view my personal details on the website

---

## Our actual database schema

![](https://i.imgur.com/raj2bAE.png)

---

## Architecture 2.0

![](https://i.imgur.com/EhgN3oG.jpg)

---

### Things we have achieved

- deployed database to heroku 
- great CSS! - 404 fun
- user knows they've logged in!
- user data has been sent to database
- database returns data
- tests! 
- we did a helluva lot of learning! Esp debugging!

---

## Accessibility

![](https://i.imgur.com/ROynGML.jpg)

---

### ERROR DEBUGGING

![](https://media.giphy.com/media/1xOQlQxrIX4Jw6lBZI/giphy.gif)

---

### We kept recieving this error code:

![](https://i.imgur.com/Murb0Bo.png)

So we traced the bug back to our db_connections file.

### CAN YOU SPOT IT?

``` javascript=
const params = url.parse(process.env.DB_URL);
// const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/"[1]), 
  max: process.env.DB_MAX_CONNECTIONS || 2,
  // user: username,
  // password: password,
  ssl: params.hostname !== "localhost"
};
```

#### Correct:

![](https://i.imgur.com/Uq3eMuS.png)

#### Incorrect:

![](https://i.imgur.com/cH2NHtW.png)


### So this also means:

![](https://i.imgur.com/Mch41hZ.png)


---

### User/password


``` javascript=
const params = url.parse(process.env.DB_URL);
// const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/"[1]), 
  max: process.env.DB_MAX_CONNECTIONS || 2,
  // user: username,
  // password: password,
  ssl: params.hostname !== "localhost"
};
```

https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
![](https://i.imgur.com/wVTPuSc.png)

![](https://i.imgur.com/Pc1NAw1.png)


![](https://i.imgur.com/kEc1hSp.png)

---

## Things to add

- more tests
- check and retrieve existing user information from database
- login/authentication
- host on heroku
- update database with user input
- update stock data with purchases
- deduct from kitty our purchases

---

![sgc](https://user-images.githubusercontent.com/51528685/70372950-87003c00-18dd-11ea-9604-3ac98da9b39d.jpg)


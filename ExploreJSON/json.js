const person = {
    name: {
      common: "John",
      fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
      street: "13/A St Joseph",
      house: 10,
    },
  };

  const stringifiedJson = JSON.stringify(person); /* এখানে person object কে JSON এ রুপান্তরিত করা হয়েছে। */
  /* Output: {"name":{"common":"John","fullName":["John","Doe"]},"age":32,"isMale":false,"address":{"street":"13/A St Joseph","house":10}} */
  // console.log(stringifiedJson);

  const parsedJson = JSON.parse(stringifiedJson);/*এখানে JSON কে আবার object এ রুপান্তরিত করা হয়েছে।*/
  // console.log(parsedJson);
  
  // Destructure objects
  const {name, age, isMale, address} = parsedJson; /* parsedJson কে Destructure করা হয়েছে */
  // console.log(name)
  const {common , fullName} = name; /* parsedJson এর ভিতরের name object কে Destructure করা হয়েছে */
  
  
  // Select the container
  const personContainer = document.getElementById("person-container");
  // Insert HTML
  personContainer.innerHTML=`
    <h2>Common Name:${common} </h2>
    <h3>Full name: ${fullName[0]} ${fullName[1]}</h3>
    <h3>Full name: ${fullName.join(" ")}</h3>
    <p>Age : ${age}</p>
    <p>Gender: ${isMale===true ? "Male" : "Female"}</p>
  `
let array = [];

class LoginPerson {
  constructor(email, password) {
    this.Email = email;
    this.Password = password;
  }
  get Email() {
    return this.email;
  }
  set Email(a) {
    if (a.indexOf("@") > 0) {
      this.email = a;
    }
  }
  get Password() {
    return this.password;
  }
  set Password(a) {
    if (a.length > 4 && a.length < 20) {
      this.password = a;
    }
  }
}

class Person extends LoginPerson {
  constructor(name, email, password) {
    super(email, password);
    this.Name = name;
  }
  get Email() {
    return this.email;
  }
  set Email(a) {
    if (a.indexOf("@") > 0) {
      this.email = a;
    }
  }
  get Password() {
    return this.password;
  }
  set Password(a) {
    if (a.length > 4 && a.length < 20) {
      this.password = a;
    } else {
      $("password").value = "";
      $("password").placeholder = "Min 4, Max 20 olmalidir";
      $("rePassword").value = "";
      $("rePassword").placeholder = "Min 4, Max 20 olmalidir";
    }
  }
  get Name() {
    return this.name;
  }
  set Name(a) {
    this.name = a;
  }
}

function $(id) {
  return document.getElementById(id);
}
function AddRegister() {
  if ($("rePassword").value == $("password").value) {
    let person = new Person(
      $("name").value,
      $("email").value,
      $("password").value
    );
    if (
      person.name != null &&
      person.email != null &&
      person.password != null
    ) {
      array.push(person);
      console.log(array);
      $("name").value = "";
      $("email").value = "";
      $("password").value = "";
      $("rePassword").value = "";
    }
  } else {
    alert("password is incorrect");
  }
}
function AddLogin() {
  let a = false;
  var user = null;
  for (let k of array) {
    if (
      k.email == $("loginEmail").value &&
      k.password == $("loginPassword").value
    ) {
      a = true;
      user = k;
    }
  }
  if (a) {
    localStorage.User = JSON.stringify(user);
    location.href = "partSecond.html";
  } else {
    alert("Email ve ya Parol yanlisdir!!!");
  }
}

let array2 = [];

class Products {
  constructor(name, model, price, color) {
    this.Name = name;
    this.Model = model;
    this.Price = price;
    this.Color = color;
  }
  get Name() {
    return this.name;
  }
  set Name(a) {
    if (a != "") {
      this.name = a;
    } else {
      $("name").value = "";
      $("name").placeholder = "bir sey yaz";
    }
  }
  get Model() {
    return this.model;
  }
  set Model(a) {
    if (a != "") {
      this.model = a;
    } else {
      $("model").value = "";
      $("model").placeholder = "bir sey yaz";
    }
  }
  get Price() {
    return this.price;
  }
  set Price(a) {
    if (a != "") {
      this.price = a;
    } else {
      $("price").value = "";
      $("price").placeholder = "bir sey yaz";
    }
  }
  get Color() {
    return this.color;
  }
  set Color(a) {
    if (a != "") {
      this.color = a;
    } else {
      $("color").value = "";
      $("color").placeholder = "bir sey yaz";
    }
  }
}

let pd1 = new Products("Mac", "3324wewDS", 767, "silver");
let pd2 = new Products("ACER", "332er4DS", 324, "red");
let pd3 = new Products("SAMSUNG", "3we324DS", 532, "black");
let pd4 = new Products("ASUS", "332wewe4DS", 454, "white");

array2.push(pd1, pd2, pd3, pd4);

let prod = null;

function Create() {
  if (localStorage.pro != undefined) {
    prod = JSON.parse(localStorage.pro);
    for (let item of prod) {
      let newProduct = new Products(
        item.name,
        item.model,
        item.price,
        item.color
      );
      array2.push(newProduct);
    }
  }
  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  for (let i of array2) {
    let t = document.createElement("div");
    t.className = "flex";
    container.appendChild(t);
    let p = document.createElement("p");
    p.className = "p";
    p.innerText ="Name: " + i.name;
    t.appendChild(p);
    let p2 = document.createElement("p");
    p2.className = "p";
    p2.innerText = "Model: " + i.model;
    t.appendChild(p2);
    let p3 = document.createElement("p");
    p3.className = "p";
    p3.innerText = "Price: " + i.price;
    t.appendChild(p3);
    let p4 = document.createElement("p");
    p4.className = "p";
    p4.innerText ="Color: " + i.color;
    t.appendChild(p4);
  }
  let button = document.createElement("button");
    button.className = "btn";
    button.innerText = "ELAVE ET";
    container.appendChild(button);
    button.onclick = function() {
    document.location.href = "partThird.html";
  };
}

array3 = [];
if (localStorage.pro != undefined) {
  let h = JSON.parse(localStorage.pro);
  array3 = h;
}

function GO() {
  let products = new Products(
    $("name").value,
    $("model").value,
    $("price").value,
    $("color").value
  );
  if (
    products.name != undefined &&
    products.model != undefined &&
    products.price != undefined &&
    products.price != undefined
  ) {
    array3.push(products);
    localStorage.pro = JSON.stringify(array3);
    document.location.href = "partSecond.html";
  }
}

function goBack() {
  delete localStorage.User;
  document.location.href = "index.html";
}

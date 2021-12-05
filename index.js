    // first four code-alongs

    // Intro to the DOM

// window.innerHeight;
// document.URL;
// document.querySelector("h1");

    // changing the DOM with DevTools and JavaScript

// document.querySelector('h1')
// document.querySelector('h1').remove();
// const header = document.querySelector('h1');

    // The DOM is a tree

// document.querySelector(selector);
// const elements = document.getElementsByClassName("yourClassNameHere");
// const main = document.getElementsByTagName("main")[0];
// const secondChild = main.children[1];
// const p = secondChild.getElementsByTagName("p")[0];
// p.textContent = "Goodbye!";

    // Javascript querySelector methods

{/* <body>
  <div>
    <ul class="ranked-list">
      <li>1</li>
      <li>
        <div>
          <ul>
            <li>2</li>
          </ul>
        </div>
      </li>
      <li>3</li>
    </ul>
  </div>

  <div>
    <ul class="unranked-list">
      <li>6</li>
      <li>2</li>
      <li>
        <div>4</div>
      </li>
    </ul>
  </div>
</body> */}

// const li2 = document.querySelector("ul.ranked-list li ul li");
// li2;
//const div4 = document.querySelector("ul.unranked-list li div");
//div4;

{/* <body>
  <main id="app">
    <ul class="ranked-list">
      <li>1</li>
      <li>2</li>
    </ul>

    <ul class="ranked-list">
      <li>10</li>
      <li>11</li>
    </ul>
  </main>
</body> */}

// document.getElementById("app").querySelectorAll("ul.ranked-list li");



// const element = document.createElement('div')
// document.body.append(element);

// const createUl = document.createElement('ul')
// for(let i = 0; i < 3; i++) {
//     const li = document.createElement('li')
//     li.textContent = (i + 1).toString()
//     createUl.append(li)
// }

// element.append(createUl)

// const main = document.getElementById("main")
// main.innerHTML =
//     `<h1>Poodles!</h1>
//     <h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3>
//     <p><em>By: Byron Q. Poodle, Esq., BA.</em></p>`

// const main = document.getElementById('main')
// main.style.height = '300px'
// main.style.backgroundColor = '#27647b'
// main.textContent = 'You\'ve changed what\'s on the screen!'
// main.style.fontSize = '24px'
// main.style.marginLeft = '30px'
// main.style.lineHeight = 2
// main.className = "pet-listing dog"
// main.classList.remove("dog")
// main.classList.add("cat", "sale")

// someElement.removeChild(someChildElement) // example, but it messes things up because someElement isnt defined

// const ul = document.getElementsByTagName("ul")[0];
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// ul.remove()





    // lab

main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Joe is the champion'
















































// const main = document.querySelector('main#main')
// main.remove()

// const newHeader = document.createElement('h1')
// newHeader.id = 'victory'
// newHeader.textContent = 'Joe is the champion'
// body.append(newHeader)





// // // Write your code here!

// // main.remove();

// // const newHeader = document.createElement('h1');

// // newHeader.setAttribute('id', 'victory');

// // newHeader.textContent = 'Joe is the champion';

// // document.body.append('h1');



// // const element = document.createElement('div');

// // document.body.append(element)

// // const ul = document.createElement('ul');

// // for (let i= 0; i< 3; i++) {
// //     const li = document.createElement('li');
// //     li.textContent = (i + 1).toString();
// //     ul.append(li)
// // }

// // element.append(ul);

// // const main = document.getElementById('main')
// // main.innerHTML = `
// //     <h3>
// //         An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective
// //     </h3>
// //     <p>
// //         <em>By: Byron Q. Poodle, Esq., BA.</em>
// //     </p>
// // `

// // body.append(main)



// main.remove('#main')

// const newHeader = document.createElement('h1')
// newHeader.setAttribute('id', 'victory')
// newHeader.textContent = "Joe is the champion"

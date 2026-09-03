// FRONT-END (CLIENT) JAVASCRIPT HERE
let ul = null
const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()

  // const form = document.querySelector('#myForm')  

  const name = document.querySelector( '#yourname' )
  const type = document.querySelector('#assignmenttype')
  const grade = document.querySelector('#gradeletter')
  const comment = document.querySelector('#cmts')
        json = { yourname: name.value,
                assignmenttype: type.value,
                gradeletter: grade.value,
                cmts: comment.value
        },
        body = JSON.stringify( json )

  const response = await fetch( '/submit', {
    method:'POST',
    body 
  })

  const arr = await response.json()
  ul.innerHTML = ''
  for (let item of arr){
    const li = document.createElement('li')
    li.innerHTML = `<span class="listlabel">Name:</span> <span class="values">${item.yourname}</span><br>
                <span class="listlabel">Assignment Type:</span> <span class="values">${item.assignmenttype}</span><br>
                <span class="listlabel">Grade:</span> <span class="values">${item.gradeletter}</span><br>
                <span class="listlabel">Comments:</span> <span class="values">${item.cmts}</span><br>
                <span class="listlabel">GPA:</span> <span class="values">${item.GPA}</span>`;

    // li.innerText += "Name: " + item.yourname
    // li.innerText += " Assignment Type: " + item.assignmenttype
    // li.innerText += " Grade: " + item.gradeletter
    // li.innerText += " Comments: " + item.cmts
    // li.innerText += " GPA: " + item.GPA
    ul.appendChild(li)
  }
  console.log(arr)
  
}

window.onload = function() {
  const button = document.querySelector('button')
  button.onclick = submit
  ul = document.createElement('ul')
  document.body.appendChild(ul)
}

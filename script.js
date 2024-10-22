let val=document.getElementById("num-ip");
let val2=document.getElementById("num2-ip");
creatDiv();
function creatDiv(){

   let ls=localStorage.getItem('todo');
   let todo=ls?JSON.parse(ls):[];

    let value=document.getElementById("userIp").value;
    let mainContainer = document.getElementById("parentDiv2");
    document.getElementById("userIp").value="";
    mainContainer.replaceChildren();
    if(value!==''){
      console.log("value "+value);
    todo.push(value);
    localStorage.setItem('todo',JSON.stringify(todo));
    }
    // Create a new paragraph
    todo.map((data,index)=>{
      console.log("data is "+data);

      // Create a new div
    const newDiv = document.createElement('div');
    newDiv.className = 'container mb-2';  // Add class to style the div
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.gap="22px";
    newDiv.style.backgroundColor="aquamarine";

      const newParagraph = document.createElement('p');
      newParagraph.textContent = data;
      newParagraph.style.width="18vw";
      newParagraph.style.textAlign="center";
      newParagraph.style.marginTop="8px";
      newDiv.appendChild(newParagraph);

       // Create a new button
    const newButton = document.createElement('button');
    newButton.textContent = '-';
    newButton.className="btn btn-primary mt-2";
    newButton.innerHTML = '<i class="bi bi-dash-circle"></i>'; 
    newButton.style.height="27px";

    const editButton = document.createElement('button');
    editButton.className="btn btn-primary mt-2";
    editButton.innerHTML = '<i class="bi bi-pencil-square"></i>'; 
    editButton.style.height="27px";
    // Append the paragraph and button to the div

  // Attach click event to the button
    newButton.addEventListener('click', function() {
        // Remove the parent div of this button
        mainContainer.removeChild(newDiv);
        let tempDiv = document.createElement('div');
        // Set the innerHTML of the temporary element to newDiv's innerHTML
        tempDiv.innerHTML = newDiv.innerHTML;
        // Now you can use querySelector to get the <p> tag inside the temporary element
        let text = tempDiv.querySelector('p').innerText;
        // Log the text to the console
        console.log("text "+text);
       
        let todo = JSON.parse(localStorage.getItem('todo')) || [];

        // Step 2: Remove the item with value 'jkhk' (or any other value you want to delete)
        todo = todo.filter(item => item !== text);

        // Step 3: Save the updated array back to local storage
        localStorage.setItem('todo', JSON.stringify(todo));
      //  localStorage.removeItem(todo);
    });
    editButton.addEventListener('click', function() {
      // Remove the parent div of this button
      mainContainer.removeChild(newDiv);
  });

   
    newDiv.appendChild(newButton);
   // newDiv.appendChild(editButton);
    // Append the new div to the main container
   
    mainContainer.appendChild(newDiv);
    })
   
   

   
   

}

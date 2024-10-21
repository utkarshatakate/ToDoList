let val=document.getElementById("num-ip");
let val2=document.getElementById("num2-ip");

function creatDiv(){
    let value=document.getElementById("userIp").value;
    let mainContainer = document.getElementById("parentDiv");
    document.getElementById("userIp").value="";
    // Create a new div
    const newDiv = document.createElement('div');
    newDiv.className = 'container mb-2';  // Add class to style the div
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.gap="22px";
    newDiv.style.backgroundColor="aquamarine";
    // Create a new paragraph
    const newParagraph = document.createElement('p');
    newParagraph.textContent = value;
    newParagraph.style.width="18vw";
    newParagraph.style.textAlign="center";
    newParagraph.style.marginTop="8px";
    // Create a new button
    const newButton = document.createElement('button');
    newButton.textContent = '-';
    newButton.className="btn btn-primary mt-2";
    newButton.innerHTML = '<i class="bi bi-dash-circle"></i>'; 
    newButton.style.height="27px";
    // Append the paragraph and button to the div

  // Attach click event to the button
    newButton.addEventListener('click', function() {
        // Remove the parent div of this button
        mainContainer.removeChild(newDiv);
    });

    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newButton);

    // Append the new div to the main container
    mainContainer.appendChild(newDiv);

}

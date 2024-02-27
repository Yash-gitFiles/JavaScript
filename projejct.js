function addTask() {
  const taskInput = document.getElementById("taskInput").value;
  const taskDescInput = document.getElementById("taskDescInput").value;
  const cardContainer = document.getElementById("cardContainer");

  // create a div
  const card = document.createElement("div");
  card.className = "card";

  // create a title
  const title = document.createElement("h4");
  const titleTextNode = document.createTextNode(taskInput);
  title.appendChild(titleTextNode);

  // create a description
  const descText = document.createElement("p");
  const descTextNode = document.createTextNode(taskDescInput);
  descText.appendChild(descTextNode);

  // delete button create.
  const deleteBtn = document.createElement("button");
  const btnTextNode = document.createTextNode("Delete");
  deleteBtn.appendChild(btnTextNode);

  deleteBtn.onclick = () => {
    cardContainer.removeChild(card);
  };

  // task completed button.
  const taskCompltedBtn = document.createElement("button");
  const taskCompltedBtnTextNode = document.createTextNode("Completed");
  taskCompltedBtn.appendChild(taskCompltedBtnTextNode);

  // card list
  card.appendChild(title);
  card.appendChild(descText);
  card.appendChild(deleteBtn);
  card.appendChild(taskCompltedBtn);
  //   card.appendChild(createComplted);
  // card.appendChild(createComplted.appendChild(createCompltedTextNode));

  taskCompltedBtn.onclick = () => {
    // cardContainer.removeChild(card);
    const createComplted = document.createElement("h3");
    const createCompltedTextNode = document.createTextNode("Task Complted");
    console.log(createComplted.appendChild(createCompltedTextNode));
  };

  cardContainer.appendChild(card);
}

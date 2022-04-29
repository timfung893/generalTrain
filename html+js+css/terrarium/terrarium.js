dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos1 = e.clientX;
    pos2 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos3 = pos1 - e.clientX;
    pos4 = pos2 - e.clientY;
    pos1 = e.clientX;
    pos2 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);

    terrariumElement.style.top = terrariumElement.offsetTop - pos4 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos3 + "px";
  }

  function stopElementDrag() {
    document.onpointermove = null;
    document.onpointerup = null;
  }
}

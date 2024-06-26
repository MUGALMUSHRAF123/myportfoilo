document.addEventListener('DOMContentLoaded', () => {
    const drag1 = document.getElementById('drag1');
    const drag2 = document.getElementById('drag2');
    const dropzone = document.getElementById('dropzone');
    const draggableContainer = document.getElementById('draggable-container');
  
    const main = [drag1, drag2];
  
    main.forEach(draggable => {
      draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
          e.target.style.display = 'none';
        }, 0);
      });
  
      draggable.addEventListener('dragend', (e) => {
        e.target.style.display = 'block';
      });
    });
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (e, container) => {
      e.preventDefault();
      const id = e.dataTransfer.getData('text');
      const draggableElement = document.getElementById(id);
      container.appendChild(draggableElement);
      alert('Successful');
    };
  
    dropzone.addEventListener('dragover', handleDragOver);
    dropzone.addEventListener('drop', (e) => handleDrop(e, dropzone));
  
    draggableContainer.addEventListener('dragover', handleDragOver);
    draggableContainer.addEventListener('drop', (e) => handleDrop(e, draggableContainer));
  });
  
const DragAndDrop = () => {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell');

    const dragStart = function () {
        setTimeout(() => {
        this.classList.add('hide');
        }, 0)
    };
    const dragEnd = function () {
        this.classList.remove('hide');
    };
    const dragOver = function (evt) {
        evt.preventDefault();
    };
    const dragEnter = function (evt) {
        evt.preventDefault();
        this.classList.add('hovered');
    };
    const dragLeave = function () {
        this.classList.remove('hovered');
    };
    const dragDrop = function () {
        this.append(card)
    };
    
    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });

    cells.addEventListener('dragstart', dragStart);
    cells.addEventListener('dragend', dragEnd);


};
DragAndDrop()
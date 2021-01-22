const tabItems = document.querySelectorAll('.tab_item');
const tabContentItems = document.querySelectorAll('.tab_content_item');

function selectItem() {
    removeBorder();
    removeShow();
    this.classList.add('tab_border');
    const tabContentItems = document.querySelector(`#${this.id}_content`);
    tabContentItems.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab_border'));
}

funtion removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
import { Activity } from "../models/Activity.js";
let acTivity = new Activity();
let arrTask = [];
document.getElementById('addItem').onclick = function () {
    let newTask = document.getElementById('newTask').value;
    arrTask.push(newTask);
    acTivity.renderTable('todo', arrTask);
    alert('Đã thêm thành công task này')

}
let arrNew = []
window.delAct = (value) => {
    acTivity.deleteAct(value, arrTask);
    acTivity.renderTable('todo', arrTask);

    alert('Đã xóa thành công task này')
}

window.complete = (value) => {
    acTivity.gettInfo(value, arrTask, arrNew);
    acTivity.renderComplete('completed', arrNew);
    acTivity.deleteAct(value, arrTask);
    acTivity.renderTable('todo', arrTask);
    alert('Đã thực hiện thành công task này')
}
window.delActForever = (value) => {
    acTivity.deleteForever(value, arrNew);
    acTivity.renderComplete('completed', arrNew);
    alert('Đã xóa task vĩnh viễn')
}
document.getElementById('two').onclick = function () {
    acTivity.sapXep(arrTask, 'todo');
    alert('Đã xắp xếp từ a-z')

}
document.getElementById('three').onclick = function () {
    acTivity.sapXepNguoc(arrTask, 'todo');
    alert('đã sắp xếp từ z-a')

}









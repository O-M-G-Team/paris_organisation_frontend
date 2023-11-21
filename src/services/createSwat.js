import Swal from "sweetalert2";

export function createSwal(icon,title,color) {
// export function createSwal(icon,title,color,showValue, timer) {
    Swal.fire({
        "title":title,
        "icon":icon,
        "confirmButtonColor":color,
        // "showConfirmButton": showValue,
        // "timer": timer
       
    })
}
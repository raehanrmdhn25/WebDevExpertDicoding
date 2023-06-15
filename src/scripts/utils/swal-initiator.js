import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'success',
    confirmButtonText: 'Agree',
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    confirmButtonText: 'Agree',
  });
};

export { initSwalSuccess, initSwalError };

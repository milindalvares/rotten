import moment from 'npm:moment';

function formatDate(date) {
  return moment(date).fromNow();
}

export {
  formatDate
};

import Vue from 'vue';

const dateFilter = (value: any) => {
  const date = new Date(parseInt(value, 10));

  let hours = date.getHours();
  let hoursAsString = '';
  const mins = date.getMinutes();
  let minsAsString = String(mins);

  let meridian = 'am';

  if (hours > 11) {
    meridian = 'pm';
    hours -= 12;
  }

  if (!hours) {
    hours = 12;
  }

  if (hours < 10) {
    hoursAsString = `0${hours}`;
  } else {
    hoursAsString = String(hours);
  }

  if (mins < 10) {
    minsAsString = `0${mins}`;
  }

  if (isDateValid(date) || Number.isNaN(hours) || Number.isNaN(mins)) {
    return 'unknown';
  }

  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${hoursAsString}:${minsAsString} ${meridian}`;
};

function isDateValid (date: Date) {
  return Number.isNaN(date.getMonth() + 1) || Number.isNaN(date.getDate()) || Number.isNaN(date.getFullYear());
}

Vue.filter('toDate', dateFilter);

export default dateFilter;

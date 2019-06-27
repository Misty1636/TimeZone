(function TimeZone() {
  function getLocalTime(city) {
    const time = new Date();
    let timeZones = '';
    switch (city) {
      case 'New York':
        timeZones = 'America/New_York';
        break;
      case 'London':
        timeZones = 'Europe/London';
        break;
      case 'Seoul':
        timeZones = 'Asia/Seoul';
        break;
      case 'Sydney':
        timeZones = 'Australia/Sydney';
        break;
      case 'Paris':
        timeZones = 'Europe/Paris';
        break;
      default:
        break;
    }
    const options = {
      timeZone: timeZones,
      hour12: false,
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    const result = time.toLocaleString('en', options);
    return {
      currentCity: city,
      mon: result.split(',')[0].split(' ')[0],
      date: result.split(',')[0].split(' ')[1],
      year: result.split(',')[1],
      currentTime: result.split(',')[2],
    };
  }

  function displayTime() {
    let str = '';
    const cityTime = [getLocalTime('New York'), getLocalTime('London'), getLocalTime('Seoul'), getLocalTime('Sydney'), getLocalTime('Paris')];
    cityTime.forEach((item) => {
      str += `
      <li class="zone__item">
        <div>
          <h3 class="zone__item__name">${item.currentCity}</h3>
          <i class="zone__item__date">${item.date} ${item.mon}. ${item.year}</i>
        </div>
        <h4 class="zone__item__time">
          ${item.currentTime}
        </h4>
      </li>
      `;
    });
    document.querySelector('ul').innerHTML = str;
  }
  displayTime();
  setInterval(() => {
    displayTime();
  }, 1000);
}());

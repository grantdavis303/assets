const date = new Date(); // 2025-11-15T14:14:13.493Z

export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Getting Date Information

date.getFullYear();       // 2025
date.getDay();            // 6
WEEKDAYS[date.getDay()];  // 'Saturday'
date.getMonth();          // 10
MONTHS[date.getMonth()];  // 'November'
date.getDate();           // 15

// Getting Time Information

date.getHours();            // 7
date.getMinutes();          // 14
date.getSeconds();          // 13
date.getMilliseconds();     // 493
date.toLocaleTimeString();  // '7:14:13 AM'

// Time

// Returns "1 hour"
export const formatTime = (time: number) => {
  if (time === 0) {
    return `No minutes`;
  } else if (time === 1) {
    return `${time} minute`;
  } else if (time > 1 && time < 59) {
    return `${time} minutes`;
  } else if (time >= 60) {
    const hours = time / 60;

    if (hours === 1) {
      return `${hours} hour`;
    } else {
      return `${Math.round(hours * 100) / 100} hours`;
    }
  }
};

export const shortFormatDate = (isoString: string) => {
  const date = new Date(isoString);

  return `${date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })}`;
};

// Returns "Wednesday, May 27 at 2:30 PM"
export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  return `${date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })} at ${date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })}`;
};

// Returns date object
export const format24hrTime = (timeString: string) => {
  const hours = timeString.split(":")[0];
  const minutes = timeString.split(":")[1];
  const seconds = timeString.split(":")[2];

  const date = new Date();
  const dateAtSpecificTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    Number(hours),
    Number(minutes),
    Number(seconds)
  );

  return dateAtSpecificTime;
};

// Returns "2:30 PM"
export const formattedHourMinute = (date: Date) => {
  const formattedDate = new Date(date);

  return formattedDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

// Date

// Returns "Monday"
export const getCurrentDay = () => {
  const date = new Date();
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return WEEKDAYS[date.getDay()];
};

// Returns 20
export const getCurrentWeek = () => {
  const date = new Date();

  const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

  temp.setUTCDate(temp.getUTCDate() + 4 - (temp.getUTCDay() || 7));

  const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));

  const weekNumber = Math.ceil(((temp.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return weekNumber;
};

// Returns "April"
export const getCurrentMonth = () => {
  const date = new Date();
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return MONTHS[date.getMonth()];
};

// Returns "2026-08-15"
export const getFormattedISODate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// Returns "2026-08-15" - Current Year
export const convertISOtoCurrentYear = (isoString: string) => {
  const year = new Date().getFullYear();
  const month = isoString.split("-")[1];
  const day = isoString.split("-")[2];

  return new Date(`${year}-${month}-${day}T00:00:00`); // No Z "Zulu Time" - Takes into account MST (-6)
};
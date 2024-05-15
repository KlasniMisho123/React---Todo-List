function currentTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  return [
    {
      hour: hour,
      minute: minute,
      second: second,
    },
  ];
}

export default currentTime;

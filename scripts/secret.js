/**
 * @author: yutou1151
 */
const tellSecret = () => {
  alert('VGhpcyBpcyBhIHVzZWxlc3MgRWFzdGVyIGVnZw== \n 1100010 110110 110100');
};
const second = 1000;
setTimeout(function () {
  tellSecret();
}, 15 * second);

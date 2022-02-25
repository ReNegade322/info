document.write('Информация браузере: '+ navigator.userAgent + '<br />');


if (navigator.cookieEnabled)
   document.write('Браузер может принимать cookie!' + '<br />');
else
   document.write(' Ваш браузер не может принимать cookie.' + '<br />');

document.write("Браузер: " + navigator.appCodeName + '<br />');

document.write("Платформа, под которую скомпилирован браузер: " + navigator.platform + '<br />');

document.write("Включена ли в браузере поддержка Java: " + navigator.javaEnabled() + '<br />');
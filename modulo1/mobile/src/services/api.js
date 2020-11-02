import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://192.168.0.177:3333'
  baseURL: 'http://10.0.2.2:3333'
});

/**
 * Android no emulador: localhost (adb reverse)
 * Android emulado pelo Android Studio: 10.0.2.2
 * Android emilado pelo Genumotion: 10.0.3.2
 * Android no dispositivo físico: IP da máquina
 */

export default api;

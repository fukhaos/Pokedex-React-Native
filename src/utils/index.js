import APP from 'app/configs/app';
import { Alert } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const flashInfo = (message) => {
  showMessage({
    message: APP.NAME,
    icon: 'info',
    description: message ?? 'Notificação',
    type: 'info',
  });
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const flashError = (message, title = APP.NAME) => {
  showMessage({
    message: title,
    icon: 'danger',
    description: message,
    type: 'danger',
  });
};

const flashSuccess = (message) => {
  showMessage({
    message: APP.NAME,
    icon: 'success',
    description: message,
    type: 'success',
  });
};

const showAlert = (msg) => {
  Alert.alert(APP.NAME, msg);
};

export { flashError, flashSuccess, flashInfo, showAlert, delay };

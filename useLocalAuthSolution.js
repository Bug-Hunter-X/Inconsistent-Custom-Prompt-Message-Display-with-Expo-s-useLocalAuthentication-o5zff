The solution involves using `AsyncStorage` to persist the authentication result and display a custom message based on the persisted value. This avoids relying solely on the hook's immediate feedback which sometimes fails to display the custom message properly.  This approach ensures the custom message will always be shown and handles the inconsistencies of the hook. 

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';

async function authenticate() {
  try {
    const result = await LocalAuthentication.authenticateAsync({ promptMessage: 'Custom Prompt Message' });
    await AsyncStorage.setItem('authResult', JSON.stringify(result));
    if (result.success) {
      //Handle success
      console.log('Authenticated successfully');
    } else {
      //Handle failure
      console.log('Authentication failed', result);
    }
  } catch (error) {
    console.log('Authentication error', error);
  }
}

// Check AsyncStorage for the latest result to display the custom message
const checkAuthResult = async() => {
  try {
    const result = await AsyncStorage.getItem('authResult');
    if(result) {
      const parsedResult = JSON.parse(result);
      if (parsedResult.success) {
          //show success custom message
      } else {
          //show failure custom message
      }
    }
  } catch(error) {
    console.error('Error getting auth result:', error)
  }
}
```
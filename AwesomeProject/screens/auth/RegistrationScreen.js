import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import BgImage from "../../assets/images/photo-bg.jpg";
// import AvatarImage from "../../assets/images/user-avatar.jpg";

export default function RegistrationScreen() {
  const [passwordShow, setPasswordShow] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = (inputName) => {
    setIsShowKeyboard(true);
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setIsShowKeyboard(false);
    setFocusedInput(null);
  };

  const isInputFocused = (inputName) => focusedInput === inputName;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={BgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.box}>
              <View style={styles.avatar}>
                <Image
                  // source={AvatarImage}
                  style={styles.avatarImage}
                />
                <TouchableOpacity
                  style={styles.btnAddAvatar}
                  activeOpacity={0.9}
                >
                  <Ionicons name="add" size={20} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? -100 : "auto",
                }}
              >
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("login") && styles.inputFocus,
                    ]}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus("login")}
                    onBlur={handleInputBlur}
                  />
                </View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("email") && styles.inputFocus,
                    ]}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    onFocus={() => handleInputFocus("email")}
                    onBlur={handleInputBlur}
                  />
                </View>
                <View style={{ marginBottom: 43 }}>
                  <TextInput
                    style={[
                      styles.input,
                      isInputFocused("password") && styles.inputFocus,
                    ]}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={passwordShow}
                    onFocus={() => handleInputFocus("password")}
                    onBlur={handleInputBlur}
                  />
                  <TouchableOpacity
                    onPress={() => setPasswordShow(!passwordShow)}
                    style={styles.btnPasswordShow}
                  >
                    {passwordShow ? (
                      <Text style={styles.passwordShowText}>Показати</Text>
                    ) : (
                      <Text style={styles.passwordShowText}>Приховати</Text>
                    )}
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                  <Text style={styles.btnTitle}>Зареєстуватися</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Вже є акаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  box: {
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingBottom: 78,
  },
  avatar: {
    position: "absolute",

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    alignSelf: "center",
    marginHorizontal: "auto",
    width: 120,
    height: 120,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
  },
  title: {
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
    height: 50,
    borderRadius: 8,
  },
  inputFocus: {
    borderColor: "#FF6C00",
  },
  btnPasswordShow: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  passwordShowText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "right",
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    marginBottom: 16,
    padding: 16,
    alignItems: "center",
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

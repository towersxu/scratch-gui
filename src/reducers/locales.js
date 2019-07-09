import {addLocaleData} from 'react-intl';

import {localeData} from 'scratch-l10n';
import editorMessages from 'scratch-l10n/locales/editor-msgs';
import {isRtl} from 'scratch-l10n';

addLocaleData(localeData);

const UPDATE_LOCALES = 'scratch-gui/locales/UPDATE_LOCALES';
const SELECT_LOCALE = 'scratch-gui/locales/SELECT_LOCALE';

const initialState = {
    isRtl: false,
    locale: 'en',
    messagesByLocale: editorMessages,
    messages: editorMessages.en
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case SELECT_LOCALE:
        return Object.assign({}, state, {
            isRtl: isRtl(action.locale),
            locale: action.locale,
            messagesByLocale: state.messagesByLocale,
            messages: state.messagesByLocale[action.locale]
        });
    case UPDATE_LOCALES:
        return Object.assign({}, state, {
            isRtl: state.isRtl,
            locale: state.locale,
            messagesByLocale: action.messagesByLocale,
            messages: action.messagesByLocale[state.locale]
        });
    default:
        return state;
    }
};

const selectLocale = function (locale) {
    return {
        type: SELECT_LOCALE,
        locale: locale
    };
};

const setLocales = function (localesMessages) {
    return {
        type: UPDATE_LOCALES,
        messagesByLocale: localesMessages
    };
};
const initLocale = function (currentState, locale) {
    if (currentState.messagesByLocale.hasOwnProperty(locale)) {
        return Object.assign(
            {},
            currentState,
            {
                isRtl: isRtl(locale),
                locale: locale,
                messagesByLocale: currentState.messagesByLocale,
                messages: currentState.messagesByLocale[locale]
            }
        );
    }
    // don't change locale if it's not in the current messages
    return currentState;
};

const usbMicrobit = {
    "usbMicrobit.showIcon": "显示图像[ICON_PARAM]",
    "usbMicrobit.whenbuttonispressed": "当按下 [BUTTON_PARAM] 按钮",
    "usbMicrobit.buttonispressed": "按下 [BUTTON_PARAM] 按钮",
    "usbMicrobit.get_accelerometer": "加速度[ACCELEROMETER_PARAM]",
    "usbMicrobit.say": "显示文本 [TEXT]",
    "usbMicrobit.displaySymbol": "显示 [MATRIX]",
    "usbMicrobit.clearScreen": "清屏屏幕",
    "usbMicrobit.get_TiltAngle": "向[tiltDirection]倾斜",
    "usbMicrobit.isTilted": "向[tiltDirectionAny]倾斜",
    "usbMicrobit.get_analog_input": "读取模拟口 [ANALOG_PIN] 值",
    "usbMicrobit.get_gesture": "姿态是[gesture]",
    "usbMicrobit.gesture.face_up": "朝上",
    "usbMicrobit.gesture.face_down": "朝下",
    "usbMicrobit.gesture.shake": "摇动",
    "usbMicrobit.python_exec": "执行代码[CODE]",
    "usbMicrobit.iconMenu.happy": "开心",
    "usbMicrobit.iconMenu.smile": "微笑",
    "usbMicrobit.iconMenu.sad": "伤心",
    "usbMicrobit.iconMenu.heart": "大爱心",
    "usbMicrobit.iconMenu.heart_small": "小爱心",
    "usbMicrobit.iconMenu.yes": "胜利",
    "usbMicrobit.iconMenu.confused": "疑惑",
    "usbMicrobit.iconMenu.angry": "生气",
    "usbMicrobit.iconMenu.asleep": "睡觉",
    "usbMicrobit.iconMenu.surprised": "惊喜",
    "usbMicrobit.iconMenu.silly": "蠢盟",
    "usbMicrobit.iconMenu.meh": "无聊",
    "usbMicrobit.iconMenu.fabulous": "真棒",
    "usbMicrobit.iconMenu.no": "拒绝"
}

export {
    reducer as default,
    initialState as localesInitialState,
    initLocale,
    selectLocale,
    setLocales
};

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect } from 'react';
import { Linking, NativeEventEmitter, NativeModules, Platform, TouchableOpacity, } from 'react-native';
/**
 * A hook that registers a listener on the Plaid emitter for the 'onEvent' type.
 * The listener is cleaned up when this view is unmounted
 *
 * @param LinkEventListener the listener to call
 */
export const usePlaidEmitter = (LinkEventListener) => {
    useEffect(() => {
        const emitter = new NativeEventEmitter(Platform.OS === 'ios'
            ? NativeModules.RNLinksdk
            : NativeModules.PlaidAndroid);
        const listener = emitter.addListener('onEvent', LinkEventListener);
        // Clean up after this effect:
        return function cleanup() {
            listener.remove();
        };
    }, []);
};
export const openLink = (props) => __awaiter(void 0, void 0, void 0, function* () {
    if (props.tokenConfig == null) {
        console.log('The public_key is being deprecated. Learn how to upgrade to link_tokens at https://plaid.com/docs/link-token-migration-guide/');
    }
    let config = props.tokenConfig ? props.tokenConfig : props.publicKeyConfig;
    if (Platform.OS === 'android') {
        NativeModules.PlaidAndroid.startLinkActivityForResult(JSON.stringify(config), (result) => {
            if (props.onSuccess != null) {
                props.onSuccess(result);
            }
        }, (result) => {
            if (props.onExit != null) {
                if (result.error != null && result.error.displayMessage != null) {
                    //TODO(RNSDK-118): Remove errorDisplayMessage field in next major update.
                    result.error.errorDisplayMessage = result.error.displayMessage;
                }
                props.onExit(result);
            }
        });
    }
    else {
        NativeModules.RNLinksdk.create(config);
        NativeModules.RNLinksdk.open((result) => {
            if (props.onSuccess != null) {
                props.onSuccess(result);
            }
        }, (error, result) => {
            if (props.onExit != null) {
                if (error) {
                    var data = result || {};
                    data.error = error;
                    props.onExit(data);
                }
                else {
                    props.onExit(result);
                }
            }
        });
    }
});
export const dismissLink = () => {
    if (Platform.OS === 'ios') {
        NativeModules.RNLinksdk.dismiss();
    }
};
export const useDeepLinkRedirector = () => {
    const _handleListenerChange = (event) => {
        if (event.url !== null && Platform.OS === 'ios') {
            NativeModules.RNLinksdk.continueFromRedirectUriString(event.url);
        }
    };
    useEffect(() => {
        Linking.addEventListener('url', _handleListenerChange);
        return function cleanup() {
            Linking.removeEventListener('url', _handleListenerChange);
        };
    }, []);
};
export const PlaidLink = (props) => {
    useDeepLinkRedirector();
    return <TouchableOpacity onPress={() => openLink(props)}>{props.children}</TouchableOpacity>;
};

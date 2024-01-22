import React from "react";
import { Overlay } from '@rneui/themed';

export function Modal(props) {
    const { show, close, children } = props;

    return (
        <Overlay
            isVisible={show}
            onBackdropPress={close}
        >
            {children}
        </Overlay>
    );
}
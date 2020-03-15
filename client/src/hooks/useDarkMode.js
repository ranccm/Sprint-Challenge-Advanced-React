import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('dark');

    useEffect(() => {
        if (values) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [values])
    return [values, setValues]
}
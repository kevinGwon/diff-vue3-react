import { useState, useCallback } from 'react';

const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((event) => {
        const { name, value } = event.target;
        setForm((form) => ({ ...form, [name]: value }));
    }, []);

    return [form, onChange];
};

export default useForm;

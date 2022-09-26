import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} aria-label='form'>
            <input
                type='text'
                placeholder='buscar gifs'
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};

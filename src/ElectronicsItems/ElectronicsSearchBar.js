    import React from 'react';
    import { RiSearchLine } from 'react-icons/ri';
    import { useDispatch, useSelector } from 'react-redux';
    import { setInputData } from '../components/action';

    const ElectronicsSearchBar = () => {
    const dispatch = useDispatch();
    const inputData = useSelector((state) => state.inputData);
    const handleInputChange = (event) => {
        const value = event.target.value;
        dispatch(setInputData(value));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
        printData();
        }
    };

    const handleButtonClick = () => {
        printData();
    };

    const printData = () => {
        console.log(inputData);
    };

    return (
        <div style={styles.container}>
        <input
            type="text"
            placeholder="Search..."
            style={styles.input}
            value={inputData}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress} // Handle "Enter" key press
        />
        <button style={styles.button} onClick={handleButtonClick}>
            <RiSearchLine />
        </button>
        </div>
    );
    };

    const styles = {
        container: {
            //width:'100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            borderRadius: '5px',
            background:'#000000b3',
            padding: '5px',
            position: 'fixed',
            top: '85px',
            alignItems: 'center',
            justifyContent:'center',
            left:'200px',
            right:'200px'
        },
        input: {
            flex: '1',
            border: 'none',
            outline: 'none',
            padding: '10px 400px 10px 10px',
            borderRadius:'20px',
            fontSize: '25px',
        },
        button: {
            background: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '1.9rem',
        },
        };

        export default React.memo(ElectronicsSearchBar);

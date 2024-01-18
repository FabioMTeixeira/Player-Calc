import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import './style.css';
import { useState } from 'react';


function SearchBar({ setAllPlayers, allPlayers }) {
    const [player, setPlayer] = useState('');
    const [playerValue, setPlayerValue] = useState('');

    const handleButtonClick = (e) => {
        e.preventDefault();

        setAllPlayers([...allPlayers, { nome: player, valorJogador: playerValue }]);
        setPlayer('');
        setPlayerValue('');
    };

    return (
        <Box
            className='centralization'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25rem' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-search"
                label="Adicione seu Jogador" type="text"
                value={player}
                onChange={(e) => setPlayer(e.target.value)}
            />
            <TextField
                id="outlined-search"
                label="Valor do Jogador" type="number"
                value={playerValue}
                onChange={(e) => setPlayerValue(e.target.value)}
            />
            <SearchIcon
                className='search-button'
                onClick={(e) => handleButtonClick(e)}
            />
        </Box>
    );
};

export default SearchBar;
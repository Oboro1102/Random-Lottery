import axios from 'axios';

const randomParticipant = axios.create({
    baseURL: 'https://randomuser.me/api/',
    headers: { 'Content-Type': 'application/json' },
});

export const setRandomParticipant = (drawAmount: number) => randomParticipant.get(`?results=${drawAmount}`)
